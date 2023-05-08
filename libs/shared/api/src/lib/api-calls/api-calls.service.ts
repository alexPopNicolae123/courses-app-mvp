import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiCallsService {

    constructor(private http: HttpClient) {
    }

    getTest(): Observable<any> {

        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        // return of('observable string')
    }
}
