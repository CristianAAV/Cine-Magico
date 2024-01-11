import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Director } from '../director';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-create',
  templateUrl: './director-create.component.html',
  styleUrls: ['./director-create.component.css'],
})
export class DirectorCreateComponent implements OnInit {
  directorForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private directorService: DirectorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.directorForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      photo: ['', Validators.required],
      nationality: ['', [Validators.required, Validators.maxLength(100)]],
      birthDate: [new Date().toISOString(), Validators.required],
      biography: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  createDirector(director: Director) {
    director.birthDate = new Date(director.birthDate).toISOString();
    this.directorService.createDirector(director).subscribe(directorNew=>{
      console.info('The director was created: ', directorNew);
      this.toastr.success('Confirmation', 'Director created');
      this.directorForm.reset();
      this.router.navigate([`/directors/${directorNew.id}`])
    });
  }

  cancelCreation() {
    this.directorForm.reset();
  }

  getMaxDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10); // Format: YYYY-MM-DD
  }

}
