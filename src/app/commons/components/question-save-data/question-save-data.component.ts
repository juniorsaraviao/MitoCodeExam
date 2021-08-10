import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-question-save-data',
	templateUrl: './question-save-data.component.html',
	styleUrls: ['./question-save-data.component.scss']
})
export class QuestionSaveDataComponent {
	@Output() saveEvent = new EventEmitter();
	@Output() cancelEvent = new EventEmitter();
	@Output() registerEvent = new EventEmitter();
	@Input() disabledButtonRegister = false;

	@Input() showLoader = false;
	showQuestion = false;

	clickRegister(): void {
		this.showQuestion = true;
		this.registerEvent.emit();
	}

	clickCancel(): void {
		this.showQuestion = false;
	}

	clickSave(): void {
		this.showLoader = true;
		this.showQuestion = false;
		this.saveEvent.emit();
	}
}
