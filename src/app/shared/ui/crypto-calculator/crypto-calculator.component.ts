import { Component, input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CryptoCalculatorConfig {
  cryptoSymbol: string; // BTC, ETH
  cryptoName: string; // Bitcoin, Ethereum
  exchangeUrl: string; // URL для кнопки
  exchangeName: string; // Kraken, Coinbase
}

@Component({
  selector: 'app-crypto-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crypto-calculator.component.html',
  styleUrl: './crypto-calculator.component.scss'
})
export class CryptoCalculatorComponent implements OnInit {
  config = input.required<CryptoCalculatorConfig>();

  // Signals для реактивности
  gbpAmount = signal<number>(10);
  cryptoAmount = signal<number>(0);
  isLoading = signal<boolean>(true);
  error = signal<string>('');
  currentPrice = signal<number>(0);

  ngOnInit(): void {
    this.fetchPrice();
  }

  // Получаем текущий курс - MOCK VERSION (CoinGecko забанил)
  async fetchPrice(): Promise<void> {
    this.isLoading.set(true);
    this.error.set('');

    try {
      // Мок данные вместо реального API
      await new Promise(resolve => setTimeout(resolve, 500)); // Имитация загрузки

      // Генерируем реалистичную цену BTC с небольшими колебаниями
      const basePrice = this.config().cryptoSymbol === 'BTC' ? 82500 : 3200; // BTC или ETH
      const randomVariation = (Math.random() - 0.5) * 1000; // ±500
      const mockPrice = basePrice + randomVariation;

      this.currentPrice.set(mockPrice);
      this.calculate();
    } catch (err) {
      this.error.set('Unable to fetch price');
      console.error('Price fetch error:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  // Рассчитываем сумму криптовалюты
  calculate(): void {
    const price = this.currentPrice();
    if (price > 0) {
      const crypto = this.gbpAmount() / price;
      this.cryptoAmount.set(crypto);
    }
  }

  // Обновляем значение GBP
  onGbpChange(value: string): void {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      this.gbpAmount.set(num);
      this.calculate();
    }
  }

  // Форматируем число для отображения
  formatCrypto(value: number): string {
    if (value >= 1) {
      return value.toFixed(4);
    } else if (value >= 0.01) {
      return value.toFixed(6);
    } else {
      return value.toFixed(8);
    }
  }

  // Форматируем цену в GBP
  formatPrice(value: number): string {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
}
