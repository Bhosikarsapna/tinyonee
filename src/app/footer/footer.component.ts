import { Component, OnInit } from '@angular/core';
import { Iicons } from '../shared/models/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconListArray : Array<Iicons> = [
    {
      link : 'javascript:;',
      icon : `<i class="fa-brands fa-square-facebook fa-2x"></i>`
    },
    {
      link : 'javascript:;',
      icon : `<i class="fa-brands fa-square-twitter fa-2x"></i>`
    },
    {
      link : 'javascript:;',
      icon : `<i class="fa-brands fa-square-google-plus fa-2x"></i>`
    },
    {
      link : 'javascript:;',
      icon : `<i class="fa-brands fa-square-pinterest fa-2x"></i>`
    }
  ]

  footerLink1 : Array<any> = [
      {
        link : 'javascript:;',
        icon : `Examples`
      },
      {
        link : 'javascript:;',
        icon : `shop`
      },
      {
        link : 'javascript:;',
        icon : `License`
      }
    ]

    
  footerLink2 : Array<any> = [
    {
      link : 'javascript:;',
      icon : `Contact`
    },
    {
      link : 'javascript:;',
      icon : `About`
    },
    {
      link : 'javascript:;',
      icon : `Privacy`
    },
    {
      link : 'javascript:;',
      icon : `Terms`
    }
  ]

  
  footerLink3 : Array<any> = [
    {
      link : 'javascript:;',
      icon : `Download`
    },
    {
      link : 'javascript:;',
      icon : `Support`
    },
    {
      link : 'javascript:;',
      icon : `Documents`
    }
  ]

  
  footerLink4 : Array<any> = [
    {
      link : 'javascript:;',
      icon : `Media`
    },
    {
      link : 'javascript:;',
      icon : `Blog`
    },
    {
      link : 'javascript:;',
      icon : `Forums`
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
