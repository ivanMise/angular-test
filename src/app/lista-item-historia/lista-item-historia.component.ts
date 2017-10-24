import { Component, OnInit , Input} from '@angular/core';
import { Post } from "../shared/post";
import { PostService } from "../shared/services/post.service";
import { Router, ActivatedRoute, Route, ParamMap} from "@angular/router";

@Component({
  selector: 'iap-lista-item-historia',
  templateUrl: './lista-item-historia.component.html',
  styleUrls: ['./lista-item-historia.component.css']
})
export class ListaItemHistoriaComponent implements OnInit {

  @Input()
  post:Post={};

  constructor(private postService: PostService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params=>{
                console.log('params', params);
          this.postService.getPost(params.id).subscribe((post:Post)=>{
                 this.post=post;
          })
    })

}
}
