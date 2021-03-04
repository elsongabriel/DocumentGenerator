import {Component, Inject, Injectable} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

export interface config {
    type?: 'default' | 'success' | 'danger' | 'warning' | 'info';
    duration?: number;
    icon?: string;
    dismiss?: true | false;
}

@Injectable({
    providedIn: 'root'
})
export class NotifyService {
    constructor(private snackBar: MatSnackBar) {
    }

    public async show(message: string, config: config): Promise<any> {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {message, config},
            duration: config.duration || 4000
        });
    }

    public hideAll(): void {
        this.snackBar.dismiss();
    }
}

@Component({
    selector: 'app-snack-bar-component',
    template: `
        <div id="custom-snackbar" class="snackbar {{ type }}">
            <div class="icon"><i [class]="icon"></i></div>
            <div class="message">{{ message }}</div>
            <div class="action">
                <button type="button" class="btn-close" (click)="close()" *ngIf="dismiss">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `,
    styles: [`
        .snackbar {
            color: #fff;
            padding: 0.9rem 0.8rem;
            position: fixed;
            background-color: #272727;
            width: 100%;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
        }

        .snackbar.default {
            background-color: #272727;
            color: #fff;
        }

        .snackbar.success {
            background-color: #2e7d32;
            color: #fff;
        }

        .snackbar.danger {
            background-color: #b71c1c;
            color: #fff;
        }

        .snackbar.warning {
            background-color: #ffa000;
            color: #fff;
        }

        .snackbar.info {
            background-color: #00bcd4;
            color: #fff;
        }

        .snackbar .icon {
            font-size: 18px;
            padding-right: 0.8rem;
        }

        .snackbar .message {
            font-size: 16px;
            font-weight: 600;
            width: 100%;
        }

        .snackbar .action {
            margin-left: 0.5rem;
        }

        .snackbar .btn-close {
            background: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            color: inherit;
            font-size: 19px;
            padding: 0.4rem;
            cursor: pointer;
        }

        @media (max-width: 991px) {
            .snackbar {
                border-radius: 0;
            }
        }
    `]
})
export class SnackBarComponent {
    public message: string = '';
    public icon: string = '';
    public dismiss: boolean = true;
    public type: string = 'default';

    constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,
                @Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.message = data.message;
        this.icon = data.config.icon;
        this.dismiss = data.config.dismiss !== undefined ? data.config.dismiss : true;
        this.type = data.config.type;
    }

    public close(): void {
        this.snackBarRef.dismiss();
    }
}
