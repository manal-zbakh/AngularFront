import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],search:any): unknown {
  if(!value){
    return []
  }
  if(!search){
   return value ;
  }
  search=search.toLocaleLowerCase();
  return value.filter((it:string)=>{
    return it.toLocaleLowerCase().includes(search);
  })
  }

}
