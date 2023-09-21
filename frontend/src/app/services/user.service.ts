import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userobservable!: Observable<User>;
  constructor(private http: HttpClient, private toastrService:ToastrService) {
    this.userobservable = this.userSubject.asObservable();
   }

   login(userLogin:IUserLogin):Observable<User>{
      return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
        tap({
          next: (user) => {
            this.userSubject.next(user);
            this.toastrService.success(
              `welcome to Foodie ${user.name}`,
              'Login Successful'
            )
          },
          error: (errorRespose)=> {
            this.toastrService.error(errorRespose.error, 'Login Failed');

          }
        })
      );
   }

}
