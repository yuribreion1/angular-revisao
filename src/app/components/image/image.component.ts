import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  // Passa o valor de um componente para outro, personaliza uma entrada de dados
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
