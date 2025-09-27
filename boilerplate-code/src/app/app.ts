import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeRoutingModule } from './components/home/home-routing-module';
import { AboutRoutingModule } from './components/about/about-routing-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeRoutingModule, AboutRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('boilerplate-code');
}
