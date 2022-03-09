import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from 
'@angular/forms';

@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
   requiredForm: FormGroup;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }

   myForm() {
      this.requiredForm = this.fb.group({
      email: ['', [Validators.required, 
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
      });
   }

   ngOnInit()
   {

   }
}