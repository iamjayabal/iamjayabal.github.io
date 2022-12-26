import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { PascalcaseDirective } from './directives/pascalcase/pascalcase.directive';
import { ColorChangeDirective } from './directives/colorchange/color-change.directive';
import { MousehovereventDirective } from './directives/mousehoverevent/mousehoverevent.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    WhyChooseUsComponent,
    PascalcaseDirective,
    ColorChangeDirective,
    MousehovereventDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
