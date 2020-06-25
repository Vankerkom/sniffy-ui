import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-shell',
  templateUrl: './session-shell.component.html',
  styleUrls: ['./session-shell.component.scss'],
})
export class SessionShellComponent implements OnInit {

  readonly navLinks = [
    { path: '/sessions', label: 'Sessions' },
    { path: '/sessions/1', label: 'Session 1' },
    { path: '/sessions/2', label: 'Session 2' },
    { path: '/sessions/3', label: 'Session 3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
