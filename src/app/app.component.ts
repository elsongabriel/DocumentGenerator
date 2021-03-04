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
    }

    public onFilesAdded(event) {
        this.files.push(...event.addedFiles);
        this.files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent) => {
                let content = (e.target as FileReader).result;
                content = `${content}`;
                // this.filesUploaded.push(content.split(',')[1]);
                this.filesUploaded.push(content);
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
    }

    public removeImg(event) {
        if (confirm('Você deseja realmente remover esta imagem?')) {
            this.files.splice(this.files.indexOf(event), 1);
        }
    }

    public print() {
        setTimeout(() => window.print(), 1000);
    }

    public back() {
        this.files = [];
        this.filesUploaded = [];
        this.generated = false;
    }

    public calc() {
        // const val = this.filesUploaded.length / 4;
        // return 'width:18%; height: 20%'
        return `width: calc(calc(100% / ${this.filesUploaded.length }) - 1rem); height: 20%`;
    }
}
