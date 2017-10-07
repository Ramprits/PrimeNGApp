import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor() {
        this._apiURI = 'https://localhost:44366/api';
    }

    getApiURI() {
        return this._apiURI;
    }
}
