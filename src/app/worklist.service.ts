import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorklistService {
  constructor() {}

  schedule(worker: string) {
    return worker;
  }
}
