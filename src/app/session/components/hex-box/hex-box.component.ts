import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-hex-box',
  templateUrl: './hex-box.component.html',
  styleUrls: ['./hex-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HexBoxComponent {
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

  hoverIndex = -1;
  cursorIndex = -1;

  selectionStart = -1;
  selectionEnd = -1;
  selecting = false;

  constructor() {
    this.data = new ArrayBuffer(1024);
  }

  trackByFn(index, item) {
    return index;
  }

  setCursorIndex(newCursorIndex: number): void {
    this.cursorIndex = newCursorIndex;
    this.hoverIndex = newCursorIndex;
  }

  setHoverIndex(newHoverIndex: number): void {
    this.hoverIndex = newHoverIndex;

    if (this.selecting) {
      this.selectionEnd = this.hoverIndex;
    }
  }

  setSelectionStart(newSelectionStart: number): void {
    this.selectionStart = newSelectionStart;
    this.selecting = true;
  }

  setSelectionEnd(newSelectionEnd: number): void {
    this.selectionEnd = newSelectionEnd;
    this.selecting = false;
  }

  resetCursor() {
    this.setCursorIndex(-1);
    this.selectionStart = -1;
    this.selectionEnd = -1;
  }

}
