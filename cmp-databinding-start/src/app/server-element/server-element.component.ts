import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ViewChild, 
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() element: {type: string, name: string, content: string};
  @ViewChild('heading') heading: ElementRef;
  constructor() {
    console.log('constructor called....');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.heading);
  } 

  ngOnInit() {
    console.log('onInit called...');
  }

  ngDoCheck() {
    console.log('on do check...');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit calll....');
    console.log(this.heading);
    
  }

  ngAfterContentChecked() {
    console.log('acchecked');
    console.log(this.heading.nativeElement.textContent);
    
  }


}
