import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  editProfileShowModal: boolean;
  editProfileSubmitted: boolean;
  editProfileForm: FormGroup;
  emailid: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editProfileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      attachments: ['']
    },
    {
      validator: this.mustMatch('password', 'confirmPassword')
    }
    );
  }

  public handleErrorEP = (controlName: string, errorName: string) => {
    return this.editProfileForm.controls[controlName].hasError(errorName);
  }
  get f() { return this.editProfileForm.controls; }

  editProfilePopup(){
    // alert("Inside editProfilePopup() method");
    this.editProfileShowModal = true;
    this.emailid = "kishore.kollipora@aricent.com";
  }

   // custom validator to check that two fields match
public mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

  clearRegisterForm() {
    window.location.reload();
  }

  onReUploadFormSubmit() {
    // alert("Inside onReUploadFormSubmit() function");
    // this.reset();
    this.editProfileSubmitted = true;
    if (this.editProfileForm.invalid) {
        alert("Please fill mandatory fields in the Form")
      return;
    }

    // this.ruFileData = {"script_id": this.editProfileForm.value.firewallID,"attachement_data": [this.attachmentsRUJson]};

    // console.log("onReUploadFormSubmit:>>>222 "+ JSON.stringify(this.ruFileData));
    // const ruFormData = new FormData();
    // ruFormData.append("firewall_data", JSON.stringify(this.ruFileData));
    // ruFormData.append("firewall_file", this.selectedFile);

    // this.firewallService.reuploadFileByID(ruFormData).subscribe(response => {
    //   console.log("Re-upload Service Response: "+JSON.stringify(response));
    //   if (response.status == 200) {
    //     this.getAllFW();
    //   }
    //   this.isRUSuccessResp = true;
    //         setTimeout(() => {
    //           this.clearRegisterForm();
    //         }, 2000);
    // }, errorRU => {
    //   console.log("Re-upload sevice error: "+ JSON.stringify(errorRU));
    //    this.isRUErrorResponse = true;
    //    this.errorRUMsg = "Response Error:  " + errorRU.message;
    //         if (errorRU.status == 400 && errorRU.statusText == "BAD REQUEST") {
    //           this.errorRUMsg = errorRU.error.message
    //         }
    // });
  }

}
