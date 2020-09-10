import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>Hello {{value}} with Azure Static Web Apps</h1></div>
  <div class='logo'><img src='https://pbs.twimg.com/media/EbsBU8TX0AEGKYM.png' alt='logo' /></div>`,
})
export class AppComponent {
  value = 'World';
}
