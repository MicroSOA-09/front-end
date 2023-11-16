import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideReviewComponent } from './guide-review/guide-review.component';
import { GuideReviewFormComponent } from './guide-review-form/guide-review-form.component';
import { MaterialModule } from 'src/app/infrastructure/material/material.module';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferencesFormComponent } from './preferences-form/preferences-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TourReviewFormComponent } from './tour-review-form/tour-review-form.component';
import { MatInputModule } from '@angular/material/input';
import { TourReviewsShowComponent } from './tour-reviews-show/tour-reviews-show.component';

import { ToursShowComponent } from './tours-show/tours-show.component';
import { UpdateReviewComponent } from './update-review/update-review.component';

import { TouristEquipmentComponent } from './tourist-equipment/tourist-equipment.component';

import { ProblemComponent } from './problem/problem.component';
import { ProblemMessageFormComponent } from './problem-message-form/problem-message-form.component';
import { ProblemChatComponent } from './problem-chat/problem-chat.component';
import { ProblemDeadlineComponent } from './problem-deadline/problem-deadline.component';
import { TourSearchComponent } from './tour-search/tour-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TourMarketplaceComponent } from './tour-marketplace/tour-marketplace.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { FirstPointMap } from './first-point-map/first_point.component';

@NgModule({
  declarations: [
    TourReviewFormComponent,
    TourReviewsShowComponent,
    GuideReviewComponent,
    GuideReviewFormComponent,
    PreferencesComponent,
    PreferencesFormComponent,

    TouristEquipmentComponent,

    ProblemComponent,
    ProblemMessageFormComponent,
    ProblemChatComponent,
    ProblemDeadlineComponent,

    TourSearchComponent,
    ToursShowComponent,
    UpdateReviewComponent,
    TourMarketplaceComponent,
    TourDetailsComponent,
    FirstPointMap
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [
    GuideReviewComponent,
    TourMarketplaceComponent,
    PreferencesComponent,
  ],
})
export class MarketplaceModule {}
