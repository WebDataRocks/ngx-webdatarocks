import { Component, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as WebDataRocks from '@webdatarocks/webdatarocks';

@Component({
  selector: 'app-wbr-pivot',
  template: '<div><div class="wbr-ng-wrapper"></div></div>',
})
export class WebdatarocksComponent { // implements OnInit
  // params
  @Input() toolbar: boolean;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() report: WebDataRocks.Report | string;
  @Input() global: WebDataRocks.Report;
  @Input() customizeCell: (cell: WebDataRocks.CellBuilder, data: WebDataRocks.CellData) => void;
  // events
  @Output() cellclick: EventEmitter<WebDataRocks.CellData> = new EventEmitter();
  @Output() celldoubleclick: EventEmitter<WebDataRocks.CellData> = new EventEmitter();
  @Output() dataerror: EventEmitter<object> = new EventEmitter();
  @Output() datafilecancelled: EventEmitter<void> = new EventEmitter();
  @Output() dataloaded: EventEmitter<void> = new EventEmitter();
  @Output() datachanged: EventEmitter<object> = new EventEmitter();
  @Output() fieldslistclose: EventEmitter<void> = new EventEmitter();
  @Output() fieldslistopen: EventEmitter<void> = new EventEmitter();
  @Output() filteropen: EventEmitter<void> = new EventEmitter();
  @Output() fullscreen: EventEmitter<void> = new EventEmitter();
  @Output() loadingdata: EventEmitter<void> = new EventEmitter();
  @Output() loadinglocalization: EventEmitter<void> = new EventEmitter();
  @Output() loadingreportfile: EventEmitter<void> = new EventEmitter();
  @Output() localizationerror: EventEmitter<void> = new EventEmitter();
  @Output() localizationloaded: EventEmitter<void> = new EventEmitter();
  @Output() openingreportfile: EventEmitter<void> = new EventEmitter();
  @Output() querycomplete: EventEmitter<void> = new EventEmitter();
  @Output() queryerror: EventEmitter<void> = new EventEmitter();
  @Output() ready: EventEmitter<WebDataRocks.Pivot> = new EventEmitter();
  @Output() reportchange: EventEmitter<void> = new EventEmitter();
  @Output() reportcomplete: EventEmitter<void> = new EventEmitter();
  @Output() reportfilecancelled: EventEmitter<void> = new EventEmitter();
  @Output() reportfileerror: EventEmitter<void> = new EventEmitter();
  @Output() reportfileloaded: EventEmitter<void> = new EventEmitter();
  @Output() runningquery: EventEmitter<void> = new EventEmitter();
  @Output() update: EventEmitter<void> = new EventEmitter();
  @Output() beforetoolbarcreated: EventEmitter<object> = new EventEmitter();
  @Output() aftergriddraw: EventEmitter<object> = new EventEmitter();
  @Output() beforegriddraw: EventEmitter<object> = new EventEmitter();
  @Output() exportcomplete: EventEmitter<void> = new EventEmitter();
  @Output() exportstart: EventEmitter<void> = new EventEmitter();
  @Output() filterclose: EventEmitter<void> = new EventEmitter();
  @Output() loadingolapstructure: EventEmitter<void> = new EventEmitter();
  @Output() printcomplete: EventEmitter<void> = new EventEmitter();
  @Output() printstart: EventEmitter<void> = new EventEmitter();

  // api
  public webDataRocks: WebDataRocks.Pivot;
  // private
  private root: HTMLElement;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.root = this.el.nativeElement as HTMLElement;
    this.webDataRocks = new window.WebDataRocks({
      container: this.root.getElementsByClassName('wbr-ng-wrapper')[0],
      width: this.width,
      height: this.height,
      toolbar: this.toolbar,
      report: this.report,
      global: this.global,
      customizeCell: this.customizeCell,
      cellclick: (cell: WebDataRocks.CellData) => this.cellclick.next(cell),
      celldoubleclick: (cell: WebDataRocks.CellData) => this.celldoubleclick.next(cell),
      dataerror: (event: object) => this.dataerror.next(event),
      datafilecancelled: () => this.datafilecancelled.next(),
      dataloaded: () => this.dataloaded.next(),
      datachanged: (event: object) => this.datachanged.next(event),
      fieldslistclose: () => this.fieldslistclose.next(),
      fieldslistopen: () => this.fieldslistopen.next(),
      filteropen: () => this.filteropen.next(),
      loadingdata: () => this.loadingdata.next(),
      loadinglocalization: () => this.loadinglocalization.next(),
      loadingreportfile: () => this.loadingreportfile.next(),
      localizationerror: () => this.localizationerror.next(),
      localizationloaded: () => this.localizationloaded.next(),
      openingreportfile: () => this.openingreportfile.next(),
      querycomplete: () => this.querycomplete.next(),
      queryerror: () => this.queryerror.next(),
      ready: () => this.ready.next(this.webDataRocks),
      reportchange: () => this.reportchange.next(),
      reportcomplete: () => this.reportcomplete.next(),
      reportfilecancelled: () => this.reportfilecancelled.next(),
      reportfileerror: () => this.reportfileerror.next(),
      reportfileloaded: () => this.reportfileloaded.next(),
      runningquery: () => this.runningquery.next(),
      update: () => this.update.next(),
      beforetoolbarcreated: (toolbar: object) => this.beforetoolbarcreated.next(toolbar),
      aftergriddraw: (event: object) => this.aftergriddraw.next(event),
      beforegriddraw: (event: object) => this.beforegriddraw.next(event),
      exportcomplete: () => this.exportcomplete.next(),
      exportstart: () => this.exportstart.next(),
      filterclose: () => this.filterclose.next(),
      loadingolapstructure: () => this.loadingolapstructure.next(),
      printcomplete: () => this.printcomplete.next(),
      printstart: () => this.printstart.next(),
    });
  }
}