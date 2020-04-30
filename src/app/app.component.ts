import { Component } from '@angular/core';
import {TweetService} from './services/tweet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-tutorial';

  tweets = [];

  constructor (
    private tweetService: TweetService
  ) {}

  getTweets(){
    this.tweetService.getTweets()
    .subscribe(todos => {
      console.log(todos)
    })
  }

  getTweet(word: HTMLInputElement){
    this.tweetService.getTweet(word.value)
    .subscribe(todo => {
      console.log(todo)
      this.tweets = todo;
    })
  }

  
}
