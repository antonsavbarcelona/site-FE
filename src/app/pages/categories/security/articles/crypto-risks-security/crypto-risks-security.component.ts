import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TldrComponent} from '../../../../../shared/ui/tldr/tldr.component';
import {TableOfContentsComponent} from '../../../../../shared/ui/table-of-contents/table-of-contents.component';
import {StickyCTABannerComponent} from '../../../../../shared/ui/sticky-cta-banner/sticky-cta-banner.component';
import {
  MaterialComparisonTableComponent
} from '../../../../../shared/ui/material-comparison-table/material-comparison-table.component';
import {BulletListComponent} from '../../../../../shared/ui/bullet-list';
import {ProTipComponent} from '../../../../../shared/ui/pro-tip/pro-tip.component';
import {FaqComponent, FaqItem} from '../../../../../shared/ui/faq/faq.component';
import {ErrorListComponent} from '../../../../../shared/ui/error-list/error-list.component';
import {ProsConsItem, ProsConsTableComponent} from '../../../../../shared/ui/pros-cons-table/pros-cons-table.component';
import {ChecklistComponent} from '../../../../../shared/ui/checklist/checklist.component';


@Component({
  selector: 'app-crypto-risks-security',
  templateUrl: './crypto-risks-security.component.html',
  styleUrl: './crypto-risks-security.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TldrComponent,
    TableOfContentsComponent,
    StickyCTABannerComponent,
    MaterialComparisonTableComponent,
    BulletListComponent,
    ProTipComponent,
    FaqComponent,
    ErrorListComponent,
    ProsConsTableComponent,
    ChecklistComponent
  ]
})
export class CryptoRisksSecurityComponent {

  // Основные данные для компонентов
  quickSummary = [
    'Crypto is one of the most exciting innovations of the past decade — but with opportunity comes risk. Prices move quickly, exchanges can freeze withdrawals, and scams target inexperienced investors daily.',
    'This UK-focused guide explains the main types of crypto risk — market volatility, exchange and custody risk, technical vulnerabilities, and compliance obligations — plus practical steps to stay safe.'
  ];

  // Security brief для визуального отображения
  securityBrief = [
    'Enable 2FA',
    'Use FCA-registered exchanges',
    'Test withdrawals',
    'Store long-term holdings in a hardware wallet'
  ];

  // Основные типы рисков
  riskTypes = [
    '<strong>Market Risk (Volatility):</strong> Daily swings of 5–10% are common in crypto markets.',
    '<strong>Counterparty Risk (Exchanges):</strong> Trusting exchanges to stay solvent and honour withdrawals.',
    '<strong>Technical Risks:</strong> Smart contract bugs and DeFi protocol exploits.',
    '<strong>Regulatory & Compliance Risk:</strong> UK KYC requirements and tax obligations.'
  ];

  // Security fundamentals - Secure Accounts
  secureAccountSteps = [
    '<strong>Enable 2FA</strong> using an authenticator app (TOTP), not SMS. This prevents most account takeover attacks.',
    '<strong>Use a unique, strong password</strong> — ideally generated and stored in a password manager. Never reuse the password you use for email or other services.',
    '<strong>Email hygiene:</strong> create a dedicated email for crypto accounts, enable 2FA there as well, and monitor it for phishing attempts.'
  ];

  // Safe Devices & Networks
  deviceSafetyTips = [
    'Avoid logging in from <strong>public Wi-Fi</strong> or shared computers.',
    'Keep your <strong>OS and browser updated</strong> to patch known exploits.',
    'For large balances, consider a <strong>hardware security key</strong> (like YubiKey) for an extra layer of login protection.'
  ];

  // Withdrawal Safety
  withdrawalSafetySteps = [
    '<strong>Enable withdrawal whitelist</strong> so funds can only go to addresses you pre-approve.',
    'Always <strong>confirm withdrawals via email or app</strong>, and never click links from unverified messages.',
    '<strong>Test with a small transaction</strong> before sending large amounts, especially to a new wallet.'
  ];

