import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Player } from '../models/player.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  players: Player[]
  constructor(private data: DataService,private elementRef: ElementRef) {
    this.players = data.players;
  }

  addPlayer(name: string) {
    if(name!="" && this.players.length===0)
    this.data.addPlayer(new Player(name));
  }
  deletePlayer(index: number) {
    this.data.deletePlayer(index);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#bee5d3';
    

  }

}
