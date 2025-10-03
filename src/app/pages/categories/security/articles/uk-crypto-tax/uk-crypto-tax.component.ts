import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TldrComponent} from '../../../../../shared/ui/tldr/tldr.component';
import {BulletListComponent} from '../../../../../shared/ui/bullet-list';
import {ProTipComponent} from '../../../../../shared/ui/pro-tip/pro-tip.component';
import {
  KeyValueTableComponent,
  KeyValueTableItem
} from '../../../../../shared/ui/key-value-table/key-value-table.component';
import {
  MaterialComparisonColumn, MaterialComparisonRow,
  MaterialComparisonTableComponent
} from '../../../../../shared/ui/material-comparison-table/material-comparison-table.component';
import {FaqComponent, FaqItem} from '../../../../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../../../../shared/ui/table-of-contents/table-of-contents.component';
import {StickyCTABannerComponent} from '../../../../../shared/ui/sticky-cta-banner/sticky-cta-banner.component';
import {ChecklistComponent} from '../../../../../shared/ui/checklist/checklist.component';
import {ErrorListComponent} from '../../../../../shared/ui/error-list/error-list.component';


@Component({
  selector: 'app-uk-crypto-tax',
  templateUrl: './uk-crypto-tax.component.html',
  styleUrl: './uk-crypto-tax.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TldrComponent,
    BulletListComponent,
    ProTipComponent,
    KeyValueTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent,
    StickyCTABannerComponent,
    ChecklistComponent,
    ErrorListComponent
  ]
})
export class UkCryptoTaxComponent {

  // Quick Overview данные для TLDR компонента
  quickOverview = [
    'UK investors face two main types of tax on crypto: Capital Gains Tax (CGT) and Income Tax.',
    'CGT applies when you sell crypto for GBP, swap coins, or use crypto for payments. Annual allowance: £3,000 (2025). Rates: 10% or 20%.',
    'Income Tax applies to staking rewards, mining payouts, and airdrops at market value in GBP when received.',
    'HMRC requires detailed records of every crypto transaction in GBP for up to 5 years.'
  ];

  // CGT Triggers для bullet list
  cgtTriggers = [
    '<strong>Selling crypto for GBP:</strong> e.g. converting ETH to pounds on Kraken.',
    '<strong>Swapping crypto for crypto:</strong> exchanging ETH → BTC is a disposal of ETH and an acquisition of BTC.',
    '<strong>Using crypto for purchases:</strong> paying for goods, services, or NFTs is considered a disposal.'
  ];

  // Example calculation данные для Key-Value компонента
  calculationExample: KeyValueTableItem[] = [
    { key: 'Buy Price (January)', value: '£1,200' },
    { key: 'Sell Price (March)', value: '£1,800' },
    { key: 'Capital Gain', value: '£600' },
    { key: 'Annual Allowance', value: '£3,000 (2025)' },
    { key: 'Taxable Gain', value: '£0 (under allowance)' }
  ];

  // Tax rates для отдельного примера если gain больше allowance
  taxRatesExample: KeyValueTableItem[] = [
    { key: 'Basic Rate Taxpayer (10%)', value: '£60 tax on £600 gain' },
    { key: 'Higher Rate Taxpayer (20%)', value: '£120 tax on £600 gain' }
  ];

  // Income vs CGT Comparison Table
  incomeVsCgtColumns: MaterialComparisonColumn[] = [
    { key: 'aspect', title: 'Aspect' },
    { key: 'incomeTax', title: 'Income Tax (Staking/Mining/Airdrops)' },
    { key: 'cgt', title: 'Capital Gains Tax (Selling/Swapping)' }
  ];

  incomeVsCgtRows: MaterialComparisonRow[] = [
    {
      aspect: 'Trigger Event',
      incomeTax: 'Receiving crypto',
      cgt: 'Disposing of crypto'
    },
    {
      aspect: 'Tax Timing',
      incomeTax: 'At time of receipt (GBP value)',
      cgt: 'When sold/swapped/spent'
    },
    {
      aspect: 'Rate',
      incomeTax: 'Based on income band (20/40/45%)',
      cgt: '10% or 20% depending on CGT band'
    },
    {
      aspect: 'Additional Tax',
      incomeTax: 'Later sale triggers CGT on gain',
      cgt: 'None beyond CGT'
    }
  ];

