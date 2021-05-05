import { AfterViewInit, Component } from '@angular/core';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    this.makeScanHandler();
  }

  private async makeScanHandler() {
    //make infinite scans until error, just as example
    let scanResult = false;
    do {
      scanResult = await this.makeScan();
    } while (scanResult);
  }

  private makeScan(): Promise<boolean> {
    const opts: DocumentScannerOptions = {
      sourceType : 1,
      fileName : "image",
      quality : 3,
      returnBase64 : false
    };
    return DocumentScanner.scanDoc(opts)
      .then((res) => {
        console.log("res = ", res);
        return true;
      })
      .catch((error) => {
        console.log("catched");
        console.log(error);
        return false;
      });
  }
}
