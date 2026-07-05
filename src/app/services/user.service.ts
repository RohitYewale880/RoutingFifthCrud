import { Injectable } from '@angular/core';
import { Ires, Iuser } from '../modals/product';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private refreshUsers = new Subject<void>();
  refreshUsers$ = this.refreshUsers.asObservable();
  UsersDetails: Array<Iuser> = [
    {
      userName: 'Rohit Yewale',
      userId: 'EMP101',
      userRole: 'Candidate',
      profileDescription: '3 years of experience in Angular development.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
      experienceYears: '3 to 5 years',
      isActive: false,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001'
        },
        permanent: {
          city: 'Kolhapur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '416001'
        }
      },
      isAddSame: false
    },
    {
      userName: 'Snehal Patil',
      userId: 'EMP102',
      userRole: 'Admin',
      profileDescription: 'Experienced in Angular and responsive UI development.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      skills: ['Angular', 'HTML', 'CSS', 'JavaScript'],
      experienceYears: '5 to 7 years',
      isActive: true,
      address: {
        current: {
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '400001'
        },
        permanent: {
          city: 'Satara',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '415001'
        }
      },
      isAddSame: true
    }
  ];

  constructor() { }

  refreshList() {
    this.refreshUsers.next();
  }

  getusers(): Observable<Array<Iuser>> {
    return of(this.UsersDetails)
  }

  getsingleuser(id: string): Observable<Iuser> {
    return of(this.UsersDetails.find(ele => ele.userId === id)!)
  }

  adduser(user: Iuser): Observable<Ires<Iuser>> {
    this.UsersDetails.push(user)

    return of({
      msg: `The user is with id ${user.userId} is Added successfully!!!`,
      data: user
    })
  }

  removeuser(id: string): Observable<Ires<Iuser>> {
    let getindex = this.UsersDetails.findIndex(ele => ele.userId === id)
    let user = this.UsersDetails.splice(getindex, 1)

    return of({
      msg: `The user is with id ${user[0].userId} is Removed successfully!!!`,
      data: user[0]
    })
  }

  updateuser(user: Iuser): Observable<Ires<Iuser>> {
    let getindex = this.UsersDetails.findIndex(ele => ele.userId === user.userId)
    this.UsersDetails[getindex] = user

    return of({
      msg: `The user is with id ${user.userId} is Updated successfully!!!`,
      data: user
    })
  }
}
