import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortByTitlePipe implements PipeTransform {
    transform(members: any[], options: string[]): any[] {
        const propertyName: string = options[0] || 'Title';
        const order: string = options[1] || 'ascending';

        if (!members || members.length === 0) {
            return undefined;
        }

        const sortedMembers = members.sort((first: any, second: any): number => {
            const comparison = first[propertyName].localeCompare(second[propertyName]);
            if (order === 'descending') {
                return -comparison;
            }

            return comparison;
        });

        return sortedMembers;
    }
}
