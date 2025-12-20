import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Navbar,
    HeroComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}







