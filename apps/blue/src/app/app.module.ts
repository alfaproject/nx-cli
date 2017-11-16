import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { CoreModule } from '@nx-cli/core';
import { SharedModule } from '@nx-cli/shared';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlueFooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NxModule.forRoot(), CoreModule.forRoot(), SharedModule],
  declarations: [
    AppComponent,
    BlueFooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
