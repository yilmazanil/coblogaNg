import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'app';
  editorContent:String = '<b>testContent for Editor </b>'

  // OnTextEditorKeyUp(content)
  // {
  //     console.log(content);
  // }
  OnEditorSave(content)
  {
      console.log('Saved: ' + content);
  }
}
