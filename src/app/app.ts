import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { Services } from './components/services/services';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Navbar,
    HeroComponent,
    Services
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}







