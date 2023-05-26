import { Component, TemplateRef } from '@angular/core';
import { NgbtToastService } from 'src/app/services/ngbt-toast.service';


@Component({
  selector: 'app-ngbt-toast-container',
  templateUrl: './ngbt-toast-container.component.html',
  styleUrls: ['./ngbt-toast-container.component.scss'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class NgbtToastContainerComponent {
  constructor(public toastService: NgbtToastService) {}

	isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}
