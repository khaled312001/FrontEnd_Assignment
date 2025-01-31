import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NumberParentComponent } from './components/number-parent/number-parent.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NumberParentComponent, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
