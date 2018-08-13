import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showRepairCardSubMenu = false;
  showWarehouseSubMenu = false;
  isExpanded = true;
  isShowing = false;
  isUserLoggedIn: boolean;
  userAuthenticationSubscription: Subscription;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userAuthenticationSubscription = this.authService.authNavStatus$.subscribe(status => this.isUserLoggedIn = status);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
}
