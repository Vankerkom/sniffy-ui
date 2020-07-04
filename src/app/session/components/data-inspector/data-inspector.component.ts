import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-data-inspector',
  templateUrl: './data-inspector.component.html',
  styleUrls: ['./data-inspector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInspectorComponent implements OnInit {

  uint8Array: Uint8Array;
  uint16Array: Uint16Array;
  uint32Array: Uint32Array;

  int8Array: Int8Array;
  int16Array: Int16Array;
  int32Array: Int32Array;


  @Input() set buffer(buffer: any) {

  }

  constructor() {}

  ngOnInit(): void {}
}
