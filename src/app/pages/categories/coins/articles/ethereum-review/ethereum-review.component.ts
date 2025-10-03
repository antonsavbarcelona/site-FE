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
  selector: 'app-ethereum-review',
  templateUrl: './ethereum-review.component.html',
  styleUrl: './ethereum-review.component.scss',
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
export class EthereumReviewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные для Ethereum Review
  protected readonly article = {
    title: 'What is Ethereum? — Ethereum Review 2025',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Cryptocurrency Review',
    heroImage: {
      src: '/images/bitcoin-review/btc-review-hero.webp', // временно используем bitcoin изображение
      alt: 'Ethereum Review 2025'
    }
  };

  // TL;DR данные из статьи
  protected readonly tldrItems: string[] = [
    'Ethereum is the leading programmable blockchain in 2025. Its transition to Proof-of-Stake (PoS) and subsequent scaling upgrades (including proto-danksharding / EIP-4844) materially improved energy use and Layer-2 economics, which supports widespread DeFi and NFT activity. For UK investors who want exposure to blockchain applications, staking income and the growth of Layer-2 ecosystems, ETH is an attractive — but still volatile — allocation. Best suited for medium-to-long-term investors (3+ years) comfortable with protocol risk and wallet custody.',
  ];

  // Pros and Cons из статьи
  protected readonly prosData: ProsConsItem[] = [
    {text: 'Largest smart-contract ecosystem'},
    {text: 'Staking rewards available'},
    {text: 'Dramatic energy reduction after the Merge'},
    {text: 'Improved L2 fee economics'},
    {text: 'Large developer ecosystem'},
    {text: 'Lower energy footprint (PoS)'},
    {text: 'Programmability enables DeFi, NFTs'},
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'Regulatory uncertainty for token products'},
    {text: 'Smart-contract risk and exploits'},
    {text: 'Evolving fee/UX dynamics across Layer-2 solutions'},
    {text: 'Custody complexity'},
    {text: 'No fixed supply cap'},
    {text: 'Centralisation in staking providers'},
  ];

  // Key Features
  protected readonly keyFeatures: KeyValueTableItem[] = [
    {key: 'Launch Date', value: '2015'},
    {key: 'Consensus Algorithm', value: 'Proof of Stake (PoS) - since The Merge'},
    {key: 'Native Token', value: 'Ether (ETH)'},
    {key: 'Smart Contracts', value: 'Ethereum Virtual Machine (EVM)'},
    {key: 'Energy Reduction', value: '~99.95% reduction after PoS transition'},
    {key: 'Supply Cap', value: 'No fixed cap (EIP-1559 burn mechanism)'},
  ];

  // Primary Risks данные
  protected readonly primaryRisks: KeyValueTableItem[] = [
    {
      key: 'Smart-contract exploits',
      value: 'DeFi hacks remain the most frequent large-loss events in the ecosystem'
    },
    {
      key: 'Regulatory uncertainty',
      value: 'Classification of tokens, ETF rules and marketing restrictions can change accessibility and tax treatment'
    },
    {
      key: 'Fee dynamics',
      value: 'Although L2s are cheaper, bridging between L1 and L2 and L2 UX differences create friction'
    },
    {
      key: 'Centralisation in staking',
      value: 'Liquid staking providers concentrate voting power; this raises governance and systemic-risk questions'
    },
    {
      key: 'No fixed supply',
      value: 'Monetary policy is flexible — some investors prefer capped assets like Bitcoin'
    }
  ];

  // How Ethereum works technical points
  protected readonly technicalFeatures: string[] = [
    '<strong>Programmability:</strong> Enables DeFi, tokenisation and NFTs',
    '<strong>Staking rewards:</strong> Holders can stake ETH (32 ETH per validator or via pooled/liquid staking) to earn yield',
    '<strong>Lower energy footprint:</strong> PoS cut energy usage dramatically compared with PoW',
    '<strong>Improved L2 costs:</strong> EIP-4844 materially lowered Layer-2 data costs, improving UX for everyday transactions',
    '<strong>Large developer ecosystem:</strong> Ongoing tooling, developer activity and enterprise trials'
  ];

  // Use cases данные
  protected readonly useCases: string[] = [
    'DeFi primitives: Lending (Aave), DEXs (Uniswap), automated market makers — on Ethereum and L2s',
    'NFTs & gaming: Tokenised ownership and in-game economies',
    'DAOs: On-chain governance and treasury management',
    'Stablecoins & payments: USD-pegged stablecoins power low-friction settlements',
    'Enterprise pilots: Tokenisation of real-world assets and private chains exploring EVM compatibility'
  ];

  // Security & Custody Options
  protected readonly custodyOptions: string[] = [
    '<strong>Hardware wallets</strong> (Ledger, Trezor): Best for long-term self-custody',
    '<strong>Software wallets</strong> (MetaMask, Frame): Necessary for active DeFi; higher operational risk (phishing)',
    '<strong>Exchange custody:</strong> Convenient but exposes you to counterparty risk',
    '<strong>Liquid staking tokens</strong> (stETH, rETH, cbETH): Provide liquidity while staking, but carry peg and counterparty risks'
  ];

  // Bitcoin vs Ethereum vs Layer-1 alternatives comparison
  protected readonly comparisonColumns: MaterialComparisonColumn[] = [
    {key: 'feature', title: 'Feature', type: 'text'},
    {key: 'bitcoin', title: 'Bitcoin', type: 'text'},
    {key: 'ethereum', title: 'Ethereum', type: 'text'},
    {key: 'layer1', title: 'High-throughput L1s (e.g., Solana)', type: 'text'},
  ];

  protected readonly comparisonRows: MaterialComparisonRow[] = [
    {
      feature: 'Primary purpose',
      bitcoin: 'Store of value',
      ethereum: 'Smart contracts / dApps',
      layer1: 'High-speed apps, payments',
    },
    {
      feature: 'Consensus',
      bitcoin: 'PoW (Bitcoin still PoW)',
      ethereum: 'PoS (since Merge)',
      layer1: 'Various (PoH/PoS hybrids)',
    },
    {
      feature: 'Energy profile',
      bitcoin: 'High (PoW)',
      ethereum: 'Very low (PoS). Merge ≈99.95% reduction',
      layer1: 'Low (design optimisations)',
    },
    {
      feature: 'Programmability',
      bitcoin: 'Limited',
      ethereum: 'Full EVM-compatible',
      layer1: 'Programmable, different tradeoffs',
    },
    {
      feature: 'Best for',
      bitcoin: 'Long-term reserve',
      ethereum: 'DeFi, NFTs, staking',
      layer1: 'High throughput, cost-sensitive apps',
    },
  ];

  // Suitability данные
  protected readonly suitableFor: string[] = [
    'Want exposure to programmable blockchains, DeFi and NFT ecosystems',
    'Can tolerate volatility and grasp smart-contract/custody risk',
    'Seek staking income or protocol-growth exposure',
    'Medium-to-long-term investment horizon (3+ years)',
    'Comfortable with technical complexity'
  ];

  protected readonly notSuitableFor: string[] = [
    'Need predictable, low-volatility returns',
    'Dislike technical complexity',
    'Prefer strictly regulated, centrally managed investments only',
    'Cannot afford potential total loss',
    'Require immediate liquidity'
  ];

  // FAQ данные из статьи
  protected readonly faqItems: FaqItem[] = [
    {
      question: 'How to buy ETH in the UK in 2025 — step-by-step?',
      answer: 'Open an account with a UK-friendly exchange (Kraken, Coinbase), complete ID checks, deposit GBP (Faster Payments), buy ETH/GBP and withdraw to a hardware wallet for long-term storage. If you plan to stake, compare self-staking (32 ETH) vs custodial staking vs liquid staking options.'
    },
    {
      question: 'How to stake ETH safely in 2025 in the UK?',
      answer: 'Safest (most control) method is running your own validator (32 ETH + reliable uptime + secure key backups). Alternatives: regulated custodial staking (Kraken, Coinbase) or liquid staking (Lido, Rocket Pool). Each has tradeoffs: self-staking avoids counterparty risk, custodial staking is simple but trust-based, liquid staking preserves liquidity but introduces peg/counterparty risk.'
    },
    {
      question: 'What is the impact of EIP-4844 on Layer-2 fees and transaction costs?',
      answer: 'EIP-4844 (proto-danksharding) introduced temporary data blobs to reduce the cost of posting rollup data, which substantially lowered L2 data costs and improved transaction economics for rollups — making microtransactions and everyday DeFi interactions far cheaper and more practical.'
    },
    {
      question: 'When were ETH staking withdrawals enabled and how to withdraw staked ETH after Shanghai/Capella?',
      answer: 'The Shanghai/Capella upgrade (April 12, 2023) enabled withdrawals for staked ETH. Withdrawals are processed by the protocol and some custodial providers may have their own queueing or policy delays — always check your staking provider\'s terms.'
    },
    {
      question: 'Can I buy spot ETH ETFs in the UK and how?',
      answer: 'Spot Ether ETFs began trading in US markets in mid-2024, creating ETF wrappers accessible through brokers that list those products. UK investors can often access US-listed ETFs via international brokerages, subject to account permissions and tax rules — always check broker availability and UK tax implications.'
    },
    {
      question: 'What are the main security tips for ETH investors in the UK?',
      answer: 'Use hardware wallets, enable multi-factor authentication, keep seed phrases offline (physical backups), use multisig for sizable treasuries, and vet DeFi contracts before depositing funds. For custody, prefer regulated custodians or institutional custody solutions for large holdings.'
    }
  ];

  // Key moments данные
  protected readonly keyMoments: string[] = [
    '<strong>The Merge:</strong> Transition to Proof-of-Stake',
    '<strong>Shanghai/Capella upgrade:</strong> Enabled validator withdrawals',
    '<strong>Dencun/EIP-4844:</strong> Proto-danksharding which lowered Layer-2 data costs and improved user economics'
  ];

  constructor() {}
}
