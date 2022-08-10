import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { from } from "rxjs";
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    token: string;
    constructor(private _loading: LoadingService,private db:StorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handle(req, next));
    }

    async handle(req: HttpRequest<any>, next: HttpHandler){
        this._loading.isLoading.next(true)
        await this.getAccessToken().then((res:any) => {
            console.log('Access TOken',res);
            
            if(res.length){
                req = req.clone({
                    setHeaders: {
                        'x-access-token': `${res}`
                    }
                });
            }
            
        }).catch((err)=>{
            console.log('Access Catch',err);
        });
        return await (next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log('INtercetop Error',error.message);
                this._loading.isLoading.next(false)
                return throwError(error);
            }),
            finalize(() => {
                this._loading.isLoading.next(false)
            })
        )).toPromise();
        // return ;

    }

    async getAccessToken(){
        
        const token =  await this.db.getItem('token');
        console.log('TOken Method',token);
        return token;
    }
}