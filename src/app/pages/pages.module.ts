import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { RoutingModule } from './routing.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RoutingModule],
})
export class PagesModule {}
