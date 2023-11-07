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
  match:boolean = false
  isMatched:string=""

  constructor(private router:Router,
    private route: ActivatedRoute,
    private service : ChatserviceService){

  }

  ngOnInit(){
    this.token = this.route.snapshot.paramMap.get('id')
    console.log(this.token)
    setInterval(()=>{
      if(this.match){
        this.matchUsers()

      }
      this.fetchMessage()
    },1000)

  }

  createGroup(){
    this.service.callCreateGroup(this.token).subscribe(
      (res)=>{console.log(res)
      this.match=true},
      (err)=>{console.log(err)}
    )

  }

  matchUsers(){
    this.service.callMatch().subscribe(
    (res)=>{console.log(res)
    this.isMatched="Matched"
  this.match=false},
    (err)=>{console.log(err)
    this.isMatched="Not matched"}
    )
  }

  postMessage(){
    this.service.postMessage(this.message,this.token).subscribe(
      (res)=>{console.log(res)
      this.message=""},
      (err)=>{console.log(err)}
    )
  }

  fetchMessage(){
    console.log("Fetching messages")
    this.service.fetchMessages(this.token).subscribe(
      (res)=>{console.log(res)
        this.isMatched="Matched"
        this.match=false
        res = res.replace("["," ")
        res = res.replace("]"," ")
      this.messages=res.trim().split(',')},
      (err)=>{console.log(err)}
    )
  }

}
