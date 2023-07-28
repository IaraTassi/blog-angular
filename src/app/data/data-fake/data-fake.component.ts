import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-fake',
  templateUrl: './data-fake.component.html',
  styleUrls: ['./data-fake.component.css']
})
export class DataFakeComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
    
  }

}
export const dataFake = [
  {
    "id": "1",
    "title": "A Evolução da Tecnologia",
    "description": "A evolução da tecnologia é constante. Desde que a humanidade existe, as pessoas pensam em melhorar suas condições de vida e facilitar tarefas de rotina. Se na década de 80 não se imaginava acessar a internet, nos anos 2000 isso com certeza se tornou uma realidade.",
    "photoCover": "https://img.freepik.com/vetores-gratis/tecnologia-de-rede-futurista-azul_53876-100679.jpg?w=996&t=st=1690463174~exp=1690463774~hmac=884e6be1ab4057907b5d2a4593303b19417de87979873499db974fcf84e952ac"
  },
  {
    "id": "2",
    "title": "pçojopjp",
    "description": "jgg",
    "photoCover": ""
  }
]
