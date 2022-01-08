import { Component, OnInit,ViewChild} from '@angular/core';
import { StudentService } from './../../service/student.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
// import saveAs from 'file-saver';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
students:any;
selectedStudent: any;
  constructor(private studentService:StudentService) {
    this.students=studentService.getAllData();
    //this.selectStudent = this.selectStudent.bind(this);
  }
/*   selectStudent(e:any) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done(s => {
      if(s) {
        this.selectedStudent = s;
      }
    });
  } */
  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent() {
    this.studentService.getAllData().subscribe((res) => {
      console.log(res, 'resuts');
      this.students = res.data;
    });
  }

  @ViewChild('myModalClose') modalClose:any;

  closeModel() {
    this.modalClose.nativeElement.click();
  }

/*   exportGrid(e:any) {
    // const workbook = new Workbook();
   // const worksheet = workbook.addWorksheet('Students');
    exportDataGrid({
      worksheet: worksheet,
      component: e.component
    }).then(function () {
      workbook.xlsx.writeBuffer().then(function (buffer: BlobPart) {
      //  saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Students.xlsx");
      });
    });
    e.cancel = true;
  } */

}
