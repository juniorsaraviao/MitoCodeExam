import { AfterContentInit, Component, Input } from '@angular/core';
import { ProductFlowService } from '../service/product-flow.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	providers: [ProductFlowService]
})
export class ProductComponent implements AfterContentInit {
	@Input() value!: unknown;
	constructor(public productFlowService: ProductFlowService) {
		productFlowService.loadFormGroup(this.value);
	}
	ngAfterContentInit(): void {
		this.productFlowService.loadFormGroup(this.value);
	}
}
