import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'iap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private router:Router) { }

  ngOnInit() {

  }

  enLogin(){
    //console.log('click en edit');
    //this.select.emit(this.movie);
    this.router.navigate(['/stories']);
  }

}
