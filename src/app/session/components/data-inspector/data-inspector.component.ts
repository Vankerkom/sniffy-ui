import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-data-inspector',
  templateUrl: './data-inspector.component.html',
  styleUrls: ['./data-inspector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInspectorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
