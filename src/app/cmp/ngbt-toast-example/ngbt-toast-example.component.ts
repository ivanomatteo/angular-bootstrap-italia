import { Component, OnDestroy } from '@angular/core';
import { NgbtToastService } from 'src/app/services/ngbt-toast.service';

@Component({
  selector: 'app-ngbt-toast-example',
  templateUrl: './ngbt-toast-example.component.html',
  styleUrls: ['./ngbt-toast-example.component.scss']
})
export class NgbtToastExampleComponent implements OnDestroy {
  constructor(public toastService: NgbtToastService) {}

	showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-white', delay: 10000 });
	}

	showDanger(dangerTpl:any) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-white', delay: 15000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
