import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorage } from './jwt/token.service';
import { environment } from 'src/env/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from './model/login.model';
import { AuthenticationResponse } from './model/authentication-response.model';
import { User } from './model/user.model';
import { Registration } from './model/registration.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>({ username: '', id: "asd", role: '' });

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private router: Router
  ) {
    // Proveri postojeći token pri inicijalizaciji
    this.checkIfUserExists();
  }

  login(login: Login): Observable<AuthenticationResponse> {
    console.log("OVDE GADJA")
    return this.http
      .post<AuthenticationResponse>(environment.apiHost + 'auth/login', login)
      .pipe(
        tap((authenticationResponse) => {
          console.log(authenticationResponse)
          this.tokenStorage.saveAccessToken(authenticationResponse.accessToken, authenticationResponse.id);
          this.setUser();
        })
      );
  }

  register(registration: Registration): Observable<AuthenticationResponse> {
    return this.http
    .post<AuthenticationResponse>(environment.apiHost + 'auth/register', registration)
    .pipe(
      tap((authenticationResponse) => {
        //this.tokenStorage.saveAccessToken(authenticationResponse.accessToken, authenticationResponse.id);
        //this.setUser();
      })
    );
  }

  logout(): void {
    this.router.navigate(['']).then((_) => {
      this.tokenStorage.clear();
      this.user$.next({ username: '', id: "0", role: '' });
    });
  }

  checkIfUserExists(): void {
    const accessToken = this.tokenStorage.getAccessToken();
    if (accessToken) {
      this.setUser();
    }
  }

  private setUser(): void {
    const jwtHelperService = new JwtHelperService();
    const accessToken = this.tokenStorage.getAccessToken();
    if (!accessToken) {
      console.log('Nema access token-a');
      return;
    }

    try {
      const decodedToken = jwtHelperService.decodeToken(accessToken);
      const user: User = {
        id: decodedToken.sub, // Koristi 'sub' za ID
        username: decodedToken.username,
        role: decodedToken.role // Koristi 'role' direktno iz tokena
      };
      user.role = user.role.toLowerCase()
      console.log('Postavljanje korisnika:', user);
      this.user$.next(user);
    } catch (error) {
      console.error('Greška pri dekodiranju tokena:', error);
      this.tokenStorage.clear();
    }
  }

  confirmRegistration(link: string): Observable<User> {
    return this.http.get<User>(environment.apiHost + link);
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(environment.apiHost + `users/request`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(environment.apiHost + `users/reset`, { token, password });
  }
}