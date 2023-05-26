import { Component, OnDestroy } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-global',
  templateUrl: './toast-global.component.html',
  styleUrls: ['./toast-global.component.scss']
})
export class ToastGlobalComponent implements OnDestroy {
  constructor(public toastService: ToastService) {}

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
