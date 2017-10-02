import { 
    Directive, 
    OnInit, 
    Renderer2, 
    ElementRef, 
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBetter]'
})
export class BetterDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() defaultHighlight: string = 'blue';
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    //opcja 1 
    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
   

        // w ostatnim przykladzie zeby defaultowy kolor zadzial tez na @hostBindingu to 
        //deklaruję jego wartośc w onInit!
        this.backgroundProperty = this.defaultColor;
   
    }

    // - opcja 2 hover effect method

    // @HostListener('mouseenter') mouseover() {
    //     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // }

    // @HostListener('mouseleave') mouseoleave() {
    //     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // }


    // opcja bez użycia renderera
    // @HostBinding('style.backgroundColor') backgroundProperty: string = 'transparent';
    

    // @HostListener('mouseenter') mouseover() {
    //     this.backgroundProperty = 'yellow';
    // }
    // @HostListener('mouseleave') mouseleave() {
    //     this.backgroundProperty = 'transparent';
    // }

    //opcja do rozwinięcia poprzedniej dyrektywy   tak żeby była do wielokrotnego użytku

    @HostBinding('style.backgroundColor') backgroundProperty: string;
    

    @HostListener('mouseenter') mouseover() {
        this.backgroundProperty = this.defaultHighlight;
    }
    @HostListener('mouseleave') mouseleave() {
        this.backgroundProperty = this.defaultColor;
    }



}
