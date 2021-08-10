import { Component } from '@angular/core';
import { CategoryFlowService } from '../service/category-flow.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
	providers: [CategoryFlowService]
})
export class CategoryComponent {
	constructor(public categoryFlowService: CategoryFlowService) {
		categoryFlowService.loadFormGroup();
	}
}
