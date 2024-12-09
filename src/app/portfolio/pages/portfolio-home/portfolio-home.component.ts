import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InfoCardComponent } from '../../components/info-card/info-card.component';

@Component({
  selector: 'portfolio-page-home',
  imports: [CardComponent, AvatarComponent, NavbarComponent, InfoCardComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.css'
})
export class PortfolioHomeComponent {

}
