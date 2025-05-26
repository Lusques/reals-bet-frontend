import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTypeText } from '@app/shared/types/ui.types';

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss'],
})
export class InputIconComponent {
  @Input() iconUrl: string = '/assets/icons/search-icon.svg';
  @Input() altText: string = 'icon';
  @Input() placeholder: string = 'Pesquise por jogos e provedores';
  @Input() type: InputTypeText = 'text';
  @Input() value: any = '';
  @Output() onInputChange = new EventEmitter<string>();

  emitInputValue(value: string) {
    this.onInputChange.emit(value);
  }
}
