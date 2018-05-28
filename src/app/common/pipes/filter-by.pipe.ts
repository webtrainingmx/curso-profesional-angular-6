import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(
    items: any, searchText: string, fieldsToFilterBy: Array<string>): any {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if (!fieldsToFilterBy) {
      return items;
    }

    searchText = searchText.toLowerCase();

    const filters = this.prepareFiltersObject(fieldsToFilterBy, searchText);
    return this.multiFilter(items, filters);
  }

  prepareFiltersObject(fieldsToFilterBy: Array<string>, searchText: string) {
    const filters = {};
    fieldsToFilterBy.forEach(field => {
      filters[field] = [searchText];
    });

    return filters;
  }

  multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);

    // Filters all elements passing the criteria
    return array.filter((item) => {
      return filterKeys.every(key => {
        const value = item[key];

        return value.toString().toLowerCase().indexOf(filters[key]) !== -1;

      });
    });
  }

}
