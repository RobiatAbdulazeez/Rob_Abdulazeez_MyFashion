import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() appHoverAffect: string | { index: number; total: number };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (typeof this.appHoverAffect === 'string' && this.appHoverAffect === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else if (this.appHoverAffect === 'bold border' ) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
