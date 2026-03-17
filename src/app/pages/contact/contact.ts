import { Component } from '@angular/core';
import { Formulaire } from '../../components/formulaire/formulaire';
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-contact',
  imports: [Formulaire, Menu],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
