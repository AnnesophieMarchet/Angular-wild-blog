import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, RouterLink, FormsModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  articleId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);

  // constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }
}
