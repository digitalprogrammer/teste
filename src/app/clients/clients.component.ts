import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Client } from '../client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients;
  selectedClient;
  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clients = this.db.getClients();
  }
  onSelect(client) {
    this.selectedClient = client;
  }

  onDeleteClient(index) {
    this.onDeleteClient(index);
  }

  createClient(client) {
    this.createClient(client);
  }
}
