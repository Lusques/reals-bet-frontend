import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType, ButtonVariant } from 'src/app/shared/types/ui.types';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() glowing: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: ButtonType = 'button';
  @Output() onClick = new EventEmitter<void>();

  getClasses(): string {
    let classes: string = this.variant;
    if (this.glowing && !this.disabled) classes += ' glowing';
    if (this.disabled) classes += ' disabled';
    return classes;
  }
  emitClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
