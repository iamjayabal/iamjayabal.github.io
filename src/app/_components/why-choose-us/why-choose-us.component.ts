import { Component } from '@angular/core';

@Component({
  selector: 'why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent {
  eventArray = [
    {
      date: 'Mon Dec 25',
      name: 'Christmas Picnic',
      time: '12:00 AM - 5:00 PM',
      location: 'Thondi-Madurai Road, Pillur, Sivagangai-630562',
    },
    {
      date: 'Tue Jan 14',
      name: 'Pongal Celebration',
      time: '4:00 PM',
      location: 'Thondi-Madurai Road, Pillur, Sivagangai-630562',
    },
    {
      date: 'Wed Jan 25',
      name: 'Republic Day',
      time: '10:00 AM',
      location: 'Thondi-Madurai Road, Pillur, Sivagangai-630562',
    },
  ];

  mouseHoverEvent() {
    console.log('Mouse hover event is working from directive');
  }
}
