import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'cardExp'
})
export class CardExpPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.slice(0,2) + '/' + value.slice(2);
  }
}
