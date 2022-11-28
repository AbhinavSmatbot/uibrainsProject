import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerList:any[] = [
    {
      name:'abhinav',
      dob:2006,
      age:24,
      address:'rewa'
    },
    {
      name:'abhi',
      dob:2005,
      age:29,
      address:'rewa'
    },
    {
      name:'nav',
      dob:2023,
      age:45,
      address:'rewa'
    },
    {
      name:'bhina',
      dob:2067,
      age:78,
      address:'rewa'
    }
  ];

  public getCustomer(){
    return this.customerList;
  }
  constructor() { }
}
