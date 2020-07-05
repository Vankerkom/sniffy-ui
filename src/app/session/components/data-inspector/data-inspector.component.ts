import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-data-inspector',
  templateUrl: './data-inspector.component.html',
  styleUrls: ['./data-inspector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInspectorComponent implements OnInit {

  uint8Value: number | null = null;
  uint16Value: number | null = null;
  uint32Value: number | null = null;
  uint64Value: bigint | null = null;

  int8Value: number | null = null;
  int16Value: number | null = null;
  int32Value: number | null = null;
  int64Value: bigint | null = null;

  float16Value: number | null = null;
  float32Value: number | null = null;
  float64Value: number | null = null;

  length: number = 0;
  binary: string | null = null;

  @Input() littleEndian = true;

  @Input() set buffer(buffer: any) {
    const dataView = new DataView(buffer || new ArrayBuffer(0));

    this.length = dataView.byteLength;

    this.uint8Value = dataView.byteLength >= 1 ? dataView.getUint8(0) : null;
    this.uint16Value = dataView.byteLength >= 2 ? dataView.getUint16(0, this.littleEndian) : null;
    this.uint32Value = dataView.byteLength >= 4 ? dataView.getUint32(0, this.littleEndian) : null;
    //this.uint64Value = dataView.byteLength >= 8 ? dataView.getBigUint64(0, this.littleEndian) : null;

    this.int8Value = dataView.byteLength >= 1 ? dataView.getInt8(0) : null;
    this.int16Value = dataView.byteLength >= 2 ? dataView.getInt16(0, this.littleEndian) : null;
    this.int32Value = dataView.byteLength >= 4 ? dataView.getInt32(0, this.littleEndian) : null;
    //this.int64Value = dataView.byteLength >= 8 ? dataView.getBigInt64(0, this.littleEndian) : null;

    this.float32Value = dataView.byteLength >= 4 ? dataView.getFloat32(0, this.littleEndian) : null;
    this.float64Value = dataView.byteLength >= 8 ? dataView.getFloat64(0, this.littleEndian) : null;

    this.binary = this.uint8Value?.toString(2).padStart(8, '0') || null;
  }

  constructor() {}

  ngOnInit(): void {}
}
