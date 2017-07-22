import { Component, OnInit } from '@angular/core';
import { AlertService } from "./alert.service";
import { AppWideAlert } from "./AppWideAlert";


@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: AppWideAlert;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}