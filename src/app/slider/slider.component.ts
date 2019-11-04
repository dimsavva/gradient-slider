import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @ViewChild("container",{static: false}) 
  container: ElementRef;  

 
  indicatorWidth = 0;

  indicatorpos = "0px";

  @Input() scoreRanges:any[];
    @Input() startColour : string;
    @Input() endColour : string;
    @Input() indicatorVal : number;

  
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.indicatorWidth = (this.container
      .nativeElement as HTMLElement).offsetWidth;
    this.setIndicator();
  } 

  constructor() {}

  ngOnInit() {
    this.indicatorWidth = (this.container
      .nativeElement as HTMLElement).offsetWidth;
    this.setIndicator();
  } 

  setIndicator() {
    this.indicatorpos =
      ((this.indicatorVal / 100) * this.indicatorWidth - 10).toString() + "px";
  }

  getSccore(endScore : number){

     return ((endScore / 100) * this.indicatorWidth +4).toString() + "px";

  }


   

}
