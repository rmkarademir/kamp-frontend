import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ''; //filterText te bir değer var mı (?) varsa hepsini küçük harfe çevir 
    return filterText ? value.filter // filterText te bir değer var mı (?) varsa value(Product) filtre uygula, for döngüsü gibi hepsini gez
        ((p: Product) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1) // productName küçük harfe çevir, filtre için (indexOf) filterText değerini kullan
      : value;
  }
}
