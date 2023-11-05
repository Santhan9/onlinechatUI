import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatserviceService } from 'src/service/chatservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username:string = "";
  token:string = ""

  constructor(private service : ChatserviceService,
    private route: ActivatedRoute,
  private router: Router ){

  }

  onClick():void{
    console.log("Test")
    console.log(this.username)
    this.service.callgetToken(this.username).subscribe(
      (res)=>{this.token=res.toString()
      this.router.navigate(['/chat',{id : this.token}])},
      (err)=>{console.log(err)}
    )

  }

}
