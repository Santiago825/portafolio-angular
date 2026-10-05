import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  signal,
  viewChild,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowLeftSLine, remixArrowRightSLine } from '@ng-icons/remixicon';
import { CERTIFICATE_IMAGES } from '../../../data/certificates.data';

/**
 * Carrusel con CSS scroll-snap (sin librerías): reemplaza a Swiper.
 * Funciona con táctil, rueda, teclado (foco + flechas) y botones; no depende del userAgent.
 */
@Component({
  selector: 'app-certifications',
  imports: [NgIcon],
  providers: [provideIcons({ remixArrowLeftSLine, remixArrowRightSLine })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-roledescription="carousel" aria-label="Certificates">
      <div class="mb-4 flex items-center justify-between gap-4">
        <p class="text-sm text-ink-500 dark:text-ink-300">
          {{ images.length }} certificates. Select one to open it full size.
        </p>
        <div class="flex gap-2">
          <button
            type="button"
            class="icon-btn border border-ink-300 disabled:opacity-40 dark:border-ink-600"
            aria-label="Previous certificates"
            [disabled]="atStart()"
            (click)="scrollBy(-1)"
          >
            <ng-icon name="remixArrowLeftSLine" />
          </button>
          <button
            type="button"
            class="icon-btn border border-ink-300 disabled:opacity-40 dark:border-ink-600"
            aria-label="Next certificates"
            [disabled]="atEnd()"
            (click)="scrollBy(1)"
          >
            <ng-icon name="remixArrowRightSLine" />
          </button>
        </div>
      </div>

      <ul
        #track
        tabindex="0"
        aria-label="Certificate images"
        class="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-4"
        (scroll)="updateEdges()"
      >
        @for (cert of images; track cert.src) {
          <li class="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
            <a [href]="cert.src" target="_blank" rel="noopener noreferrer" class="block rounded-xl">
              <img
                [src]="cert.src"
                [alt]="cert.alt"
                [attr.width]="cert.width"
                [attr.height]="cert.height"
                loading="lazy"
                decoding="async"
                class="h-auto w-full rounded-xl border border-ink-200 bg-white dark:border-ink-600"
              />
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class Certifications {
  protected readonly images = CERTIFICATE_IMAGES;
  private readonly track = viewChild.required<ElementRef<HTMLUListElement>>('track');

  protected readonly atStart = signal(true);
  protected readonly atEnd = signal(false);

  constructor() {
    afterNextRender(() => this.updateEdges());
  }

  protected scrollBy(direction: -1 | 1): void {
    const el = this.track().nativeElement;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  protected updateEdges(): void {
    const el = this.track().nativeElement;
    this.atStart.set(el.scrollLeft <= 1);
    this.atEnd.set(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }
}
