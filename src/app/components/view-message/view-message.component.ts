import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
  public allDetails:any[] = [
    {
      username:'',
      age:  '',
      date: '',
      add: ''
    }
  ];
  
  public addFiels(){
    this.allDetails.push({
          username:'',
          age:  '',
          date: '',
          add: ''
        });
    console.log('allDetails',this.allDetails);
  }

  public saveDetails(){
    console.log('sdefafa',this.allDetails);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
