import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav: true,
    navSpeed: 700,

    navText: [`<i class="fa fa fa-caret-left"></i>`, `<i class="fa fa fa-caret-right"></i>`],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      705: {
        items: 4
      },
      800: {
        items: 5
      }
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
