import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

declare function testAPi(data: any): any;

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.scss']
})
export class WatchingComponent implements OnInit {

  link: SafeUrl = "";

  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav: false,
    navSpeed: 700,
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


  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchApiGetChannelKey2().then((key) => {
      let channel_key2 = key;
      console.log(channel_key2);
      fetch(`http://localhost:3000/fetch?channelKey2=${channel_key2}`)
        .then(response => response.text())
        .then((data: any) => {
          this.link = this._sanitizer.bypassSecurityTrustResourceUrl(testAPi(data));
          console.log('????');
          console.log(this.link);
        })
    })
  }

  fetchApiGetChannelKey2(): Promise<string> {
    return fetch('https://www.fullfim.net/movies/hai-tet-hoai-linh-chi-tai-truong-giang-tran-thanh--tap-1-0b374655.aspx')
      .then(response => response.text())
      .then((data) => {
        let parser = new DOMParser();
        let x = parser.parseFromString(data, 'text/html');
        return fetch(x.getElementsByTagName('script')[2].src)
          .then(response => response.text())
          .then((data) => {
            let x = data.split('channel_key2 =')[1].substring(2, data.split('channel_key2 =')[1].length - 2);
            return x;
          })
      })
  }
}
