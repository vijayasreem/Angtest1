import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      income: ['', Validators.required],
      crifScore: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      return;
    }

    // Implement API call to fetch customer data using customer data fetch API

    // Auto populate customer data

    // Example code for API call
    // this.customerService.fetchCustomerData().subscribe(
    //   (data) => {
    //     // Auto populate customer data
    //   },
    //   (error) => {
    //     console.error('Error fetching customer data:', error);
    //   }
    // );
  }
}