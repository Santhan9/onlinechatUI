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

  constructor(private router:Router,
    private route: ActivatedRoute,
    private service : ChatserviceService){

  }

  ngOnInit(){
    this.token = this.route.snapshot.paramMap.get('id')
    console.log(this.token)

  }

  createGroup(){
    this.service.

  }

}
