import { Component, signal } from '@angular/core';
import { SearchComponent } from './search/search';
import { DetailsComponent } from './details/details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, DetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
export class App {
  protected readonly title = signal('movie-finder');
}
