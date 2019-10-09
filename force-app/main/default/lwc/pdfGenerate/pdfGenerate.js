import { LightningElement, wire } from "lwc";
import fetchAttachment from "@salesforce/apex/FileUploader.fetchAttachment";

export default class PdfGenerate extends LightningElement {
  pdfData;

  @wire(fetchAttachment)
  wiredAttachment({ error, data }) {
    if (data) {
      this.pdfData = data;
      this.onLoad();
    } else if (error) {
      console.log(error);
    }
  }

  onLoad() {
    this.template
      .querySelector("iframe")
      .contentWindow.postMessage(this.pdfData, "*");
  }
}
