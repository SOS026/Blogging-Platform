import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchT'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item =>{
      return (
        item.title.toLowerCase().includes(searchTerm)
      )
    } 
     
    );
  }
}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   transform(items: any[], searchTerm: string): any[] {
//     if (!items || !searchTerm) {
//       return items;
//     }

//     searchTerm = searchTerm.toLowerCase();

//     console.log(searchTerm);

//     return items.filter(item =>
//       console.log(item)
//       // item.name.toLowerCase().includes(searchTerm)
//     );
//   }
// }
