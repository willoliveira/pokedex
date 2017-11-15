import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(items: any, filter: string, prop: string): any {
		console.log(items, filter, prop);
		return !filter ? items : items.filter(item => item.name.match(filter));
	}

}
