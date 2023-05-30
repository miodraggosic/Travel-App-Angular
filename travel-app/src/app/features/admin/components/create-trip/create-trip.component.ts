import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { TripsService } from 'src/app/features/trips/services/trips.service';
import { Country } from 'src/app/models/interfaces/country.interface';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
})
export class CreateTripComponent implements OnInit {
  public countries: Country[] = [];
  public createTrip!: FormGroup;
  public minDate!: Date;
  public maxDate!: Date;

  constructor(private tripsService: TripsService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 0, 11, 31);
  }

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
  }
  public onSubmit() {
    console.log(this.createTrip.value);

    this.tripsService.addTrip(this.createTrip.value).pipe(take(1)).subscribe();
  }

  private getCountries(): void {
    this.tripsService
      .getCountries()
      .pipe(take(1))
      .subscribe((data) => (this.countries = data));
  }
  private validators = {
    title: [
      Validators.required,
      Validators.pattern(/^[A-Z][A-z]+[\s\D]{0,50}$/),
    ],
    url: [
      Validators.required,
      Validators.pattern(
        /^(http(s)?)(\:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
      ),
    ],
    price: [Validators.required, Validators.pattern(/^\d{2,4}$/)],
    description: [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]+[\s\w\W]+$/),
    ],
    date: [Validators.required],
    country: [Validators.required],
  };

  private createForm() {
    this.createTrip = new FormGroup({
      title: new FormControl('', this.validators.title),
      imageUrl: new FormControl('', this.validators.url),
      price: new FormControl('', this.validators.price),
      description: new FormControl('', this.validators.description),
      fromDate: new FormControl(new Date(), this.validators.date),
      toDate: new FormControl('', this.validators.date),
      countryId: new FormControl('', this.validators.country),
    });
  }
}
