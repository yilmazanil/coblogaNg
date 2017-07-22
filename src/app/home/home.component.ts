import { Component } from "@angular/core";
import { User } from "../shared/common/User";
import { UserService } from "../shared/common/user.service";

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}