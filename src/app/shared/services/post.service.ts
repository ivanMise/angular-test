import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

const BACK_END = 'http://localhost:3000/';
const POSTS = 'posts';

@Injectable()
export class PostService {

  posts:Post[];

  constructor(private httpClient:HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(`${BACK_END}${POSTS}`);
  }


  getPost(id: number): Observable<any> {
    return this.httpClient.get(`${BACK_END}${POSTS}/${id}`);
  }

 
}
