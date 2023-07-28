import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data-fake/data-fake.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  photoCover: string = "https://img.freepik.com/fotos-gratis/mulher-de-negocios-analisando-graficos-de-taxas-no-computador-e-arquivos-para-planejar-o-projeto-e-a-estrategia-funcionario-usando-informacoes-no-monitor-e-documentos-para-projetar-a-apresentacao-de-marketing-na-mesa_482257-27381.jpg?w=1380&t=st=1690484841~exp=1690485441~hmac=651cae7b1bf5b44eb7cf05e839d8b5c135dd9a8c54f519c6238aba1383719c9f "
  contentTitle: string = "Analista de Teste QA "
  contentDescription: string = "O QA é uma maneira de alinhar a posição do seu negócio com as expectativas do cliente, garantindo que tudo esteja dentro do padrão de qualidade. Com isso, o Quality Assurance assume um importante papel de acompanhar e assegurar o cumprimento de etapas, assim como sua execução. "

  private id: string | null = "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
     
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
