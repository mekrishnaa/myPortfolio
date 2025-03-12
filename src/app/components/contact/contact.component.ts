import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit(): void {
    this.formSubmitted = true;
    
    if (this.contactForm.valid) {
      // In a real application, you would send the form data to a server
      console.log('Form submitted:', this.contactForm.value);
      
      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false;
      
      // Show success message (in a real app, you might use a toast or alert service)
      alert('Thank you for your message! I will get back to you soon.');
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
} 