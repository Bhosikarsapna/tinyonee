import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
iconListArray : Array<any> = [
  {
    link : 'javascript:;',
    icon : `<i class="fa-brands fa-apple fa-2x"></i>`
  },
  {
    link : 'javascript:;',
    icon : `<i class="fa-brands fa-mobile-screen fa-2x"></i>`
  },
  {
    link : 'javascript:;',
    icon : `<i class="fa-brands fa-windows fa-2x"></i>`
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
