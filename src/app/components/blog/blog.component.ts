import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getVideoIframe(url:any) {
    let video;
    let results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
