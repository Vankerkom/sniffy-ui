import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexbox-debug-page',
  templateUrl: './hexbox-debug-page.component.html',
  styleUrls: ['./hexbox-debug-page.component.scss'],
})
export class HexboxDebugPageComponent implements OnInit {
  dataBuffer = new Uint8Array([
    129,
    18,
    18,
    236,
    21,
    57,
    12,
    163,
    241,
    180,
    173,
    165,
    51,
    1,
    119,
    112,
    206,
    222,
    176,
    248,
    136,
    62,
    253,
    120,
    132,
    42,
    153,
    225,
    111,
    38,
    68,
    126,
  ]);
  selectionData: any;

  constructor() {}

  ngOnInit(): void {}

  selectionChanged($event: any) {
    this.selectionData = $event;
  }
}
