import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav:true,
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

  listStar: any = [];
  listSrc: any = [];
  evaluate: string = "";

  constructor() { }

  ngOnInit(): void {

    for (let i = 1; i <= 10; i++) {
      let title = "";
      let star = "https://phimchill.net/media/img/star-on.png";
      switch (i) {
        case 1:
          title = "Dở tệ";
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 2:
          title = "Dở";
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 3:
          title = "Không hay";
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 4:
          title = "Không hay lắm"
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 5:
          title = "Bình thường"
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 6:
          title = "Xem được"
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 7:
          title = "Có vẻ hay"
          star = "https://phimchill.net/media/img/star-on.png";
          break;
        case 8:
          title = "Hay"
          star = "https://phimchill.net/media/img/star-off.png";
          break;
        case 9:
          title = "Tuyệt hay"
          star = "https://phimchill.net/media/img/star-off.png";
          break;
        case 10:
          title = "Rất hay"
          star = "https://phimchill.net/media/img/star-off.png";
          break;
        default:
          break;
      }
      this.listStar.push({ src: star, title: title, alt: i });
      this.listSrc.push(star);
    }
  }
  moveOnStar(event: any) {
    let numStar = event.target.alt;
    let title = event.target.title as string;
    if (numStar !== undefined) {
      for (let i = 1; i <= 10; i++) {
        if (i <= numStar) {
          this.listStar[i - 1].src = "https://phimchill.net/media/img/star-on.png";
        } else {
          this.listStar[i - 1].src = "https://phimchill.net/media/img/star-off.png";
        }
      }
      this.evaluate = title;
    }
  }
  moveOutStar(event: any) {
    for (let i = 1; i <= 10; i++) {
      this.listStar[i - 1].src = this.listSrc[i - 1];
    }
    this.evaluate = "";
  }
}
