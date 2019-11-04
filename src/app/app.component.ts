import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

scoreRanges = [
  {label : 'Low', startRange:0, endRange:30},
  {label : 'Med', startRange:31, endRange:60},
  {label : 'High', startRange:61, endRange:100}]

}


