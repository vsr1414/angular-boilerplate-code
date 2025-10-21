import { Routes } from '@angular/router';
import { CarsComponent } from '../signals/cars/cars.component';
import { BikesComponent } from '../signals/bikes/bikes.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'cars', pathMatch: 'full' },
	{ path: 'cars', component: CarsComponent },
	{ path: 'bikes', component: BikesComponent }
];
