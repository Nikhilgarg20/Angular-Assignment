import { Component, OnInit } from '@angular/core';
import { ApiService,IPost } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'] 
})

export class ApiDataComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postService: ApiService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => (this.posts = data));
  }

  trackById(index: number, post: IPost): number {
    return post.id;
  }
  
}