  // Common Scams
  commonScams = [
    '<strong>Fake airdrops & phishing DMs:</strong> Never click random links from Twitter, Discord, or Telegram promising free tokens.',
    '<strong>Giveaway scams:</strong> Elon Musk is not doubling your ETH. Real projects never ask you to "send first."',
    '<strong>Rug pulls:</strong> Meme coins and shady DeFi projects can disappear overnight. Research before you buy — check audits, team credibility, and liquidity locks.',
    '<strong>Pump-and-dump groups:</strong> Avoid Telegram or Reddit channels promising "easy 10x" trades. These are designed to profit early insiders at your expense.',
    '<strong>Impersonation sites:</strong> Always verify URLs manually (look for HTTPS, check spelling). Bookmark exchange login pages.'
  ];

  // 10-Point Security Checklist
  securityChecklist = [
    'Enable 2FA with an authenticator app',
    'Use strong, unique passwords for all crypto accounts',
    'Whitelist withdrawal addresses',
    'Store your seed phrase offline (never in cloud or screenshots)',
    'Test with a small transaction before large transfers',
    'Avoid public Wi-Fi and shared devices',
    'Keep your OS and browser updated',
    'Use a hardware wallet for holdings above £1k',
    'Monitor your portfolio addresses on Etherscan or a portfolio tracker',
    'Keep a secure backup of your recovery phrases in a safe place'
  ];

  // Custody Models - Pros and Cons
  custodialPros: ProsConsItem[] = [
    { text: 'Simple to start, easy access to trading, staking, and support' },
    { text: 'No need to manage private keys or seed phrases' },
    { text: 'Professional security infrastructure and insurance' },
    { text: 'Customer support available if issues arise' }
  ];

  custodialCons: ProsConsItem[] = [
    { text: 'You trust the exchange to stay solvent and secure' },
    { text: 'Withdrawals can be paused during stress events' },
    { text: 'Exchange controls your private keys ("not your keys, not your crypto")' },
    { text: 'Potential counterparty risk if exchange fails' }
  ];

  selfCustodyPros: ProsConsItem[] = [
    { text: '"Not your keys, not your crypto" — you have full control' },
    { text: 'No counterparty risk from exchange failures' },
    { text: 'Can access funds 24/7 without exchange restrictions' },
    { text: 'True ownership and sovereignty over your assets' }
  ];

  selfCustodyCons: ProsConsItem[] = [
    { text: 'You are 100% responsible for security and backups' },
    { text: 'If you lose your seed phrase, funds are gone forever' },
    { text: 'Risk of sending to wrong address with no recovery' },
    { text: 'No customer support if you make mistakes' }
  ];

