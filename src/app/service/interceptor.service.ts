import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    token: string;
    constructor(private _loading: LoadingService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loading.isLoading.next(true)
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            }),
            finalize(() => {
                this._loading.isLoading.next(false)
            })
        );

    }
}