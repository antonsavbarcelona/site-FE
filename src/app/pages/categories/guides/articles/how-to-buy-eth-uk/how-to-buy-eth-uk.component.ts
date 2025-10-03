import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TldrComponent} from '../../../../../shared/ui/tldr/tldr.component';
import {TableOfContentsComponent} from '../../../../../shared/ui/table-of-contents/table-of-contents.component';
import {StickyCTABannerComponent} from '../../../../../shared/ui/sticky-cta-banner/sticky-cta-banner.component';
import {
  MaterialComparisonColumn, MaterialComparisonRow,
  MaterialComparisonTableComponent
} from '../../../../../shared/ui/material-comparison-table/material-comparison-table.component';
import {BulletListComponent} from '../../../../../shared/ui/bullet-list';
import {ProTipComponent} from '../../../../../shared/ui/pro-tip/pro-tip.component';
import { KRAKEN_URL } from '../../../../../shared/kraken-url';


@Component({
  selector: 'app-how-to-buy-eth-uk',
  templateUrl: './how-to-buy-eth-uk.component.html',
  styleUrl: './how-to-buy-eth-uk.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    TldrComponent,
    TableOfContentsComponent,
    StickyCTABannerComponent,
    MaterialComparisonTableComponent,
    BulletListComponent,
    ProTipComponent
  ]
})
export class HowToBuyEthUkComponent {

  quickVerdict = [
    'For UK investors in 2025, Kraken stands out as the top choice to buy ETH. FCA-authorised, secure, and offering practical GBP rails (Faster Payments and CHAPS), Kraken ensures a low-friction, reliable path from pounds to Ether.',
    'With strong security, regulatory clarity, and competitive trading fees, Kraken is ideal for both first-time buyers and experienced traders seeking ETH exposure in the UK.'
  ];

  comparisonColumns: MaterialComparisonColumn[] = [
    { key: 'feature', title: 'Feature', type: 'text' },
    { key: 'kraken', title: 'Kraken', type: 'highlight' },
    { key: 'coinbase', title: 'Coinbase', type: 'text' },
    { key: 'binance', title: 'Binance', type: 'text' },
    { key: 'ziglu', title: 'Ziglu', type: 'text' }
  ];

  comparisonRows: MaterialComparisonRow[] = [
    {
      feature: 'Regulation (UK)',
      kraken: 'FCA-registered, e-money licence',
      coinbase: 'Registered with FCA as cryptoasset business',
      binance: 'Limited UK product range after FCA action',
      ziglu: 'FCA-registered'
    },
    {
      feature: 'GBP Deposits',
      kraken: 'Faster Payments (free), CHAPS (same-day)',
      coinbase: 'Faster Payments, card (higher fee)',
      binance: 'Limited GBP support via 3rd party',
      ziglu: 'Faster Payments'
    },
    {
      feature: 'Trading Fees',
      kraken: 'Maker 0.16% / Taker 0.26% (volume-based discounts)',
      coinbase: '~1.49% retail buy spread',
      binance: 'Low spot fees but complex for UK compliance',
      ziglu: 'Fixed spread, often higher'
    },
    {
      feature: 'Staking',
      kraken: 'Yes (ETH + multiple assets)',
      coinbase: 'Limited staking options',
      binance: 'Yes (but check UK availability)',
      ziglu: 'No'
    },
    {
      feature: 'Security',
      kraken: 'Cold storage, 2FA, bug bounty',
      coinbase: 'Strong consumer security',
      binance: 'Strong security, but regulatory risk',
      ziglu: 'Basic'
    },
    {
      feature: 'Best For',
      kraken: 'Investors seeking secure GBP rails + staking',
      coinbase: 'Beginners wanting simple app',
      binance: 'Advanced global traders',
      ziglu: 'Casual small buys'
    }
  ];

  routeOptions = [
    '<strong><a href="#kraken-quick-buy" style="color: #6366f1; text-decoration: none;">Beginner (Quick Start)</a></strong>: Start with Kraken Quick Buy — simplest way to get ETH instantly.',
    '<strong><a href="#bank-account-faster-payments" style="color: #6366f1; text-decoration: none;">Long-Term Investor</a></strong>: Use Buying ETH with Bank Account (Faster Payments) or Buying ETH with CHAPS for larger, lower-cost purchases.',
    '<strong><a href="#kraken-pro-trading" style="color: #6366f1; text-decoration: none;">Active Trader</a></strong>: Move to Kraken Pro with advanced order types and lower fees for higher volumes.',
    '<strong><a href="#staking-options" style="color: #6366f1; text-decoration: none;">Yield Seeker</a></strong>: After purchase, explore Staking Options to earn rewards directly on Kraken.'
  ];

  // Payment Methods Table Data
  paymentMethodsColumns: MaterialComparisonColumn[] = [
    { key: 'method', title: 'Method', type: 'text' },
    { key: 'speed', title: 'Speed', type: 'text' },
    { key: 'krakenFee', title: 'Kraken Fee', type: 'highlight' },
    { key: 'bankFee', title: 'Typical Bank/Card Fee', type: 'text' },
    { key: 'bestFor', title: 'Best For', type: 'text' }
  ];

  paymentMethodsRows: MaterialComparisonRow[] = [
    {
      method: 'Faster Payments',
      speed: 'Near-instant (24/7)',
      krakenFee: 'Free',
      bankFee: 'Usually free',
      bestFor: 'Everyday deposits, cost-efficient'
    },
    {
      method: 'CHAPS Transfer',
      speed: 'Same-day (business hours)',
      krakenFee: 'Free',
      bankFee: '£15–£25 flat fee (bank)',
      bestFor: 'High-value transfers (£20k+)'
    },
    {
      method: 'Credit/Debit Card',
      speed: 'Instant',
      krakenFee: 'Variable spread + processing fee',
      bankFee: 'Built-in',
      bestFor: 'Small, urgent purchases'
    }
  ];
  protected readonly KRAKEN_URL = KRAKEN_URL;
}
