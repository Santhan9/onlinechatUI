import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private baseUrl = 'http://localhost:8080/chat'

  private tokenUrl = '/sessionToken?username='
  private createGroupUrl = '/createGroup?token='

  constructor(private http: HttpClient) { }

  callgetToken(username:string){
    console.log("getting token with url "+this.baseUrl+this.tokenUrl+username)
    return this.http.get(this.baseUrl+this.tokenUrl+username,{responseType: 'text'})
  }
  callCreateGroup(token:string){
    console.log("calling create group with url "+this.baseUrl+this.createGroupUrl)
    return this.http.get(this.baseUrl+this.createGroupUrl+token)

  }
}
