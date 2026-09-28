import { Component } from '@angular/core';
import { RateDemoComponent } from './rate-demo.component';
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION, PROFILE, PROJECTS, SKILLS, SOCIALS } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RateDemoComponent],
  template: `
    <header class="nav">
      <a href="#top" class="brand">{{ p.name }}</a>
      <nav aria-label="Sections">
        <a href="#projects">Projects</a><a href="#skills">Skills</a>
        <a href="#background">Background</a><a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero wrap">
        <div>
          <h1>{{ p.name }}</h1>
          <p class="role">{{ p.role }}</p>
          <p class="lead">{{ p.tagline }}</p>
          <p class="links">
            @for (s of socials; track s.label) {
              <a [href]="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
            }
          </p>
        </div>
        <app-rate-demo />
      </section>

      <section class="wrap band" id="about">
        <h2>About</h2>
        <p class="prose">{{ p.summary }}</p>
      </section>

      <section class="wrap band" id="projects">
        <h2>Projects</h2>
        @for (pr of projects; track pr.title) {
          <article class="project">
            <div>
              <h3>{{ pr.title }}</h3>
              <ul class="chips">@for (t of pr.stack; track t) { <li>{{ t }}</li> }</ul>
            </div>
            <div>
              <ul class="points">@for (pt of pr.points; track pt) { <li>{{ pt }}</li> }</ul>
              @for (l of pr.links; track l.url) {
                <a class="btn" [href]="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
              }
            </div>
          </article>
        }
      </section>

      <section class="wrap band" id="skills">
        <h2>Skills</h2>
        <dl class="skills">
          @for (g of skills; track g.group) {
            <dt>{{ g.group }}</dt><dd>{{ g.items.join(', ') }}</dd>
          }
        </dl>
      </section>

      <section class="wrap band" id="background">
        <h2>Background</h2>
        <div class="cols">
          <div>
            <h3>Education</h3>
            <p>{{ edu.degree }}<br>{{ edu.school }}<br>CGPA {{ edu.cgpa }}, {{ edu.years }}</p>
            <h3>Certifications</h3>
            <ul class="points">@for (c of certs; track c) { <li>{{ c }}</li> }</ul>
          </div>
          <div>
            <h3>Achievements</h3>
            <ul class="points">@for (a of achievements; track a) { <li>{{ a }}</li> }</ul>
          </div>
        </div>
      </section>

      <section class="wrap band" id="contact">
        <h2>Contact</h2>
        <p class="prose">Open to backend and software engineering roles. Based in {{ p.location }}.</p>
        <p class="links">
          @for (s of socials; track s.label) {
            <a [href]="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
          }
        </p>
      </section>
    </main>
    <footer class="wrap foot">{{ p.name }}, built with Angular</footer>`,
})
export class AppComponent {
  p = PROFILE; socials = SOCIALS; skills = SKILLS; projects = PROJECTS;
  edu = EDUCATION; certs = CERTIFICATIONS; achievements = ACHIEVEMENTS;
}
