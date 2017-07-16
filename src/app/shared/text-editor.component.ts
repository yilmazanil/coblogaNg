import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'tinymce-editor',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() editorContent: String;
  // @Output() onEditorKeyup = new EventEmitter<any>();
  @Output() onEditorSave = new EventEmitter<any>();


  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table', 'codesample', 'code', 'save'],
      codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'PHP', value: 'php' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Python', value: 'python' },
        { text: 'Java', value: 'java' },
        { text: 'C', value: 'c' },
        { text: 'C#', value: 'csharp' },
        { text: 'C++', value: 'cpp' }
      ],
      menubar: false,
      codesample_content_css: '../assets/prism/prism.css',
      toolbar: "codesample | code | undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | save",
      skin_url: '../assets/skins/tinymce/lightgray',
      branding: false,
      height: 300,
      statusbar: false,
      setup: editor => {
        this.editor = editor;
        // editor.on('keyup', () => {
        //   const content = editor.getContent();
        //   this.onEditorKeyup.emit(content);
        // });
        editor.on('init', () => {
          editor.setContent(this.editorContent);
        });
      },
      save_onsavecallback: () => { this.onEditorSave.emit(this.editor.getContent()) }
    });
  }
  UpdateContent(content:String)
  {
    this.editor.setContent(content);    
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}