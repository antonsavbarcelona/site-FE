import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SkeletonComponent } from  '@shared/ui/skeleton/skeleton.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SkeletonComponent]
})
export class ShellComponent implements OnInit, OnDestroy {
  isLoading = false;
  private subscriptions = new Subscription();

  constructor(private router: Router) {}

  ngOnInit() {
    // Показываем skeleton при начале навигации
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe(() => {
          this.isLoading = true;
        })
    );

    // Скрываем skeleton после завершения навигации
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.isLoading = false;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
