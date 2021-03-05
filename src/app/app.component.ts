import {Component, OnInit} from '@angular/core';
import {showdown} from './utils/animations/animations.helpers';
import {NotifyService} from './utils/notify.service';
import {StorageService} from './utils/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [showdown]
})
export class AppComponent implements OnInit {

    public files = [];
    public filesUploaded = [];
    public generated = false;

    constructor(private notify: NotifyService, private storage: StorageService) {
    }

    ngOnInit() {
        window.addEventListener('afterprint', function(event) {
            // window.close();
        });

        this.filesUploaded = this.storage.getLocalStorage('filesUploaded');
        for (const fileUp of this.filesUploaded) {
            this.files.push(this.dataURLtoFile(fileUp));
        }
    }

    private dataURLtoFile(file: any) {
        var arr = file.image.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], file.name, {type: mime});
    }

    public onFilesAdded(event) {
        this.files.push(...event.addedFiles);
        this.files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent) => {
                let content = (e.target as FileReader).result;
                content = `${content}`;
                // this.filesUploaded.push(content.split(',')[1]);
                this.filesUploaded.push({image: content, name: file.name});
            };
            reader.readAsDataURL(file);
        });
    }

    public generate() {
        if (this.files.length == 0) {
            this.notify.show('Adicione ao menos uma imagem!', {type: 'danger'});
            return;
        }
        this.generated = true;
        this.storage.setFiles('files', this.files);
        this.storage.setFiles('filesUploaded', this.filesUploaded);
    }

    public removeImg(event) {
        if (confirm('Você deseja realmente remover esta imagem?')) {
            this.files.splice(this.files.indexOf(event), 1);
        }
    }

    public print() {
        setTimeout(() => window.print(), 1000);
        this.storage.setLocalStorage('filesUploaded', this.filesUploaded);
    }

    public back(clear: boolean = false) {
        this.generated = false;
        if (!clear) {
            this.files = this.storage.getFiles('files');
            this.filesUploaded = this.storage.getFiles('filesUploaded');
        }
    }

    public clear() {
        this.files = [];
        this.filesUploaded = [];
        window.localStorage.clear();
        this.back(true);
    }

    public calc() {
        // const val = this.filesUploaded.length / 4;
        // return 'width:18%; height: 20%'
        return `width: calc(calc(100% / ${this.filesUploaded.length}) - 1rem); height: 20%`;
    }
}
