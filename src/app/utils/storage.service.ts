import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public storage: any = {};

    constructor() {
    }

    public getFiles(field: string): any {
        return this.storage[field];
    }

    public setFiles(field: string, values: any) {
        this.storage[field] = values;
    }

    public getLocalStorage(field: string) {
        const storage = window.localStorage.getItem(field);
        return storage ? JSON.parse(storage) : [];
    }

    public setLocalStorage(field: string, values: any) {
        window.localStorage.setItem(field, JSON.stringify(values));
    }
}
