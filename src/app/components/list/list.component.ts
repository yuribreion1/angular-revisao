import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  // Tag usada no arquivo HTML
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private CrudService: CrudService) { }

  async ngOnInit() {
    const users = await this.CrudService.list();
    // tslint:disable-next-line: no-string-literal
    this.users = users['data'];
  }

}
