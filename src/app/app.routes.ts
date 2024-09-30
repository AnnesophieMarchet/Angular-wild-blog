import { Routes } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';

import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Route pour la page d'accueil
  { path: 'contact', component: ContactComponent }, // Route pour la page contact
  { path: 'article/:id', component: ArticleComponentComponent },
  { path: '**', component: NotFoundComponent }, // Route dynamique pour afficher les détails d'un article
];
