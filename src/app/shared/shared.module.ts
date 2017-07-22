import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextEditorComponent } from "./text-editor/text-editor.component";
import { TagSelectorComponent } from "./tag-input/tag-selector.component";

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from "./common/alert.service";
import { UserService } from "./common/user.service";
import { AuthenticationService } from "./common/authentication.service";


TagInputModule.withDefaults({
    tagInput: {
        placeholder: 'Yeni Etiket',
        identifyBy: 'id',
        displayBy: 'name',
        maxItems: 10,
        animationDuration: { enter: '0ms', leave: '0ms' }
    }
});


@NgModule({
    imports: [CommonModule,
        FormsModule,
        TagInputModule,
        BrowserAnimationsModule],
    exports: [
        CommonModule,
        FormsModule,
        TextEditorComponent,
        TagSelectorComponent
    ],
    declarations: [
        TextEditorComponent,
        TagSelectorComponent],
    providers : [
        AlertService,
        UserService,
        AuthenticationService
    ]
})
export class SharedModule { }
