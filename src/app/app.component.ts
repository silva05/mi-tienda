import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[]  = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://home.ripley.com.pe/Attachment/WOP_5/2032266959820/2032266959820-10.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://static.platzi.com/media/user_upload/bike-e2801da8-419d-49b2-a8a2-c0bfd6bbfeda.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://static.platzi.com/media/user_upload/books-8b3184ea-c445-4707-841f-2b9725ba48ce.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://static.platzi.com/media/user_upload/album-bd4ad097-e63f-4438-b064-6db9d74b3a0b.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://static.platzi.com/media/user_upload/house-a42e262e-ba79-47de-8239-3eda37e198fe.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://static.platzi.com/media/user_upload/glasses-657d9ca0-258e-4d6d-ba49-1a933caaeee9.jpg'
    }
  ]
  widthImg=20
}
