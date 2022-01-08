import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpaceValidators } from 'src/app/common/validators/name.validators';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  errormsg: any;
  successmsg: any;
  getparamid: any;
  images: any;
  url: any;
  constructor(
    private studentService: StudentService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.studentService.getSingleStudent(this.getparamid).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.patchValue({
          first_name: res.data[0].first_name,
          last_name: res.data[0].last_name,
          address: res.data[0].address,
          school: res.data[0].state,
          email: res.data[0].city,
          family_name: res.data[0].family_name,
          phone: res.data[0].phone,
        });
      });
    }
  }
  userForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      SpaceValidators.cannotContainSpace,
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    school: new FormControl('', Validators.required),
    family_name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
      ),
    ]),
    image: new FormControl(''),
  });

  studentSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.studentService
        .createStudent(this.userForm.value)
        .subscribe((res) => {
          console.log(res, 'res==>');
          this.successmsg = 'student details successfuly inserted !';

        });
    } else {
      this.errormsg = 'all field is required !';
    }
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  get FirstName() {
    return this.userForm.get('first_name');
  }
  get LastName() {
    return this.userForm.get('last_name');
  }
  get Address() {
    return this.userForm.get('address');
  }
  get Email() {
    return this.userForm.get('email');
  }
  get FamilyName() {
    return this.userForm.get('family_name');
  }
  get School() {
    return this.userForm.get('school');
  }
  get Phone() {
    return this.userForm.get('phone');
  }
}
