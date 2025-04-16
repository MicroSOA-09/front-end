import { Injectable } from '@angular/core';
import { ACCESS_TOKEN, USER } from '../../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenStorage {
  constructor() {}

  saveAccessToken(token: string, userId: string): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER);
    localStorage.setItem(ACCESS_TOKEN, token);
    localStorage.setItem(USER, userId);
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getUserId(): string {
    const userIdString = localStorage.getItem(USER);
    if (userIdString) {
      return userIdString;
    }
    return "";
  }

  clear() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER);
  }
}
