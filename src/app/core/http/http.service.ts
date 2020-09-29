import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {TYPES} from './request.types';

@Injectable({
    providedIn: 'root'
  })
export class HttpService {

    private API_SERVER = 'http://localhost:8080';

    constructor(private httpClient: HttpClient) {

    }

    sendRequest(type: string, url: string) {
        switch (type) {
            case TYPES.GET:
                return this.httpClient.get(url);

        }
    }

}
