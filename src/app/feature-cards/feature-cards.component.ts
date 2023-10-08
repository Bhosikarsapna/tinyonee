import { Component, Input, OnInit } from '@angular/core';
import { IfeatureCard } from '../shared/models/data';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss']
})

export class FeatureCardsComponent implements OnInit {
  @Input() featureCard !: IfeatureCard
 
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  