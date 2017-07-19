import { Component } from "@angular/core";

@Component({
    template : `<tag-input [(ngModel)]='items'></tag-input>`
})
export class CustomTagInputComponent { 
    items = ['Javascript', 'Typescript'];
}