  // FAQ Data - используем FaqItem интерфейс
  allFAQs: FaqItem[] = [
    // Security & Storage
    {
      question: 'Is it safe to keep crypto on Kraken in the UK?',
      answer: 'Kraken is FCA-registered and widely considered one of the most secure exchanges. It uses cold storage, 2FA, and a public bug bounty program. For long-term holdings, we still recommend moving funds to a hardware wallet to eliminate counterparty risk.',
      isOpen: false
    },
    {
      question: 'What is the safest way to store Ethereum long-term?',
      answer: 'The safest method is self-custody using a hardware wallet like Ledger or Trezor. Store your seed phrase offline (never in cloud storage) and test small transactions first. This keeps your ETH secure even if an exchange is hacked.',
      isOpen: false
    },
    {
      question: 'How do I enable 2FA on a crypto exchange account?',
      answer: 'Log into your exchange, go to Security settings, and enable "Two-Factor Authentication." Use an authenticator app (Google Authenticator, Authy) rather than SMS. Scan the QR code, save backup codes, and test login before funding your account.',
      isOpen: false
    },
    {
      question: 'Are SMS codes secure for crypto login?',
      answer: 'No. SMS can be intercepted via SIM-swap attacks. Always use a TOTP-based authenticator app or hardware security key (YubiKey) for maximum account protection.',
      isOpen: false
    },
    {
      question: 'What is a withdrawal whitelist and why should I use it?',
      answer: 'A withdrawal whitelist is a list of approved wallet addresses. Funds can only be sent to these addresses. Enabling it prevents attackers from sending funds to their own wallet even if they compromise your account.',
      isOpen: false
    },
    // Scams & Fraud Prevention
    {
      question: 'How do I avoid crypto phishing scams in the UK?',
      answer: 'Bookmark official exchange URLs, never click links from emails or DMs, and double-check domain spelling. Use browser extensions like MetaMask only on trusted websites. If in doubt, verify URLs manually or type them in directly.',
      isOpen: false
    },
    {
      question: 'How do I know if a DeFi project is a rug pull?',
      answer: 'Look for red flags: anonymous team, no audits, liquidity not locked, promises of "guaranteed" returns. Check the project\'s GitHub and community — lack of transparency is a warning sign.',
      isOpen: false
    },
    {
      question: 'What is the most common crypto scam in 2025?',
      answer: 'Phishing remains the number one attack vector — fake airdrops, malicious ads, and impersonation websites trick users into entering seed phrases.',
      isOpen: false
    },
    {
      question: 'How do I report a crypto scam in the UK?',
      answer: 'Report scams to Action Fraud (the UK\'s national fraud reporting centre) and inform your exchange immediately if your funds are at risk.',
      isOpen: false
    },
    // Technical & Exchange Risks
    {
      question: 'Can exchanges freeze my crypto withdrawals?',
      answer: 'Yes. Exchanges may temporarily freeze withdrawals for compliance reviews, system upgrades, or security incidents. This is why it\'s smart to keep trading funds on exchange but store long-term holdings in self-custody.',
      isOpen: false
    },
    {
      question: 'What happens if my exchange gets hacked — do I lose my crypto?',
      answer: 'If funds are stolen and the exchange does not reimburse users, you may lose your crypto. Some platforms have insurance funds, but payouts aren\'t guaranteed. Minimise exposure by using FCA-registered exchanges and withdrawing funds after large purchases.',
      isOpen: false
    },
    {
      question: 'How do I secure my MetaMask wallet from hacks?',
      answer: 'Download MetaMask only from the official website or Chrome Web Store, use a hardware wallet for signing transactions, regularly revoke token approvals, and never share your seed phrase.',
      isOpen: false
    },
    {
      question: 'What is slashing risk in Ethereum staking?',
      answer: 'Slashing happens when a validator misbehaves (double-signing, downtime). On Kraken, the platform handles validator operations and covers infrastructure risks, but rewards may still be reduced.',
      isOpen: false
    },
    {
      question: 'Can someone steal my crypto if they know my wallet address?',
      answer: 'No — a wallet address is public information, like a bank account number. Funds can only be moved with your private key or seed phrase. Keep those private and never share them.',
      isOpen: false
    },
    // Practical Questions
    {
      question: 'What is the risk of leaving crypto on an exchange overnight?',
      answer: 'Short-term risk is low on reputable exchanges, but it is never zero. System outages, hacks, or sudden freezes can occur. If you\'re not trading actively, consider moving funds to a hardware wallet.',
      isOpen: false
    },
    {
      question: 'Do I need a hardware wallet if I only hold £500 worth of crypto?',
      answer: 'A hardware wallet is optional for small amounts but strongly recommended once your portfolio exceeds £500–£1,000. Even a single hack or phishing incident could wipe out your funds, so the cost of protection is usually worth it.',
      isOpen: false
    },
    {
      question: 'What is the safest way to send crypto for the first time?',
      answer: 'Send a small test amount first, verify on Etherscan that it arrived, then send the remainder. Always double-check the destination address manually or with a QR code.',
      isOpen: false
    },
    {
      question: 'Are public Wi-Fi networks safe for trading crypto?',
      answer: 'No. Public Wi-Fi can be intercepted. Use a VPN or mobile data when logging into exchanges or wallets.',
      isOpen: false
    },
    {
      question: 'What happens if I lose my seed phrase?',
      answer: 'If you lose your seed phrase and your device fails, you lose access to your funds permanently. Store multiple backups securely in different locations.',
      isOpen: false
    },
    {
      question: 'How do I check if my exchange is FCA-registered in the UK?',
      answer: 'Visit the FCA\'s Financial Services Register and search for the exchange\'s name. Only use platforms listed as cryptoasset businesses.',
      isOpen: false
    }
  ];

}
