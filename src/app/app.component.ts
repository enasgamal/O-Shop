import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items!: Observable<any[]>;
  constructor(firestore: AngularFirestore, private authService:AuthService, private router:Router, private useService:UserService) {
    this.items = firestore.collection('items').valueChanges();

    // authService.user$.subscribe(user => {
    //   if(user){
    //     useService.save(user)
    //   }
    // })

    // authService.user$.subscribe(user => {
    //   if(user){
    //     let returnUrl:any= localStorage.getItem('returnUrl');
    //     router.navigateByUrl(returnUrl);
    //   }
    // })

  }
  
}
