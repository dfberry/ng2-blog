import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable() export class DataService {
    protected headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    };
    getItems(url:string) : Observable<Response> {
            return this._http.get(url)
                .map((response: Response) => {
                    return response.json();     
                }).catch(this.handleError);
    };
    handleError(error:any) {
        console.error("app.data.service::handleError - " + error);
        return Observable.throw(error);
    };
}
