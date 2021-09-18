import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { CategoriesNavComponent } from './header/components/categories-nav/categories-nav.component';
import { ContactsComponent } from './header/components/contacts/contacts.component';
import { InfoComponent } from './header/components/info/info.component';
import { LocationComponent } from './header/components/info/location/location.component';
import { TimeComponent } from './header/components/info/time/time.component';
import { NavComponent } from './header/components/nav/nav.component';
import { SearchFieldComponent } from './header/components/nav/search-field/search-field.component';
import { HeaderTemplateComponent } from './header/components/pages/header-template/header-template.component';
import { LocationService } from './header/services/location.service';
import { SearchService } from './header/services/search.service';

@NgModule({
  declarations: [
    InfoComponent,
    LocationComponent,
    ContactsComponent,
    TimeComponent,
    NavComponent,
    SearchFieldComponent,
    HeaderTemplateComponent,
    CategoriesNavComponent,
  ],
  imports: [CommonModule, RouterModule, AuthModule],
  exports: [HeaderTemplateComponent],
  providers: [LocationService, SearchService],
})
export class CoreModule {}
