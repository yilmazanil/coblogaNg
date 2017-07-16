import { Component } from '@angular/core';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent {
  title: String = 'app';
  editorContent: String = '<b>Some default content from post-edit component</b>'

  // OnTextEditorKeyUp(content)
  // {
  //     console.log(content);
  // }
  OnEditorSave(content) {
    console.log('Saved: ' + content);
  }
}
