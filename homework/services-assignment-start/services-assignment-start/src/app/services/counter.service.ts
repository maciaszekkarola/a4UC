export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('From Active to Inactive ' + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('From Inactive to Active ' + this.inactiveToActiveCounter);
  }
}
