import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  url: any = 'https://cdn2.kenhvn2.com/check-user.php';

  constructor(private http: HttpClient) {
    //     Accept: */*
    // Accept-Encoding: gzip, deflate, br
    // Accept-Language: en-US,en;q=0.9
    // Connection: keep-alive
    // Host: cdn2.kenhvn2.com
    // Referer: https://www.fullfim.net/
    // sec-ch-ua: "Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"
    // sec-ch-ua-mobile: ?0
    // sec-ch-ua-platform: "Windows"
    // Sec-Fetch-Dest: script
    // Sec-Fetch-Mode: no-cors
    // Sec-Fetch-Site: cross-site
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38
    const httpOptions = {
      headers: new HttpHeaders({
      }),

      responseType: 'text' as 'json'
    };
    this.http.get(this.url, httpOptions).subscribe((data: any) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }
}
