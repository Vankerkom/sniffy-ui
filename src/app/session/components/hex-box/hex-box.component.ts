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
  _byteArray: Uint8Array = new Uint8Array(128);
  _offsets: Array<any>;

  @Input() set data(data: Array<number>) {
    this._byteArray = new Uint8Array(data);
    const offsetArrayLength = Math.floor(this._byteArray.length / 16) + 1;
    this._offsets = Array.from(Array(offsetArrayLength).keys());
    this._offsets = this._offsets.map((_, index) => index * 16);
  }

  @Output() selectionChanged = new EventEmitter<ArrayBuffer | null>();

  hoverIndex = -1;
  selectionStart = -1;
  selectionEnd = -1;
  selecting = false;

  trackByFn(index, item) {
    return index;
  }

  setCursorIndex(newCursorIndex: number): void {
    this.hoverIndex = newCursorIndex;
    this.selectionStart = this.selectionEnd = newCursorIndex;
    this.changeSelection();
  }

  setHoverIndex(newHoverIndex: number): void {
    this.hoverIndex = newHoverIndex;

    if (this.selecting) {
      this.selectionEnd = this.hoverIndex;
      this.changeSelection();
    }
  }

  setSelectionStart(newSelectionStart: number): void {
    this.selectionStart = newSelectionStart;
    this.selecting = true;
  }

  setSelectionEnd(newSelectionEnd: number): void {
    this.selectionEnd = newSelectionEnd;
    this.selecting = false;
    this.changeSelection();
  }

  resetCursor() {
    this.setCursorIndex(-1);
    this.selectionStart = -1;
    this.selectionEnd = -1;
    this.changeSelection();
  }

  private changeSelection(): void {
    const startIndex = Math.min(this.selectionStart, this.selectionEnd);
    const endIndex = Math.max(this.selectionStart, this.selectionEnd) + 1;
    const selectedBuffer = this.getSelectedBufferForRange(startIndex, endIndex);

    this.selectionChanged.emit(selectedBuffer);
  }

  private getSelectedBufferForRange(startIndex: number, endIndex: number): ArrayBuffer | null {
    return startIndex >= 0 && endIndex >= 0
      ? this._byteArray.buffer.slice(startIndex, endIndex)
      : null;
  }
}
