import { Component, Input, HostBinding } from '@angular/core';
import { NewsRatingModel } from './newsrating.model';


@Component({
  selector: 'news-rating',
  templateUrl: './newsrating.component.html',
  styleUrls: [ './newsrating.component.css']
})

export class NewsRatingComponent {
   @Input() newsRating: NewsRatingModel;
   @HostBinding('attr.class') cssClass = 'row';
   upVote() {
     this.newsRating.voteUp();
     return false;
   }

   downVote() {
     this.newsRating.voteDown();
     return false;
   }
}
