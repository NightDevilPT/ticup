import { Component } from '@angular/core';

@Component({
  selector: 'ticup-header',
  templateUrl: './ticup-header.component.html',
  styleUrls: ['./ticup-header.component.scss'],
})
export class TicupHeaderComponent {
  public toggleTheme(): void {
    const theme:string|null|undefined = document.querySelector('html')?.getAttribute('data-theme');
    document.querySelector('html')?.setAttribute('data-theme', theme && theme==="light"?"dark":"light");
  }
}
