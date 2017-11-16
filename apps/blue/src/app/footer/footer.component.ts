import { Component } from '@angular/core';

import { FooterComponent } from '@nx-cli/shared';

@Component({
  selector: 'app-blue-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class BlueFooterComponent extends FooterComponent {
}
