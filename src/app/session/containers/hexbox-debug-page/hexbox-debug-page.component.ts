import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexbox-debug-page',
  templateUrl: './hexbox-debug-page.component.html',
  styleUrls: ['./hexbox-debug-page.component.scss']
})
export class HexboxDebugPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectionChanged($event: any) {
    console.log('Selection changed', $event);
  }

}
