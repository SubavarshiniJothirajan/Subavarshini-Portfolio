import { Component, OnDestroy, OnInit, signal } from '@angular/core';

interface Entry { id: number; ok: boolean; }

/** A live token bucket: 5 tokens, one refilled every 1.2 s. Mirrors the limiter in the API Rate Limiting System project. */
@Component({
  selector: 'app-rate-demo',
  standalone: true,
  template: `
    <div class="demo">
      <p class="demo-title">Token bucket, running in your browser</p>
      <div class="bucket" role="img" [attr.aria-label]="tokens() + ' of ' + capacity + ' tokens left'">
        @for (s of slots; track $index) { <span [class.full]="$index < tokens()"></span> }
      </div>
      <button type="button" class="send" (click)="send()">Send request</button>
      <ul class="log" aria-live="polite">
        @for (e of log(); track e.id) {
          <li [class.ok]="e.ok">{{ e.ok ? '200 OK' : '429 Too Many Requests' }}</li>
        }
      </ul>
    </div>`,
})
export class RateDemoComponent implements OnInit, OnDestroy {
  readonly capacity = 5;
  readonly slots = Array.from({ length: this.capacity });
  tokens = signal(this.capacity);
  log = signal<Entry[]>([]);
  private id = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.timer = setInterval(() => this.tokens.update(t => Math.min(this.capacity, t + 1)), 1200);
  }
  ngOnDestroy() { clearInterval(this.timer); }

  send() {
    const ok = this.tokens() > 0;
    if (ok) this.tokens.update(t => t - 1);
    this.log.update(l => [{ id: this.id++, ok }, ...l].slice(0, 5));
  }
}
