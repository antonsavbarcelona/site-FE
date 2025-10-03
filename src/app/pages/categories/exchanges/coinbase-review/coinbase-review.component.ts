import {Component, signal, OnInit, HostListener} from '@angular/core';
import {TldrComponent} from '../../../../shared/ui/tldr/tldr.component';
import {
  KeyValueTableComponent,
  KeyValueTableItem
} from '../../../../shared/ui/key-value-table/key-value-table.component';
import {ProsConsItem, ProsConsTableComponent} from '../../../../shared/ui/pros-cons-table/pros-cons-table.component';
import {
  MaterialComparisonColumn, MaterialComparisonRow,
  MaterialComparisonTableComponent
} from '../../../../shared/ui/material-comparison-table/material-comparison-table.component';
import {FaqComponent} from '../../../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../../../shared/ui/table-of-contents/table-of-contents.component';
import {ProsListComponent} from '../../../../shared/ui/pros-list';


@Component({
  selector: 'app-coinbase-review',
  templateUrl: './coinbase-review.component.html',
  styleUrl: './coinbase-review.component.scss',
  standalone: true,
  imports: [
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent,
    ProsListComponent
  ]
})
export class CoinbaseReviewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные - минимально
  protected readonly article = {
    title: 'Coinbase Review UK 2025: Fees, FCA Regulation & Alternatives',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Exchange Review',
    heroImage: {
      src: '/images/coinbase-review-hero.webp',
      alt: 'Coinbase UK Review 2025'
    }
  };

  // Данные для компонентов - оставляем как есть
  protected readonly tldrItems: string[] = [
    'For beginners who want a simple way to buy crypto in the UK, Coinbase is often the first recommendation. The interface is uncluttered, deposits can be made through several methods, and additional products like a Visa debit card or a non-custodial wallet are also available. However, the pricing model is less attractive for those who trade actively, and advanced investors may find the tools somewhat restrictive.',
  ];

  protected readonly regulationAndSafetyFeatures: KeyValueTableItem[] = [
    {key: 'FCA authorisation', value: 'E-money licence for GBP transfers'},
    {key: 'AML & KYC compliance', value: 'Registered with FCA under MLRs'},
    {key: 'Customer fund protection', value: 'Segregated GBP accounts'},
    {key: 'Security measures', value: 'Cold storage, 2FA, insurance cover'},
    {key: 'Tax obligations', value: 'Capital Gains Tax on crypto profits'},
  ];

  protected readonly prosData: ProsConsItem[] = [
    {text: 'Straightforward for newcomers '},
    {text: 'FCA registration and e-money licence '},
    {text: 'Multiple deposit options in GBP  '},
    {text: 'Wallet and Card integration '},
    {text: 'Friendly design that is easy to navigate for first-time users '},
    {text: 'Strong compliance and a solid security record '},
    {text: 'Support for a large number of coins and tokens '},
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'Higher transaction costs  '},
    {text: 'Restricted tools on main app '},
    {text: 'Delays in customer service  '},
    {text: 'Fewer advanced features than rivals  '},
  ];


  protected readonly paymentsComparisonColumns: MaterialComparisonColumn[] = [
    {key: 'method', title: 'Method', type: 'text'},
    {key: 'action', title: 'Action', type: 'text'},
    {key: 'fees', title: 'Fees', type: 'text'},
    {key: 'processingTime', title: 'Processing time', type: 'text'},
  ];

  protected readonly paymentsComparisonRows: MaterialComparisonRow[] = [
    {
      method: 'Faster Payments',
      action: 'Deposit/Withdraw',
      fees: 'Free (deposit) / up to £1 (withdrawal)',
      processingTime: 'Same day (1–2 hours typical)',
    },
    {
      method: 'SEPA transfer',
      action: 'Deposit/Withdraw',
      fees: 'Minimal bank fees',
      processingTime: '1–2 business days',
    },
    {
      method: 'Debit/Credit Card',
      action: 'Buy crypto UK',
      fees: '~3.99% per transaction',
      processingTime: 'Instant',
    },
    {
      method: 'PayPal',
      action: 'Withdraw only',
      fees: '2% (max £25)',
      processingTime: 'Instant to 1 day',
    },
  ];


  protected readonly coinbaseProComparisonColumns: MaterialComparisonColumn[] = [
    {key: 'transactionType', title: 'Transaction type', type: 'text'},
    {key: 'basicCoinbase', title: 'Basic Coinbase exchange UK', type: 'text'},
    {key: 'coinbasePro', title: 'Coinbase Pro', type: 'text'},
  ];

  protected readonly coinbaseProComparisonRows: MaterialComparisonRow[] = [
    {
      transactionType: 'Buy with GBP balance',
      basicCoinbase: '0.5% spread + flat fee',
      coinbasePro: 'Maker 0.4% / Taker 0.6%',
    },
    {
      transactionType: 'Buy with card',
      basicCoinbase: '3.99%',
      coinbasePro: 'Not available',
    },
    {
      transactionType: 'Bank transfer deposit',
      basicCoinbase: 'Free',
      coinbasePro: 'Free',
    },
    {
      transactionType: 'Crypto-to-crypto trade',
      basicCoinbase: '2% approx.',
      coinbasePro: 'Maker/Taker fees only',
    },
    {
      transactionType: 'Withdraw to bank (GBP)',
      basicCoinbase: 'Up to £1',
      coinbasePro: '£0.15',
    },
  ];
}
