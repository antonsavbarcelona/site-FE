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
import {FaqComponent, FaqItem} from '../../../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../../../shared/ui/table-of-contents/table-of-contents.component';
import {ProsItem, ProsListComponent} from '../../../../shared/ui/pros-list';
import {BulletListComponent} from '../../../../shared/ui/bullet-list';


@Component({
  selector: 'app-kraken-review',
  templateUrl: './kraken-review.component.html',
  styleUrl: './kraken-review.component.scss',
  standalone: true,
  imports: [
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent,
    ProsListComponent,
    BulletListComponent,

  ]
})
export class KrakenReviewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные
  protected readonly article = {
    title: 'Kraken UK Review 2025',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Exchange Review',
    heroImage: {
      src: '/images/kraken/kraken-review-hero.webp',
      alt: 'Kraken UK Review 2025'
    }
  };

  // TL;DR данные
  protected readonly tldrItems: string[] = [
    'Kraken is a security-first, FCA-registered crypto exchange that balances professional trading tools with UK-friendly GBP rails (Faster Payments, CHAPS). It\'s a strong choice for active traders and security-conscious investors; beginners will appreciate the mobile app, but note that certain derivatives remain restricted to professional clients in the UK.'
  ];

  // Quick Verdict данные
  protected readonly quickVerdictItems: string[] = [
    'Kraken is FCA-authorised and built around defence-in-depth security, competitive maker/taker pricing for active traders, and practical GBP rails (Faster Payments/CHAPS). Retail UK users should complete Intermediate verification before moving significant GBP or attempting advanced products.'
  ];

  // Kraken Products Overview Table
  protected readonly krakenProductsColumns: MaterialComparisonColumn[] = [
    {key: 'product', title: 'Product', type: 'text'},
    {key: 'description', title: 'Description', type: 'text'},
    {key: 'bestFor', title: 'Best For', type: 'text'}
  ];

  protected readonly krakenProductsRows: MaterialComparisonRow[] = [
    {
      product: 'Kraken Exchange (Spot)',
      description: 'Straightforward buy/sell orderbooks for hundreds of coins',
      bestFor: 'Buy-and-hold and basic trading'
    },
    {
      product: 'Kraken Pro',
      description: 'Advanced charting, margin-eligible pairs, maker/taker pricing',
      bestFor: 'Active traders and algo users'
    },
    {
      product: 'Mobile app & Wallet',
      description: 'Polished iOS/Android experience',
      bestFor: 'Trading and balances on the go'
    },
    {
      product: 'Staking & Earn',
      description: 'On-platform staking for select assets',
      bestFor: 'Earning yield while holding'
    },
    {
      product: 'Derivatives (Perps/Futures)',
      description: 'Professional-gated derivatives trading',
      bestFor: 'Professional clients only in UK'
    }
  ];

  // Pros & Cons данные
  protected readonly prosData: ProsConsItem[] = [
    {text: 'Wide asset selection — BTC, ETH and many altcoins'},
    {text: 'FCA registration and local e-money authorisations (adds regulatory clarity)'},
    {text: 'Multiple GBP rails: Faster Payments for quick transfers and CHAPS for large same-day deposits'},
    {text: 'Mobile app (iOS & Android) with core trading features'},
    {text: 'On-platform staking for eligible assets'},
    {text: 'Strong security posture: 2FA, encryption, bug-bounty and extensive cold storage'},
    {text: 'Advanced tools and API for active traders'}
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'Fees can be higher for small-volume retail use or certain deposit methods'},
    {text: 'Derivatives generally restricted to professional clients in the UK'},
    {text: 'Verification (KYC) can take several days during busy periods'},
    {text: 'Support is ticket-based; response times may slow in market stress'}
  ];

  // Expanded Pros
  protected readonly expandedProsItems: ProsItem[] = [
    {
      title: 'Fast and Flexible GBP Banking:',
      description: 'Imagine it\'s Friday evening and you want to move £5,000 to an exchange to catch a market swing on Monday. Speed, cost and trust matter. Kraken delivers on each front: Faster Payments let you top up quickly for small/medium amounts; CHAPS is available for larger transfers that require same-day credit. Confirm your account verification UK level first to avoid holds.'
    },
    {
      title: 'Security-First Approach:',
      description: 'Security is not a marketing bullet — it\'s operational. Kraken runs a public bug-bounty, enforces two-factor authentication options and keeps the bulk of customer funds in cold storage. For UK users who ask "is Kraken safe UK?" these practices materially reduce platform-level risk. Practical tip: enable 2FA, use a unique password and consider self-custody for long-term holdings.'
    },
    {
      title: 'Competitive Fee Structure:',
      description: 'Fees reward activity. Kraken fees UK use a maker/taker model with volume tiers: casual investors pay standard rates, but high-volume traders receive substantial discounts — worth knowing if you plan frequent trading.'
    }
  ];

  // Kraken Products Detail Table
  protected readonly krakenProductsDetailColumns: MaterialComparisonColumn[] = [
    {key: 'product', title: 'Product', type: 'text'},
    {key: 'useCase', title: 'Use Case', type: 'text'},
    {key: 'ukAccess', title: 'UK Access', type: 'text'}
  ];

  protected readonly krakenProductsDetailRows: MaterialComparisonRow[] = [
    {
      product: 'Kraken Exchange (Spot)',
      useCase: 'Straightforward buy/sell orderbooks for hundreds of coins; good for buy-and-hold and basic trading',
      ukAccess: 'Full access for verified users'
    },
    {
      product: 'Kraken Pro',
      useCase: 'Advanced charting, margin-eligible pairs, maker/taker pricing — built for active traders and algo users',
      ukAccess: 'Full access, margin requires eligibility'
    },
    {
      product: 'Mobile app & Wallet',
      useCase: 'Polished iOS/Android experience to manage trades and balances on the go',
      ukAccess: 'Available on App Store & Google Play'
    },
    {
      product: 'Staking & Earn',
      useCase: 'On-platform staking for select assets (flexible and locked options) that let you earn yield while holding',
      ukAccess: 'Available for eligible assets'
    },
    {
      product: 'Derivatives (Perps/Futures)',
      useCase: 'Professional derivatives trading with advanced risk management',
      ukAccess: 'Professional clients only - retail restricted'
    }
  ];

  // Deposits & Withdrawals
  protected readonly depositsWithdrawalsItems: KeyValueTableItem[] = [
    {
      key: 'Faster Payments (FPS)',
      value: 'Near-instant in most cases; typically no Kraken fee and ideal for everyday top-ups'
    },
    {
      key: 'CHAPS',
      value: 'Intended for larger transfers and same-day crediting if sent by bank cut-off times. Fees may apply from intermediary banks'
    }
  ];

  protected readonly depositChecklistItems: string[] = [
    'Verify to Intermediate before initiating GBP deposits (unlock rails and higher limits)',
    'Use Faster Payments for small/medium amounts; choose CHAPS for large, time-sensitive deposits',
    'Keep transaction IDs and exact timestamps (GMT/BST) to speed support resolution',
    'If a deposit is held, check Kraken\'s funding provider notes (eg. ClearJunction/Banking Circle) in the support centre — they explain common holds and intermediary fees'
  ];

  // Fee Schedule Table
  protected readonly feeScheduleColumns: MaterialComparisonColumn[] = [
    {key: 'volume', title: '30-day Volume (USD)', type: 'text'},
    {key: 'maker', title: 'Maker Fee', type: 'text'},
    {key: 'taker', title: 'Taker Fee', type: 'text'}
  ];

  protected readonly feeScheduleRows: MaterialComparisonRow[] = [
    {
      volume: '$0+',
      maker: '0.25%',
      taker: '0.40%'
    },
    {
      volume: '$10,000+',
      maker: '0.20%',
      taker: '0.35%'
    },
    {
      volume: '$50,000+',
      maker: '0.14%',
      taker: '0.24%'
    },
    {
      volume: '$100,000+',
      maker: '0.12%',
      taker: '0.22%'
    },
    {
      volume: '$250,000+',
      maker: '0.10%',
      taker: '0.20%'
    },
    {
      volume: '$1,000,000+',
      maker: '0.06%',
      taker: '0.16%'
    },
    {
      volume: '$10,000,000+',
      maker: '0.00%',
      taker: '0.10%'
    }
  ];

  // Comparison Table
  protected readonly comparisonColumns: MaterialComparisonColumn[] = [
    {key: 'exchange', title: 'Exchange', type: 'text'},
    {key: 'strengths', title: 'Key Strengths', type: 'text'},
    {key: 'comparison', title: 'vs Kraken', type: 'text'}
  ];

  protected readonly comparisonRows: MaterialComparisonRow[] = [
    {
      exchange: 'Coinbase UK',
      strengths: 'Simple interface for beginners',
      comparison: 'Kraken offers lower fees for active traders and more advanced tools'
    },
    {
      exchange: 'Binance UK',
      strengths: 'Large selection of altcoins',
      comparison: 'Kraken has clearer UK regulatory footing and FCA-related approvals'
    },
    {
      exchange: 'Bybit',
      strengths: 'Focus on derivatives trading',
      comparison: 'Kraken offers spot, staking and professional derivatives with UK retail restrictions'
    }
  ];

  // How It Works
  protected readonly howItWorksItems: KeyValueTableItem[] = [
    {
      key: 'Sign up',
      value: 'Register with email, choose a strong password, confirm via the email link; basic browsing is available but trading/fiat needs verification'
    },
    {
      key: 'Verify',
      value: 'Kraken\'s verification tiers (Intermediate and Pro) control deposit/withdraw limits and product access. Most UK users reach Intermediate to deposit GBP and trade spot; Pro suits institutions/high-volume traders. Processing time is usually up to five days if documents are complete'
    },
    {
      key: 'Trade',
      value: 'Deposit GBP/crypto → choose market (spot/margin/perps if eligible) → place orders (limit/market/stop) → monitor via web/mobile → withdraw to bank or external wallet'
    }
  ];

  protected readonly practicalStepsItems: string[] = [
    'Use the API/demo environment to test bots safely',
    'Enable 2FA for enhanced security',
    'Complete Intermediate verification for full GBP banking access',
    'Start with small deposits to test the platform',
    'Keep detailed records for tax reporting'
  ];

  // FAQs
  protected readonly faqItems: FaqItem[] = [
    {
      question: 'How to deposit GBP to Kraken using Faster Payments',
      answer: 'Verify to Intermediate, copy Kraken\'s Faster Payments details from your account, send from your UK bank — crediting is typically near-instant once processed.'
    },
    {
      question: 'How to withdraw GBP from Kraken to my bank account',
      answer: 'Go to Funding → Withdraw → GBP, choose bank transfer, enter your bank details and confirm; processing times vary by bank and verification level. Check live withdrawal fees on Kraken\'s fees page.'
    },
    {
      question: 'Kraken withdrawal pending UK',
      answer: 'Pending withdrawals usually indicate bank-side or intermediary processing; check transaction ID, confirm bank has not flagged the transfer and open a ticket with Kraken including timestamps.'
    },
    {
      question: 'Kraken deposit failed UK',
      answer: 'Failed deposits commonly stem from incorrect bank details or intermediary bank rejections; verify your account details and contact your bank, then contact Kraken support with the payment reference.'
    },
    {
      question: 'Kraken verification problems UK',
      answer: 'Ensure you upload clear ID and proof-of-address documents; most verifications process in under five days if documents are complete. If delayed, check your inbox for any additional requests and contact support.'
    },
    {
      question: 'Kraken account suspended UK',
      answer: 'Accounts can be restricted for compliance or security reasons; follow Kraken\'s support instructions and provide requested documents to resolve holds. Do not share sensitive info in public channels.'
    },
    {
      question: 'Kraken two-factor authentication',
      answer: 'Kraken supports multiple 2FA methods (TOTP apps, hardware keys); enable 2FA in security settings and keep your recovery codes safe.'
    },
    {
      question: 'Kraken tax reporting UK',
      answer: 'Kraken provides transaction history and account statements you can download; for tax treatment, HMRC treats most disposals as capital gains — consult a tax adviser for your situation.'
    },
    {
      question: 'How to pay taxes on Kraken profits UK',
      answer: 'Keep detailed records of buys, sells, fees and timestamps; report taxable gains to HMRC under Capital Gains Tax rules and seek accountant help for complex cases.'
    },
    {
      question: 'Kraken UK customer support contact',
      answer: 'Kraken primarily operates via help centre articles and a ticketing system; include screenshots, payment references and timestamps in tickets to speed up responses.'
    }
  ];

  // Final Verdict
  protected readonly finalVerdictPros: ProsConsItem[] = [
    {text: 'Security-conscious investors who prioritise FCA registration'},
    {text: 'Active traders seeking competitive maker/taker fees'},
    {text: 'Users needing reliable GBP rails (Faster Payments/CHAPS)'},
    {text: 'Developers and quants using APIs and demo environments'}
  ];

  protected readonly finalVerdictCons: ProsConsItem[] = [
    {text: 'Complete beginners wanting the simplest app experience'},
    {text: 'UK retail users seeking derivatives access'},
    {text: 'Users who prefer phone-based customer support'}
  ];

}
