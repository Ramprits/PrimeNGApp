import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  msgs: Message[] = [];
  constructor(private firebaseAuth: AngularFireAuth, private messageService: MessageService) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: err.message });
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {

        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: err.message });
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}