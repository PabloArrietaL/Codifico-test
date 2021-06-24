import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() sendData: EventEmitter<Movie> = new EventEmitter();
  public movieForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.movieForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      genres: new FormControl('', [Validators.required])
    })
  }

  addValue(): void {
    if (this.movieForm.valid) {
      this.sendData.emit(this.movieForm.value);
      this.movieForm.reset();
    }
  }

}
