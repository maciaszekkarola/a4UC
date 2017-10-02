import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent  {

  
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
        (status: string) => console.log('new Status ' + status)
      );  
  }
    
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }

}
