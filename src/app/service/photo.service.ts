import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() { }

  public async addNewToGallery(src) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: src,
      quality: 100,
      preserveAspectRatio: true
    }).then((res) => {
      return res
    }).catch(err => {
      console.log('Service err', err);
      return err
    }).finally(() => {
      console.log('Inside finally')
    })

    // console.log('===>', capturedPhoto);
    return capturedPhoto;
  }
}
