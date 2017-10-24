import { Component, OnInit } from '@angular/core';
import { Post } from "../shared/post";
import { PostService } from "../shared/services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: 'iap-lista-historia',
  templateUrl: './lista-historia.component.html',
  styleUrls: ['./lista-historia.component.css']
})
export class ListaHistoriaComponent implements OnInit {

  title:string='Post';
  posts:Post[];
  constructor(private postService:PostService, private router:Router) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe((data)=> {
      console.log('data', data);
      this.posts = data;
    })
    console.log("", this.posts);
  }

  seleccionado(event: Post){
    this.router.navigate(['edit', event.id]);

  }

}
