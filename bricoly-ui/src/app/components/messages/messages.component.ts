import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  message: string;
  username: string = localStorage.getItem("username");
  feedback : string;
  output : any[]=[];
  constructor(private messages : MessagesService) { }

  ngOnInit(): void {
    this.messages
    .listen('typing')
    .subscribe((data) => this.updateFeedback(data));
  this.messages
    .listen('chat')
    .subscribe((data) => this.updateMessage(data));
}
messageTyping(): void {
  this.messages.emit('typing', this.username);
}
sendMessage(): void {
  this.messages.emit('chat', {
    message: this.message,
    handle: this.username,
  });
  this.message = '';
  document.getElementById('exampleFormControlTextarea2').innerHTML = '';
}
updateMessage(data: any) {
  this.feedback = '';
  if (!!!data) return;
  console.log(`${data.handle} : ${data.message}`);
  this.output.push(data);
}
updateFeedback(data: any) {
  this.feedback = `${data} is typing a message`;
}
}
