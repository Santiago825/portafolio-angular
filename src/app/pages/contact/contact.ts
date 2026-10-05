import { ChangeDetectionStrategy, Component, ElementRef, inject, isDevMode, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixCheckboxCircleLine,
  remixErrorWarningLine,
  remixGithubFill,
  remixLinkedinBoxFill,
  remixLoader4Line,
  remixSendPlaneLine,
  remixWhatsappFill,
} from '@ng-icons/remixicon';
import { firstValueFrom, map } from 'rxjs';
import { ContactNotConfiguredError, ContactService } from '../../core/services/contact.service';
import { PROFILE } from '../../data/profile.data';
import { PageHeader } from '../../shared/page-header/page-header';
import { notBlank, strictEmail } from '../../shared/validators/form-validators';

type FieldName = 'name' | 'email' | 'message';
type Status = 'idle' | 'sending' | 'success' | 'error';

const LIMITS = { nameMin: 2, nameMax: 80, emailMax: 254, messageMin: 10, messageMax: 1000 } as const;

/** Mensajes de error por campo y por tipo de validador. */
const ERROR_MESSAGES: Record<FieldName, Record<string, string>> = {
  name: {
    required: 'Enter your name.',
    blank: 'Enter your name.',
    minlength: `Your name needs at least ${LIMITS.nameMin} characters.`,
    maxlength: `Keep your name under ${LIMITS.nameMax} characters.`,
  },
  email: {
    required: 'Enter your email address.',
    email: 'Enter a valid email address, like name@example.com.',
    maxlength: 'That email address is too long.',
  },
  message: {
    required: 'Write a message.',
    blank: 'Write a message.',
    minlength: `Write at least ${LIMITS.messageMin} characters so I understand what you need.`,
    maxlength: `Keep your message under ${LIMITS.messageMax} characters.`,
  },
};

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIcon, PageHeader],
  providers: [
    provideIcons({
      remixCheckboxCircleLine,
      remixErrorWarningLine,
      remixGithubFill,
      remixLinkedinBoxFill,
      remixLoader4Line,
      remixSendPlaneLine,
      remixWhatsappFill,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly contact = inject(ContactService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly limits = LIMITS;
  protected readonly socials = PROFILE.socials;

  /** Formulario tipado: cada control es `FormControl<string>` (nunca null). */
  protected readonly form = this.fb.group({
    name: [
      '',
      [Validators.required, notBlank, Validators.minLength(LIMITS.nameMin), Validators.maxLength(LIMITS.nameMax)],
    ],
    email: ['', [Validators.required, strictEmail, Validators.maxLength(LIMITS.emailMax)]],
    message: [
      '',
      [
        Validators.required,
        notBlank,
        Validators.minLength(LIMITS.messageMin),
        Validators.maxLength(LIMITS.messageMax),
      ],
    ],
    /** Honeypot anti-spam: invisible para personas; los bots suelen rellenarlo. */
    website: [''],
  });

  protected readonly status = signal<Status>('idle');
  protected readonly feedback = signal('');
  /** Los errores se muestran tras el primer intento de envío aunque el campo no se haya tocado. */
  private readonly submitted = signal(false);

  protected readonly messageLength = toSignal(
    this.form.controls.message.valueChanges.pipe(map((value) => value.length)),
    { initialValue: 0 },
  );

  constructor() {
    if (isDevMode() && !this.contact.isConfigured) {
      console.warn(
        '[Contact] El formulario aún no está conectado a un servicio de correo. ' +
        'Edita src/app/core/config/contact.settings.ts',
      );
    }
  }

  /** Devuelve el primer mensaje de error visible del campo, o null si no hay que mostrar nada. */
  protected errorFor(field: FieldName): string | null {
    const control = this.form.controls[field];
    if (!control.invalid || !(control.touched || this.submitted())) {
      return null;
    }
    const firstKey = Object.keys(control.errors ?? {})[0];
    return (firstKey && ERROR_MESSAGES[field][firstKey]) || 'This field is not valid.';
  }

  protected async onSubmit(): Promise<void> {
    if (this.status() === 'sending') {
      return; // evita envíos dobles
    }

    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.focusFirstInvalid();
      return;
    }

    const { website, ...payload } = this.form.getRawValue();

    // Honeypot relleno = bot. Respondemos "ok" para no darle pistas, pero no enviamos nada.
    if (website) {
      this.finishSuccess();
      return;
    }

    this.status.set('sending');
    this.feedback.set('');

    try {
      // Elimina firstValueFrom y haz el await directamente
      await this.contact.send({
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      });

      this.finishSuccess();
    } catch (error) {
      this.status.set('error');
      this.feedback.set(
        error instanceof ContactNotConfiguredError && isDevMode()
          ? 'The form is not connected to an email service yet. Edit src/app/core/config/contact.settings.ts.'
          : 'Your message could not be sent. Please try again in a moment, or reach me on LinkedIn or WhatsApp.',
      );
    }
  }

  private finishSuccess(): void {
    this.status.set('success');
    this.feedback.set('Message sent. Thank you, I will reply as soon as I can.');
    this.form.reset();
    this.submitted.set(false);
  }

  private focusFirstInvalid(): void {
    this.host.nativeElement.querySelector<HTMLElement>('input.ng-invalid, textarea.ng-invalid')?.focus();
  }
}