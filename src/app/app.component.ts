import { Component, ViewChild } from '@angular/core';
import {Form as FormseyForm} from "@formsey/core";
import "@formsey/fields-native/DateField";
import "@formsey/fields-native/TimeField";
import "@formsey/fields-native/StringField";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild ('formseyform') formseyform;
  reportValidity() {
    (this.formseyform.nativeElement as FormseyForm).reportValidity();
  }

  contentChanged(e) {
    console.log(e);
  }
}
