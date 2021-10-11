import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';

declare function testAPi(data: any): any;

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

  constructor(private http: HttpClient) { }

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


  ngOnInit(): void {
    // this.http.get(url, { responseType: 'text' }).subscribe(data => {
    //   let parser = new DOMParser();
    //   let x = parser.parseFromString(data, 'text/html');
    //   console.log(x.getElementsByTagName('script')[2]);
    //   console.log(x.getElementsByTagName('script')[4].innerText.split('\n'));
    //   console.log(x.getElementsByTagName('script')[5]);
    //   console.log(x.getElementsByTagName('script')[6]);
    // });
    // this.http.get('https://cdn2.kenhvn2.com/check-user.php', { responseType: 'text' }).subscribe(data => {
    //   console.log(data);
    //   let x = data.split('channel_key2')[1];
    //   console.log(x);
    // })
    this.fetchApiGetChannelKey2().then((key) => {
      let channel_key2 = key;
      console.log(channel_key2);
      fetch(`http://localhost:3000/fetch?channelKey2=${channel_key2}`)
        .then(response => response.text())
        .then((data: any) => {
          console.log(testAPi(data))
        })
    })
  }
}
