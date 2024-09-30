import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles = [
    {
      id: 1,
      title: 'Article 1',
      author: 'Author 1',
      content: 'Content of Article 1',
      image: 'link_to_image_1',
      likes: 100,
    },
    {
      id: 2,
      title: 'Article 2',
      author: 'Author 2',
      content: 'Content of Article 2',
      image: 'link_to_image_2',
      likes: 150,
    },
    // Ajoute d'autres articles ici
  ];

  getArticleById(id: number) {
    return this.articles.find((article) => article.id === id) || null;
  }
}
