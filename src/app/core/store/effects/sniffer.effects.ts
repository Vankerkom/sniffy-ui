import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SnifferActions from '../actions/sniffer.actions';


@Injectable()
export class SnifferEffects {

  constructor(private actions$: Actions) {}

}
