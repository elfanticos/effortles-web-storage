import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements StorageService {

  constructor() { }
  getItem<T>(key: string): Promise<T> {
    const value = JSON.parse(sessionStorage.getItem(key));
    return Promise.resolve(value);
  }
  setItem<T>(key: string, value: any): Promise<void> {
    const result = sessionStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve(result);
  }
  removeItem(key: string): Promise<void> {
    return Promise.resolve(sessionStorage.removeItem(key));
  }
}
