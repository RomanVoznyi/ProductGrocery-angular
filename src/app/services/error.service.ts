import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();

  handle(message: string) {
    console.log(message);
    console.log(this.error$);

    this.error$.next(message);
  }

  clear() {
    this.error$.next('');
  }
}
