import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective {
  @Input() rotate? = '45';
  @Input() step? = '10';
  rotation = 0;
  isShiftDown = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.rotation = this.rotate ? +this.rotate : 0;
    this.rotateImage();
  }

  rotateImage() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${this.rotation}deg)`
    );
  }

  @HostListener('click') onClick() {
    if (this.isShiftDown) {
      this.rotation -= this.step ? +this.step : 0;
    } else {
      this.rotation += this.step ? +this.step : 0;
    }
    this.rotateImage();
  }

  @HostListener('document:keydown.shift') keyDownShift() {
    this.isShiftDown = true;
  }

  @HostListener('window:keyup.shift') keyUpShift() {
    this.isShiftDown = false;
  }
}
