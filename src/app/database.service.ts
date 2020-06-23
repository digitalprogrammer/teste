import { Injectable } from '@angular/core';
import { clients } from './../db/db';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  getClients() {
    return clients;
  }

  addClient(client) {
    this.getClients().push(client);
  }

  deleteClient(index) {
    this.getClients().splice(index, 0);
  }

  createClient(client) {
    this.getClients().push(client);
  }
}
