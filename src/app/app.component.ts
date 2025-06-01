import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftLongDescriptionComponent } from "./landing-page/left-long-description/left-long-description.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prateekPortfolio';
}
