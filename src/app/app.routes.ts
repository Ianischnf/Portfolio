import { Routes } from '@angular/router';
import { Acceuil } from './pages/acceuil/acceuil';
import { Projets } from './pages/projets/projets';
import { Certificats } from './pages/certificats/certificats';
import { Contact } from './pages/contact/contact';



export const routes: Routes = [
    {path: '', component: Acceuil },
    {path: 'acceuil', component: Acceuil },
    {path: 'projets', component: Projets },
    {path: 'certificats', component: Certificats },
    {path: 'contact', component: Contact }
];
