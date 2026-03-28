import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificat',
  imports: [],
  templateUrl: './certificat.html',
  styleUrl: './certificat.css',
})
export class Certificat {
  @Input() ImageCertificat : string = ''; 
  @Input() NomCertificat   : string = '';
  @Input() IconLink        : string = '';
  @Input() LinkCertificat  : string = '';
  @Input() Description     : string = '';
  @Input() Temps           : string = '';
}
