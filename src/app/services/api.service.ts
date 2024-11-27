import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPost {
  title: string;
  body: string;
  id: number;
  userId: number;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url);
  }
}