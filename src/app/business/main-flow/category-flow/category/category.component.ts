import { Component, Input, AfterContentInit } from '@angular/core';
import { CategoryFlowService } from '../service/category-flow.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
	providers: [CategoryFlowService]
})
export class CategoryComponent implements AfterContentInit {
	@Input() value!: unknown;
	constructor(public categoryFlowService: CategoryFlowService) {
		categoryFlowService.loadFormGroup(this.value);
	}
	ngAfterContentInit(): void {
		this.categoryFlowService.loadFormGroup(this.value);
	}
}
