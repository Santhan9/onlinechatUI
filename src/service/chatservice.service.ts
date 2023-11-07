import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private baseUrl = 'http://localhost:8080/chat'

  private tokenUrl = '/sessionToken?username='
  private createGroupUrl = '/createGroup?token='
  private matchurl = '/match'
  private postMessageUrl = '/postmessage?token='
  private fetch = '/fetchMessages?token='


  constructor(private http: HttpClient) { }

  callgetToken(username:string){
    console.log("getting token with url "+this.baseUrl+this.tokenUrl+username)
    return this.http.get(this.baseUrl+this.tokenUrl+username,{responseType: 'text'})
  }
  callCreateGroup(token:string){
    console.log("calling create group with url "+this.baseUrl+this.createGroupUrl)
    return this.http.get(this.baseUrl+this.createGroupUrl+token,{responseType: 'text'})

  }

  callMatch(){
    console.log("calling match with url "+this.baseUrl+this.matchurl)
    return this.http.get(this.baseUrl+this.matchurl,{responseType:'text'})
  }
  postMessage(message:string,token:string){
    console.log("posting message with url "+this.baseUrl+this.postMessageUrl+token)
    console.log(message)
    return this.http.post(this.baseUrl+this.postMessageUrl+token,message,{responseType:'text'})

  }

  fetchMessages(token:string){
    return this.http.get(this.baseUrl+this.fetch+token,{responseType:'text'})
  }
}
