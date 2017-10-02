import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

// jeśli będę używać innego service wewenątrz tego service
// to musze dodać ten dekorator, 
// obydwa service muszą być dodane w array of providers w  app.module
@Injectable()

export class AccountsService {
  accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
      this.accounts.push({name: name, status: status});
      this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}