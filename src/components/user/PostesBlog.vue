<template>

      <div> đây là danh sách bài viết</div>
      <md-editor language="my-lang" :toolbars="toolbars" v-model="text" >
        <template #defToolbars>
          <emoji-toi>
            <template #trigger> 😆 </template>
          </emoji-toi>
          <export-pdf :modelValue="text" />
        </template>
      </md-editor>


   </template>
   
   <script>
/* eslint-disable */


   import { MdEditor, config, NormalToolbar } from 'md-editor-v3';
   import 'md-editor-v3/lib/style.css';
   import '@vavt/v3-extension/lib/asset/ExportPDF.css';
   import '@vavt/v3-extension/lib/asset/Emoji.css';
   import { ExportPDF } from '@vavt/v3-extension';
   import { Emoji } from '@vavt/v3-extension';
   import { Mark } from '@vavt/v3-extension';

  config({
  editorConfig: {
    languageUserDefined: {
      'my-lang': {
        toolbarTips: {
          bold: 'bold',
          underline: 'underline',
          italic: 'italic',
          strikeThrough: 'strikeThrough',
          title: 'title',
          sub: 'subscript',
          sup: 'superscript',
          quote: 'quote',
          unorderedList: 'unordered list',
          orderedList: 'ordered list',
          task: 'task list',
          codeRow: 'inline code',
          code: 'block-level code',
          link: 'link',
          image: 'image',
          table: 'table',
          mermaid: 'mermaid',
          katex: 'formula',
          revoke: 'revoke',
          next: 'undo revoke',
          save: 'save',
          prettier: 'prettier',
          pageFullscreen: 'fullscreen in page',
          fullscreen: 'fullscreen',
          preview: 'preview',
          htmlPreview: 'html preview',
          catalog: 'catalog',
          github: 'source code',
        },
        titleItem: {
          h1: 'Lv1 Heading',
          h2: 'Lv2 Heading',
          h3: 'Lv3 Heading',
          h4: 'Lv4 Heading',
          h5: 'Lv5 Heading',
          h6: 'Lv6 Heading',
        },
        imgTitleItem: {
          link: 'Add Img Link',
          upload: 'Upload Img',
          clip2upload: 'Clip Upload',
        },
        linkModalTips: {
          linkTitle: 'Add Link',
          imageTitle: 'Add Image',
          descLabel: 'Desc:',
          descLabelPlaceHolder: 'Enter a description...',
          urlLabel: 'Link:',
          urlLabelPlaceHolder: 'Enter a link...',
          buttonOK: 'OK',
        },
        clipModalTips: {
          title: 'Crop Image',
          buttonUpload: 'Upload',
        },
        copyCode: {
          text: 'Copy',
          successTips: 'Copied!',
          failTips: 'Copy failed!',
        },
        mermaid: {
          flow: 'flow',
          sequence: 'sequence',
          gantt: 'gantt',
          class: 'class',
          state: 'state',
          pie: 'pie',
          relationship: 'relationship',
          journey: 'journey',
        },
        katex: {
          inline: 'inline',
          block: 'block',
        },
        footer: {
          markdownTotal: 'Word Count',
          scrollAuto: 'Scroll Auto',
        },
      },
    },
  },
})

   export default {
     name: 'PostesBlog',
     components: {
      MdEditor,
      'export-pdf': ExportPDF,
      'emoji-toi': Emoji,
      NormalToolbar,
     },
     data() {
       return {
         count: 0,
         text: '',
         toolbars: ['bold','underline','italic','strikeThrough','title','sub','sup',
         'quote',
          'unorderedList',
          'orderedList',
          'task',
          'codeRow',
          'code',
          'link',
          'image',
          'table',
          'mermaid',
           'katex',
           0,
         1,
           'revoke',
            'next',
          'save',
          'prettier',
          'pageFullscreen',
          'fullscreen',
          'preview',
          'htmlPreview',
          'catalog',
      
         
        
        ],
       }
     },
     methods:{
       setTralet(){
      
       }
     },
     create(){
     },
   
   }
   </script>

<!-- wer**werwe** tiếo tu

```mermaid
flowchart TD
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Văn-Khánh
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Thị-Hòa
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Thị-Bình
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Văn-Thắng
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Thị-Lợi
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Thị-Vinh
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Văn-Quang
Nguyễn-Văn-Kinh&Phạm-Thị-Ất --> Nguyễn-Văn-Minh
Nguyễn-Văn-Khánh --> Nguyễn-Thị-Thiết
Nguyễn-Văn-Khánh --> Nguyễn-Thị-Lập
Nguyễn-Văn-Khánh --> Nguyễn-Văn-Danh
Nguyễn-Thị-Thiết --> Nguyễn-văn-trọng
Nguyễn-Thị-Thiết --> nguyễn-thị-Ngân
Nguyễn-Thị-Lập --> Song
Nguyễn-Thị-Lập --> Sáng
Nguyễn-Thị-Lập --> thành
Nguyễn-Văn-Danh --> Nguyễn-Thị-Trâm-Anh
Nguyễn-Văn-Danh --> Nguyễn-Thị-Gạo
Nguyễn-Văn-Danh --> Nguyễn-Thị-Nếp
Nguyễn-Thị-Hòa --> Nguyễn-Thị-Thu

```

```mermaid
stateDiagram-v2
  s1 --> s2
  s1 --> nguyenvancong
  NguyễnThịHòa --> NguyễnThịThu
```

| col     | col     | col | col |
| ------- | ------- | --- | --- |
| content | content |

> weee
> `eeeê```language

````
```xin chào em, anh larrrrrrrrrr

```` -->

 
// code tinh nag pdf va 

<!-- 
```mermaid
flowchart TD
Nguyễn-Văn-Ới --> Nguyễn-Thị-Toàn
Nguyễn-Văn-Ới --> Nguyễn-Văn-Kinh&Phạm-Thị-Ất
Nguyễn-Văn-Ới --> Nguyễn-Văn-Giám
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Văn-Khánh
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Thị-Hòa
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Thị-Bình
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Văn-Thắng
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Thị-Lợi
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Thị-Vinh
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Văn-Quang
Nguyễn-Văn-Kinh&Phạm-Thị-Ất ---> Nguyễn-Văn-Minh
Nguyễn-Văn-Khánh --> Nguyễn-Thị-Thiết
Nguyễn-Văn-Khánh --> Nguyễn-Thị-Lập
Nguyễn-Văn-Khánh --> Nguyễn-Văn-Danh
Nguyễn-Văn-Danh --> Nguyễn-Thị-Trâm-Anh
Nguyễn-Văn-Danh --> Nguyễn-Thị-Gạo
Nguyễn-Văn-Danh --> Nguyễn-Thị-Nếp
Nguyễn-Văn-Thắng --> Nguyễn-Thị-Thành
Nguyễn-Văn-Thắng --> Nguyễn-Văn-Công
Nguyễn-Văn-Công --> Nguyễn-Thị-Ngọc-Diệp
Nguyễn-Văn-Quang --> Nguyễn-Thị-Diệu-An
Nguyễn-Văn-Quang --> Nguyễn-Thị-Hoài-Phương -->
