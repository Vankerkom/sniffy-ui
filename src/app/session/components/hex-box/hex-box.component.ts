import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-hex-box',
  templateUrl: './hex-box.component.html',
  styleUrls: ['./hex-box.component.scss'],
})
export class HexBoxComponent implements OnInit {

  // TODO Add trackBy to improve change detection.

  _data: ArrayBuffer;
  _byteArray: Uint8Array;
  _offsets: Array<any>;

  @Input() set data(data: ArrayBuffer) {
    this._data = data;
    this._byteArray = new Uint8Array(this._data);
    this._offsets = Array.from(Array(this._byteArray.length / 16 + 1).keys());
    this._offsets = this._offsets.map((_, index) => index * 16);
  }

  @Output() selectionChanged = new EventEmitter<Array<any>>();

  cursorIndex = 0;

  constructor() {
    this.data = new ArrayBuffer(1024);
  }

  ngOnInit(): void {}

  setCursorIndex(newCursorIndex: number): void {
    this.cursorIndex = newCursorIndex;
    console.log('cursorIndex', this.cursorIndex);
  }

}
