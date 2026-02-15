import { Component } from '@angular/core';
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [Menu],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {

}
