import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { BaseFormPanelComponent } from 'src/app/common-controls//forms/base-form-panel/base-form-panel.component';

@Component({
  selector: 'app-client-info-panel',
  templateUrl: './client-info-panel.component.html',
  styleUrls: ['./client-info-panel.component.scss']
})
export class ClientInfoPanelComponent extends BaseFormPanelComponent implements OnInit {
  private _clientInfo: ClientInfoModel;

  @Input()
  public header: string;

  get clientInfo(): ClientInfoModel {
    return this._clientInfo;
  }

  @Input()
  set clientInfo(value: ClientInfoModel) {
    this._clientInfo = value;
  }

  @Input()
  public emailLabel = 'Email';

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'clientInfoPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
