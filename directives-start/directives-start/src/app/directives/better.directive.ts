import { Directive, OnInit, Renderer2, ElementRef} from '@angular/core';

@Directive({
    selector: '[appBetter]'
})
export class BetterDirective implements OnInit {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }
}