  // What to Track - список требований к записям
  recordKeepingRequirements = [
    '<strong>Date & time</strong> of the transaction',
    '<strong>Type of transaction</strong> (buy, sell, swap, reward)',
    '<strong>Amount of crypto</strong> involved',
    '<strong>GBP value at the time</strong> (spot price)',
    '<strong>Exchange or wallet</strong> used',
    '<strong>Transaction fees</strong> (these reduce your taxable gain)'
  ];

  // Recommended tools для Key-Value таблицы
  recommendedTools: KeyValueTableItem[] = [
    {
      key: 'Koinly',
      value: 'UK-focused, integrates with Kraken, Coinbase, MetaMask, and produces HMRC-compliant CGT reports.'
    },
    {
      key: 'CoinTracking',
      value: 'Advanced analytics and tax-loss harvesting tools.'
    },
    {
      key: 'Accointing',
      value: 'Simple interface, good for beginners, exports directly to Self Assessment format.'
    }
  ];

  // Tax Deadlines & Reporting
  taxDeadlines: KeyValueTableItem[] = [
    { key: 'Tax Year', value: 'Runs from 6 April to 5 April' },
    { key: 'Register for Self Assessment', value: 'By 5 October following the end of the tax year' },
    { key: 'Filing Deadline', value: 'Online Self Assessment due 31 January after tax year ends' },
    { key: 'Payment Due', value: '31 January - when any tax owed must be paid' },
    { key: 'CGT Real-Time Reporting', value: 'Report gains above £3,000 immediately using HMRC service' }
  ];

  // DeFi complexities
  defiComplexities = [
    '<strong>Deposits:</strong> May or may not count as disposals depending on whether you change beneficial ownership of the tokens.',
    '<strong>Rewards:</strong> Usually taxable as income when received, at GBP market value.',
    '<strong>Withdrawal:</strong> Can trigger CGT events if you receive different tokens back or realise a gain.'
  ];

  // Common Mistakes
  commonMistakes = [
    '<strong>Ignoring crypto-to-crypto trades:</strong> Swapping ETH→BTC is a CGT event, even if no GBP is involved.',
    '<strong>Not recording GBP values:</strong> You need to know the GBP value at the time of every transaction.',
    '<strong>Forgetting staking rewards:</strong> Staking yield is taxable income at receipt — don\'t wait until you sell.',
    '<strong>Assuming "HODL = no tax forever":</strong> Holding isn\'t taxable, but once you sell or swap, HMRC expects a CGT report.'
  ];

  // CSV Record Example для таблицы
  csvRecordColumns: MaterialComparisonColumn[] = [
    { key: 'date', title: 'Date' },
    { key: 'asset', title: 'Asset' },
    { key: 'amount', title: 'Amount' },
    { key: 'gbpValue', title: 'GBP Value' },
    { key: 'fees', title: 'Fees' },
    { key: 'notes', title: 'Notes' }
  ];

  csvRecordRows: MaterialComparisonRow[] = [
    {
      date: '2025-01-05',
      asset: 'ETH',
      amount: '1.000',
      gbpValue: '£1,200',
      fees: '£2',
      notes: 'Bought on Kraken'
    },
    {
      date: '2025-02-10',
      asset: 'ETH',
      amount: '-0.500',
      gbpValue: '£1,000',
      fees: '£1',
      notes: 'Sold (CGT event)'
    },
    {
      date: '2025-03-01',
      asset: 'ETH',
      amount: '+0.030',
      gbpValue: '£54',
      fees: '£0',
      notes: 'Staking reward (Income)'
    }
  ];

