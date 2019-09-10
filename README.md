# Revisão para NAC - Fiap

- Criação do projeto

> `ng n <nome-projeto>`

- Criação do componente

> `ng g c <nome-componente>`

- Criamos um arquivo dentro de app chamado *index.ts*, dentro deste arquivo vamos exportar os componentes:

``` javascript
export * from './list/list.component';
export * from './user/user.component';
```

- O arquivo *app.component.html* deixamos somente o `<router-outlet>`

- Criamos um *service* usando o comando:

> `ng g s CrudService`

Dentro do `crud.service.ts` trabalhamos da seguinte maneira: 

``` javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {  }

   // Lista os usuários
   async list() {
    return await this.http.get(this.url).toPromise();
  }
}
```

1 - Atribuimos o _endpoint_ que será usado como API
2 - Criamos uma função para fazer a listagem
