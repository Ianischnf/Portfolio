import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acceuil } from "./pages/acceuil/acceuil";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
