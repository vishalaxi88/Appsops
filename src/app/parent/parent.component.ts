import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent  {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      Product_id: [''],
      Branch_id: [''],
      is_for_repeat_set_combo: [false]
    });
  }
 

  onSubmit() {
    const formData = this.form.value;
    this.http.post('http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId', formData)
      .subscribe(response => {
        console.log('Response:', response);
      });
  }
}
