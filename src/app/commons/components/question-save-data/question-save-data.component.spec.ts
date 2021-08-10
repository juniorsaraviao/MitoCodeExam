import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSaveDataComponent } from './question-save-data.component';

describe('QuestionSaveDataComponent', () => {
	let component: QuestionSaveDataComponent;
	let fixture: ComponentFixture<QuestionSaveDataComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [QuestionSaveDataComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(QuestionSaveDataComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