  // FAQ Data
  faqItems: FaqItem[] = [
    {
      question: 'Do I pay tax when I sell crypto in the UK?',
      answer: 'Yes. Selling crypto for GBP is a taxable event under Capital Gains Tax (CGT). You pay CGT on the profit above your annual allowance (£3,000 in 2025).',
      isOpen: false
    },
    {
      question: 'Is swapping crypto-to-crypto taxable in the UK?',
      answer: 'Yes. HMRC treats swaps like ETH → BTC as disposals, so you must calculate gains or losses in GBP at the time of the swap.',
      isOpen: false
    },
    {
      question: 'Do I pay tax on staking rewards?',
      answer: 'Yes. Staking rewards are taxable as income at the GBP value you receive them. Later sales may also incur CGT if the price has changed.',
      isOpen: false
    },
    {
      question: 'How much crypto can I sell tax-free in the UK?',
      answer: 'You can make up to £3,000 in capital gains per tax year (2025 allowance) before CGT applies.',
      isOpen: false
    },
    {
      question: 'What are the UK crypto tax rates?',
      answer: 'CGT rates are 10% for basic-rate taxpayers and 20% for higher/additional-rate taxpayers. Income tax on staking/mining follows your income band (20%, 40%, or 45%).',
      isOpen: false
    },
    {
      question: 'When is the UK crypto tax deadline?',
      answer: 'The deadline for online Self Assessment is 31 January after the end of the tax year. Tax year runs 6 April to 5 April.',
      isOpen: false
    },
    {
      question: 'Do I need to report crypto losses?',
      answer: 'Yes. Reporting losses lets you offset them against future gains. You have up to 4 years to claim them.',
      isOpen: false
    },
    {
      question: 'Is buying crypto taxable in the UK?',
      answer: 'No. Buying crypto is not a taxable event. Tax applies when you sell, swap, or spend it.',
      isOpen: false
    },
    {
      question: 'Do I pay tax if I just hold crypto (HODL)?',
      answer: 'No. Simply holding crypto does not trigger tax until you dispose of it.',
      isOpen: false
    },
    {
      question: 'How do I report crypto to HMRC?',
      answer: 'You report via Self Assessment or HMRC\'s CGT real-time reporting tool. You\'ll need GBP values for all disposals.',
      isOpen: false
    },
    {
      question: 'What records should I keep for crypto taxes?',
      answer: 'Keep date, type of transaction, GBP value, amount of crypto, fees, and wallet/exchange used. HMRC may request up to 5 years of records.',
      isOpen: false
    },
    {
      question: 'Are airdrops taxable in the UK?',
      answer: 'Yes, if received in exchange for an action or service (taxed as income). Free promotional airdrops may only be taxed when sold.',
      isOpen: false
    },
    {
      question: 'Do I pay tax on NFTs in the UK?',
      answer: 'Yes. Buying and selling NFTs are CGT events. If you create NFTs as a business, profits may be subject to income tax.',
      isOpen: false
    },
    {
      question: 'How are mining rewards taxed?',
      answer: 'Mining rewards are income at GBP value when mined. If you run a large-scale mining operation, you may be taxed as a business.',
      isOpen: false
    },
    {
      question: 'Can I offset crypto losses against other gains?',
      answer: 'Yes. You can offset crypto losses against gains from shares, property, or other chargeable assets to reduce CGT.',
      isOpen: false
    },
    {
      question: 'Do I pay National Insurance on crypto?',
      answer: 'Not on capital gains, but business income from mining or trading may be subject to Class 2/4 NICs.',
      isOpen: false
    },
    {
      question: 'Do I need to register for Self Assessment if I earn staking income?',
      answer: 'Yes, if your total untaxed income (including staking rewards) is above £1,000 in a tax year.',
      isOpen: false
    },
    {
      question: 'Do I pay tax on crypto received as payment for services?',
      answer: 'Yes. Crypto payments for work are taxed as income at the market value on the day you receive them.',
      isOpen: false
    },
    {
      question: 'How do I calculate crypto gains in GBP?',
      answer: 'Use HMRC\'s Section 104 pooling rules to average the cost of your holdings. Then apply: Proceeds – (Cost Basis + Fees) = Gain.',
      isOpen: false
    },
    {
      question: 'What tools can help with crypto tax reporting?',
      answer: 'Koinly, CoinTracking, and Accointing all integrate with UK exchanges, auto-convert to GBP, and generate HMRC-compliant reports.',
      isOpen: false
    }
  ];

}
