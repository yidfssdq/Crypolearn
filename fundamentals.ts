import type { Category } from '@/types/course';

export const fundamentalsChapters: Category[] = [
  {
    id: 'ch1-context-web3',
    name: 'Comprendre l’argent, Internet et le Web3',
    icon: '🏁',
    lessons: ['money-evolution','what-is-fiat','internet-evolution','data-ownership','web3-intro','decentralization','blockchain-intro','consensus']
  },
  {
    id: 'ch2-crypto-ecosystem',
    name: 'La crypto-monnaie et son écosystème',
    icon: '💰',
    lessons: ['bitcoin-story','ethereum-basics','altcoins','stablecoins','tokenomics','wallets','metamask-tutorial','send-receive','exchanges','bridges']
  },
  {
    id: 'ch3-defi',
    name: 'La DeFi et les services du Web3',
    icon: '⚙️',
    lessons: ['defi-intro','liquidity-pools','yield-farming','staking','lending','risks','wrapped-tokens','onchain-tools','bridges-defi']
  },
  {
    id: 'ch4-nft-dao',
    name: 'Les NFT, DAO et le Web3 Social',
    icon: '🖼️',
    lessons: ['nft-basics','mint-nft','nft-utility','marketplaces','dao-intro','web3-identity','social-tokens','metaverse']
  },
  {
    id: 'ch5-security',
    name: 'Sécurité, risques et fiscalité',
    icon: '🛡️',
    lessons: ['key-security','scams','rugpulls','backup-wallet','hardware-wallet','taxes','regulation','portfolio']
  }
];
