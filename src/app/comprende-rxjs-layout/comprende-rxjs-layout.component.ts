import { Component } from '@angular/core';
import { HomeMenuLink, LINKS_GROUPS_OPERATORS, LINKS_TO_START } from '../home-menu/home-menu-links';

@Component({
  selector: 'app-comprende-rxjs-layout',
  templateUrl: './comprende-rxjs-layout.component.html',
  styleUrls: ['./comprende-rxjs-layout.component.scss'],
})
export class RxjsLayoutPageComponent {
  public isShowingLeftMenu: boolean = false;
  public GROUPS_OF_LINKS: HomeMenuLink[] = [LINKS_TO_START, ...LINKS_GROUPS_OPERATORS];

  public showHideBackLink(showLeftMenu: boolean) {
    // Avoid error ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => (this.isShowingLeftMenu = showLeftMenu), 0);
  }
}
