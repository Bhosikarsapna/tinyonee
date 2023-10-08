import { Component, Input, OnInit } from '@angular/core';
import { IfeatureCard } from '../shared/models/data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})


export class FeaturesComponent implements OnInit {
  
  featureCardArray : Array<IfeatureCard> = [
    {
      icon : `<i class="fa-brands fa-mobile-screen fa-2x"></i>`,
      title : 'Fully Responsive',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : `<i class="fa-regular fa-lemon fa-2x"></i>`,
      title : 'Fully Layered PSD',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : `<i class="fa-regular fa-folder fa-2x"></i>`,
      title : 'Font Awesome Icons',
      content : 'Lorem ipsum dolor, consectetur adipiscing Praesent.'
    },
    {
      icon : `<i class="fa-brands fa-html5 fa-2x"></i>`,
      title : 'HTML3 & CSS3 ',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : `<i class="fa-regular fa-folder fa-2x"></i>`,
      title : 'Email Template',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : `<i class="fa-regular fa-bookmark fa-2x"></i>`,
      title : 'Free to download',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    }
  ]
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  

