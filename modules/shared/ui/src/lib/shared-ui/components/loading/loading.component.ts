import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
    selector: 'git-users-loading',
    standalone: false,
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent {
    public loading: Subject<boolean> = this.loadingService.isLoading;

    constructor(private loadingService: LoadingService) { }
}
