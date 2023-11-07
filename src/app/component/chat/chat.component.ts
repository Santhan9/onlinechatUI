import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatserviceService } from 'src/service/chatservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  token:any=""
  messages:string[]=[]
  message:string=""
  isMatched:string=""

  constructor(private router:Router,
    private route: ActivatedRoute,
    private service : ChatserviceService){

  }

  ngOnInit(){
    this.token = this.route.snapshot.paramMap.get('id')
    console.log(this.token)

  }

  createGroup(){
    this.service.callCreateGroup(this.token).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)}
    )

  }

  matchUsers(){
    this.service.callMatch().subscribe(
    (res)=>{console.log(res)
    this.isMatched="Matched"},
    (err)=>{console.log(err)
    this.isMatched="Not matched"}
    )
  }

  postMessage(){
    this.service.postMessage(this.message,this.token).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)}
    )
  }

  fetchMessage(){
    this.service.fetchMessages(this.token).subscribe(
      (res)=>{console.log(res)
      this.messages=res.split(',')},
      (err)=>{console.log(err)}
    )
  }

}
