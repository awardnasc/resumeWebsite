import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
  }
  public openPdf(){
    window.open('/../../assets/Alexander_Ward_Resume.pdf');
  }
}


