import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {

  name = '';
  phone = '';
  service = '';
  date = '';
  time = '';
  message = '';

  private readonly WHATSAPP_NUMBER = '5586994979587';

  openDatePicker(input: HTMLInputElement): void {
    if ((input as any).showPicker) {
      (input as any).showPicker();
    } else {
      input.focus();
    }
  }

  openTimePicker(input: HTMLInputElement): void {
    if ((input as any).showPicker) {
      (input as any).showPicker();
    } else {
      input.focus();
    }
  }

  sendToWhatsapp(): void {
    if (!this.name || !this.phone || !this.date || !this.time) {
      alert('Preencha nome, WhatsApp, data e hora.');
      return;
    }

    const text =
`*Agendamento - Bravos Oficina*
👤 Nome: ${this.name}
📞 WhatsApp: ${this.phone}
🛠 Serviço: ${this.service || 'Não informado'}
📅 Data: ${this.formatDate(this.date)}
⏰ Hora: ${this.time}
📝 Mensagem: ${this.message || 'Não informada'}`;

    const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  private formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}
