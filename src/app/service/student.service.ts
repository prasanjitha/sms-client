import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}
//connect frontend to backend

apiUrl='http://localhost:3000/student';
//get all data
getAllData():Observable<any>{
  return this._http.get(`${this.apiUrl}`);
}
//create student
createStudent(data:any):Observable<any>{
  console.log(data,'created student !');
  return this._http.post(`${this.apiUrl}`,data);
}

//delete student
deleteStudent(id:any):Observable<any>{
  let ids=id;
  return this._http.delete(`${this.apiUrl}/${ids}`)
}

// update student

updateStudentData(data:any,id:any){
  let ids=id;
  return this._http.put(`${this.apiUrl}/${ids}`,data);
}

// get single student

getSingleStudent(id:any):Observable<any>{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

}
