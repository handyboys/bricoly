import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  // create the socket object
  socket = io.socket;
  readonly url : string = 'http://localhost:8080';
  constructor() {
    //passing the connection
    this.socket = io.connect(this.url);
   }
   // we have two methods the listen and the emit
   listen(eventname: string){
    return new Observable((subscriber) => {
        this.socket.on(eventname, (data) => {
            subscriber.next(data);
        })
    })
}

    emit(eventname: string, data: any) {
      this.socket.emit(eventname, data);
    }
}
