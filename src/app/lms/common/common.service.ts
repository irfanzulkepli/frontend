import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public validationChecking(fieldName: string, errorName: string, formGroup: FormGroup, submitClicked: boolean) {
    if (formGroup.get(fieldName).getError(errorName) && submitClicked) {
      return true;
    }
    else {
      return false;
    }
  }

  public filter(value: string, dataList: Array<any>, fieldName: string): Array<any> {
    const filterValue = value.toLowerCase();
    return dataList.filter(data => (data[fieldName] as string).toLowerCase().includes(filterValue));
  }
}
