import { Component, VERSION } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userFormGroup;
  tagArray: any[] = [];
  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.buildForm();
  }
  public buildForm(): FormGroup {
    return this.fb.group({
      tagIds: [""]
    });
  }
  
  tags = [
    { tagId: 1, tagName: "JAVA" },
    { tagId: 2, tagName: "CEO" },
    { tagId: 3, tagName: "QA" },
    { tagId: 4, tagName: "ANGLAR" }
  ];
  addTagDetail = (name: string): string => this.addNew(name);

  addNew(value) {
   
    // let tagId = this.tags.length + 1;
    // let obj = { tagId: tagId, tagName: value };
    // this.tags.push(obj);
    // console.log(this.tags)
    return value;
  }

  save() {
    console.log(this.userFormGroup.controls.tagIds.value);
  }
}
