import { Component } from '@angular/core';

@Component({
  selector: 'home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent {
  sliderImages = [
    {
      image: 'assets/img/slider/slide1.jpg',
      title: 'Slide One Title',
      helpText: 'This is my help text for slide one',
    },
    {
      image: 'assets/img/slider/slide2.jpg',
      title: 'Slide 2 Title',
      helpText: 'This is my help text for slide 2',
    },
    {
      image: 'assets/img/slider/slide3.jpg',
      title: 'Slide 3 Title',
      helpText: 'This is my help text for slide 3',
    },
  ];
  noWrapSlides = false;
  showIndicator = false;
  isAnimated = true;
}
