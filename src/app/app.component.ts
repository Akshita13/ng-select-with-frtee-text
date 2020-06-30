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
  isSet:boolean=true
  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.buildForm();
  }
  public buildForm(): FormGroup {
    return this.fb.group({
      tagName: [""]
    });
  }

  tags = ["JAVA", "CEO", "QA", "ANGLAR"];
  addTagDetail = (name: string): string => this.addNew(name);

  addNew(value) {
      
    if(value.length<10){
      this.isSet=true
    }else{
      this.isSet=false
    }
    return value;
  }

  save() {
    console.log(this.userFormGroup.controls.tagName.value,"dfgfdgg");
  }
}
