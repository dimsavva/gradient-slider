import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @ViewChild("container") container: ElementRef;
  indicatorWidth = 0;
  indicatorVal = 50;
  indicatorpos = "0px";

indicator : string = ''


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
}
