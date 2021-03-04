import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public files: any[] = [];

    constructor() {
    }

    public getFiles(): any[] {
        return this.files;
    }

    public setFiles(files: any[]) {
        this.files = files;
    }
}
