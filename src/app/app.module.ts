import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [AppComponent, ClientsComponent, ClientComponent, UpdateClientComponent, CreateClientComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
