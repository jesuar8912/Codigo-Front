import { Directive, ElementRef, HostListener } from '@angular/core';



@Directive({
    selector: '[appCambiarTexto]'
})
export class CambiarTextoDirective {

    constructor(private Element: ElementRef) {
        Element.nativeElement.style = "text-transform:capitalize";
    }
    @HostListener('mouseenter') onmouseenter() {
        this.cambiar('lowercase');
    };
    @HostListener('mouseleave') onmouseleave() {
        this.cambiar('uppercase');
    };
    @HostListener('mousedown') onmousedown() {
        this.cambiar('capitalize');
    };
    private cambiar(tipo: String) {
        this.Element.nativeElement.style = "text-transform:" + tipo;
    }

}
