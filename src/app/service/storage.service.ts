import { SQLiteService } from './sqlite.service';
import { DetailService } from './detail.service';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorageService {
    // db: SQLiteDBConnection;
    tokenSource: BehaviorSubject<any>;
    tokenData: Observable<any>;
    constructor(
        private nativeStorage: NativeStorage
    ) {
      this.getItem('token').then(res => {
        this.tokenSource = new BehaviorSubject(res);
        this.tokenData = this.tokenSource.asObservable();
      })
    }


    get tokenSourceValue() {
      return this.tokenSource.value;
  }

  //   async initializeApp() {
  //       this.detail.setExistingConnection(false);
  //       this.detail.setExportJson(false);
  //       this.platform.backButton.subscribeWithPriority(666666, () => {
  //           App.exitApp();
  //       });

  //       this.sqlite.initializePlugin().then(async (ret) => {
  //           console.log('Plugin Initialized');
  //       });
  //   }

  //   async createConnection() {
  //     await this.sqlite.initializePlugin().then(async (ret) => {
  //       try {
  //           // this.sqlite.closeAllConnections().then(async () => {
  //               this.db = await this.sqlite.createConnection(
  //                   'pic_playce',
  //                   false,
  //                   'no-encryption',
  //                   1
  //               );
  //               console.log('connection DB  created');
  //               await this.db.open();
  //               console.log(`after db.open`);
  //               let query = `
  //           CREATE TABLE IF NOT EXISTS picplayce (
  //             id INTEGER PRIMARY KEY NOT NULL,
  //             key TEXT NOT NULL,
  //             value TEXT NOT NULL
  //           );`;

  //               const res: any = await this.db.execute(query);
  //           // });
  //       } catch (err) {
  //           console.error(`Error: ${err}`);
  //       }
  //   });
  // }

  //   async insertQuery(key, value) {
  //    await  this.createConnection().then(async (result) => {
  //       console.log('this.db', this.db);
  //       let query = `INSERT INTO picplayce (key,value) VALUES('${key}','${value}')`;
  //       await this.db.execute(query).then(() => {
  //           this.db.close();
  //           this.sqlite.closeAllConnections();
  //       });
  //   });
  //   }

  //   getQuery(key) {
  //       return this.createConnection().then( (result) => {
  //           console.log('this.db', this.db);
  //           let query = `SELECT key,value FROM picplayce WHERE key = '${key}'`;
  //           this.db.query(query).then((res) => {
  //               console.log('Query Result',res);
                
  //               this.db.close();
  //               this.sqlite.closeAllConnections();
  //           });
  //       });
  //   }

  setItem(key,value){

    this.nativeStorage.setItem(key, value)
    .then(
      () => {
      },
      error => console.error('Error storing item', error)
    );
  }


  remove(){
    this.nativeStorage.clear();
    this.tokenSource.next(false);
  }

  getItem(key){
    return this.nativeStorage.getItem(key)
  .then(
    data => {
      console.log('Item Retrieved',data);
      
      return data},
    error => {return false}
  );
  }
}
