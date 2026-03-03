import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieapiService } from '../movieapi-service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html'
})
export class SearchComponent {

  title = '';

  constructor(private movieService: MovieapiService) {}

  onSubmit() {
    this.movieService.getMovie(this.title);
  }
}