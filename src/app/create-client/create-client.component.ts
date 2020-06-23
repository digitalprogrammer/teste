import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //send to the service TODO
  client = {
    cpf: null,
    nome: null,
    sexo: null,
    dat_nasc: null,
    email: null,
    phone: null,
  };
}
