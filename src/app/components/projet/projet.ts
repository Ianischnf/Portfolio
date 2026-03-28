import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projet',
  imports: [],
  standalone: true,
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {

  @Input() ImageProjet: string = '';
  @Input() NomProjet: string = '';
  @Input() StackProjet: string = '';
  @Input() DescriptionProjet: string = '';
  @Input() UrlGithub: string = '';
  @Input() UrlPorjet: string = '';
  @Input() IconGithub: string = '';
  @Input() IconLien: string = '';

}
