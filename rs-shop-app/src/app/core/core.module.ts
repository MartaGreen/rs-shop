import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './header/info/info.component';
import { LocationComponent } from './header/info/location/location.component';
import { ContactsComponent } from './header/info/contacts/contacts.component';
import { TimeComponent } from './header/info/time/time.component';
import { LocationService } from './header/services/location.service';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    LocationComponent,
    ContactsComponent,
    TimeComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: [LocationService],
})
export class CoreModule {}
