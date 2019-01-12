import { Component } from '@angular/core';
import { NewsRatingModel } from './newsrating/newsrating.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 newsRatings: NewsRatingModel[];
 count: number;
// tempRating: NewsRatingModel;
 constructor() {
  // this.tempRating = new NewsRatingModel('temp', 'www.temp.com' );
  this.newsRatings = [
      new NewsRatingModel('hindu', 'www.hindu.com', 10),
      new NewsRatingModel('times', 'www.times.com', 7),
      new NewsRatingModel('deccanchronicle', 'www.deccanchronicle.com', 5)
  ];
 }

 addNewsRating(titleEl: HTMLInputElement, link: HTMLInputElement) {
   const titleEntered = titleEl.value;
   const linkEntered = link.value;
   const rating = new NewsRatingModel(titleEntered, linkEntered);
   this.newsRatings.push(rating);
   titleEl.value = '';
   link.value = '';
   console.log('added' );
   return false;
 }

 identify( index, item) {
  return index;
 }
}

