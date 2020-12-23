import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
export class Firewall{
  constructor(
    public FirewallID:string,
    public TaskName:string,
    public Status:string,
    public Priority:string,
    public CreatedBy: string,
    public UpdatedOn: string,
    public Comments: object
  ) {}
}
*/
@Injectable({
  providedIn: 'root'
})
export class FirewallService {
  baseUri:string = 'http://localhost:5000/api/automation/ideas';

  // httpOptions = new HttpHeaders()
  // .set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
  httpOptions = {
    headers: new HttpHeaders({"Accept": "application/json"}).set('Access-Control-Allow-Origin', '*')
   }
   

private listOfFirewalls: any = [
];

  // private baseUrl = '/api/automation/ideas';
  constructor(private http: HttpClient) {    
   }

   getAllFirewalls(){
    let responeData = [
      {
          "email": "hanumesh.palla@aricent.com",
          "id": "32f5b1bce7c3482faf6aed8c04abb9be",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "idea testname",
          "updatedOn": "14/12/2020 11:01:56"
      },
      {
          "email": "sarthak.gambhir@aricent.com",
          "id": "4137e06e95904813907b7ee6bd5670fd",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "idea 2 testname",
          "updatedOn": "14/12/2020 11:01:56"
      },
      {
          "email": "sarthak.gambhir@aricent.com",
          "id": "8d4b8c629f4c4d87ac8051897a22206c",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "idea 2 testname3",
          "updatedOn": "14/12/2020 11:01:56"
      },
      {
          "email": "sarthak.gambhir@aricent.com",
          "id": "ec2dd2abd9c64c7d9e48b396ecaa9af9",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "idea 2 testname7",
          "updatedOn": "14/12/2020 11:01:56"
      },
      {
          "email": "hanum786@gmail.com",
          "id": "53dfe778e85243448d6802dae32080ba",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "sdsfdsfsdfsdf",
          "updatedOn": "23/12/2020 16:24:19"
      },
      {
          "email": "hanum786@gmail.com",
          "id": "cbee62c02bb64304ad8d6ddfc391318b",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "sadasdasd",
          "updatedOn": "23/12/2020 16:27:50"
      },
      {
          "email": "hanum786@gmail.com",
          "id": "68ea07e593eb48eda99ddad00a948115",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "fasdfsdfsdaf",
          "updatedOn": "23/12/2020 16:29:15"
      },
      {
          "email": "hanum786@gmail.com",
          "id": "4ad8762a76304107bc94c1851372302e",
          "priority": "2: Medium",
          "status": "planned",
          "taskname": "asdasdasdasdd",
          "updatedOn": "23/12/2020 16:30:27"
      }
  ]
   return responeData;
   }

   // Create Service
   createFD(fdData: any): Observable<any> {
    let urlReg = this.baseUri + '/new';
    return this.http.post(urlReg, fdData)
      
  }

//    createFD_bkup(fdData: any): Observable<any>{
//     console.log("Inside createFD() method");
//     // alert("Inside createFD() method");
//     let urlFD = this.baseUri+'/new';
//     // return this.http.post(urlFD, fdData, this.httpOptions).pipe(
//     //    catchError(this.errorHandler));
//     // oEtJNThI0zVD4Ph2mCHZ
//     // console.log("createFD: "+localStorage.getItem('sessionID'));
//     return this.http.post(urlFD, fdData).pipe(
//        catchError(this.errorHandler));
//  }

 errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = error;
  }
  return throwError(errorMessage);
}
}
