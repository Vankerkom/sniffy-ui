import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-packets-list',
  templateUrl: './session-packets-list.component.html',
  styleUrls: ['./session-packets-list.component.scss']
})
export class SessionPacketsListComponent implements OnInit {

  @Input() dataSource: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
