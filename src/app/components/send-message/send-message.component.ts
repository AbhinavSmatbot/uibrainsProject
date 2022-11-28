import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  public customerData:any[] = [];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerData = this.customerService.getCustomer();
      // this.getCustomerDetails();
  }
  
  // public dataLoaded:boolean = false;
  // getCustomerDetails(){
    
  //  this.customerData = this.customerService.getCustomer();
   
  //  console.log('sfasf',this.customerData);
  // }

}
