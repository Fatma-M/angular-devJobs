import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrl: './add-new-job.component.css',
})
export class AddNewJobComponent implements OnInit {
  addNew!: FormGroup;
  requirements!: FormGroup;
  roles!: FormGroup;

  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.requirements = new FormGroup({
      content: new FormControl(['']),
      items: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
      ]),
    });

    this.roles = new FormGroup({
      content: new FormControl(['']),
      items: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
      ]),
    });

    this.addNew = new FormGroup({
      company: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      logoBackground: new FormControl('', Validators.required),
      postedAt: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      contract: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      requirements: this.requirements,
      role: this.roles,
    });
  }

  get requirementsItems(): FormArray {
    return this.requirements.get('items') as FormArray;
  }

  get roleItems(): FormArray {
    return this.roles.get('items') as FormArray;
  }

  onSubmit() {
    this._dataService.addData(this.addNew.value).subscribe();
    this.router.navigate(['/']);
  }
}
