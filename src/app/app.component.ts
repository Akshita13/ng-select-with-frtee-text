import { Component, VERSION } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public tagIds: FormControl = new FormControl("");
  tags = [
    { tagId: 1, tagName: "JAVA" },
    { tagId: 2, tagName: "CEO" },
    { tagId: 3, tagName: "QA" },
    { tagId: 4, tagName: "ANGLAR" }
  ];
}
