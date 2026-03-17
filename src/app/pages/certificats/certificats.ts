import { Component } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Certificat } from "../../components/certificat/certificat";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificats',
  imports: [Menu, Certificat, CommonModule],
  templateUrl: './certificats.html',
  styleUrl: './certificats.css',
})
export class Certificats {

  certificats = [

    {
      ImageCertificat : "assets/certificat_js.jpg",
      NomCertificat : "JavaScript",
      IconLink : "assets/lien.png",
      LinkCertificat : "https://www.udemy.com/certificate/UC-4c25a988-2b98-4f24-a4c7-909b8104de9a/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      Description : "Certificat fin de formation udemy sur JavaScript",
      Temps : "Durée : 150 heures"
    },
    {
      ImageCertificat : "assets/certificat_figma.jpg",
      NomCertificat : "Figma",
      IconLink : "assets/lien.png",
      LinkCertificat : "https://www.udemy.com/certificate/UC-655ada69-84a0-4542-a294-4c5df083f71a/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      Description : "Certificat fin de formation udemy sur Figma",
      Temps : "Durée : 14 heures"
    },
  ]
}
