import { Component, Input } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Projet } from "../../components/projet/projet";
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-projets',
  imports: [Menu, Projet, NgFor],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {

  Projets = [

    {
      ImageProjet: "assets/coiffeur_manage.png",
      NomProjet: "Gestion rendez-vous",
      DescriptionProjet: "Application gestion de rendez-vous pour coiffeur",
      StackProjet: "Stack : Angular | Java Spring Boot",
      IconGithub: "assets/sociale.png",
      IconLien: "assets/lien.png",
      UrlGithub : "https://github.com/Ianischnf/Coiffeur_manage_front.git",
      UrlProjet : ''
    },
    {
      ImageProjet: "assets/product.png",
      NomProjet: "Liste de produits et gestion de panier",
      DescriptionProjet: "Application gestion de panier",
      StackProjet: "Stack : React",
      IconGithub: "assets/sociale.png",
      IconLien: "assets/lien.png",
      UrlGithub : "https://github.com/Ianischnf/ListProductsCard.git",
      UrlProjet : ''
    },
    {
      ImageProjet: "assets/ext1.png",
      NomProjet: "Gestion extension navigateur",
      DescriptionProjet: "Activer/Désactiver extension et filtrer l'affichage selon leur état",
      StackProjet: "Stack : React",
      IconGithub: "assets/sociale.png",
      IconLien: "assets/lien.png",
      UrlGithub : "https://github.com/Ianischnf/Browser_extensions.git",
      UrlProjet : ''
    },
    {
      ImageProjet: "assets/Meteo.png",
      NomProjet: "Météo",
      DescriptionProjet: "Application météo",
      StackProjet: "Stack : HTML / CSS / JavaScript",
      IconGithub: "assets/sociale.png",
      IconLien: "assets/lien.png",
      UrlGithub : "https://github.com/Ianischnf/Meteo_App.git",
      UrlProjet : ''
    }
  ]
}
