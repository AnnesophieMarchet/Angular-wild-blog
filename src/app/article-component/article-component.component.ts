import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleService } from '../service/article.service';
@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  articleId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);
  @Input() article: any;

  private articleService: ArticleService = inject(ArticleService);
  // private articleService = inject(ArticleService);
  // constructor(private route: ActivatedRoute) {}

  // constructor(private articleService: ArticleService) {}

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     this.articleId = Number(params.get('id'));
  //     this.fetchArticle();
  //   });
  // }

  ngOnInit() {
    // Vérifier si l'article a été passé via @Input
    if (!this.article) {
      // Sinon, récupérer l'ID de l'URL
      this.route.paramMap.subscribe((params) => {
        this.articleId = Number(params.get('id'));
        if (this.articleId) {
          this.article = this.articleService.getArticleById(this.articleId);
        }
      });
    }
  }
}
