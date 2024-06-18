import { Pipe, PipeTransform } from '@angular/core';
import { IProperty } from '../models/IProperty';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<IProperty>, args: any[]) {
    const sortKey = args[0];
    const dircation = args[1];
    let multiple = 1;
    if(dircation == 'desc'){
      multiple = -1;
    }

    value.sort((a:any , b:any) =>{
      if(a[sortKey]==b[sortKey]) return 0;
      else if(a[sortKey]>b[sortKey]) return 1*multiple;
      else  return -1*multiple;
    });

    return value;

  }

}
