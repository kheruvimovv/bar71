import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'bar71-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
})
export class App {
    protected readonly title = signal<string>('bar71');
}
