import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	@Input() dataSource!: MatTableDataSource<unknown>;

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		console.log(this.dataSource);
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
