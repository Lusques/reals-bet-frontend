import { Component, Input } from '@angular/core';
type Variant = 'default' | 'golden' | 'golden-gradient' | 'ghost';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: Variant = 'default';
  @Input() glowing: boolean = true;

  getClasses() {
    let classes: string = this.variant;
    if (this.glowing) classes += ' glowing';
    return classes;
  }
}
