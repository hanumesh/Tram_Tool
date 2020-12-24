import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
  baseUri: string = 'http://localhost:5000/api/automation/ideas';

  // httpOptions = new HttpHeaders()
  // .set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
  httpOptions = {
    headers: new HttpHeaders({ "Accept": "application/json" }).set('Access-Control-Allow-Origin', '*')
  }


  private listOfFirewalls: any = [
  ];

  // private baseUrl = '/api/automation/ideas';
  constructor(private http: HttpClient) {
  }

  getAllFirewalls(): any {
    let urlReg = this.baseUri;
    return this.http.get(urlReg).pipe((getResponse) => {
      console.log("getResponse: " + getResponse);
      return getResponse;
    })
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
