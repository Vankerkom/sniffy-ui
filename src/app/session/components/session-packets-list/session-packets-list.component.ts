import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-packets-list',
  templateUrl: './session-packets-list.component.html',
  styleUrls: ['./session-packets-list.component.scss']
})
export class SessionPacketsListComponent implements OnInit {

  dataSource = [
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
    { 'timestamp': '123', 'direction': 'Inbound', 'length': 99, 'opcode': 1024, 'name': '?' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
