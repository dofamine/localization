import { Component, Inject } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleName = $localize`English Version`;
  date: number = Date.now();

  constructor(@Inject(LocationStrategy) readonly locationStrategy: LocationStrategy, @Inject(Title) title: Title) {
    title.setTitle(this.titleName);
  }

  isActiveLocalization(baseHref: string): boolean {
    return this.locationStrategy.getBaseHref().includes(baseHref);
  }
}
