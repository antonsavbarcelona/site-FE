import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonPrimaryComponent } from '../../../../shared/ui/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../../../../shared/ui/button-secondary/button-secondary.component';

@Component({
  selector: 'app-best-crypto-exchange-uk',
  templateUrl: './best-crypto-exchange-uk.component.html',
  styleUrl: './best-crypto-exchange-uk.component.scss',
  standalone: true,
  imports: [RouterLink, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class BestCryptoExchangeUkComponent {

}
