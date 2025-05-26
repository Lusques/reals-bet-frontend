import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceOrAll',
})
export class SliceOrAllPipe implements PipeTransform {
  /**
   * Transforma um array, retornando-o completo ou fatiado com base em um limite e uma flag.
   *
   * @param value O array a ser transformado (por exemplo, Game[]).
   * @param limit O número máximo de itens a serem retornados se 'showAll' for falso (padrão é 7).
   * @param showAll Se verdadeiro, retorna o array completo. Se falso, retorna os 'limit' primeiros itens.
   * @returns O array transformado (completo ou fatiado).
   */
  transform<T>(value: T[], limit: number = 7, showAll: boolean = false): T[] {
    if (!value || value.length === 0) {
      return [];
    }

    if (showAll) {
      return value;
    } else {
      return value.slice(0, limit);
    }
  }
}
