import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  
  private api = 'http://localhost:3000/api/tweets'

  constructor(
    private http: HttpClient
  ) { }

  getTweets(){
    const path = `${this.api}`;
    return this.http.get<Tweet[]>(path);
  }

  getTweet(word: string){
    const path = `${this.api}/${word}`
    return this.http.get<Tweet[]>(path)
  }
}
