import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string=``;
  date:string=``;
  amount:number=0;
  miles:number=0;
  onNameCahange(value:any)
  {
     this.name=value.target.value
     console.log(value.target.value)
  }

  onDateChange(value:any)
  {
    this.date=value.target.value
  }
  onAmountChange(value:any)
  {
    this.amount=value.target.value
  }
  onMilesChane(value:any)
  {
    this.miles=value.target.value;
    
    
  }


  
    
















}
    