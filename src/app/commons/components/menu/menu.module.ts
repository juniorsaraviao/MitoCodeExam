import { MenuComponent } from './menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [MenuComponent],
	imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, RouterModule],
	exports: [MenuComponent]
})
export class MenuModule {}
