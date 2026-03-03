import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieapiService } from '../movieapi-service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html'
})
export class DetailsComponent {
  constructor(public movieService: MovieapiService) {}
}