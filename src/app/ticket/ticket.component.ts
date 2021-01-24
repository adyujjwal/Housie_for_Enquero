import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input()
  data: Ticket;
  @Output()
  deleteEvent = new EventEmitter<null>();
  changecolor: boolean=false;
  constructor(private dataService:DataService) {
  }
  changeColor=[ [false, false,false,false,false,false,false,false,false],
                [false, false,false,false,false,false,false,false,false],
                [false, false,false,false,false,false,false,false,false],                
              ]

  

  ngOnInit(): void {
  }
  deleteTicket() {
    this.deleteEvent.emit(null);
    
  }
  public selectedIndex;

  check(num,numarray,check,i,j){
    console.log(num,numarray,check,i,j)

    this.changecolor=true;
    console.log("we did it")
  }
  markNumber(hasOccured:boolean,number: number,_:Map<number,boolean>) {
    if(hasOccured){
    var tileId = "tile-" + number;
    document.getElementById(tileId).classList.add("marked");
    }
  }
  
}
