import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IColumn, IDataTable } from '../../models/interfaces/basic-component-model.interface';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
	@Input() dataTable!: IDataTable;
	@Input() showButtonEdit = true;
	@Input() showButtonDelete = true;
	@Input() showButtonViewDetail = false;

	@Output() editEvent = new EventEmitter();
	@Output() deleteEvent = new EventEmitter();
	@Output() viewDetailEvent = new EventEmitter();

	@Output() pageEvent = new EventEmitter<PageEvent>();
	@Output() dataSourceEvent = new EventEmitter<MatTableDataSource<unknown>>();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	dataSource!: MatTableDataSource<unknown>;
	columnNames: IColumn[] = [];
	displayedColumns: string[] = [];
	private _existData = false;

	ngOnInit(): void {
		this._existData = this.dataTable && this.dataTable.data.length > 0;

		if (this._existData) {
			this.columnNames = this.dataTable.columns;
			this.dataSource = new MatTableDataSource(this.dataTable.data);
			this.displayedColumns = this.dataTable.columns.filter((x) => !x.hidden).map((item) => item.title);
			this.displayedColumns.push('actions');
			this.dataSourceEvent.emit(this.dataSource);
		}
	}

	ngAfterViewInit(): void {
		if (this._existData) {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		}
	}

	clickEdit(element: unknown): void {
		this.editEvent.emit(element);
	}

	clickDelete(element: unknown): void {
		this.deleteEvent.emit(element);
	}

	clickViewDetail(element: unknown): void {
		this.viewDetailEvent.emit(element);
	}

	page(pageEvent: PageEvent): void {
		this.pageEvent.emit(pageEvent);
	}

	edit(): void {
		console.log('edit');
	}
}
