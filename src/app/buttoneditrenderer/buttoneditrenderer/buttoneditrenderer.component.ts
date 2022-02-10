import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-buttoneditrenderer',
  template: `
  <button mat-button type="button" (click)="onClick($event)"><mat-icon>build</mat-icon></button>
  `,
  styleUrls: ['./buttoneditrenderer.component.scss']
})

export class ButtoneditrendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {

      const params = {
        event: $event,
        rowData: this.params.node.data
      }

      this.params.onClick(this.params);
    
    }
  }
}
