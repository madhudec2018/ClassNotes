import { Component, Input } from '@angular/core';

@Component({
  selector: 'youtube-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @Input() video: any;

}

