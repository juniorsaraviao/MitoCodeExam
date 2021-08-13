import { IProduct } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ProductFlowService } from '../service/product-flow.service';
import { Collection } from 'src/app/commons/services/apis/category/category-api-models.interface';
import { CategoryApiService } from 'src/app/commons/services/apis/category/category-api.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	providers: [ProductFlowService]
})
export class ProductComponent implements OnInit, AfterContentInit {
	@Input() value!: IProduct;
	categoriesList: Collection[] = [];
	constructor(public productFlowService: ProductFlowService, private _categoryApiService: CategoryApiService) {
		productFlowService.loadFormGroup(this.value);
	}

	ngOnInit(): void {
		this._categoryApiService.findAll().subscribe((data) => {
			this.categoriesList = data.collection;
		});
	}

	ngAfterContentInit(): void {
		this.productFlowService.loadFormGroup(this.value);
	}
}
