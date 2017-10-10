import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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

    getServers() {
        return this.http.get('https://udemy-http-7dc3f.firebaseio.com/data.json');
    }
}
