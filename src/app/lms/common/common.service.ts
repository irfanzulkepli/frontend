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

  public getInitials(name: string) {
    if (name) {
      const fullName = name.split(' ');

      let initials;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
    else {
      return 'AZ';
    }
  }

  public getInitials2(firstName: string, lastName: string) {
    return firstName.split(' ').shift().charAt(0).toUpperCase() + lastName.split(' ').pop().charAt(0).toUpperCase();
  }
}
