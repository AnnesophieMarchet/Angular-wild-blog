import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = "Bonjour c' est Anne-Sophie";

  isAdmin: boolean = false;

  onClickChangeAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
