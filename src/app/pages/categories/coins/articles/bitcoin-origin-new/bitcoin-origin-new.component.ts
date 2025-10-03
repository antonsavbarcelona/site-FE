import {Component, signal, OnInit, HostListener} from '@angular/core';
import {TldrComponent} from '../../../../../shared/ui/tldr/tldr.component';
import {
  KeyValueTableComponent,
  KeyValueTableItem
} from '../../../../../shared/ui/key-value-table/key-value-table.component';
import {ProsConsItem, ProsConsTableComponent} from '../../../../../shared/ui/pros-cons-table/pros-cons-table.component';
import {
  MaterialComparisonColumn, MaterialComparisonRow,
  MaterialComparisonTableComponent
} from '../../../../../shared/ui/material-comparison-table/material-comparison-table.component';
import {FaqComponent, FaqItem} from '../../../../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../../../../shared/ui/table-of-contents/table-of-contents.component';
import {BulletListComponent} from '../../../../../shared/ui/bullet-list';

@Component({
  selector: 'app-bitcoin-origin-new',
  templateUrl: './bitcoin-origin-new.component.html',
  styleUrl: './bitcoin-origin-new.component.scss',
  standalone: true,
  imports: [
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent,
    BulletListComponent
  ]
})
export class BitcoinOriginNewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные для Bitcoin Review
  protected readonly article = {
    title: 'What is Bitcoin? — Bitcoin Review 2025',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Cryptocurrency Review',
    heroImage: {
      src: '/images/bitcoin-review/btc-review-hero.webp',
      alt: 'Bitcoin Review 2025'
    }
  };

  // TL;DR данные из статьи
  protected readonly tldrItems: string[] = [
    'Bitcoin remains the gold standard of cryptocurrencies in 2025, offering digital scarcity, decentralisation, and growing institutional adoption. While volatility and regulatory uncertainty persist, Bitcoin\'s maturation as "digital gold" makes it worth considering for diversified portfolios. Best suited for long-term investors comfortable with price fluctuations.',
  ];

  // Pros and Cons из статьи
  protected readonly prosData: ProsConsItem[] = [
    {text: 'Established network with proven security'},
    {text: 'Growing institutional adoption'},
    {text: 'Finite supply (21 million maximum)'},
    {text: 'Growing UK regulatory clarity'},
    {text: 'Decentralised and censorship-resistant'},
    {text: 'Store of value properties ("digital gold")'},
    {text: 'Global accessibility 24/7'},
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'High volatility and price fluctuations'},
    {text: 'Environmental concerns from mining'},
    {text: 'Complex custody requirements'},
    {text: 'Regulatory uncertainty in some areas'},
    {text: 'Technical complexity for beginners'},
    {text: 'Limited transaction throughput'},
  ];

  // Key Features
  protected readonly keyFeatures: KeyValueTableItem[] = [
    {key: 'Launch Date', value: 'January 3, 2009'},
    {key: 'Creator', value: 'Satoshi Nakamoto (pseudonym)'},
    {key: 'Max Supply', value: '21 million BTC'},
    {key: 'Consensus Algorithm', value: 'Proof of Work (PoW)'},
    {key: 'Block Time', value: '~10 minutes'},
    {key: 'Remaining to Mine', value: '~1.3 million BTC'},
  ];

  // Bitcoin vs other cryptocurrencies comparison
  protected readonly comparisonColumns: MaterialComparisonColumn[] = [
    {key: 'feature', title: 'Feature', type: 'text'},
    {key: 'bitcoin', title: 'Bitcoin', type: 'text'},
    {key: 'ethereum', title: 'Ethereum', type: 'text'},
    {key: 'litecoin', title: 'Litecoin', type: 'text'},
  ];

  protected readonly comparisonRows: MaterialComparisonRow[] = [
    {
      feature: 'Primary purpose',
      bitcoin: 'Digital money/store of value',
      ethereum: 'Smart contract platform',
      litecoin: 'Digital payments',
    },
    {
      feature: 'Transaction speed',
      bitcoin: '~10 minutes',
      ethereum: '~15 seconds',
      litecoin: '~2.5 minutes',
    },
    {
      feature: 'Supply cap',
      bitcoin: '21 million',
      ethereum: 'No cap (but deflationary)',
      litecoin: '84 million',
    },
    {
      feature: 'Energy consumption',
      bitcoin: 'High (PoW)',
      ethereum: 'Medium (PoS)',
      litecoin: 'Medium (PoW)',
    },
    {
      feature: 'Use cases',
      bitcoin: 'Store of value, payments',
      ethereum: 'DeFi, NFTs, applications',
      litecoin: 'Fast payments',
    },
    {
      feature: 'Market position',
      bitcoin: '#1 cryptocurrency',
      ethereum: '#2 cryptocurrency',
      litecoin: 'Top 20',
    },
  ];

  // Use cases данные
  protected readonly useCases: string[] = [
    'Store of Value: Increasingly viewed as "digital gold" for wealth preservation',
    'Remittances: Cross-border payments without traditional banking fees',
    'Institutional treasury: Companies hold Bitcoin as a reserve asset',
    'Financial inclusion: Banking services for the unbanked globally',
    'Hedge against inflation: Protection against currency debasement',
    'Payment method: Growing merchant acceptance, though still limited in the UK'
  ];

  // FAQ данные из статьи
  protected readonly faqItems: FaqItem[] = [
    {
      question: 'What is bitcoin and how does it work?',
      answer: 'Bitcoin is digital money that works through a decentralised network of computers. Transactions are grouped into blocks and added to a permanent ledger (blockchain) through a process called mining, where computers compete to validate transactions and secure the network.'
    },
    {
      question: 'Is bitcoin legal in the uk?',
      answer: 'Yes, Bitcoin is legal in the UK. It\'s regulated as a cryptoasset by the FCA, and you can buy, sell, and hold Bitcoin legally, though specific tax obligations apply to gains and income.'
    },
    {
      question: 'How secure is bitcoin for investors in the UK?',
      answer: 'Bitcoin\'s blockchain is extremely secure, with no successful attacks on the main network. However, investor security depends on proper storage practices. Use reputable exchanges and consider hardware wallets for significant holdings.'
    },
    {
      question: 'What is the bitcoin price in gbp today?',
      answer: 'Bitcoin price fluctuates constantly. Check real-time BTC to GBP rates on exchanges like Kraken, Coinbase, or financial websites. Prices can vary slightly between platforms due to trading volumes and liquidity.'
    },
    {
      question: 'How many bitcoins are left to mine?',
      answer: 'Approximately 1.3 million bitcoins remain to be mined from the total 21 million supply. At current mining rates, the final bitcoin will be mined around 2140.'
    },
    {
      question: 'What does bitcoin do better than fiat currency?',
      answer: 'Bitcoin offers programmable scarcity, borderless transactions, 24/7 availability, transparency, and immunity from central bank monetary policy changes, unlike fiat currencies that can be printed indefinitely.'
    },
    {
      question: 'Why is bitcoin called digital gold?',
      answer: 'Bitcoin shares gold\'s properties as a store of value: limited supply, durability, divisibility, and independence from government control. However, Bitcoin is more portable and verifiable than physical gold.'
    },
    {
      question: 'How does bitcoin mining affect the environment?',
      answer: 'Bitcoin mining consumes significant energy, but the industry is increasingly using renewable sources. Many mining operations now use excess renewable energy that would otherwise be wasted.'
    },
    {
      question: 'What are the risks of holding bitcoin in the uk?',
      answer: 'Key risks include price volatility, regulatory changes, technological risks, custody challenges, and tax complexity. The FCA warns that you could lose all your money.'
    },
    {
      question: 'How to store bitcoin safely in the uk?',
      answer: 'Use hardware wallets for large amounts, reputable software wallets for smaller amounts, and enable all security features. Keep backup seed phrases secure and consider using multi-signature setups for substantial holdings.'
    }
  ];

  // Key milestones данные - БЕЗ <strong> тегов!
  protected readonly keyMilestones: string[] = [
    '2009: First Bitcoin transaction',
    '2010: First real-world purchase (10,000 BTC for two pizzas)',
    '2017: Mainstream attention as Bitcoin price reached nearly $20,000',
    '2021: Corporate adoption by companies like Tesla and MicroStrategy',
    '2024-2025: Bitcoin ETF approvals and increasing institutional integration'
  ];

  // Key Features & Benefits данные
  protected readonly keyBenefits: string[] = [
    'Decentralisation: No single point of failure or control',
    'Transparency: All transactions are publicly viewable on the blockchain',
    'Immutability: Once confirmed, transactions cannot be reversed',
    'Global accessibility: 24/7 operation without geographical restrictions',
    'Programmable scarcity: Fixed supply creates digital scarcity'
  ];

  // Primary Risks данные
  protected readonly primaryRisks: KeyValueTableItem[] = [
    {
      key: 'Volatility',
      value: 'Bitcoin price movements can be extreme, with daily fluctuations of 10%+ not uncommon. The Bitcoin price in GBP has ranged from under £3,000 to over £50,000 in recent years.'
    },
    {
      key: 'Regulatory uncertainty',
      value: 'While Bitcoin regulation UK has become clearer, future government actions could impact accessibility and taxation.'
    },
    {
      key: 'Environmental impact',
      value: 'Bitcoin mining consumes significant energy, though renewable adoption is increasing.'
    },
    {
      key: 'Technical complexity',
      value: 'Proper Bitcoin storage requires understanding private keys and wallet security.'
    }
  ];

  // Security & Custody Options данные - БЕЗ <strong> тегов!
  protected readonly custodyOptions: string[] = [
    'Hardware wallets (Ledger, Trezor): Best for long-term storage',
    'Software wallets: Convenient for regular transactions',
    'Exchange custody: Easiest but carries counterparty risk',
    'Institutional custody: Growing options for larger holdings'
  ];

  // Bitcoin suitability данные
  protected readonly suitableFor: string[] = [
    'Seek portfolio diversification beyond traditional assets',
    'Believe in decentralised money principles',
    'Can tolerate significant volatility',
    'Have a long-term investment horizon (3+ years)',
    'Understand the importance of proper custody'
  ];

  protected readonly notSuitableFor: string[] = [
    'Need stable, predictable returns',
    'Cannot afford potential total loss',
    'Require immediate liquidity for investments',
    'Are uncomfortable with technology complexity',
    'Prefer traditional regulated investments exclusively'
  ];

  constructor() {}
}
