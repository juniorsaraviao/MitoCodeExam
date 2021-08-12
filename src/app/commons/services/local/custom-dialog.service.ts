import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CustomDialogComponent } from '../../components/custom-dialog/custom-dialog.component';
import { IConfigDialog } from '../../models/interfaces/basic-component-model.interface';

@Injectable({ providedIn: 'root' })
export class CustomDialogService {
	constructor(private _dialog: MatDialog) {}
	private _dialogRef!: MatDialogRef<CustomDialogComponent, boolean>;
	private _mediumConf: MatDialogConfig = {
		height: 'auto',
		width: 'auto',
		autoFocus: true,
		disableClose: false
	};
	open(config: IConfigDialog): Observable<boolean | undefined> {
		this._resetMatDialogConfig();
		this._mediumConf.data = config;
		if (config.disableAutoClose) {
			this._mediumConf.disableClose = config.disableAutoClose;
		}
		this._dialogRef = this._dialog.open(CustomDialogComponent, this._mediumConf);
		return this._dialogRef.afterClosed();
	}
	close(): void {
		this._dialogRef.close();
	}
	private _resetMatDialogConfig(): void {
		this._mediumConf.disableClose = false;
	}
}
