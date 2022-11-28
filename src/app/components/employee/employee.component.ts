import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() childData:any;
  
  public message:string = 'Good Moring my son';

  @Output() public sendData = new EventEmitter();
  
  public emitDatato(){
    this.sendData.emit(this.message)
  }
  public allData:any[] = [];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    // this.getAllDetailsViaCustomers();
    this.allData = this.customerService.getCustomer();
  }
  // getAllDetailsViaCustomers(){
  //   this.allData = this.customerService.getCustomer();
  //   console.log('sdfwefwe',this.allData);
  // }
  

}
