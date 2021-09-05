import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './header/info/contacts/contacts.component';
import { InfoComponent } from './header/info/info.component';
import { LocationComponent } from './header/info/location/location.component';
import { TimeComponent } from './header/info/time/time.component';
import { NavComponent } from './header/nav/nav.component';
import { SearchFieldComponent } from './header/nav/search-field/search-field.component';
import { LocationService } from './header/services/location.service';
import { SearchService } from './header/services/search.service';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    LocationComponent,
    ContactsComponent,
    TimeComponent,
    NavComponent,
    SearchFieldComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: [LocationService, SearchService],
})
export class CoreModule {}
