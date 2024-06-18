import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProp'
})
export class FilterPropPipe implements PipeTransform {

  transform(value: any[] , key:string , propName:string ) {
    const result: any[]  = []
    if(value.length ===0 || key ==='' || propName==='')
    return value;
    value.forEach(prop => {
      if(String(prop[propName]).toLocaleLowerCase().includes(key.toLocaleLowerCase()) )
      result.push(prop)
    });
    console.log(result);


    return result
  }

}
