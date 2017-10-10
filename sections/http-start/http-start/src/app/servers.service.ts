import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ServersService {

    constructor(private http: Http) { }


    // funkcje put nadpisuje dane w firebase, podczas gdy sam post dodaje dane
    storeServers(servers: any[]) {
        // opcjonalnie mozna zmienić nagłówki w obiekcie
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://udemy-http-7dc3f.firebaseio.com/data.json',
        servers,
        {headers: headers}
        );
    }


    // po dodaniu metody catch mozna wpisac tres komunikatu w konsoli albo wpisac tam po prostu
    // error zeby wyswietlic błąd
    getServers() {
        return this.http.get('https://udemy-http-7dc3f.firebaseio.com/')
        .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong...');
            }
        );
    }
}
