import { EventEmitter } from '@angular/core';
import { User } from 'src/interfaces/user';

export class Emitters {
  static authEmitter = new EventEmitter<User>();
}
