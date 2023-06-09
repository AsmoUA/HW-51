import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements SortByNamePipe {

  transform(users: any[], ...args: unknown[]): any[] {
    return users.sort((a, b) => a.name.localeCompare(b.name));
  }

}
