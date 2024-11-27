import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  feedbackForm: FormGroup;
  showThankYouMessage: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted', this.feedbackForm.value);
      this.showThankYouMessage = true; 
      this.feedbackForm.reset(); 
      setTimeout(() => {
        this.showThankYouMessage = false;
      }, 5000);
    }
  }
}
