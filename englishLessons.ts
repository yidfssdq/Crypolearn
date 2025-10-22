import { Lesson } from '@/types/course';

// English translations for all lessons
export const enLessons: Record<string, Lesson> = {
  'portfolio': {
    id: 'portfolio',
    title: 'Portfolio Management',
    category: 'fundamentals',
    objective: 'Diversification et suivi.',
    content: `**Summary** Crypto portfolio management involves diversifying investments and tracking performance to optimise returns and control risk.
- Diversification: spread your investments across categories (BTC, altcoins, DeFi).
- Allocation: set a percentage for each position according to risk profile.
- Tracking: use tools to view performance and adjust positions.
- Rebalancing: adjust the portfolio as the market evolves and according to personal goals.
**Example** Allocate 50 % to Bitcoin, 30 % to altcoins and 20 % to stablecoins, then adjust monthly.
**Key Takeaway** Good management maximises growth while limiting losses.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Portfolio Management', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Portfolio Management', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Portfolio Management', url: 'https://www.investopedia.com/' }],
  },
  'regulation': {
    id: 'regulation',
    title: 'Regulation',
    category: 'fundamentals',
    objective: 'L’avenir légal du Web3.',
    content: `**Summary** Crypto regulation is evolving and aims to frame the use and distribution of digital assets to protect users and the economy.
- Laws: European regulation (MiCA) and national directives.
- KYC/AML: know your customer / anti‑money laundering procedures.
- Impacts: more clarity for investors, though sometimes imposing constraints.
**Example** The MiCA regulation requires exchanges to register with relevant authorities.
**Key Takeaway** Following legal developments is essential to remain compliant and anticipate changes.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Regulation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Regulation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Regulation', url: 'https://www.investopedia.com/' }],
  },
  'taxes': {
    id: 'taxes',
    title: 'Crypto Taxes',
    category: 'fundamentals',
    objective: 'Obligations France/UE.',
    content: `**Summary** Crypto taxes involve declaring gains and losses from transactions according to your country's regulations.
- Obligations: declare capital gains and follow local rules (France, EU).
- Calculation: difference between sale price and purchase price, including fees.
- Regimes: flat tax for individuals, professional regime for frequent traders.
**Example** Fill in the annual tax return by reporting crypto gains.
**Key Takeaway** Understanding taxes avoids penalties and helps optimise your situation.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Crypto Taxes', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Crypto Taxes', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Crypto Taxes', url: 'https://www.investopedia.com/' }],
  },
  'hardware-wallet': {
    id: 'hardware-wallet',
    title: 'Hardware Wallet',
    category: 'fundamentals',
    objective: 'Sécurité maximale (Ledger, Trezor).',
    content: `**Summary** Hardware wallets are physical devices that isolate private keys from your computer and offer maximum security.
- Advantages: resistance to hacking, offline use, secure transaction signing.
- Brands: Ledger, Trezor, KeepKey.
- Operation: keys never leave the device; each transaction is manually confirmed.
**Example** Using a Ledger Nano to sign Metamask transactions via Bluetooth or USB.
**Key Takeaway** Investing in a hardware wallet is essential to secure large crypto holdings.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Hardware Wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Hardware Wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Hardware Wallet', url: 'https://www.investopedia.com/' }],
  },
  'backup-wallet': {
    id: 'backup-wallet',
    title: 'Wallet Backup',
    category: 'fundamentals',
    objective: 'Clés et seed phrase.',
    content: `**Summary** Backing up your wallet means keeping a secure copy of your private keys or seed phrase to restore access to your funds.
- Seed phrase: write the phrase on paper and store it in multiple safe locations.
- Physical backup: use metal plates resistant to fire and water.
- Updating: each time you create a new wallet, back it up immediately.
**Example** Write the seed phrase on paper and store it in a safe.
**Key Takeaway** A good backup protects against accidental loss and hardware failure.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Wallet Backup', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Wallet Backup', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Wallet Backup', url: 'https://www.investopedia.com/' }],
  },
  'rugpulls': {
    id: 'rugpulls',
    title: 'Rug Pulls',
    category: 'fundamentals',
    objective: 'Comment les repérer.',
    content: `**Summary** Rug pulls are projects where developers disappear with funds, leaving investors with worthless tokens.
- Signs: anonymous team, unaudited code, unrealistic return promises.
- Consequences: total loss of invested capital.
- Prevention: do your research, favour transparent and audited projects.
**Example** A DeFi project that closes overnight, taking the liquidity.
**Key Takeaway** Caution is vital; diversify and avoid offers too good to be true.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Rug Pulls', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Rug Pulls', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Rug Pulls', url: 'https://www.investopedia.com/' }],
  },
  'scams': {
    id: 'scams',
    title: 'Scams',
    category: 'fundamentals',
    objective: 'Phishing, faux sites, promesses douteuses.',
    content: `**Summary** Crypto scams exploit users' trust via phishing, fake airdrops and unrealistic promises.
- Phishing: messages mimicking official services to steal information.
- Fake airdrops: free tokens conditioned on entering your private key or sending money.
- Schemes: Ponzi schemes guaranteeing fixed returns.
**Example** A fake Metamask website asking for your seed phrase to steal funds.
**Key Takeaway** Check URLs, never share your information and beware deals that seem too good to be true.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Scams', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Scams', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Scams', url: 'https://www.investopedia.com/' }],
  },
  'key-security': {
    id: 'key-security',
    title: 'Private Key Security',
    category: 'fundamentals',
    objective: 'Ne jamais partager.',
    content: `**Summary** Private key security is essential to protect your cryptocurrencies and prevent unauthorised access.
- Private key: secret code enabling spending of crypto; must never be disclosed.
- Seed phrase: backup list of words; to store offline.
- Best practices: use hardware wallets, avoid suspicious links, enable two‑factor authentication.
**Example** Never send your seed phrase via email or enter it on a website.
**Key Takeaway** Losing or exposing your private key results in permanent loss of funds.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Private Key Security', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Private Key Security', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Private Key Security', url: 'https://www.investopedia.com/' }],
  },
  'metaverse': {
    id: 'metaverse',
    title: 'Metaverse and Crypto',
    category: 'fundamentals',
    objective: 'L’avenir immersif du Web3.',
    content: `**Summary** The metaverse is a persistent virtual universe where users can interact, work, play and own digital goods.
- Virtual land: plots bought and sold as NFTs.
- Avatars: digital representation of a person in the virtual world.
- Economy: goods and services sold in cryptocurrencies.
**Example** Attending a virtual concert in the metaverse with your avatar.
**Key Takeaway** The metaverse combines immersion, digital ownership and new forms of socialisation.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Metaverse and Crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Metaverse and Crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Metaverse and Crypto', url: 'https://www.investopedia.com/' }],
  },
  'social-tokens': {
    id: 'social-tokens',
    title: 'Social Tokens',
    category: 'fundamentals',
    objective: 'Créer des communautés.',
    content: `**Summary** Social tokens are assets that allow the creation and unification of a community around a creator or project.
- Function: grant access rights, voting power or exclusive benefits to members.
- Creators: artists, influencers or communities wishing to monetise their base.
- Tokenomics: distribution and usage designed to strengthen the community.
**Example** Holding a creator's tokens to access exclusive content and vote on creations.
**Key Takeaway** Social tokens transform the relationship between creators and fans.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Social Tokens', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Social Tokens', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Social Tokens', url: 'https://www.investopedia.com/' }],
  },
  'web3-identity': {
    id: 'web3-identity',
    title: 'Web3 Identity',
    category: 'fundamentals',
    objective: 'ENS, Lens, soulbound tokens.',
    content: `**Summary** Web3 identity represents who you are on the blockchain through pseudonyms, domain names and decentralised attestations.
- ENS (Ethereum Name Service): .eth names linked to an address.
- Soulbound tokens: non‑transferable tokens attesting to a skill or status.
- Lens Protocol: decentralised social network based on user identity.
**Example** Owning an ENS name to simplify transactions to your address.
**Key Takeaway** Web3 identity strengthens ownership and online reputation.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Web3 Identity', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Web3 Identity', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Web3 Identity', url: 'https://www.investopedia.com/' }],
  },
  'dao-intro': {
    id: 'dao-intro',
    title: 'DAO',
    category: 'fundamentals',
    objective: 'Gouvernance communautaire.',
    content: `**Summary** A DAO (decentralised autonomous organisation) is an entity governed by smart contracts and its members via a tokenised voting system.
- Governance: decisions taken collectively by token holders.
- Transparency: every action and transaction is public on the blockchain.
- Examples: MakerDAO, Uniswap, ConstitutionDAO.
**Example** Proposing and voting on a protocol improvement in a DAO.
**Key Takeaway** DAOs redefine governance by removing traditional hierarchy.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'DAO', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'DAO', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'DAO', url: 'https://www.investopedia.com/' }],
  },
  'marketplaces': {
    id: 'marketplaces',
    title: 'NFT Marketplaces',
    category: 'fundamentals',
    objective: 'OpenSea, Magic Eden.',
    content: `**Summary** NFT marketplaces are platforms where you create, sell and buy unique digital assets.
- Platforms: OpenSea, Magic Eden, Foundation; each has its own specialty.
- Operation: connect via a wallet, create or bid, smart contracts manage the exchange.
- Fees: service and gas fees depending on the blockchain.
**Example** Selling a digital artwork on OpenSea in a few clicks.
**Key Takeaway** Choosing the right marketplace depends on the type of art or ecosystem targeted.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'NFT Marketplaces', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'NFT Marketplaces', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'NFT Marketplaces', url: 'https://www.investopedia.com/' }],
  },
  'nft-utility': {
    id: 'nft-utility',
    title: 'Utility NFTs',
    category: 'fundamentals',
    objective: 'Accès, gaming, identité.',
    content: `**Summary** Some NFTs offer utility beyond collection, such as granting access to services, events or games.
- Access: tickets for concerts, membership to private clubs.
- Gaming: items, avatars or unique powers usable in blockchain games.
- Identity: badges attesting to skills or participation.
**Example** An NFT granting access to a private community and online conferences.
**Key Takeaway** Utility reinforces an NFT's value by making it functional.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Utility NFTs', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Utility NFTs', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Utility NFTs', url: 'https://www.investopedia.com/' }],
  },
  'mint-nft': {
    id: 'mint-nft',
    title: 'Mint an NFT',
    category: 'fundamentals',
    objective: 'Processus de minting.',
    content: `**Summary** Minting an NFT means registering a creation on the blockchain to give it a verifiable digital existence.
- Creation: prepare the work (image, audio, video) and metadata.
- Platform: choose a marketplace (OpenSea, Rarible) and connect your wallet.
- Gas fees: pay the transaction cost to record the work on the chain.
**Example** Publishing a photo on OpenSea and receiving an NFT in return.
**Key Takeaway** Minting formalises a work's digital existence and allows it to be sold.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Mint an NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Mint an NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Mint an NFT', url: 'https://www.investopedia.com/' }],
  },
  'nft-basics': {
    id: 'nft-basics',
    title: 'What is an NFT?',
    category: 'fundamentals',
    objective: 'Propriété numérique unique.',
    content: `**Summary** An NFT (non‑fungible token) is a unique digital asset representing ownership, certified via the blockchain.
- Uniqueness: each NFT has a unique identifier and cannot be exchanged one‑for‑one.
- Ownership: proof of authenticity and immutable ownership.
- Uses: art, music, games, digital identities.
**Example** Owning an art NFT proving you hold a digital artwork.
**Key Takeaway** NFTs open new forms of value and creative monetisation.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'What is an NFT?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'What is an NFT?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'What is an NFT?', url: 'https://www.investopedia.com/' }],
  },
  'bridges-defi': {
    id: 'bridges-defi',
    title: 'DeFi Bridges',
    category: 'fundamentals',
    objective: 'Connecter plusieurs écosystèmes.',
    content: `**Summary** DeFi bridges link different decentralised finance ecosystems by facilitating value transfers between chains.
- Cross‑chain: allow users to move assets to benefit from opportunities across networks.
- Protocols: Synapse, Multichain, LayerZero act as secure gateways.
- Risks: bugs, hacks, varying fees and delays.
**Example** Moving stablecoins from Ethereum to Avalanche to stake on TraderJoe.
**Key Takeaway** Choosing a reliable bridge is key to minimising risks.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'DeFi Bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'DeFi Bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'DeFi Bridges', url: 'https://www.investopedia.com/' }],
  },
  'onchain-tools': {
    id: 'onchain-tools',
    title: 'On-chain Tools',
    category: 'fundamentals',
    objective: 'Outils : Etherscan, DeBank, Zapper.',
    content: `**Summary** On‑chain tools allow you to analyse blockchain transactions and data in real time.
- Explorers: Etherscan, BscScan to track addresses, transactions and contracts.
- Aggregators: DeBank, Zapper to view a multi‑chain portfolio.
- Analytics: Dune Analytics, Nansen to extract metrics and trends.
**Example** Checking Etherscan to verify that a transaction is confirmed.
**Key Takeaway** On‑chain tools are essential for transparency and tracking.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'On-chain Tools', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'On-chain Tools', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'On-chain Tools', url: 'https://www.investopedia.com/' }],
  },
  'wrapped-tokens': {
    id: 'wrapped-tokens',
    title: 'Wrapped Tokens',
    category: 'fundamentals',
    objective: 'Compatibilité inter-chaînes.',
    content: `**Summary** Wrapped tokens are tokenised versions of an asset on another blockchain to enable interoperability.
- Operation: original asset is deposited in a contract and an equivalent token is minted on another chain.
- Examples: WBTC (Bitcoin on Ethereum), WETH (wrapped Ether).
- Utility: access DeFi without leaving the underlying asset.
**Example** Using WBTC to borrow on Aave via Ethereum.
**Key Takeaway** Wrapped tokens facilitate cross‑chain interactions but depend on trust in the issuer.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Wrapped Tokens', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Wrapped Tokens', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Wrapped Tokens', url: 'https://www.investopedia.com/' }],
  },
  'risks': {
    id: 'risks',
    title: 'Risks',
    category: 'fundamentals',
    objective: 'Perte impermanente, rug pulls.',
    content: `**Summary** DeFi risks include impermanent loss, smart contract bugs and scams.
- Impermanent loss: drop in the value of your assets compared to holding when providing liquidity.
- Bugs and hacks: a vulnerable contract may lead to total loss of funds.
- Rug pull: dishonest developers withdrawing a project's liquidity.
**Example** A protocol hack like the Poly Network breach.
**Key Takeaway** Evaluate code, team and community to limit these risks.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Risks', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Risks', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Risks', url: 'https://www.investopedia.com/' }],
  },
  'lending': {
    id: 'lending',
    title: 'Lending and Borrowing',
    category: 'fundamentals',
    objective: 'Gagner ou emprunter avec crypto.',
    content: `**Summary** Decentralised lending and borrowing enable users to obtain liquidity or yield without banks.
- Platforms: Aave, Compound; loans are over‑collateralised to manage risk.
- Collateral: asset deposited as security to borrow another asset.
- Interest rates: variable based on market demand and supply.
**Example** Borrowing USDC by depositing BTC as collateral.
**Key Takeaway** These services democratise credit but require monitoring collateral ratios.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Lending and Borrowing', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Lending and Borrowing', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Lending and Borrowing', url: 'https://www.investopedia.com/' }],
  },
  'staking': {
    id: 'staking',
    title: 'Staking',
    category: 'fundamentals',
    objective: 'Récompense pour participation.',
    content: `**Summary** Staking allows participants to help secure a network and earn rewards by locking tokens.
- Proof of Stake: replaces mining with token lockup.
- Rewards: tokens earned in proportion to stake amount and duration.
- Validators: actors who validate blocks and receive fees.
**Example** Staking ADA on the Cardano network to receive rewards.
**Key Takeaway** Staking is a passive way to support a network and earn yield.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Staking', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Staking', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Staking', url: 'https://www.investopedia.com/' }],
  },
  'yield-farming': {
    id: 'yield-farming',
    title: 'Yield Farming',
    category: 'fundamentals',
    objective: 'Générer des revenus passifs.',
    content: `**Summary** Yield farming consists of optimising returns by placing tokens on multiple DeFi protocols.
- Strategies: provide liquidity then stake LP tokens, arbitrage between protocols.
- Rewards: incentive tokens, transaction fees, interest.
- Risks: volatility, faulty smart contracts, variable yields.
**Example** Farming a DeFi token by depositing stablecoins on Curve then staking the CRV.
**Key Takeaway** Yield farming can be lucrative but must be closely monitored.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Yield Farming', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Yield Farming', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Yield Farming', url: 'https://www.investopedia.com/' }],
  },
  'liquidity-pools': {
    id: 'liquidity-pools',
    title: 'Liquidity Pools',
    category: 'fundamentals',
    objective: 'Échanges automatisés.',
    content: `**Summary** Liquidity pools are reserves of tokens deposited by users to enable automated exchanges on DEX.
- Operation: depositors supply two assets into a smart contract.
- AMM (Automated Market Maker): algorithm that sets the price based on pool supply and demand.
- Incentives: liquidity providers earn a share of transaction fees.
**Example** Depositing ETH and USDC on Uniswap to earn trading fees.
**Key Takeaway** Pools provide liquidity but carry impermanent loss risk.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Liquidity Pools', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Liquidity Pools', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Liquidity Pools', url: 'https://www.investopedia.com/' }],
  },
  'defi-intro': {
    id: 'defi-intro',
    title: 'What is DeFi?',
    category: 'fundamentals',
    objective: 'La finance sans intermédiaire.',
    content: `**Summary** DeFi (decentralised finance) encompasses financial services executed by smart contracts without intermediaries.
- Products: lending, borrowing, exchanges, insurance and derivatives.
- Advantages: transparency, global accessibility, no banks.
- Risks: vulnerable code, asset volatility, unclear regulation.
**Example** Borrowing DAI against a deposit of ETH on Aave.
**Key Takeaway** DeFi revolutionises financial services but requires caution.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'What is DeFi?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'What is DeFi?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'What is DeFi?', url: 'https://www.investopedia.com/' }],
  },
  'bridges': {
    id: 'bridges',
    title: 'Bridges',
    category: 'fundamentals',
    objective: 'Relier plusieurs blockchains.',
    content: `**Summary** Bridges allow tokens to be transferred from one blockchain to another by locking the asset on one chain and recreating it on the destination chain.
- Operation: the source token is locked and an equivalent token is minted on the destination chain.
- Risks: smart contract bugs, hacks, losses due to exchange rates.
- Utility: access ecosystems and specific applications (e.g. ETH to BNB).
**Example** Using a bridge to move USDC from Ethereum to Polygon to benefit from lower fees.
**Key Takeaway** Bridges are convenient but require careful assessment of risks.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Bridges', url: 'https://www.investopedia.com/' }],
  },
  'exchanges': {
    id: 'exchanges',
    title: 'CEX vs DEX',
    category: 'fundamentals',
    objective: 'Plateformes centralisées et décentralisées.',
    content: `**Summary** Crypto trading can occur via centralised exchanges (CEX) or decentralised exchanges (DEX).
- CEX: Binance, Coinbase; provide liquidity and services but require identification (KYC).
- DEX: Uniswap, PancakeSwap; operate without intermediaries using blockchain.
- Pros and cons: fees, security, and ownership of keys.
**Example** Trading tokens on Uniswap directly from your wallet.
**Key Takeaway** Choosing between CEX and DEX depends on experience and needs.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'CEX vs DEX', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'CEX vs DEX', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'CEX vs DEX', url: 'https://www.investopedia.com/' }],
  },
  'send-receive': {
    id: 'send-receive',
    title: 'Send / Receive',
    category: 'fundamentals',
    objective: 'Transactions sécurisées.',
    content: `**Summary** Sending or receiving cryptocurrencies involves using a public address and checking network fees.
- Public address: unique identifier to which tokens can be sent.
- Private key: secret that signs transactions and grants access to funds.
- Network: each blockchain has its own fees and confirmation times.
**Example** Copy an ERC‑20 address to receive USDC; check the network before sending.
**Key Takeaway** Address or network errors can lead to irreversible loss.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Send / Receive', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Send / Receive', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Send / Receive', url: 'https://www.investopedia.com/' }],
  },
  'metamask-tutorial': {
    id: 'metamask-tutorial',
    title: 'Create a MetaMask Wallet',
    category: 'fundamentals',
    objective: 'Tutoriel pratique.',
    content: `**Summary** Metamask is a browser extension wallet that lets you manage tokens and interact with Web3 applications.
- Installation: download the official extension from your browser's store.
- Account creation: generate a seed phrase and choose a local password.
- Network management: add networks like Polygon, Binance Smart Chain.
- Security: never share your seed phrase and always verify the URL before signing a transaction.
**Example** Connecting to a DeFi platform via Metamask and signing a transaction.
**Key Takeaway** Metamask is the gateway to Web3; its use requires vigilance and discipline.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Create a MetaMask Wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Create a MetaMask Wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Create a MetaMask Wallet', url: 'https://www.investopedia.com/' }],
  },
  'wallets': {
    id: 'wallets',
    title: 'Crypto Wallets',
    category: 'fundamentals',
    objective: 'Portefeuilles numériques sécurisés.',
    content: `**Summary** A wallet is software or hardware that allows you to store, send and receive cryptocurrencies securely.
- Software wallet (hot wallet): mobile app or browser extension (Metamask, Phantom).
- Hardware wallet (cold wallet): physical device (Ledger, Trezor) for maximum security.
- Seed phrase: list of words used to restore wallet access; must be kept secret.
**Example** Creating a Metamask account and backing up the seed phrase on paper.
**Key Takeaway** Wallet security is essential to protect your crypto assets.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Crypto Wallets', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Crypto Wallets', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Crypto Wallets', url: 'https://www.investopedia.com/' }],
  },
  'stablecoins': {
    id: 'stablecoins',
    title: 'Stability in Crypto',
    category: 'fundamentals',
    objective: 'Usage et utilité.',
    content: `**Summary** Stablecoins are cryptocurrencies designed to maintain a stable value, often pegged to a fiat currency like the US dollar.
- Types: fiat‑collateralised (USDC, USDT) or algorithmic (DAI).
- Utility: protect against volatility, facilitate payments and trading.
- Risks: reserve failure or temporary depeg.
**Example** Holding USDC to store profits without exiting the crypto ecosystem.
**Key Takeaway** Stablecoins are a foundational building block for decentralised finance.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Stability in Crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Stability in Crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Stability in Crypto', url: 'https://www.investopedia.com/' }],
  },
  'altcoins': {
    id: 'altcoins',
    title: 'Altcoins',
    category: 'fundamentals',
    objective: 'Autres tokens aux rôles variés.',
    content: `**Summary** Altcoins are all cryptocurrencies other than Bitcoin; they serve various roles and experiments.
- Alternative cryptos: Ethereum, Solana, Cardano, Dogecoin and thousands more.
- Varied roles: smart contract platforms, utility tokens, stablecoins, governance tokens.
- Potential: more innovation but also more risk than Bitcoin.
**Example** A governance token like UNI gives voting rights on Uniswap.
**Key Takeaway** Altcoins are diverse and require thorough analysis before investing.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Altcoins', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Altcoins', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Altcoins', url: 'https://www.investopedia.com/' }],
  },
  'ethereum-basics': {
    id: 'ethereum-basics',
    title: 'Ethereum and Smart Contracts',
    category: 'fundamentals',
    objective: 'Programmabilité du Web3.',
    content: `**Summary** Ethereum is a blockchain platform launched in 2015 introducing smart contracts, enabling programmable decentralised applications.
- Ethereum: decentralised network for deploying smart contracts and tokens.
- Smart contracts: self‑executing programs encoding rules and agreements.
- Ether (ETH): native currency used to pay transaction fees (gas).
- Ecosystem: DeFi, NFT, DAO and other innovations built on Ethereum.
**Example** Launching an ERC‑20 token or creating an NFT on the Ethereum blockchain.
**Key Takeaway** Ethereum is the programmable base of Web3.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Ethereum and Smart Contracts', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Ethereum and Smart Contracts', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Ethereum and Smart Contracts', url: 'https://www.investopedia.com/' }],
  },
  'bitcoin-story': {
    id: 'bitcoin-story',
    title: 'The Story of Bitcoin',
    category: 'fundamentals',
    objective: 'Le premier réseau monétaire libre.',
    content: `**Summary** Bitcoin was launched in 2009 in response to the financial crisis, offering a free, transparent and decentralised monetary network.
- Origin: created by pseudonymous Satoshi Nakamoto.
- Goal: enable peer‑to‑peer value transfers without banks.
- Limited supply: only 21 million bitcoins, making the asset scarce.
- Bitcoin blockchain: public chain where every transaction is transparent.
**Example** Buying a product online and paying with bitcoin via a wallet address.
**Key Takeaway** Bitcoin is the first censorship‑resistant digital currency.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'The Story of Bitcoin', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'The Story of Bitcoin', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'The Story of Bitcoin', url: 'https://www.investopedia.com/' }],
  },
  'consensus': {
    id: 'consensus',
    title: 'Proof of Work / Proof of Stake',
    category: 'fundamentals',
    objective: 'Comprendre les mécanismes de validation.',
    content: `**Summary** Consensus is the mechanism by which blockchain participants agree on the state of the ledger without a central authority.
- Proof of Work: security through computing power, requiring miners.
- Proof of Stake: security through staking tokens, requiring validators.
- Mining: solving computations to propose a block (PoW).
- Staking: locking tokens to participate in validation (PoS).
**Example** Bitcoin uses PoW while Ethereum has migrated to PoS.
**Key Takeaway** Consensus mechanisms replace trust with mathematical rules.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Proof of Work / Proof of Stake', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Proof of Work / Proof of Stake', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Proof of Work / Proof of Stake', url: 'https://www.investopedia.com/' }],
  },
  'blockchain-intro': {
    id: 'blockchain-intro',
    title: 'What is a Blockchain?',
    category: 'fundamentals',
    objective: 'Comprendre la structure blockchain.',
    content: `**Summary** A blockchain is a distributed ledger where transactions are grouped into blocks linked cryptographically, creating an immutable and transparent chain.
- Block: set of verified transactions connected to the previous one through a hash.
- Hash: unique cryptographic fingerprint ensuring a block's integrity.
- Ledger: public record storing the complete history.
**Example** A Bitcoin transaction is included in a block which is then added to the chain.
**Key Takeaway** Blockchain provides security, transparency and immutability of data.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'What is a Blockchain?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'What is a Blockchain?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'What is a Blockchain?', url: 'https://www.investopedia.com/' }],
  },
  'decentralization': {
    id: 'decentralization',
    title: 'The Power of Decentralization',
    category: 'fundamentals',
    objective: 'Comprendre pourquoi la décentralisation est révolutionnaire.',
    content: `**Summary** Decentralisation means distributing power and data across a network of independent nodes instead of relying on a single authority.
- Decentralisation: removal of a single point of control and failure.
- Node: computer participating in validating and propagating transactions.
- Advantages: resilience, transparency, resistance to censorship and reduced corruption.
**Example** Bitcoin operates thanks to thousands of nodes validating blocks.
**Key Takeaway** Decentralisation fosters freedom and trust without intermediaries.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'The Power of Decentralization', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'The Power of Decentralization', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'The Power of Decentralization', url: 'https://www.investopedia.com/' }],
  },
  'web3-intro': {
    id: 'web3-intro',
    title: 'What is Web3?',
    category: 'fundamentals',
    objective: 'Définir le Web3.',
    content: `**Summary** Web3 refers to an Internet built on blockchain where users own their digital assets via tokens and smart contracts.
- Web3: convergence of blockchain, tokenisation and digital ownership.
- Token: digital unit that represents a value or right.
- Smart contract: self‑executing program enforcing rules without middlemen.
**Example** Using a wallet and signing a transaction to interact with a decentralised app without a login or password.
**Key Takeaway** Web3 brings transparency, immutability and freedom to users.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'What is Web3?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'What is Web3?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'What is Web3?', url: 'https://www.investopedia.com/' }],
  },
  'data-ownership': {
    id: 'data-ownership',
    title: 'Data as Wealth',
    category: 'fundamentals',
    objective: 'Comprendre la valeur des données personnelles.',
    content: `**Summary** In Web2, platforms capture the value of our data. Web3 allows creators and users to reclaim this wealth.
- Data ownership: the right to possess and control personal information.
- Big data: large volumes of information collected by platforms about our behaviour.
- Web3: model where users can monetise their data through tokens or decentralised apps.
**Example** Being paid for the use of your data by a Web3 application.
**Key Takeaway** Regaining control of data is a key pillar of Web3.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Data as Wealth', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Data as Wealth', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Data as Wealth', url: 'https://www.investopedia.com/' }],
  },
  'internet-evolution': {
    id: 'internet-evolution',
    title: 'From Web1 to Web3',
    category: 'fundamentals',
    objective: 'Comprendre l’évolution d’Internet.',
    content: `**Summary** The Internet evolved from Web1 (read) to Web2 (interaction) to Web3 (ownership and decentralisation). Each generation gives users more rights.
- Web1: static pages with no interaction.
- Web2: social platforms where everyone can publish and comment, but data is centralised.
- Web3: blockchain‑based Internet giving ownership of data and assets to users.
**Example** YouTube (Web2) is controlled by a company, whereas NFTs (Web3) let people exchange unique digital goods.
**Key Takeaway** Web3 aims to make the Internet fairer by redistributing the value it creates.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'From Web1 to Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'From Web1 to Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'From Web1 to Web3', url: 'https://www.investopedia.com/' }],
  },
  'what-is-fiat': {
    id: 'what-is-fiat',
    title: 'Fiat Money and Its Limits',
    category: 'fundamentals',
    objective: 'Comprendre les limites du système monétaire actuel.',
    content: `**Summary** Fiat money is issued by a state through a central bank. It relies on trust and can be diluted by inflation and public debt.
- Fiat: legal tender with no intrinsic value, backed by collective confidence.
- Inflation: general rise in prices that reduces purchasing power.
- Central bank: institution managing money issuance and monetary policy.
- Limitations: risk of devaluation, unlimited money printing, centralised control.
**Example** A central bank printing too much money can trigger loss of value.
**Key Takeaway** Cryptocurrencies offer a transparent and limited alternative to potential fiat abuses.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Fiat Money and Its Limits', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Fiat Money and Its Limits', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Fiat Money and Its Limits', url: 'https://www.investopedia.com/' }],
  },
  'money-evolution': {
    id: 'money-evolution',
    title: 'History of Money',
    category: 'fundamentals',
    objective: 'Comprendre l’évolution de l’échange de valeur, du troc à la monnaie numérique.',
    content: `**Summary** The history of money traces the journey from barter to coins, paper money, fiat currencies and finally digital currencies. Each step simplified trade and enabled more complex economies.
- Barter: direct exchange of goods, limited by the coincidence of needs.
- Precious metals: universally accepted but heavy to transport and store.
- Banknotes and banks: representation of value stored securely and traceable.
- Digital and mobile money: electronic banking and instant payments.
- Cryptocurrencies: decentralised, transparent and censorship‑resistant assets.
**Example** An instant bank transfer shows how value now moves as pure information.
**Key Takeaway** Crypto continues this evolution by bringing decentralisation, security and transparency.`,
    quiz: [
      { question: 'Question 1: key point?', options: ['Answer A','Answer B','Answer C'], correctAnswer: 1 },
      { question: 'Question 2: must-know?', options: ['Choice 1','Choice 2','Choice 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'History of Money', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'History of Money', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'History of Money', url: 'https://www.investopedia.com/' }],
  },
  // BASICS
  '6-rules-of-trading': {
    id: '6-rules-of-trading',
    title: 'The 6 Golden Rules of Trading',
    category: 'basics',
    objective: 'Master fundamental principles for successful trading',
    content: `These 6 rules form the foundation of every successful trader. Follow them religiously and you'll significantly increase your chances of success.

**1. Always have a trading plan**

Never enter a position without knowing exactly why, at what price to enter, where to place your stop-loss and where to take profits. A detailed plan eliminates emotional decisions.

**2. Manage your risk (Risk Management)**

As seen before, never risk more than 1-2% of your capital per trade. This rule alone can make the difference between survival and bankruptcy.

**3. Keep a trading journal**

Record ALL your trades: entry, exit, reason, emotions felt, result. This journal is your best learning source. You'll quickly see your error patterns.

**4. Control your emotions**

Fear and greed are your worst enemies. Stick to your plan, even when it's difficult. A good trader is disciplined, not emotional.

**5. Never trade with money you need**

Only use money you can afford to lose. Trading with "urgent" money creates unbearable stress leading to bad decisions.

**6. Learn continuously**

Markets evolve. What worked yesterday may not work tomorrow. Stay humble, keep learning, testing, adapting. The best traders are perpetual students.`,
    quiz: [
      {
        question: 'What is the first thing to do before entering a position?',
        options: ['Buy immediately', 'Have a clear trading plan', 'Ask for opinions on Twitter'],
        correctAnswer: 1,
  },
      {
        question: 'Why keep a trading journal?',
        options: ['It\'s legally required', 'To identify mistakes and improve', 'To impress friends'],
        correctAnswer: 1
      },
      {
        question: 'What is a trader\'s worst enemy?',
        options: ['Transaction fees', 'Emotions (fear and greed)', 'Lack of Internet'],
        correctAnswer: 1
      },
      {
        question: 'What should a trading journal contain?',
        options: ['Only winning trades', 'All trades with entry, exit, reason and emotions', 'Only monthly results'],
        correctAnswer: 1
      },
      {
        question: 'Why should you never trade with money you need?',
        options: ['It creates stress leading to bad decisions', 'It\'s illegal', 'Platforms forbid it'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'type-of-trader': {
    id: 'type-of-trader',
    title: 'Different Types of Traders',
    category: 'basics',
    objective: 'Identify your trading style to maximize success',
    content: `Not all traders are the same. Understanding different styles helps you find what best fits your personality and schedule.

**The Scalper**

Makes dozens or hundreds of trades per day, with positions lasting seconds to minutes. Seeks small, quick, repeated profits. Requires extreme focus, excellent internet and lots of screen time.

**The Day Trader**

Opens and closes all positions within the same day. Never keeps positions overnight. Requires several hours per day and good mastery of short-term technical analysis.

**The Swing Trader**

Keeps positions from days to weeks. Seeks to capture "swings" or significant price movements. Ideal if you have a full-time job as it doesn't require constant monitoring.

**The Position Trader (or Long-term Investor)**

Keeps positions for months or years. Based primarily on fundamental analysis and macroeconomic trends. Least stressful but requires patience.

**The Algorithmic Trader**

Uses robots and algorithms to trade automatically according to predefined rules. Requires programming skills.

**Which style suits you?**

Ask yourself: how much time can I dedicate to trading daily? What's my stress tolerance? Do I prefer quick action or patience? Your answers determine your optimal style.`,
    quiz: [
      {
        question: 'What is the main characteristic of a scalper?',
        options: ['Keeps positions for months', 'Makes dozens of trades per day', 'Only trades Bitcoin'],
        correctAnswer: 1,
  },
      {
        question: 'Which style suits best if you have a full-time job?',
        options: ['Scalping', 'Day Trading', 'Swing Trading'],
        correctAnswer: 2
      },
      {
        question: 'What does a Day Trader do at end of day?',
        options: ['Keeps all positions open', 'Closes all positions', 'Doubles positions'],
        correctAnswer: 1
      },
      {
        question: 'How long does a Position Trader keep positions?',
        options: ['Few minutes', 'One day only', 'Months or even years'],
        correctAnswer: 2
      },
      {
        question: 'Which trading type requires programming skills?',
        options: ['Day Trading', 'Algorithmic Trading', 'Swing Trading'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'what-is-leverage-in-trading': {
    id: 'what-is-leverage-in-trading',
    title: 'What is Leverage in Trading?',
    category: 'basics',
    objective: 'Understand leverage and its risks',
    content: `Leverage is a powerful but extremely dangerous tool. Understanding how it works is crucial before using it.

**What is Leverage?**

Leverage allows you to trade with more money than you actually have. For example, with x10 leverage, if you have €100, you can trade as if you had €1000.

**How does it work?**

The exchange temporarily "lends" you money to amplify your position. If price moves in your favor, your gains are multiplied. But attention: your losses are also multiplied.

**Concrete example**

Without leverage:
- Capital: €100
- BTC Price: €40,000
- You buy: 0.0025 BTC
- Price rises to €42,000 (+5%)
- Your gain: €5 (new total: €105)

With x10 leverage:
- Capital: €100
- Equivalent position: €1000
- You control: 0.025 BTC
- Price rises to €42,000 (+5%)
- Your gain: €50 (new total: €150) 🎉

But if price drops 5%:
- Without leverage: €5 loss (remains €95)
- With x10 leverage: €50 loss (remains €50) 😱

**Dangers of Leverage**

With high leverage, just 10% move against you can liquidate your entire position. Liquidation means the exchange automatically closes your position and you lose all invested capital.

**Golden Rule**

If you're a beginner, DO NOT use leverage. Once experienced, limit yourself to x2 or x3 maximum. Leverages x50 or x100 are beginner traps.

**Cross vs Isolated Margin**

In Cross mode, all your capital can be used to maintain the position. In Isolated mode, only capital allocated to this specific position is at risk. Always prefer Isolated mode.`,
    quiz: [
      {
        question: 'What is x10 leverage?',
        options: ['You trade with 10 times your capital', 'You earn €10 per trade', 'You can make 10 trades'],
        correctAnswer: 0,
  },
      {
        question: 'With x5 leverage, if price drops 20%, what happens?',
        options: ['You lose €20', 'You get liquidated (total loss)', 'You double your money'],
        correctAnswer: 1
      },
      {
        question: 'Which margin mode is recommended to limit risks?',
        options: ['Cross Margin', 'Isolated Margin', 'Full Margin'],
        correctAnswer: 1
      },
      {
        question: 'What leverage level is recommended for beginners?',
        options: ['x50 or x100 to maximize gains', 'x10 minimum', 'No leverage, or maximum x2-x3'],
        correctAnswer: 2
      },
      {
        question: 'What happens during liquidation?',
        options: ['You win a bonus', 'Exchange closes your position and you lose invested capital', 'Your position automatically doubles'],
        correctAnswer: 1
      },
      {
        question: 'What\'s the difference between Cross Margin and Isolated Margin?',
        options: ['In Cross all capital can be used, in Isolated only allocated capital is at risk', 'Cross is safer than Isolated', 'There is no difference'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },

  'trading-plan': {
    id: 'trading-plan',
    title: 'Creating a Trading Plan',
    category: 'basics',
    objective: 'Learn to build a solid trading plan',
    content: `A trading plan is your roadmap to success. Without it, you're just gambling.

**What is a Trading Plan?**

It's a written document defining your approach to trading: your strategy, risk management rules, goals, and trading psychology.

**Essential Components**

**1. Your Goals**
- Monthly profit target (realistic!)
- Maximum acceptable loss
- Number of trades per week/month
- Trading style (scalping, swing, position)

**2. Your Strategy**
Which setups will you trade? RSI oversold + support tested 3 times? Resistance breakout?

Define precisely your entry criteria, stop-loss placement, take-profit targets.

**3. Risk Management**
- Maximum risk per trade (1-2%)
- Maximum simultaneous open positions
- Maximum daily/weekly loss
- Position sizing method

**4. Trading Schedule**
When will you trade? Which sessions (Asian, European, American)? Which days?

**5. Trading Journal**
How will you document your trades? What will you record?

**Example Simple Plan**

Goals: +5% monthly, max 10% monthly loss
Strategy: Breakouts on 4H timeframe
Entry: Price breaks resistance + RSI > 50 + increased volume
Stop-loss: Just below resistance
Risk: 2% per trade max
Trading: Monday-Friday, European session only
Journal: Google Sheets with all entries/exits

**Why It Works**

A written plan eliminates emotional decisions. When you feel FOMO or fear, you just follow your plan.`,
    quiz: [
      {
        question: 'What is the main purpose of a trading plan?',
        options: ['To impress others', 'To have a structured approach and eliminate emotions', 'To comply with regulations'],
        correctAnswer: 1,
  },
      {
        question: 'What should a trading plan contain?',
        options: ['Only entry strategy', 'Goals, strategy, risk management, schedule, journal', 'Just profit targets'],
        correctAnswer: 1
      },
      {
        question: 'How specific should entry conditions be?',
        options: ['Very vague', 'Extremely precise and detailed', 'It doesn\'t matter'],
        correctAnswer: 1
      },
      {
        question: 'Should a trading plan be written?',
        options: ['No, just remember it', 'Yes, in a document you can refer to', 'Only if you want'],
        correctAnswer: 1
      },
      {
        question: 'Can you modify your trading plan?',
        options: ['Never', 'Yes, based on analysis and reflection, not emotions', 'Every day'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },

  'risk-management': {
    id: 'risk-management',
    title: 'Risk Management in Trading',
    category: 'basics',
    objective: 'Learn to protect your capital and avoid unnecessary losses',
    content: `Risk management is the cornerstone of successful trading. Without a solid risk management strategy, even the best traders lose their capital.

**Why is Risk Management crucial?**

Trading isn't just about gains, but especially protecting your capital. A trader who doesn't manage risks can be right 90% of the time and lose everything in a few bad trades. Golden rule: "Never risk more than you can afford to lose."

**The 2% Rule**

One fundamental trading rule: never risk more than 2% of total capital on a single trade. For example, if you have €1000, you shouldn't risk more than €20 per position. This lets you sustain several consecutive losses without destroying your account.

**Stop-Loss: Your Best Friend**

Stop-loss is an automatic order closing your position if price reaches a certain loss level. It's your safety net. Define your stop-loss BEFORE entering a position is essential. Never move it to avoid exiting a losing trade - that's the hope trap ruining many traders.

**The Risk/Reward Ratio**

Always aim for minimum 1:2 or 1:3 ratio (risk:reward). If you risk €20, aim for at least €40 potential gain. This means even with 40% success rate, you can be profitable long-term.

**Concrete example of well-managed trade**

Imagine you have €1000 and want to buy Bitcoin:
- Capital: €1000
- Maximum risk (2%): €20
- Entry price: €40,000
- Stop-loss: €39,600 (€400/BTC loss)
- You can buy: €20 ÷ €400 = 0.05 BTC
- Take profit: €41,200 (€1200/BTC gain = €60 for you)
- R:R Ratio = 60:20 = 1:3 ✅

**Mistakes to avoid**

Never average down (buying more when it drops to "recover"), never trade with money you need, never ignore your stop-loss, and above all, never trade emotionally.`,
    quiz: [
      {
        question: 'What does the "2% rule" mean?',
        options: ['Never risk more than 2% of capital per trade', 'Always risk 20% minimum', 'Bet 2% of portfolio on each crypto'],
        correctAnswer: 0,
  },
      {
        question: 'What does a stop-loss do?',
        options: ['It buys more cryptos', 'It automatically sells at a loss', 'It blocks fees'],
        correctAnswer: 1
      },
      {
        question: 'What is the recommended minimum Risk/Reward ratio?',
        options: ['1:1', '1:2 or more', '3:1'],
        correctAnswer: 1
      },
      {
        question: 'What to do if your trade is losing and approaching stop-loss?',
        options: ['Move stop-loss further to avoid loss', 'Buy more to average down', 'Let stop-loss trigger as planned'],
        correctAnswer: 2
      },
      {
        question: 'With €2000 capital, what maximum should you risk per trade with 2% rule?',
        options: ['€20', '€40', '€100'],
        correctAnswer: 1
      },
      {
        question: 'Why is it important to define stop-loss BEFORE entering position?',
        options: ['To increase potential gains', 'To avoid emotional decisions in case of loss', 'To pay less fees'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },

  'trading-terms': {
    id: 'trading-terms',
    title: 'Essential Trading Terminology',
    category: 'basics',
    objective: 'Understand key trading terms',
    content: `Mastering trading vocabulary is essential to understand analyses and discussions.

**Market Terms**

**Bull Market (Bullish)**: Rising market, prices going up 📈
**Bear Market (Bearish)**: Falling market, prices going down 📉
**Sideways/Range**: Market without clear direction, oscillating between support and resistance

**Order Types**

**Long**: Buying expecting price to rise
**Short**: Selling expecting price to fall (without owning the asset)
**Market Order**: Buy/sell immediately at current price
**Limit Order**: Buy/sell at a specific price
**Stop-Loss**: Automatic sale if price reaches a loss level
**Take-Profit**: Automatic sale when profit target is reached

**Analysis Terms**

**Support**: Price level where buyers are strong enough to stop decline
**Resistance**: Price level where sellers are strong enough to stop rise
**Breakout**: When price breaks through support or resistance
**Pullback/Retracement**: Temporary price reversal in a trend
**Consolidation**: Period where price moves sideways after strong movement

**Indicators**

**Volume**: Amount of assets traded in a period
**Volatility**: Measure of price variation amplitude
**Liquidity**: Ease of buying/selling an asset without affecting price
**Slippage**: Difference between expected and actual execution price

**Trading Styles**

**Scalping**: Very short-term trading (seconds to minutes)
**Day Trading**: Closing all positions before day end
**Swing Trading**: Keeping positions days to weeks
**HODLing**: Buying and holding long-term (months/years)

**Crypto-Specific Terms**

**FOMO**: Fear Of Missing Out - buying under peer pressure
**FUD**: Fear, Uncertainty, Doubt - negative rumors
**ATH**: All-Time High - highest historical price
**ATL**: All-Time Low - lowest historical price
**Pump**: Rapid price surge
**Dump**: Rapid price crash
**Whale**: Investor holding huge amounts of crypto`,
    quiz: [
      {
        question: 'What does "Long" mean?',
        options: ['Keeping position for long time', 'Buying expecting price to rise', 'Selling an asset'],
        correctAnswer: 1,
  },
      {
        question: 'What is a Bull Market?',
        options: ['Rising market', 'Falling market', 'Sideways market'],
        correctAnswer: 0
      },
      {
        question: 'What does ATH mean?',
        options: ['All-Time High', 'Always Trade High', 'Average Trading Hour'],
        correctAnswer: 0
      },
      {
        question: 'What is FOMO?',
        options: ['Technical indicator', 'Fear Of Missing Out', 'Trading strategy'],
        correctAnswer: 1
      },
      {
        question: 'What does slippage mean?',
        options: ['Difference between expected and actual execution price', 'Trading fee', 'Type of order'],
        correctAnswer: 0
      },
      {
        question: 'What is a Whale in crypto?',
        options: ['Fast trader', 'Investor holding huge amounts', 'Type of blockchain'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },

  'dictionary': {
    id: 'dictionary',
    title: 'Complete Trading Dictionary',
    category: 'basics',
    objective: 'Reference guide for all trading terms',
    content: `Your complete reference guide for trading and crypto terminology.

**A**
**Altcoin**: Any cryptocurrency other than Bitcoin
**API**: Application Programming Interface - to connect trading bots
**Arbitrage**: Profiting from price differences between exchanges
**Ask**: Sell price (also called "offer")

**B**
**Bearish**: Negative, expecting price to fall
**Bid**: Buy price
**Blockchain**: Distributed ledger technology
**Bullish**: Positive, expecting price to rise

**C**
**Candlestick**: Chart showing open, high, low, close
**CEX**: Centralized Exchange (Binance, Coinbase...)
**Cold Wallet**: Offline crypto storage
**Cross**: Leverage mode using all available capital

**D**
**DEX**: Decentralized Exchange
**DCA**: Dollar Cost Averaging - regular buying
**Dead Cat Bounce**: Temporary rise in downtrend

**E**
**EMA**: Exponential Moving Average
**Exchange**: Platform for trading cryptocurrencies

**F**
**Fiat**: Traditional currency (EUR, USD...)
**Fill**: Order execution
**FOMO**: Fear Of Missing Out
**FUD**: Fear, Uncertainty, Doubt

**G**
**Gas Fees**: Transaction fees on blockchain
**HODL**: Hold On for Dear Life - keep long term

**I**
**ICO**: Initial Coin Offering
**Isolated**: Margin mode limiting risk to allocated amount

**K**
**KYC**: Know Your Customer - identity verification

**L**
**Leverage**: Trading with borrowed funds
**Liquidation**: Forced position closure
**Long**: Buy position

**M**
**Margin**: Borrowed funds for trading
**Market Cap**: Total value of all coins
**Moon**: Massive price increase

**O**
**Order Book**: List of buy/sell orders
**OTC**: Over The Counter - large off-exchange trades

**P**
**P2P**: Peer to Peer trading
**Paper Trading**: Practice with fake money
**Pump and Dump**: Manipulative price scheme

**R**
**ROI**: Return On Investment
**Resistance**: Price ceiling

**S**
**Satoshi**: Smallest Bitcoin unit (0.00000001 BTC)
**SMA**: Simple Moving Average
**Spread**: Difference between bid and ask
**Stablecoin**: Crypto pegged to fiat (USDT, USDC)
**Short**: Sell position
**Support**: Price floor

**T**
**TA**: Technical Analysis
**Take Profit**: Profit-taking order
**Timeframe**: Chart period (1m, 5m, 1H, 4H, 1D...)

**V**
**Volatility**: Price variation amplitude
**Volume**: Trading quantity

**W**
**Wallet**: Crypto storage
**Whale**: Large holder
**Whitepaper**: Project technical document`,
    quiz: [
      {
        question: 'What does HODL mean?',
        options: ['Hold On for Dear Life', 'High Order Digital Ledger', 'Help Our Decentralized Life'],
        correctAnswer: 0,
  },
      {
        question: 'What is an Altcoin?',
        options: ['Alternative Bitcoin', 'Any cryptocurrency other than Bitcoin', 'Fake cryptocurrency'],
        correctAnswer: 1
      },
      {
        question: 'What is DCA?',
        options: ['Digital Coin Analysis', 'Dollar Cost Averaging', 'Decentralized Crypto Assets'],
        correctAnswer: 1
      },
      {
        question: 'What is a Satoshi?',
        options: ['Bitcoin creator', 'Smallest Bitcoin unit', 'Japanese exchange'],
        correctAnswer: 1
      },
      {
        question: 'What does KYC mean?',
        options: ['Know Your Crypto', 'Keep Your Coins', 'Know Your Customer'],
        correctAnswer: 2
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'market-psychology': {
    id: 'market-psychology',
    title: 'Market Psychology',
    category: 'basics',
    objective: 'Understand the emotions that influence markets',
    content: `Market psychology is often more important than technical analysis. Understanding how emotions influence prices is essential.

**Emotional Market Cycles**

Markets follow predictable emotional cycles: euphoria, greed, denial, fear, capitulation then hope. Identifying where we are in this cycle can give you a considerable edge.

**Euphoria and Greed**

When everyone is talking about crypto, mainstream media is positive, even your hairdresser gives investment advice… it’s often a sign of a nearby top. Euphoria pushes prices to irrational levels.

**Fear and Capitulation**

Conversely, when the media declares “Bitcoin is dead,” no one wants to hear about crypto and prices are at multi‑month lows, it’s often the best time to buy. Warren Buffett sums it up: “Be fearful when others are greedy and greedy when others are fearful.”

**Confirmation Bias**

We all tend to seek information that confirms our existing beliefs. If you’re bullish on Bitcoin, you naturally ignore bearish analyses. Fight this bias by actively seeking contrary opinions.

**Herd Effect (FOMO)**

Fear Of Missing Out drives people to buy at the top because “everyone is making money.” Never enter a position because of FOMO. Always wait for your setup.

**Emotional Discipline**

The best traders remain rational when everyone else panics or gets excited. Having a plan and sticking to it, no matter what, is the key to long‑term success.`,
    quiz: [
      {
        question: 'When is often the best time to buy according to market psychology?',
        options: ['When everyone is euphoric', 'When the media declares Bitcoin dead', 'When your hairdresser gives you advice'],
        correctAnswer: 1,
  },
      {
        question: 'What does FOMO stand for?',
        options: ['Fear Of Missing Out', 'First Order Market Operation', 'Financial Optimization Method'],
        correctAnswer: 0
      },
      {
        question: 'According to Warren Buffett, when should you be greedy?',
        options: ['When others are greedy', 'When others are fearful', 'Always'],
        correctAnswer: 1
      },
      {
        question: 'What is confirmation bias?',
        options: ['Seeking only information that confirms our beliefs', 'Confirming trades by email', 'Double checking orders'],
        correctAnswer: 0
      },
      {
        question: 'What should you do when mainstream media is extremely positive about crypto?',
        options: ['Buy immediately', 'Be cautious – it may signal a top', 'Sell everything'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'trading-journal': {
    id: 'trading-journal',
    title: 'Keeping a Trading Journal',
    category: 'basics',
    objective: 'Learn how to document and analyze your trades',
    content: `A trading journal is your most powerful learning tool. Without it, you'll repeat the same mistakes indefinitely.

**What to record in your journal**

For each trade, note:
- Date and time of entry/exit
- Pair traded (BTC/USDT, ETH/USDT, etc.)
- Direction (Long/Short)
- Entry and exit price
- Position size
- Stop‑loss and take‑profit
- Reason for entry (technical setup, signal…)
- Emotion felt (confident, stressed, FOMO…)
- Result (profit/loss in € and %)
- Lessons learned

**The importance of honesty**

Be brutally honest in your journal. No one will read it but you. If you lost because of greed, write it down. If you ignored your stop‑loss, note it.

**Weekly review**

Each week, review your trades:
- What is your win rate?
- Which setups work best?
- Which mistakes occur most often?
- On which pairs are you most profitable?

**Example simplified journal**

Date: 15/03/2024 10:30  
Pair: BTC/USDT  
Direction: LONG  
Entry: $65 000  
Stop‑loss: $64 500  
Take‑profit: $66 500  
Size: 0.1 BTC  
Reason: Resistance breakout + RSI leaving oversold  
Emotion: Confident, clear setup  
Result: +$150 (+2.3%)  
Lesson: Good respect of the plan

**Tools for your journal**

You can use:
- A simple Excel/Google Sheets file
- A dedicated app like Edgewonk or TradingView
- A paper notebook (less convenient for analysis)

**Why it works**

Simply writing forces you to think before acting. You can’t trade impulsively if you know you will have to write it down and analyze it later.`,
    quiz: [
      {
        question: 'Which information is NOT essential in a trading journal?',
        options: ['Emotion felt', 'Trade result', 'The color of your clothes that day'],
        correctAnswer: 2,
  },
      {
        question: 'How often should you review your journal?',
        options: ['Never, just writing is enough', 'At least once a week', 'Once a year'],
        correctAnswer: 1
      },
      {
        question: 'Why note the emotion felt during the trade?',
        options: ['To identify emotional patterns causing mistakes', 'It’s useless', 'To remember your mood'],
        correctAnswer: 0
      },
      {
        question: 'What should you do if you made a mistake in a trade?',
        options: ['Not write it down', 'Write it honestly to learn from it', 'Delete the trade from the journal'],
        correctAnswer: 1
      },
      {
        question: 'What is the main advantage of a trading journal?',
        options: ['To impress friends', 'To identify recurring mistakes and your best setups', 'To fill time'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'position-sizing': {
    id: 'position-sizing',
    title: 'Position Sizing Calculation',
    category: 'basics',
    objective: 'Master position sizing',
    content: `Knowing how much to buy is as important as knowing when to buy. A wrong position size can ruin even the best strategy.

**The basic formula**

Position size = (Capital × Risk%) ÷ Distance to stop‑loss

**Practical example**

You have €5 000 and follow the 2% risk rule:
- Maximum risk: €5 000 × 2% = €100
- You want to buy BTC at €40 000
- Your stop‑loss is at €39 000
- Distance: €1 000 per BTC

Position size = €100 ÷ €1 000 = 0.1 BTC

You can buy 0.1 BTC. If the stop‑loss triggers, you lose exactly €100 (2% of your capital).

**Common beginner mistake**

Many beginners do the opposite: they decide to buy €1 000 of BTC and then place a random stop‑loss. That’s the worst approach because you don’t control your risk.

**Position sizing with leverage**

If you use leverage x5:
- Same base calculation
- Divide your position by 5 because leverage multiplies it
- With our example: 0.1 BTC ÷ 5 = 0.02 BTC with x5 leverage

**Adaptive risk**

Some traders adjust risk according to setup quality:
- Setup A+: 2% risk
- Setup A: 1.5% risk
- Setup B: 1% risk

But NEVER more than 2% even on the best setups.

**Pyramiding**

If you want to add to a winning position:
- Never increase your total risk beyond 2%
- Move your stop‑loss to breakeven
- Each add‑on should be smaller than the previous

**6% rule**

Never have more than 6% of your total capital at risk simultaneously. If you already have three positions risking 2% each, do not open another.`,
    quiz: [
      {
        question: 'How to calculate position size?',
        options: ['Buy as much as possible', '(Capital × Risk%) ÷ Distance to stop‑loss', 'Capital ÷ Asset price'],
        correctAnswer: 1,
  },
      {
        question: 'With €10 000 capital, 2% risk and stop €500 away, what position size?',
        options: ['€200 ÷ €500 = 0.4 units', '€10 000 ÷ €500 = 20 units', '2% of €10 000 = 200 units'],
        correctAnswer: 0
      },
      {
        question: 'What to do if you use leverage?',
        options: ['Increase position size', 'Divide the position by the leverage', 'Ignore leverage in the calculation'],
        correctAnswer: 1
      },
      {
        question: 'What is the 6% rule?',
        options: ['Risk 6% per trade', 'Never have more than 6% of total capital at risk simultaneously', 'Earn 6% per month'],
        correctAnswer: 1
      },
      {
        question: 'What is the classic beginner mistake?',
        options: ['Calculating position size based on risk', 'Deciding the amount first then placing a random stop', 'Using a stop‑loss'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'market-orders': {
    id: 'market-orders',
    title: 'Trading Order Types',
    category: 'basics',
    objective: 'Master the different order types',
    content: `Knowing the different order types and when to use them is crucial to execute your strategy efficiently.

**Market Order**

Buys or sells immediately at the best available price.
- Advantage: Execution guaranteed and instant
- Drawback: Price not guaranteed, may be worse than expected
- When to use: When you want to enter/exit quickly

**Limit Order**

You set the maximum price you want to pay (buy) or minimum price you want to receive (sell).
- Advantage: You control the execution price
- Drawback: The order may never fill
- When to use: To enter at a specific price

Example: BTC is at €40 000. You place a buy limit order at €39 500. It will only execute if the price drops to €39 500 or below.

**Stop‑Loss Order**

An order that becomes a market order when price reaches a certain level.
- Purpose: Limit your losses
- Caution: In high volatility, it may execute at a worse price than expected (slippage)

**Stop‑Limit Order**

Combination of stop and limit. When the stop price is reached, a limit order is placed.
- Advantage: Price control even during stop trigger
- Drawback: May not execute if price moves too fast

**Take‑Profit Order**

Automatically closes your position when the profit target is reached.
- Essential to lock in gains
- Avoids emotional indecision

**Trailing Stop**

A stop‑loss that follows the price. If price rises, the stop rises too, but it never goes down.

Example: You buy at €1 000 with a 5% trailing stop
- Price climbs to €1 100 → Stop moves to €1 045 (1 100 × 0.95)
- Price climbs to €1 200 → Stop moves to €1 140
- If price falls to €1 140 → Position closes with €140 profit

**OCO (One Cancels Other)**

Two linked orders: if one executes, the other is automatically cancelled.

Example: You buy BTC at €40 000
- OCO: Take‑profit at €42 000 + Stop‑loss at €38 000
- If one triggers, the other is cancelled automatically

**Usage tips**

- For entry: Use limit orders to get the best price
- For urgent exit: Market order
- For protection: Mandatory stop‑loss
- To secure profits: Take‑profit or trailing stop`,
    quiz: [
      {
        question: 'Which order guarantees immediate execution but not price?',
        options: ['Limit Order', 'Market Order', 'Stop‑Limit Order'],
        correctAnswer: 1,
  },
      {
        question: 'A buy limit order at €39 500 will execute if price is:',
        options: ['€40 000', '€39 000', 'Never'],
        correctAnswer: 1
      },
      {
        question: 'What is the purpose of a trailing stop?',
        options: ['To buy automatically', 'To follow price upward while protecting profits', 'To cancel all orders'],
        correctAnswer: 1
      },
      {
        question: 'What does OCO stand for?',
        options: ['One Cancels Other', 'Only Cash Orders', 'Open Close Operation'],
        correctAnswer: 0
      },
      {
        question: 'Which order type should you use to enter at a specific price?',
        options: ['Market Order', 'Limit Order', 'Stop‑Loss'],
        correctAnswer: 1
      },
      {
        question: 'What is slippage?',
        options: ['A type of order', 'The difference between expected and actual execution price', 'A technical indicator'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'candlestick-patterns': {
    id: 'candlestick-patterns',
    title: 'Japanese Candlestick Patterns',
    category: 'basics',
    objective: 'Recognize and use candlestick patterns',
    content: `Japanese candlesticks tell the story of the battle between buyers and sellers. Learning to read them gives a huge edge.

**Anatomy of a candlestick**

- Body: Difference between open and close
- Upper wick: Highest price reached
- Lower wick: Lowest price reached
- Green/White: Close > Open (bullish)
- Red/Black: Close < Open (bearish)

**Bullish patterns**

**1. Hammer**
- Small body at the top
- Long lower wick (2–3× the body)
- Appears after a downtrend
- Meaning: Sellers pushed price down but buyers regained control

**2. Bullish Engulfing**
- Two candles: small red then large green
- The green fully engulfs the red
- Strong bullish reversal signal

**3. Morning Star**
- Three candles: large red, small (red or green), large green
- Signals end of a downtrend

**Bearish patterns**

**4. Shooting Star**
- Small body at bottom
- Long upper wick
- Appears after an uptrend
- Meaning: Buyers pushed price up but sellers regained control

**5. Bearish Engulfing**
- Two candles: small green then large red
- The red engulfs the green
- Strong bearish reversal signal

**6. Evening Star**
- Three candles: large green, small, large red
- Signals end of an uptrend

**Continuation patterns**

**7. Three White Soldiers**
- Three consecutive large green candles
- Confirmation of strong bullish trend

**8. Three Black Crows**
- Three consecutive large red candles
- Confirmation of strong bearish trend

**Indecision patterns**

**9. Doji**
- Open = Close (no body)
- Market indecision
- Important at support/resistance

**10. Spinning Top**
- Small body (any color)
- Long upper and lower wicks
- Indecision, potential reversal

**Rules of use**

1. Never trade a pattern by itself
2. Always confirm with:
   - Support/resistance level
   - Volume (pattern stronger if volume is high)
   - Technical indicators (RSI, MACD…)
3. Wait for confirmation on the next candle

**Example trade**

BTC has been falling for 3 days. A Hammer appears on a major support at €38 000. The next candle opens bullish.
- Signal: Potential bullish reversal
- Confirmation: Support + Hammer + confirmation candle
- Action: Consider buying with stop below the Hammer`,
    quiz: [
      {
        question: 'What does a Hammer indicate after a downtrend?',
        options: ['Continuation of the drop', 'Potential bullish reversal', 'Indecision'],
        correctAnswer: 1,
  },
      {
        question: 'How many candles make up a Bullish Engulfing?',
        options: ['One', 'Two', 'Three'],
        correctAnswer: 1
      },
      {
        question: 'What does a Doji signify?',
        options: ['Strong bullish trend', 'Market indecision', 'Imminent crash'],
        correctAnswer: 1
      },
      {
        question: 'Where does a Shooting Star appear?',
        options: ['After a downtrend', 'After an uptrend', 'Anywhere'],
        correctAnswer: 1
      },
      {
        question: 'Should you trade a candlestick pattern alone?',
        options: ['Yes, it’s enough', 'No, always confirm with other elements', 'Only on Mondays'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'boll': {
    id: 'boll',
    title: 'Bollinger Bands',
    category: 'technical',
    objective: 'Understand and use Bollinger Bands to identify volatility and trading opportunities',
    content: `Bollinger Bands were developed by John Bollinger in the 1980s as a tool to help traders identify potential price volatility and zones where price is relatively high or low compared to previous trading.

They offer a relative definition of “high” and “low” and help identify overbought or oversold situations.

**What they are and what they show**

Bollinger Bands consist of three lines:

**Middle band**: a simple moving average (usually a 20‑period SMA)

**Upper band**: moving average + (multiplier × standard deviation)

**Lower band**: moving average – (multiplier × standard deviation)

The standard setting uses a 20‑period average with a 2 standard deviation multiplier, but this can be adapted to the asset or timeframe.

When the bands tighten, it indicates a period of low volatility (called a “squeeze”). When they widen, it signals increased volatility.

**How to trade them**

**1. Bollinger Bounce**
Prices tend to bounce off the outer bands, which act as dynamic support or resistance.
Example: If a stock touches the lower band and turns up, it may be seen as a buying opportunity.

**2. Bollinger Squeeze**
When the bands come very close together, it often signals an imminent move—either up or down.

**3. Riding the Bands**
In a strong uptrend, price can hug the upper band; in a strong downtrend, the lower band.
This indicates the current trend is powerful and may continue.

**4. Breakouts**
A close above the upper band can signal a possible pullback, while a close below the lower band can signal a potential rebound.

**⚠️ Important**

Use Bollinger Bands together with other indicators to confirm signals. Never trade solely on one indicator.`,
    quiz: [
      {
        question: 'How many lines make up Bollinger Bands?',
        options: ['One', 'Two', 'Three'],
        correctAnswer: 2,
  },
      {
        question: 'What does the middle band represent?',
        options: ['A simple moving average', 'The highest price', 'The lowest price'],
        correctAnswer: 0
      },
      {
        question: 'What does a “Bollinger Squeeze” indicate?',
        options: ['Bands widening', 'Bands tightening, signalling an imminent move', 'Price leaving the bands'],
        correctAnswer: 1
      },
      {
        question: 'What are the standard Bollinger settings?',
        options: ['10 periods with 1 standard deviation', '20 periods with 2 standard deviations', '50 periods with 3 standard deviations'],
        correctAnswer: 1
      },
      {
        question: 'What suggests a price hugging the upper band?',
        options: ['A strong uptrend', 'A downtrend', 'No trend'],
        correctAnswer: 0
      },
      {
        question: 'Why should you not trade solely with Bollinger Bands?',
        options: ['They’re always wrong', 'They should be combined with other indicators for confirmation', 'They’re forbidden'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'stochastic': {
    id: 'stochastic',
    title: 'Stochastic Oscillator',
    category: 'technical',
    objective: 'Master the stochastic oscillator to identify overbought and oversold zones',
    content: `The Stochastic Oscillator is a momentum indicator developed by George C. Lane in the late 1950s. It compares the current closing price of an asset to its price range over a given period.

Its sensitivity to market movements can be adjusted by changing the period or taking a moving average of the result.

**What it is and what it shows**

The oscillator measures the position of the current price relative to the highest and lowest prices of a given period.

**Formula:**

%K = [(Current close – Lowest low) / (Highest high – Lowest low)] × 100

%D = 3‑period moving average of %K

Typically, two lines are drawn:

**%K** (fast line)  
**%D** (slow line, average of %K)

When the value exceeds 80, the asset is often considered overbought. Below 20, it is often oversold.

**How to trade it**

**1. Overbought/oversold zones**

Above 80 = potential overbought zone.  
Below 20 = potential oversold zone.

**2. Bullish and bearish divergences**

A **bullish divergence** occurs when price makes a new low but the oscillator does not.  
A **bearish divergence** occurs when price makes a new high but the oscillator does not.

**3. Crossovers (%K and %D)**

If the %K line crosses above %D → bullish signal.  
If the %K line crosses below %D → bearish signal.

**⚠️ Important**

As always, this indicator should be used with other technical tools to confirm signals. Never rely on a single indicator.`,
    quiz: [
      {
        question: 'Who developed the Stochastic Oscillator?',
        options: ['John Bollinger', 'George C. Lane', 'Welles Wilder'],
        correctAnswer: 1,
  },
      {
        question: 'What does the Stochastic Oscillator measure?',
        options: ['Trading volume', 'The position of the current price relative to the highest and lowest', 'Volatility only'],
        correctAnswer: 1
      },
      {
        question: 'Above what value is an asset considered overbought?',
        options: ['Above 50', 'Above 70', 'Above 80'],
        correctAnswer: 2
      },
      {
        question: 'What does %D represent?',
        options: ['The fast line', 'The moving average of %K (slow line)', 'The closing price'],
        correctAnswer: 1
      },
      {
        question: 'What is a bullish divergence?',
        options: ['Price makes a new high but the oscillator doesn’t', 'Price makes a new low but the oscillator doesn’t', 'The oscillator is at 50'],
        correctAnswer: 1
      },
      {
        question: 'What does a %K crossover above %D signal?',
        options: ['Bearish signal', 'Bullish signal', 'No signal'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'rsi': {
    id: 'rsi',
    title: 'RSI - Relative Strength Index',
    category: 'technical',
    objective: 'Master the RSI indicator to detect overbought and oversold zones',
    content: `The RSI is one of the most popular technical indicators—simple but powerful.

**What is the RSI?**

The RSI (Relative Strength Index) measures the strength and speed of price movements. It oscillates between 0 and 100.

**How to interpret it**

- RSI > 70: Overbought zone → Price may be too high; watch for a bearish reversal
- RSI < 30: Oversold zone → Price may be too low; watch for a bullish bounce
- RSI ≈ 50: Neutral zone

**Basic RSI strategies**

**1. Mean Reversion Strategy**
- Buy when RSI < 30 (oversold)
- Sell when RSI > 70 (overbought)

This strategy works well in range‑bound markets without a clear trend.

**2. Divergence Strategy**
A divergence occurs when price makes a new high but the RSI makes a lower high (bearish divergence), or vice versa.

Example: BTC reaches €42 000 (new high) but the RSI only reaches 65 whereas it was 75 at the previous high → strong bearish signal.

**3. Breaking levels**
When the RSI breaks 50 during an uptrend, it’s often a good continuation signal.

**Common errors**

Never buy just because the RSI is < 30. In a strong downtrend, the RSI can stay oversold for a long time. Always combine the RSI with other indicators or structural analysis.

**Parameters**

The standard setting is RSI(14), meaning calculated over 14 periods. You can adjust according to your timeframe: RSI(7) for short term, RSI(21) for longer term.`,
    quiz: [
      {
        question: 'What does an RSI of 75 indicate?',
        options: ['Oversold zone – buying opportunity', 'Overbought zone – watch for possible reversal', 'Neutral zone'],
        correctAnswer: 1,
  },
      {
        question: 'What is a bearish divergence?',
        options: ['Price goes up but RSI goes down', 'Price goes down and RSI also goes down', 'RSI is at 50'],
        correctAnswer: 0
      },
      {
        question: 'What is the standard RSI parameter?',
        options: ['RSI(7)', 'RSI(14)', 'RSI(50)'],
        correctAnswer: 1
      },
      {
        question: 'Which RSI strategy works best in a range market?',
        options: ['Buy only when RSI > 70', 'Buy when RSI < 30 and sell when RSI > 70', 'Ignore the RSI completely'],
        correctAnswer: 1
      },
      {
        question: 'Why shouldn’t you buy solely because RSI < 30?',
        options: ['Because in a strong downtrend the RSI can stay low for a long time', 'Because it’s illegal', 'Because the RSI is never reliable'],
        correctAnswer: 0
      },
      {
        question: 'What does breaking 50 in an uptrend indicate?',
        options: ['Immediate sell signal', 'Continuation of the trend', 'No meaning'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'macd-indicator': {
    id: 'macd-indicator',
    title: 'MACD Indicator - Moving Average Convergence Divergence',
    category: 'technical',
    objective: 'Master the MACD to detect trend changes',
    content: `The MACD is one of the most popular and powerful indicators in technical analysis. It combines multiple moving averages to identify changes in momentum.

**What is the MACD?**

The MACD (Moving Average Convergence Divergence) measures the relationship between two exponential moving averages (EMAs). It consists of three elements:
- The MACD line: difference between the 12‑period EMA and the 26‑period EMA
- The signal line: 9‑period EMA of the MACD line
- The histogram: difference between the MACD line and the signal line

**How to interpret the MACD**

**Line crossovers:**
- When the MACD line crosses above the signal line = buy signal 📈
- When the MACD line crosses below the signal line = sell signal 📉

**Zero line crossovers:**
- MACD moves above 0 = bullish momentum strengthening
- MACD moves below 0 = bearish momentum strengthening

**Divergences:**
Divergences are powerful signals:
- Bullish divergence: price makes lower lows, but the MACD makes higher lows = potential bullish reversal
- Bearish divergence: price makes higher highs, but the MACD makes lower highs = potential bearish reversal

**The histogram**

The histogram shows the strength of the move:
- Growing bars = momentum accelerating
- Shrinking bars = momentum slowing
- Crossing from positive to negative (or vice versa) = change in momentum

**Simple MACD strategy**

1. Wait for a crossover of the MACD line and the signal line
2. Confirm with the histogram changing color
3. Check that there is no divergence against your position
4. Place your stop‑loss under the last support (buy) or resistance (sell)

**Limitations of the MACD**

- Lagging: being based on moving averages, the MACD is a lagging indicator
- False signals in ranges: in a market without a clear trend, the MACD can give many false signals
- Requires confirmation: always combine with other indicators (RSI, volume, support/resistance)

**Recommended parameters**

The standard parameters (12, 26, 9) work well on most timeframes. For scalping, you can try (5, 13, 7) for more reactivity.`,
    quiz: [
      {
        question: 'What is the MACD composed of?',
        options: ['A single moving average', 'The MACD line, the signal line and the histogram', 'Only the histogram'],
        correctAnswer: 1,
  },
      {
        question: 'What does a crossover of the MACD line above the signal line indicate?',
        options: ['Sell signal', 'Hold signal', 'Buy signal'],
        correctAnswer: 2
      },
      {
        question: 'What is a bearish divergence?',
        options: ['Price makes higher highs but MACD makes lower highs', 'Price and MACD both rise', 'Price makes lower lows and MACD also'],
        correctAnswer: 0
      },
      {
        question: 'What does the histogram represent?',
        options: ['Trading volume', 'The difference between MACD line and signal line', 'The asset price'],
        correctAnswer: 1
      },
      {
        question: 'What is the main limitation of the MACD?',
        options: ['It’s too complex to understand', 'It’s a lagging indicator that sometimes gives false signals', 'It only works on Bitcoin'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'fibonacci-retracement': {
    id: 'fibonacci-retracement',
    title: 'Fibonacci Retracements',
    category: 'technical',
    objective: 'Use Fibonacci to identify key support and resistance levels',
    content: `Fibonacci retracements are among the most used tools in technical analysis to identify levels where price might bounce or break.

**Where does Fibonacci come from?**

Leonardo Fibonacci was an Italian mathematician who discovered a sequence of numbers (0, 1, 1, 2, 3, 5, 8, 13, 21…) where each number is the sum of the two preceding ones. This sequence appears everywhere in nature and… in financial markets.

**Fibonacci levels**

The key levels used in trading are:
- **23.6%**: shallow retracement
- **38.2%**: moderate retracement
- **50%**: psychological level (not a true Fibonacci number but widely used)
- **61.8%**: the “Golden Ratio” – the most important level
- **78.6%**: deep retracement

**How to draw Fibonacci**

1. Identify a significant move (swing low to swing high or vice versa)
2. Draw the Fibonacci tool from point A to point B
3. The levels appear automatically

In an uptrend: draw from the low (swing low) to the high (swing high).  
In a downtrend: draw from the high (swing high) to the low (swing low).

**How to use Fibonacci**

**In an uptrend:**
After a rally, price often “retraces” before continuing higher. Fibonacci levels indicate where price might bounce:
- 23.6% = shallow retracement, very strong trend
- 38.2% – 50% = “normal” retracement zone
- 61.8% = last line of defence before trend break

**In a downtrend:**
Same principle in reverse. Price bounces before continuing lower.

**Fibonacci trading strategy**

1. Wait for a strong trend (up or down)
2. Draw Fibonacci from the low to the high
3. Wait for price to return to a Fibonacci level (typically 38.2%, 50% or 61.8%)
4. Look for confirmation (reversal candle, volume, RSI oversold/overbought)
5. Enter with a stop‑loss just below/above the Fibonacci level

**Fibonacci extensions**

Beyond retracements, extensions are used to identify price targets:
- 127.2%
- 161.8% (classic target)
- 261.8%

These levels show how far price might go after breaking the previous high/low.

**Combining Fibonacci with other tools**

Fibonacci is even more powerful when combined with:
- Horizontal support and resistance
- Moving averages
- Trendlines
- Volume

When several indicators converge on the same level = high probability of price reaction.

**Mistakes to avoid**

❌ Drawing Fibonacci on any movement: choose significant swings  
❌ Trading only on Fibonacci without confirmation  
❌ Forgetting that Fibonacci isn’t magical: they are zones, not exact prices`,
    quiz: [
      {
        question: 'What is the most important Fibonacci level?',
        options: ['23.6%', '50%', '61.8% (Golden Ratio)'],
        correctAnswer: 2,
  },
      {
        question: 'How do you draw Fibonacci in an uptrend?',
        options: ['From top to bottom', 'From the low (swing low) to the high (swing high)', 'Randomly'],
        correctAnswer: 1
      },
      {
        question: 'What does a 38.2% retracement represent?',
        options: ['Price has dropped 38.2% from the last high', 'Price has returned to 38.2% of the previous move', 'Volume has dropped 38.2%'],
        correctAnswer: 1
      },
      {
        question: 'Which Fibonacci extension is a classic target?',
        options: ['127.2%', '161.8%', '261.8%'],
        correctAnswer: 1
      },
      {
        question: 'Why combine Fibonacci with other indicators?',
        options: ['It’s required by law', 'To increase probability of success when multiple signals converge', 'Fibonacci alone never works'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'ema-sma': {
    id: 'ema-sma',
    title: 'Moving Averages – EMA and SMA',
    category: 'technical',
    objective: 'Master moving averages to identify trends',
    content: `Moving averages are the simplest and most widely used indicators in trading. They smooth price fluctuations to reveal the trend.

**SMA – Simple Moving Average**

The SMA calculates the arithmetic mean of prices over a given period.  
Example: SMA 20 = average of the last 20 candles.

**EMA – Exponential Moving Average**

The EMA gives more weight to recent prices. It reacts faster to price changes than the SMA.

**Which moving average to choose?**

- **SMA**: smoother, fewer false signals, but more lag
- **EMA**: more responsive, detects changes faster, but more false signals

In general, traders prefer the EMA for its responsiveness.

**Common periods**

- **EMA 9**: short term, for scalping and day trading
- **EMA 20/21**: short‑medium term
- **EMA 50**: medium term, very popular
- **EMA 200**: long term, major support/resistance

**How to use moving averages**

**1. Identify the trend**
- Price above the EMA = uptrend 📈
- Price below the EMA = downtrend 📉

Simple rule: only trade in the direction of the trend.

**2. Dynamic support and resistance**
EMAs act as moving support/resistance:
- In an uptrend, price often bounces on the EMA 20 or 50
- In a downtrend, the EMA acts as resistance

**3. Crossovers**
Crossovers between two moving averages give signals:
- **Golden Cross**: shorter EMA crosses above longer EMA = strong bullish signal
- **Death Cross**: shorter EMA crosses below longer EMA = strong bearish signal

Example: EMA 50 crossing above EMA 200 = Golden Cross = very bullish

**4. Price/EMA crossover**
- Price crosses above an EMA = potential buy signal
- Price crosses below an EMA = potential sell signal

**Popular strategies**

**EMA 9/21 strategy (short term)**
- Buy: EMA 9 crosses above EMA 21 + price above both EMAs
- Sell: EMA 9 crosses below EMA 21 + price below both EMAs

**EMA 50/200 strategy (medium‑long term)**
- Buy: Golden Cross (EMA 50 > EMA 200) + pullback on EMA 50
- Sell: Death Cross (EMA 50 < EMA 200)

**Triple EMA strategy (EMA 9, 21, 55)**
- All EMAs aligned in the same order = strong trend
- Look for entries during pullbacks on EMA 21

**Limitations of moving averages**

⚠️ **Lagging indicator**: moving averages are based on past prices  
⚠️ **False signals in ranges**: in a sideways market, crossovers give many false signals  
⚠️ **Whipsaws**: price can cross the EMA multiple times quickly

**Practical tips**

✅ Use EMAs on higher timeframes for more reliable signals (4H, Daily)  
✅ Always combine with other indicators (RSI, volume, support/resistance)  
✅ Test different periods to find what works on your preferred assets  
✅ Always respect the trend given by the EMA 200`,
    quiz: [
      {
        question: 'What is the difference between SMA and EMA?',
        options: ['There is no difference', 'The EMA gives more weight to recent prices', 'The SMA is faster than the EMA'],
        correctAnswer: 1,
  },
      {
        question: 'What is a Golden Cross?',
        options: ['A short EMA crossing above a long EMA – bullish signal', 'A short EMA crossing below a long EMA', 'Price touching the EMA 200'],
        correctAnswer: 0
      },
      {
        question: 'How do you use an EMA to identify trend?',
        options: ['Price above EMA = uptrend, below = downtrend', 'EMAs cannot identify trends', 'You need 10 EMAs'],
        correctAnswer: 0
      },
      {
        question: 'Which EMA is considered a long‑term major support/resistance?',
        options: ['EMA 9', 'EMA 20', 'EMA 200'],
        correctAnswer: 2
      },
      {
        question: 'What is the main limitation of moving averages?',
        options: ['They are too complex', 'They are lagging indicators that give false signals in ranges', 'They don’t work on cryptos'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'support-resistance': {
    id: 'support-resistance',
    title: 'Support and Resistance – Trading Foundations',
    category: 'technical',
    objective: 'Identify and use key support and resistance levels',
    content: `Support and resistance are the most important concepts in technical analysis. Master them and you already have an edge.

**What is a Support?**

A support is a price level where demand is strong enough to prevent price from falling further. It’s like a “floor” that price has trouble breaking below.

Psychology: at this level, buyers think it’s a good deal and buy heavily, pushing price up.

**What is a Resistance?**

A resistance is a price level where supply is strong enough to prevent price from rising further. It’s like a “ceiling.”

Psychology: at this level, sellers think the price is too high and sell, pushing price down.

**How to identify Support and Resistance**

**1. Horizontal levels**
Look at zones where price has bounced several times:
- If price has bounced up 2–3 times from a level = support
- If price has fallen 2–3 times from a level = resistance

The more times a level has been tested and held, the stronger it is.

**2. Previous highs and lows**
- Old swing highs become resistances
- Old swing lows become supports

**3. Psychological levels**
Round numbers attract traders’ attention:
- Bitcoin at $50 000 is a strong psychological level
- Ethereum at $3 000 too
- Traders often place orders at these round levels

**Support becomes Resistance (and vice versa)**

When a support is broken, it becomes a resistance. When a resistance is broken, it becomes a support.

Example:
- BTC bounces on $40 000 three times = support at $40 000
- BTC breaks $40 000 and drops to $38 000
- BTC tries to rise but stalls at $40 000 = $40 000 is now a resistance

**Zones vs Lines**

❌ Common error: thinking support/resistance are precise lines  
✅ Reality: they are ZONES

Do not look for the exact level to the cent. Instead consider a zone of about 1–2% around the level.

**How to trade Support and Resistance**

**Strategy 1: Bounce on Support**
1. Identify a strong support (tested at least 2–3 times)
2. Wait for price to approach the support
3. Look for confirmation (reversal candle, RSI divergence, volume)
4. Buy with stop‑loss just below the support

**Strategy 2: Breakout of Resistance**
1. Identify a strong resistance
2. Wait for price to break the resistance with strong volume
3. Wait for a retest of the resistance (now turned support)
4. Buy on the retest with stop‑loss below the new support

**Strategy 3: Sell at Resistance**
1. Price approaches a resistance in a downtrend or range
2. Look for rejection signs (long upper wick, selling volume)
3. Short with stop‑loss above the resistance

**Important confirmations**

Never trade solely on support/resistance. Look for confirmations:
- **Volume**: a breakout with strong volume is more reliable
- **Candles**: reversal patterns (doji, hammer, shooting star)
- **Indicators**: RSI, MACD confirming the move

**Types of support/resistance**

**Static:**
- Horizontal lines
- Psychological levels

**Dynamic:**
- Moving averages (EMA 50, 200)
- Trendlines
- Bollinger Bands

**False breakouts**

Beware of traps! Sometimes price breaks a level then immediately returns = fake breakout.

How to avoid them:
- Wait for a closing candle above/below the level
- Check volume (low volume = caution)
- Wait for a retest before entering

**Strength of a Support/Resistance**

A level is stronger when:
- It has been tested several times
- It matches a round psychological level
- It aligns across multiple timeframes (4H + Daily support)
- It coincides with Fibonacci, EMA or other indicators`,
    quiz: [
      {
        question: 'What is a support?',
        options: ['A level where price always goes up', 'A level where demand prevents price from falling', 'A technical indicator'],
        correctAnswer: 1,
  },
      {
        question: 'What happens when a support is broken?',
        options: ['It disappears forever', 'It becomes a resistance', 'It becomes stronger'],
        correctAnswer: 1
      },
      {
        question: 'What is a psychological level?',
        options: ['A level that exists only in your mind', 'A round number (e.g., $50 000) that attracts traders', 'Emotional support'],
        correctAnswer: 1
      },
      {
        question: 'Which confirmation is important to validate a breakout?',
        options: ['Strong volume', 'Candle color', 'Time of day'],
        correctAnswer: 0
      },
      {
        question: 'Are support and resistance precise lines or zones?',
        options: ['Exact lines', 'Zones of about 1–2%', 'It doesn’t matter'],
        correctAnswer: 1
      },
      {
        question: 'What is a false breakout?',
        options: ['A breakout that isn’t real', 'Price breaks a level then immediately returns', 'A breakout on weekends'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'order-block': {
    id: 'order-block',
    title: 'Order Blocks',
    category: 'technical',
    objective: 'Understand what order blocks are and how to identify and use them',
    content: `An order block is a price zone where large institutional players (banks, funds, whales) have placed significant buy or sell orders. These zones often precede a strong directional move and become areas where price is likely to react when revisited.

**Types of Order Blocks**

- **Bullish order block**: a bearish candle (or series) followed by a strong bullish move. The base of that bearish candle marks an area where big buyers stepped in.
- **Bearish order block**: a bullish candle (or series) followed by a strong bearish move. The high of that bullish candle marks a zone where sellers dominated.

**How to identify them**

1. Look for a large candle (or group) that leads to a sharp move in the opposite direction.
2. Confirm with increased volume: institutions leave a volume footprint.
3. Mark the open and close of that candle to create a zone; extend it into the future.

**How to trade them**

- **Support/Resistance**: Order blocks act as dynamic support or resistance. When price returns to a bullish order block, look for long opportunities with a stop below the zone. Conversely, bearish order blocks can be used for shorts.
- **Confluence**: Combine order blocks with other tools (trend lines, Fibonacci, indicators). The more confluence, the better the signal.
- **Risk management**: Always use a stop‑loss, as order blocks can fail if the market structure changes.

**Limitations**

Order blocks are not infallible. In strong trends, price can slice through them. Never rely on them alone; look at market context and confirm with other signals.`,
    quiz: [
      {
        question: 'What is an order block?',
        options: ['A random price zone', 'A zone where large players placed orders', 'A type of chart pattern'],
        correctAnswer: 1,
  },
      {
        question: 'What identifies a bullish order block?',
        options: ['A big bullish candle followed by sideways movement', 'A bearish candle followed by a strong bullish move', 'A period of low volume'],
        correctAnswer: 1
      },
      {
        question: 'How do order blocks act on future price returns?',
        options: ['They act as support or resistance zones', 'They have no effect', 'They always break instantly'],
        correctAnswer: 0
      },
      {
        question: 'Why combine order blocks with other tools?',
        options: ['Because they are illegal alone', 'To increase probability of success through confluence', 'To trade without stop‑loss'],
        correctAnswer: 1
      },
      {
        question: 'What is a major limitation of trading order blocks?',
        options: ['They only work on daily charts', 'They can fail in strong trends', 'They require no volume confirmation'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'fair-value-gaps': {
    id: 'fair-value-gaps',
    title: 'Fair Value Gaps (FVG)',
    category: 'technical',
    objective: 'Recognize fair value gaps and use them to spot potential price reactions',
    content: `A Fair Value Gap (FVG) is a price imbalance left on a chart when price moves so quickly that it leaves a “gap” between consecutive candles. In spot markets without true gaps (like crypto), an FVG is typically a three‑candle pattern where the wicks of the first and third candles do not overlap.

**Why FVGs matter**

These imbalances represent areas where not all orders were filled. When price revisits the zone, unfilled orders may be executed, creating support or resistance.

**How to identify an FVG**

1. Find a candle (candle 2) that makes a strong move (up or down).
2. Check that the low of candle 2 is above the high of candle 1 (for an upward FVG) or the high of candle 2 is below the low of candle 1 (for a downward FVG).
3. Mark the gap between candle 1’s high and candle 2’s low (up FVG) or between candle 1’s low and candle 2’s high (down FVG); extend it forward.

**Trading with FVGs**

- **Entry**: Wait for price to return into the FVG. Look for confirmation (reversal candles, divergences) before taking a position.
- **Targets**: Often, price will fill the gap and then resume the original move. Use the opposite side of the gap or recent highs/lows as targets.
- **Context**: Always consider trend direction and higher‑timeframe FVGs.

**Tips**

- The fresher the FVG, the more likely it is to be respected.
- Higher timeframes FVGs carry more weight than lower ones.
- Combine FVGs with liquidity zones and market structure for best results.`,
    quiz: [
      {
        question: 'What does an FVG represent?',
        options: ['A place where price traded fairly', 'A price imbalance where orders were not filled', 'A chart indicator'],
        correctAnswer: 1,
  },
      {
        question: 'How many candles typically make up a Fair Value Gap?',
        options: ['One', 'Two', 'Three'],
        correctAnswer: 2
      },
      {
        question: 'What should you do before taking a trade on an FVG?',
        options: ['Enter as soon as price touches it', 'Wait for price to return and look for confirmation', 'Ignore the overall trend'],
        correctAnswer: 1
      },
      {
        question: 'Which FVGs carry more significance?',
        options: ['Lower timeframe gaps', 'Higher timeframe gaps', 'All gaps are the same'],
        correctAnswer: 1
      },
      {
        question: 'What increases the reliability of an FVG?',
        options: ['When it is older and has been filled many times', 'When it is fresh and combined with other signals', 'When it is near psychological levels only'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'inversion-fair-value-gaps': {
    id: 'inversion-fair-value-gaps',
    title: 'Inversion of Fair Value Gaps',
    category: 'technical',
    objective: 'Learn how FVGs can invert from support to resistance and vice versa',
    content: `Sometimes after a Fair Value Gap (FVG) is filled, price continues beyond it and later uses the same zone in the opposite way. This phenomenon is known as FVG inversion.

**What is an FVG inversion?**

An FVG inversion occurs when an upward FVG that once acted as support is later tested from the other side and acts as resistance (or vice versa). It reflects a shift in market sentiment.

**How to identify an inversion**

1. Price creates an FVG and later fills it.
2. Price breaks through the gap instead of bouncing off it.
3. On a subsequent retest from the other side, the gap now acts in the opposite role.

**Trading the inversion**

- **Confirmation**: Wait for a clear break and a retest of the zone from the other side with rejection candles.
- **Entry**: Enter a trade in the direction of the inversion (short on a bearish inversion, long on a bullish inversion).
- **Stops**: Place stop‑loss beyond the FVG to protect against failed inversions.

**Limitations**

- Inversions are less common than initial reactions; don’t expect every gap to invert.
- Strong trends can override the inversion; always align with higher‑timeframe momentum.

**Use with other concepts**

Combine FVG inversions with order blocks, trend lines and support/resistance to strengthen your analysis.`,
    quiz: [
      {
        question: 'What defines an FVG inversion?',
        options: ['The gap never gets filled', 'The gap flips role after being broken and retested', 'The gap disappears from the chart'],
        correctAnswer: 1,
  },
      {
        question: 'When should you consider entering on an FVG inversion?',
        options: ['Immediately when price touches the gap', 'After a clear break and retest from the other side', 'Never'],
        correctAnswer: 1
      },
      {
        question: 'Where should you place your stop‑loss when trading an inversion?',
        options: ['Randomly', 'Beyond the FVG zone', 'Below your entry by $100'],
        correctAnswer: 1
      },
      {
        question: 'What reduces the reliability of an inversion?',
        options: ['Aligning with the higher‑timeframe trend', 'Ignoring market context and trading every gap', 'Using volume confirmation'],
        correctAnswer: 1
      },
      {
        question: 'How common are FVG inversions compared to initial reactions?',
        options: ['More common', 'Less common', 'Exactly the same frequency'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'trend-lines': {
    id: 'trend-lines',
    title: 'Using Trend Lines',
    category: 'technical',
    objective: 'Learn to draw and trade with trend lines effectively',
    content: `Trend lines are diagonal lines that connect a series of price highs or lows on a chart. They act as dynamic support and resistance, helping traders visualise and trade the direction of the market.

**How to draw them**

1. Identify at least two significant swing highs (for a downtrend line) or swing lows (for an uptrend line). More touches increase reliability.
2. Connect these points with a straight line. Do not force the line to fit; adjust to capture the most touches without cutting through candles.
3. Extend the line to the right into the future to anticipate potential reaction points.

**Trading with trend lines**

- **Bounce trades**: In an uptrend, buy when price pulls back to the trend line and shows reversal signals. In a downtrend, sell on a pullback to the trend line.
- **Breakouts**: When price decisively breaks a trend line with strong volume, it may signal a trend reversal or acceleration. Wait for a close beyond the line and confirm with other indicators.
- **Fan lines**: You can draw multiple trend lines at different slopes to capture various phases of a trend.

**Best practices**

- Use log scale for long‑term charts to capture percentage moves accurately.
- Combine trend lines with horizontal levels, volume and indicators.
- Avoid drawing lines across minor fluctuations; focus on major swings.
- Adjust the line if market action shows that your initial line is no longer respected.

Trend lines are simple but powerful when used correctly in conjunction with other analysis.`,
    quiz: [
      {
        question: 'What is the minimum number of points needed to draw a trend line?',
        options: ['One', 'Two', 'Three'],
        correctAnswer: 1,
  },
      {
        question: 'How should you treat a trend line in a strong uptrend?',
        options: ['As a static horizontal line', 'As dynamic support to buy on pullbacks', 'As a place to sell only'],
        correctAnswer: 1
      },
      {
        question: 'What increases the reliability of a trend line?',
        options: ['It connecting more price swings', 'Drawing it on a very low timeframe', 'Using no other indicators'],
        correctAnswer: 0
      },
      {
        question: 'What is a key signal of a trend line breakout?',
        options: ['A break with strong volume and a close beyond the line', 'A wick piercing the line with low volume', 'Price touching the line multiple times'],
        correctAnswer: 0
      },
      {
        question: 'Why use a logarithmic scale when drawing trend lines for long‑term charts?',
        options: ['To account for percentage moves accurately', 'Because it makes lines look nicer', 'It isn’t necessary'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'volume-analysis': {
    id: 'volume-analysis',
    title: 'Understanding Volume Analysis',
    category: 'technical',
    objective: 'Learn how trading volume can confirm trends and signal reversals',
    content: `Volume represents the amount of an asset traded over a given period. Analysing volume can help you determine the strength of price moves and identify potential reversals.

**Why volume matters**

- **Confirmation**: Rising volume during a price move suggests strength and conviction. Declining volume may signal a weakening move.
- **Divergence**: If price rises but volume falls, the move may lack support and could reverse.
- **Breakouts**: Breakouts with high volume are more likely to succeed; low‑volume breakouts are suspect.

**Volume‑based indicators**

- **On Balance Volume (OBV)**: Cumulative measure that adds volume on up days and subtracts on down days. Rising OBV confirms uptrends.
- **Volume Profile**: Shows traded volume at each price level, highlighting areas of high interest (value areas) where price may stall.
- **Volume Weighted Moving Average (VWMA)**: Gives more weight to periods with higher volume.

**Best practices**

- Always look at volume relative to its recent average; a spike stands out.
- Use volume on multiple timeframes; a 1H volume spike in alignment with daily trend is more meaningful.
- Combine volume with price action and other indicators for confirmation.
- Be cautious of sudden volume spikes due to news or manipulation; verify the cause.

Volume analysis doesn’t tell you direction alone but enhances your understanding of price action.`,
    quiz: [
      {
        question: 'What does rising volume during a price move indicate?',
        options: ['Strength and conviction', 'Weakness', 'Nothing at all'],
        correctAnswer: 0,
  },
      {
        question: 'Which indicator accumulates volume on up days and subtracts on down days?',
        options: ['RSI', 'On Balance Volume (OBV)', 'MACD'],
        correctAnswer: 1
      },
      {
        question: 'How does volume help with breakouts?',
        options: ['Low volume makes breakouts more reliable', 'High volume confirms the breakout’s validity', 'Volume has no role in breakouts'],
        correctAnswer: 1
      },
      {
        question: 'What might declining volume on rising prices indicate?',
        options: ['The move is strong and sustainable', 'The move may lack support and could reverse', 'Volume is irrelevant'],
        correctAnswer: 1
      },
      {
        question: 'Why should you check volume on multiple timeframes?',
        options: ['To confirm that spikes align with larger trends', 'To make charts look busy', 'It’s unnecessary'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'ichimoku-cloud': {
    id: 'ichimoku-cloud',
    title: 'Ichimoku Cloud Explained',
    category: 'technical',
    objective: 'Master the components of the Ichimoku system and how to trade with them',
    content: `The Ichimoku Kinko Hyo (“one glance equilibrium chart”) is a comprehensive indicator developed by Goichi Hosoda in the 1930s. It provides information about trend, momentum and support/resistance at a glance.

**Components**

- **Tenkan-sen (Conversion Line)**: (High + Low) / 2 over the last 9 periods. Represents short‑term momentum.
- **Kijun-sen (Base Line)**: (High + Low) / 2 over the last 26 periods. Indicates medium‑term momentum.
- **Senkou Span A**: (Tenkan-sen + Kijun-sen) / 2 shifted 26 periods into the future.
- **Senkou Span B**: (High + Low) / 2 over the last 52 periods, shifted 26 periods forward.
- **Kumo (Cloud)**: Area between Span A and Span B; visual representation of support/resistance.
- **Chikou Span (Lagging Line)**: Current closing price shifted 26 periods back.

**How to interpret**

- Price above the cloud = bullish trend; below = bearish; inside = consolidation.
- **Bullish signal**: Tenkan-sen crosses above Kijun-sen, ideally above the cloud.
- **Bearish signal**: Tenkan-sen crosses below Kijun-sen, ideally below the cloud.
- **Cloud twist**: When Span A crosses Span B, indicating potential trend change.
- The Chikou Span confirms momentum when it is above (bullish) or below (bearish) price.

**Trading strategies**

- **Trend following**: Trade in the direction indicated by the cloud and lines. Buy when price is above the cloud with bullish cross; sell when price is below with bearish cross.
- **Kumo breakout**: Enter when price breaks through the cloud with supporting cross and volume.
- **Support/resistance**: The edges of the cloud and the Kijun-sen often act as dynamic levels.

**Limitations**

The Ichimoku system can give late signals in fast markets and may produce whipsaws in ranges. It is more effective on longer timeframes (4H and above).

Combine it with other indicators and price action for confirmation.`,
    quiz: [
      {
        question: 'What does price above the Ichimoku cloud indicate?',
        options: ['Bearish trend', 'Bullish trend', 'No trend'],
        correctAnswer: 1,
  },
      {
        question: 'Which lines form the cloud (Kumo)?',
        options: ['Tenkan-sen and Kijun-sen', 'Senkou Span A and Senkou Span B', 'Chikou Span and Tenkan-sen'],
        correctAnswer: 1
      },
      {
        question: 'What is a bullish signal in Ichimoku?',
        options: ['Tenkan-sen crossing below Kijun-sen', 'Tenkan-sen crossing above Kijun-sen ideally above the cloud', 'Chikou Span below price'],
        correctAnswer: 1
      },
      {
        question: 'What is the Chikou Span?',
        options: ['Current price shifted 26 periods back', 'An average of the last 9 periods', 'The difference between Span A and Span B'],
        correctAnswer: 0
      },
      {
        question: 'On which timeframes is Ichimoku most effective?',
        options: ['1-minute', '4-hour and above', 'Doesn’t matter'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'divergence-trading': {
    id: 'divergence-trading',
    title: 'Trading with Divergences',
    category: 'technical',
    objective: 'Identify and trade bullish and bearish divergences using momentum indicators',
    content: `A divergence occurs when the price movement of an asset disagrees with the movement of a momentum indicator such as RSI, MACD or Stochastic. Divergences can foreshadow trend reversals.

**Types of divergences**

- **Bullish divergence**: Price makes lower lows, but the indicator makes higher lows. This suggests downward momentum is weakening and a reversal up may occur.
- **Bearish divergence**: Price makes higher highs, but the indicator makes lower highs, indicating potential reversal downward.
- **Hidden divergence**: Occurs within a trend. A hidden bullish divergence shows higher lows on price but lower lows on the indicator; it signals trend continuation. Hidden bearish divergences show lower highs on price but higher highs on the indicator.

**How to trade them**

1. Identify divergence on your chosen indicator and timeframe.
2. Confirm with other signals: support/resistance levels, candlestick patterns, volume.
3. Enter the trade in the direction suggested by the divergence (buy on bullish divergence, sell on bearish).
4. Place stop‑loss beyond the recent swing high/low.
5. Take profit at key levels like moving averages, Fibonacci targets or previous highs/lows.

**Tips**

- Divergences are more reliable on higher timeframes.
- Avoid trading divergence against a very strong trend; wait for price structure to show weakness.
- Combine divergences with trend analysis and risk management.`,
    quiz: [
      {
        question: 'What does a bullish divergence indicate?',
        options: ['Momentum is strengthening downward', 'Downward momentum is weakening and a reversal up may occur', 'The trend will continue down forever'],
        correctAnswer: 1,
  },
      {
        question: 'What is a hidden bearish divergence?',
        options: ['Price makes lower highs while the indicator makes higher highs within a downtrend', 'Price makes higher highs and the indicator makes lower highs', 'Price and indicator both make higher highs'],
        correctAnswer: 0
      },
      {
        question: 'Which indicators are commonly used to spot divergences?',
        options: ['Bollinger Bands and moving averages', 'RSI, MACD or Stochastic', 'Volume profile only'],
        correctAnswer: 1
      },
      {
        question: 'What should you do after spotting a divergence?',
        options: ['Take the trade immediately without confirmation', 'Look for confirmation and manage risk with a stop‑loss', 'Ignore it because divergences never work'],
        correctAnswer: 1
      },
      {
        question: 'On which timeframes are divergences more reliable?',
        options: ['1-minute charts', 'Higher timeframes like 4H or daily', 'Timeframe doesn’t matter'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'fundamental-analysis-basics': {
    id: 'fundamental-analysis-basics',
    title: 'Fundamental Analysis Basics',
    category: 'fundamentals',
    objective: 'Learn to evaluate crypto projects based on qualitative and quantitative factors',
    content: `Fundamental analysis aims to determine the intrinsic value of an asset by examining qualitative and quantitative factors. For cryptocurrencies, this involves looking beyond the price chart to understand the underlying project.

**Key qualitative factors**

- **Team and leadership**: Who are the founders and developers? Do they have a strong track record and clear vision?
- **Technology**: Is the protocol innovative and scalable? Does it solve a real problem better than competitors?
- **Use case and adoption**: What problem does the token solve? Are businesses or users actually using it?
- **Community and governance**: An active community and transparent governance increase resilience and adaptability.
- **Competition and market positioning**: What differentiates this project from others? Is the sector crowded?

**Quantitative and economic factors**

- **Tokenomics**: Total supply, circulating supply, inflation rate, distribution among team, investors and community.
- **Funding and revenue**: Has the project secured funding? Does it have revenue streams? How long is the runway?
- **On‑chain metrics**: Transaction volume, active addresses, total value locked (TVL).

**Methodology**

1. Read the whitepaper and roadmap.
2. Research the team’s background and past projects.
3. Analyse tokenomics: distribution, unlock schedule, incentives.
4. Look at network activity and adoption metrics.
5. Compare with competitors and evaluate market opportunity.

Fundamental analysis does not provide exact price targets, but it helps you avoid scams and identify long‑term opportunities.`,
    quiz: [
      {
        question: 'What is the main goal of fundamental analysis?',
        options: ['Predict short‑term price movements', 'Determine the intrinsic value of a project by looking at qualitative and quantitative factors', 'Follow Twitter sentiment'],
        correctAnswer: 1,
  },
      {
        question: 'Which factor is NOT typically considered in fundamental analysis?',
        options: ['Team experience', 'Technology and use case', 'Color of the project’s logo'],
        correctAnswer: 2
      },
      {
        question: 'What does tokenomics include?',
        options: ['Price charts only', 'Supply distribution, inflation rate and token utility', 'Marketing slogans'],
        correctAnswer: 1
      },
      {
        question: 'Why research a project’s team?',
        options: ['To see if they have a strong track record and clear vision', 'Because it’s irrelevant', 'To copy their code'],
        correctAnswer: 0
      },
      {
        question: 'What should you read first when analysing a crypto project?',
        options: ['Its marketing tweets', 'The whitepaper and roadmap', 'News articles only'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'interesting-site-links': {
    id: 'interesting-site-links',
    title: 'Useful Cryptocurrency Resources',
    category: 'fundamentals',
    objective: 'Discover essential websites and tools for crypto traders',
    content: `Having the right resources is crucial for staying informed and making good trading decisions. Here are some categories of sites every crypto trader should know:

**Market data and price tracking**

- **CoinGecko** / **CoinMarketCap**: Comprehensive data on prices, market capitalisation, supply and more.
- **Messari**: Research and metrics on major crypto projects.

**Charting platforms**

- **TradingView**: Professional charting with a wide range of indicators, drawing tools and social sharing.
- **GoCharting**: Alternative charting site with order book heatmaps and volume profiles.

**Portfolio trackers**

- **Delta**, **CoinStats**, **Zerion**: Apps to track your portfolio across exchanges and wallets, monitor profit/loss and get alerts.

**News and research**

- **CoinDesk**, **Cointelegraph**, **The Block**: Up‑to‑date news on markets, regulations and technology.
- **Glassnode Insights**: On‑chain analytics and market commentary.

**Others**

- **Etherscan**, **BscScan**: Blockchain explorers for Ethereum and Binance Smart Chain to check transactions and token contracts.
- **DefiLlama**: Overview of TVL and yields in DeFi protocols.

Bookmark these resources and refer to them regularly to stay ahead.`,
    quiz: [
      {
        question: 'Which website is widely used for professional charting?',
        options: ['CoinGecko', 'TradingView', 'Reddit'],
        correctAnswer: 1,
  },
      {
        question: 'What do portfolio trackers like Delta or CoinStats allow you to do?',
        options: ['Read news articles', 'Track your portfolio across exchanges and wallets', 'Mine Bitcoin'],
        correctAnswer: 1
      },
      {
        question: 'Which sites provide on‑chain explorers?',
        options: ['Etherscan and BscScan', 'YouTube and TikTok', 'Cointelegraph and DeFiLlama'],
        correctAnswer: 0
      },
      {
        question: 'Where would you read about the latest regulatory news?',
        options: ['Cointelegraph or The Block', 'Spotify', 'Netflix'],
        correctAnswer: 0
      },
      {
        question: 'What kind of information does CoinGecko provide?',
        options: ['Personal coaching', 'Price and market data for cryptocurrencies', 'Employment statistics'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'ws-asian-london-session': {
    id: 'ws-asian-london-session',
    title: 'Trading Sessions: Asian, European and American',
    category: 'fundamentals',
    objective: 'Understand the characteristics of different market sessions and their impact on crypto trading',
    content: `Although cryptocurrency markets operate 24/7, activity still follows the rhythm of traditional financial centres. Understanding the different sessions helps you anticipate volatility and liquidity.

**Asian session (Tokyo/Hong Kong)**

- **Hours**: roughly 1:00 – 9:00 UTC (2:00 – 10:00 in Paris during winter)
- Characterised by lower volatility compared to European/US sessions.
- Focus on Asian markets; news from Japan, China and Australia can affect price.
- Major coins like BTC and ETH often range or make smaller moves.

**European session (London)**

- **Hours**: about 7:00 – 15:00 UTC (8:00 – 16:00 in Paris)
- Increased volatility as European traders react to overnight news and prepare for the US open.
- London is the largest forex centre; liquidity is high.

**American session (New York)**

- **Hours**: around 13:00 – 21:00 UTC (14:00 – 22:00 in Paris)
- The most volatile session. US economic data, stock market movements and Fed announcements heavily influence price.
- Overlaps with the tail end of the European session, creating a period of very high activity between 13:00–16:00 UTC.

**Tips for crypto trading**

- Expect larger price swings during the US session and the London/New York overlap.
- Use quieter Asian session to plan and refine analysis.
- Be aware of Daylight Saving Time shifts; session times shift by one hour in spring and autumn.
- Even though crypto trades 24/7, human traders and institutional desks follow these rhythms.`,
    quiz: [
      {
        question: 'Which trading session typically sees the highest volatility?',
        options: ['Asian session', 'European session', 'American session'],
        correctAnswer: 2,
  },
      {
        question: 'When do the European and American sessions overlap, creating very high activity?',
        options: ['1:00 – 3:00 UTC', '7:00 – 9:00 UTC', '13:00 – 16:00 UTC'],
        correctAnswer: 2
      },
      {
        question: 'What is a characteristic of the Asian session?',
        options: ['Highest liquidity', 'Lower volatility and range‑bound price action', 'It doesn’t exist for crypto'],
        correctAnswer: 1
      },
      {
        question: 'Why is the London session important?',
        options: ['It has no effect', 'London is a major forex hub, increasing liquidity and volatility', 'Only Asian traders are active'],
        correctAnswer: 1
      },
      {
        question: 'How do Daylight Saving Time changes affect sessions?',
        options: ['They don’t change session times', 'Session times shift by one hour in spring and autumn', 'They double the length of sessions'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'tokenomics': {
    id: 'tokenomics',
    title: 'Tokenomics',
    category: 'fundamentals',
    objective: 'Understanding crypto economic design.',
    content: `**Summary** Tokenomics describes the economy of a token: its creation, distribution and incentive mechanisms.
- Supply: total amount and circulation of tokens available on the market.
- Burn: deliberate destruction of tokens to reduce supply and support price.
- Inflation: rate at which new tokens are issued over time.
- Utility: purpose of the token (payment, governance, access to services).
**Example** The BNB token regularly burns a portion of the supply to maintain scarcity.
**Key Takeaway** Understanding tokenomics helps evaluate a project's viability.`,
    quiz: [
      {
        question: 'What does circulating supply mean?',
        options: ['Total tokens ever created', 'Tokens currently in circulation', 'Tokens locked forever'],
        correctAnswer: 1
      },
      {
        question: 'Why are vesting schedules important for team allocations?',
        options: ['They aren’t important', 'They prevent the team from selling everything at once', 'They increase inflation'],
        correctAnswer: 1
      },
      {
        question: 'What is the role of governance tokens?',
        options: ['To mine Bitcoin', 'To grant voting rights on protocol changes', 'To create memes'],
        correctAnswer: 1
      },
      {
        question: 'How do you assess whether token incentives are healthy?',
        options: ['Marketing only', 'They reward long‑term participation, not dumping', 'Ignore tokenomics'],
        correctAnswer: 1
      }
    ],
    videos: [
      { type: 'intro', title: 'Tokenomics Basics', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Supply & Vesting Explained', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Tokenomics (Investopedia)', url: 'https://www.investopedia.com/' }],
  },
  'on-chain-analysis': {
    id: 'on-chain-analysis',
    title: 'Basics of On‑Chain Analysis',
    category: 'fundamentals',
    objective: 'Use blockchain data to gauge network health and investor behaviour',
    content: `On‑chain analysis examines data recorded on a blockchain to understand network activity and investor sentiment. It provides insights that are not visible on price charts alone.

**Key metrics**

- **Active addresses**: Number of unique addresses participating in transactions. Rising active addresses often correlate with adoption.
- **Transaction volume and count**: Amount and number of transactions; spikes can indicate increased use or speculation.
- **Hash rate**: For proof‑of‑work chains, total computational power securing the network. A rising hash rate can signal miner confidence.
- **Total Value Locked (TVL)**: For DeFi protocols, the amount of assets locked; higher TVL suggests greater usage.

**Popular indicators**

- **NVT ratio (Network Value to Transactions)**: Analogous to a price/earnings ratio for crypto; high NVT may mean overvaluation.
- **MVRV Z‑Score**: Compares market value to realised value; extreme values signal tops or bottoms.
- **Exchange inflows/outflows**: Large transfers to or from exchanges can indicate impending sell or buy pressure.
- **HODL waves and coin dormancy**: Measure the age of coins being moved, showing whether long‑term holders are selling.

**How to use on‑chain data**

- Combine metrics rather than relying on one indicator.
- Identify divergences between price and on‑chain data (e.g., price rises while active addresses fall may signal weakness).
- Use on higher timeframes (daily/weekly) for macro view.
- Remember that on‑chain analysis is more art than science; context is key.

On‑chain analysis complements technical and fundamental analysis for a holistic view.`,
    quiz: [
      {
        question: 'What does a rising number of active addresses suggest?',
        options: ['Decreasing adoption', 'Increasing adoption and network activity', 'Nothing relevant'],
        correctAnswer: 1,
      },
      {
        question: 'What does the NVT ratio compare?',
        options: ['Market value to hash rate', 'Network value to transaction value', 'Price to social media followers'],
        correctAnswer: 1
      },
      {
        question: 'Why monitor exchange inflows and outflows?',
        options: [
          'They show whether coins are moving to exchanges to be sold or withdrawn to cold storage',
          'They predict weather conditions',
          'They determine interest rates'
        ],
        correctAnswer: 0
      },
      {
        question: 'What does TVL measure in DeFi?',
        options: [
          'Trading volume on exchanges',
          'The value of assets locked in DeFi protocols',
          'The total value of all crypto mining rigs'
        ],
        correctAnswer: 1
      },
      {
        question: 'How should on‑chain indicators be used?',
        options: [
          'In isolation, as single indicators are enough',
          'In combination and with context for best results',
          'Never'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'news-trading': {
    id: 'news-trading',
    title: 'Trading the News',
    category: 'fundamentals',
    objective: 'Learn how to react to news events and manage the risks of news‑based trading',
    content: `News moves markets—regulatory announcements, economic data, corporate partnerships or hacks can cause sudden price swings. Trading the news involves anticipating and reacting to these events.

**Types of news**

- **Macro news**: Economic indicators (interest rates, inflation, employment data) and central bank decisions that affect overall market sentiment.
- **Regulatory news**: Government actions like bans, approvals or new legislation affecting crypto.
- **Project‑specific news**: Partnership announcements, software upgrades (hard forks), token burns or hacks.

**Strategies**

- **Anticipation**: Position yourself before a scheduled event (like a Fed meeting) expecting a certain outcome. High risk if the outcome differs.
- **Reaction**: Wait for the news release and the initial price reaction. Enter after confirming direction; avoids guessing but may miss part of the move.
- **Filtering**: Not all news matters. Focus on credible sources and news that truly impacts fundamentals.

**Risk management**

- News trading is volatile: use smaller position sizes and wider stop‑losses.
- Avoid overleveraging; slippage and gaps can cause bigger losses.
- Verify news from multiple reliable sources to avoid reacting to fake headlines.

Trading the news can be profitable but requires speed, discipline and strong risk management.`,
    quiz: [
      {
        question: 'Which type of news includes interest rate decisions and inflation data?',
        options: ['Macro news', 'Project‑specific news', 'Gossip'],
        correctAnswer: 0,
  },
      {
        question: 'What is a key risk of news trading?',
        options: ['Low volatility', 'Fake news or unexpected outcomes causing slippage', 'Guaranteed profit'],
        correctAnswer: 1
      },
      {
        question: 'What should you do before acting on a news headline?',
        options: ['Trust it blindly', 'Verify it with multiple reliable sources', 'Wait for a week'],
        correctAnswer: 1
      },
      {
        question: 'Which strategy waits for the initial price reaction before entering?',
        options: ['Anticipation', 'Reaction', 'Sleeping'],
        correctAnswer: 1
      },
      {
        question: 'Why is position sizing important in news trading?',
        options: ['Because trades never hit stop‑loss', 'To manage higher volatility and potential slippage', 'It doesn’t matter'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'economic-calendar': {
    id: 'economic-calendar',
    title: 'Using the Economic Calendar',
    category: 'fundamentals',
    objective: 'Identify key economic releases and understand their impact on markets',
    content: `An economic calendar lists scheduled releases of important macroeconomic indicators and events. Even in crypto, these events influence investor sentiment and liquidity.

**Major economic indicators**

- **Interest rate decisions**: Central banks like the Fed or ECB set benchmark rates. Higher rates can strengthen a currency and weigh on risk assets.
- **Employment data**: Non‑farm payrolls (NFP) and unemployment rate indicate labour market health; surprises move markets.
- **Inflation data**: Consumer Price Index (CPI) and Producer Price Index (PPI) measure price changes; high inflation can lead to tighter monetary policy.
- **Purchasing Managers’ Index (PMI)**: Gauges economic activity in manufacturing and services.
- **GDP growth**: Indicates the economic expansion or contraction of a country.

**How to use the calendar**

1. Check the calendar at the start of your week to note high‑impact events.
2. Mark the release times; avoid opening large positions just before.
3. Reduce leverage or take profits ahead of major announcements.
4. Wait for the data and the market’s initial reaction; volatility often spikes and then stabilises.

**Tools**

Popular calendars include Investing.com, ForexFactory and TradingView’s built‑in calendar. Set your timezone (Europe/Paris) for accurate times.

Economic events are unpredictable; manage risk and avoid trading purely on expectations.`,
    quiz: [
      {
        question: 'Which event involves monthly US employment data?',
        options: ['CPI release', 'Non‑farm payrolls', 'GDP report'],
        correctAnswer: 1,
  },
      {
        question: 'Why check an economic calendar before trading?',
        options: ['To plan around high‑impact events and avoid surprises', 'To know when to sleep', 'It’s unnecessary for crypto'],
        correctAnswer: 0
      },
      {
        question: 'How do central bank rate decisions typically affect markets?',
        options: ['Higher rates often strengthen a currency and reduce risk appetite', 'They always boost crypto prices', 'They have no effect'],
        correctAnswer: 0
      },
      {
        question: 'Which tool provides an economic calendar?',
        options: ['Netflix', 'Investing.com', 'Spotify'],
        correctAnswer: 1
      },
      {
        question: 'What should you do just before a major data release?',
        options: ['Open your biggest leveraged position', 'Reduce exposure or wait for the release', 'Close your trading platform'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'whale-watching': {
    id: 'whale-watching',
    title: 'Whale Watching – Tracking Large Transactions',
    category: 'fundamentals',
    objective: 'Monitor big players’ moves to anticipate potential market shifts',
    content: `“Whales” are individuals or institutions that hold large amounts of a cryptocurrency. Their transactions can move markets, so watching whale activity provides clues about supply and demand.

**Why monitor whales**

- When whales buy, they absorb supply, potentially driving price up.
- When whales send coins to exchanges, it may signal intent to sell.
- Whales may also move coins for internal transfers; context matters.

**How to track whale activity**

- **Blockchain explorers**: Etherscan, Blockchain.com show large transactions; look for unusual size or frequency.
- **Alert services**: Whale Alert, Whale Watcher Guru send notifications of transactions over a certain threshold.
- **On‑chain analytics platforms**: CryptoQuant, Glassnode offer dashboards tracking exchange inflows/outflows of large wallets.

**Interpreting the data**

- Not all big transfers are buys or sells; an entity may move coins between wallets.
- Look for patterns: repeated inflows to exchanges often precede sell pressure; large withdrawals signal accumulation.
- Combine whale data with price action and order book depth for context.

**Limitations**

Following whales isn’t a guaranteed strategy; whales can use strategies to mislead. Use whale watching as one piece of the puzzle alongside technical and fundamental analysis.`,
    quiz: [
      {
        question: 'Who are “whales” in crypto markets?',
        options: ['Small retail traders', 'Entities holding large amounts of a cryptocurrency', 'Fish in the ocean'],
        correctAnswer: 1,
  },
      {
        question: 'What may signal a whale is preparing to sell?',
        options: ['Large transfers to exchanges', 'Withdrawals from exchanges', 'No activity at all'],
        correctAnswer: 0
      },
      {
        question: 'Which service alerts you to large on‑chain transactions?',
        options: ['Twitter', 'Whale Alert', 'Wikipedia'],
        correctAnswer: 1
      },
      {
        question: 'Why should you be cautious when interpreting whale moves?',
        options: ['Whales never influence markets', 'Transfers can be internal and whales may mislead', 'Whale data is always clear'],
        correctAnswer: 1
      },
      {
        question: 'How should whale data be used?',
        options: ['As your sole trading signal', 'As one of many factors combined with other analyses', 'Never'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'scalping-strategy': {
    id: 'scalping-strategy',
    title: 'Scalping Strategy',
    category: 'strategies',
    objective: 'Understand the scalping style and how to apply it safely',
    content: `Scalping is a trading style that involves taking numerous small profits on trades that last seconds to minutes. It requires focus, speed and strict discipline.

**Principles**

- Trade the smallest intraday moves, aiming for a few pips or dollars.
- Close positions quickly; avoid holding through pullbacks.
- Use high leverage cautiously; the goal is many tiny gains.

**Conditions for success**

- **Market choice**: Highly liquid assets with tight spreads (e.g., BTC/USDT, major forex pairs).
- **Execution speed**: A stable, fast internet connection and a reliable platform are essential.
- **Clear strategy**: Define entry/exit rules based on indicators (like EMA crossovers, VWAP) or order book patterns.
- **Emotional control**: Accept small losses quickly; they are part of the strategy.

**Indicators and tools**

- **Short moving averages**: 9/21 EMA crossovers for quick signals.
- **VWAP or Volume profile**: Identify fair value for intraday trading.
- **Order flow/Depth of market**: See real‑time supply and demand.
- **Tick charts or 1–5 minute charts**: Provide granular view of price action.

**Risks**

- High frequency of trades increases fees; choose low‑fee exchanges.
- Emotional fatigue: concentration is required for extended periods.
- Slippage: Rapid markets can move against you before you exit.

Scalping is best suited for experienced traders who can monitor the market continuously and manage stress.`,
    quiz: [
      {
        question: 'What is the typical holding period for a scalping trade?',
        options: ['Seconds to minutes', 'Hours to days', 'Weeks'],
        correctAnswer: 0,
  },
      {
        question: 'Which asset characteristic is important for scalping?',
        options: ['Low liquidity', 'High liquidity and tight spreads', 'Unknown price history'],
        correctAnswer: 1
      },
      {
        question: 'What is essential for execution speed in scalping?',
        options: ['A slow internet connection', 'A fast internet connection and reliable platform', 'Only using mobile apps'],
        correctAnswer: 1
      },
      {
        question: 'Why should you control emotions when scalping?',
        options: ['Because you trade rarely', 'Because quick decisions and small losses require discipline', 'Because emotions increase profits'],
        correctAnswer: 1
      },
      {
        question: 'What is a key risk of scalping?',
        options: ['Low fees', 'High trade frequency leading to fees and slippage', 'Long holding periods'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'swing-trading-strategy': {
    id: 'swing-trading-strategy',
    title: 'Swing Trading Strategy',
    category: 'strategies',
    objective: 'Learn how to capture intermediate price moves lasting days to weeks',
    content: `Swing trading aims to capture “swings” or intermediate trends in the market that last from a few days to several weeks. It sits between day trading and long‑term investing.

**Characteristics**

- Trades typically last from 2 days to a few weeks.
- Traders use technical analysis to identify entry and exit points, sometimes combined with fundamentals.
- Less screen time is needed compared to day trading or scalping; positions are monitored rather than actively managed every minute.

**Steps to implement**

1. **Identify the trend**: Use moving averages (like 20/50/200 EMA), price structure or indicators (MACD, RSI) to determine if the market is trending.
2. **Find entry zones**: Use pullbacks to support in uptrends or rallies to resistance in downtrends. Look for confluence with Fibonacci, trend lines or chart patterns.
3. **Set stop‑loss and take‑profit**: Place stops beyond recent swing highs/lows. Targets can be set at the next resistance/support or using measured moves.
4. **Manage the trade**: Trail your stop or scale out as the trade moves in your favour. Avoid emotional exits.

**Advantages and disadvantages**

- **Pros**: Less time‑intensive than day trading; captures significant moves; suits part‑time traders.
- **Cons**: Overnight risk (news can cause gaps); requires patience; not suitable for very volatile assets.

Swing trading is a balanced approach for those who want to participate in the market without constant monitoring.`,
    quiz: [
      {
        question: 'How long does a typical swing trade last?',
        options: ['Minutes', 'Days to weeks', 'Months to years'],
        correctAnswer: 1,
  },
      {
        question: 'What is the first step in swing trading?',
        options: ['Entering immediately', 'Identifying the trend', 'Ignoring the trend'],
        correctAnswer: 1
      },
      {
        question: 'What is a pullback in an uptrend?',
        options: ['A move down toward support before continuing higher', 'A permanent reversal', 'A sideways range'],
        correctAnswer: 0
      },
      {
        question: 'Why is swing trading suitable for people with day jobs?',
        options: ['It requires constant screen time', 'It allows monitoring trades instead of watching every tick', 'It has no risk'],
        correctAnswer: 1
      },
      {
        question: 'What is a disadvantage of swing trading?',
        options: ['No overnight risk', 'Requires patience and can be affected by news gaps', 'It captures only very small moves'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'breakout-trading': {
    id: 'breakout-trading',
    title: 'Breakout Trading',
    category: 'strategies',
    objective: 'Identify and trade breakouts while avoiding fakeouts',
    content: `Breakout trading involves entering a trade when price breaks through a well‑defined support or resistance level. The idea is to catch the start of a strong move as the market escapes a consolidation zone.

**How to identify breakouts**

- **Key levels**: Identify consolidation ranges, chart patterns (triangles, rectangles) or horizontal support/resistance where price has bounced multiple times.
- **Volume confirmation**: Breakouts with high volume are more likely to succeed; low‑volume breakouts are more likely to fail.
- **Close beyond the level**: Wait for a candle close outside the range rather than just an intraday wick.

**Trading steps**

1. Mark the breakout level on your chart.
2. Wait for price to break and close beyond the level.
3. Check that volume is above recent average.
4. Enter the trade; place your stop just below (for a bullish breakout) or above (for a bearish breakout) the breakout level.
5. Target the height of the consolidation (measured move) or next significant level.

**Dealing with fakeouts**

- Fakeouts occur when price briefly breaks the level and quickly reverses back.
- To avoid them: wait for a close outside the range; use volume and momentum indicators; trade during active sessions with liquidity.

Breakout trading can be powerful but requires patience and risk management.`,
    quiz: [
      {
        question: 'What is a breakout in trading?',
        options: ['Price moving within a range', 'Price moving through a significant level with momentum', 'Price staying flat'],
        correctAnswer: 1,
  },
      {
        question: 'Why is volume important in a breakout?',
        options: ['High volume confirms the validity of the breakout', 'Low volume is better', 'Volume has no effect'],
        correctAnswer: 0
      },
      {
        question: 'What is a fakeout?',
        options: ['A successful breakout', 'A false breakout that quickly reverses back into the range', 'A new indicator'],
        correctAnswer: 1
      },
      {
        question: 'Where should you place your stop on a bullish breakout?',
        options: ['Above the breakout level', 'Below the breakout level', 'At any random place'],
        correctAnswer: 1
      },
      {
        question: 'Which chart patterns often precede breakouts?',
        options: ['Triangles, rectangles or consolidation ranges', 'Bull flags only', 'No pattern needed'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'range-trading': {
    id: 'range-trading',
    title: 'Range Trading Strategy',
    category: 'strategies',
    objective: 'Take advantage of horizontal price ranges by buying low and selling high',
    content: `Range trading (or channel trading) is a strategy used when price oscillates between parallel support and resistance levels without a clear trend. The goal is to buy near the bottom of the range and sell near the top.

**Identifying a range**

- Price touches at least two highs and two lows at roughly the same levels.
- The range can be horizontal or slightly sloped but should show clear boundaries.
- Volume often decreases as the range develops.

**Trading the range**

1. **Buy near support**: Wait for price to approach the lower boundary; look for reversal patterns (hammer candles, bullish divergences) and enter with a stop below the support zone.
2. **Sell near resistance**: As price nears the upper boundary, look for rejection signals (shooting star, bearish divergence) and enter a short with a stop above the resistance.
3. **Take profit**: Exit near the opposite boundary; ranges often reverse near the edges.

**Risk management**

- Avoid entering in the middle of the range; risk/reward is poor.
- Use tight stops; ranges can break unexpectedly.
- Combine with oscillators like RSI or Stochastic to gauge overbought/oversold conditions.

**Watch for breakouts**

Eventually, ranges break. Monitor volume and price action for signs of a breakout and be ready to switch strategies.`,
    quiz: [
      {
        question: 'What characterises a trading range?',
        options: ['Price stays between defined support and resistance levels', 'Price constantly makes new highs', 'There is no support or resistance'],
        correctAnswer: 0,
  },
      {
        question: 'Where should you consider buying in a range?',
        options: ['Near the middle', 'Near the lower boundary/support', 'Near the upper boundary'],
        correctAnswer: 1
      },
      {
        question: 'Why avoid trading in the middle of the range?',
        options: ['Because the range is always trending', 'Because risk/reward is less favourable', 'It doesn’t matter'],
        correctAnswer: 1
      },
      {
        question: 'Which indicators help confirm overbought or oversold conditions in a range?',
        options: ['RSI or Stochastic', 'MACD alone', 'Volume only'],
        correctAnswer: 0
      },
      {
        question: 'What should you be prepared for when trading ranges?',
        options: ['The range will last forever', 'A breakout can occur, requiring a change of strategy', 'Prices will never move'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'arbitrage': {
    id: 'arbitrage',
    title: 'Arbitrage Opportunities',
    category: 'strategies',
    objective: 'Understand different types of arbitrage and how to exploit price discrepancies',
    content: `Arbitrage involves taking advantage of price differences for the same asset across different markets or instruments. It aims to capture risk‑free or low‑risk profits by buying low in one place and selling high elsewhere.

**Types of arbitrage**

- **Spatial arbitrage**: Buy on one exchange where the price is lower and simultaneously sell on another where it is higher. Requires quick execution and consideration of fees.
- **Triangular arbitrage**: Exploit price discrepancies within a single exchange by trading three currency pairs in a loop (e.g., BTC/ETH, ETH/USDT, BTC/USDT).
- **Statistical arbitrage**: Use quantitative models to identify temporary price divergences between correlated assets, expecting mean reversion.

**Steps to perform arbitrage**

1. Monitor price feeds across multiple exchanges in real time.
2. Calculate net profitability after including trading fees, withdrawal fees and slippage.
3. Execute buy and sell orders simultaneously or as quickly as possible.
4. Transfer assets if necessary (for spatial arbitrage), considering blockchain confirmation times.

**Risks and considerations**

- **Fees and slippage** can turn a profitable spread into a loss.
- **Execution speed** is critical; competition is high and spreads close quickly.
- **Regulatory and withdrawal limits** may delay transfers.
- **Market risk**: Prices can converge before you execute both sides.

Arbitrage opportunities are less common in liquid markets but still arise due to inefficiencies and latency.`,
    quiz: [
      {
        question: 'What is spatial arbitrage?',
        options: ['Trading a single pair on one exchange', 'Buying an asset on one exchange and selling it on another to profit from a price difference', 'Speculating on price without buying'],
        correctAnswer: 1,
  },
      {
        question: 'What is triangular arbitrage?',
        options: ['Trading three assets to exploit pricing inefficiencies within one exchange', 'Moving funds between three exchanges', 'Trading only Bitcoin'],
        correctAnswer: 0
      },
      {
        question: 'Why are fees important in arbitrage?',
        options: ['They have no impact', 'They can negate profits from small price spreads', 'They double profits'],
        correctAnswer: 1
      },
      {
        question: 'What is a key risk in arbitrage?',
        options: ['Execution speed and market moves closing the spread', 'Guaranteed returns', 'No competition'],
        correctAnswer: 0
      },
      {
        question: 'Are arbitrage opportunities common in highly liquid markets?',
        options: ['Yes, very common', 'Less common but still possible', 'They never exist'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'grid-trading': {
    id: 'grid-trading',
    title: 'Grid Trading Strategy',
    category: 'strategies',
    objective: 'Set up and manage a grid trading system to profit from sideways markets',
    content: `Grid trading is a semi‑automated strategy that places buy and sell orders at predefined intervals above and below a base price, forming a “grid.” It profits from price oscillations within a range without needing to predict direction.

**Setting up a grid**

1. **Define range**: Select the upper and lower price boundaries of the grid based on recent highs and lows.
2. **Choose the number of levels**: Decide how many grid lines (orders) to place within the range; more lines mean smaller profit per trade but more frequent fills.
3. **Place orders**: For a neutral grid, place alternating buy and sell orders at equal intervals (e.g., every $50). When the price goes up, your previous buys are sold; when it goes down, sells are closed and new buys open.

**Advantages**

- Works well in ranging or sideways markets.
- Requires less active management once set up; can be automated.
- Captures small swings repeatedly.

**Disadvantages**

- Trending markets can cause cumulative losses as price moves in one direction.
- Requires sufficient capital to support multiple open positions.
- Needs careful calibration of grid spacing and size to match volatility.

Grid trading is best used in stable or range‑bound markets and can be combined with indicators to pause or adjust the grid when a breakout seems likely.`,
    quiz: [
      {
        question: 'What is the main idea behind grid trading?',
        options: ['Predicting a big breakout', 'Placing buy and sell orders at intervals to profit from price oscillations', 'Holding a position for years'],
        correctAnswer: 1,
  },
      {
        question: 'In which market conditions does grid trading work best?',
        options: ['Strong trending markets', 'Sideways or range‑bound markets', 'Always in bull markets'],
        correctAnswer: 1
      },
      {
        question: 'What happens if the market trends strongly in one direction with a neutral grid?',
        options: ['Grid trading profits more', 'Grid trading can accumulate losses', 'It doesn’t matter'],
        correctAnswer: 1
      },
      {
        question: 'What is a key factor when choosing grid spacing and levels?',
        options: ['Random selection', 'Matching the spacing to market volatility', 'Using only one level'],
        correctAnswer: 1
      },
      {
        question: 'Why might you combine grid trading with other indicators?',
        options: ['To run automated ads', 'To pause or adjust the grid when a breakout is likely', 'It’s not necessary'],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  },
  'dca-strategy': {
    id: 'dca-strategy',
    title: 'Dollar‑Cost Averaging (DCA) Strategy',
    category: 'strategies',
    objective: 'Invest regularly over time to reduce the impact of volatility',
    content: `Dollar‑Cost Averaging (DCA) is an investment approach where you buy a fixed amount of an asset at regular intervals, regardless of its price. This method smooths out your purchase price over time and reduces the risk of investing a large sum at the wrong moment.

**How DCA works**

- **Regular intervals**: You decide on a schedule (e.g., weekly, monthly) and stick to it.
- **Fixed amount**: Each time, you invest the same amount of money (e.g., €100).
- **Long‑term focus**: DCA is best suited for assets you believe will appreciate over years.

**Advantages**

- **Reduces timing risk**: You don’t have to guess the perfect entry point.
- **Builds discipline**: Automating purchases avoids emotional decisions.
- **Good for volatile assets**: In markets like crypto, prices fluctuate wildly; DCA averages your cost basis.

**Disadvantages**

- **Opportunity cost**: If price rises steadily after your first purchase, lump sum investing could have yielded higher returns.
- **Not ideal in strong downtrends**: DCA into a falling asset can lock in losses if fundamentals deteriorate.
- **Requires patience**: DCA is a long‑term strategy; gains may take time.

**Tips**

- Combine DCA with fundamental analysis; don’t DCA into projects without solid prospects.
- Set up automated purchases to avoid forgetting.
- Review periodically; you can stop or adjust contributions if the asset’s outlook changes.

DCA is popular among long‑term investors seeking to build a position gradually while managing volatility.`,
    quiz: [
      {
        question: 'What is the main principle of DCA?',
        options: ['Investing a fixed amount regularly regardless of price', 'Investing all your capital at once', 'Trying to time the market perfectly'],
        correctAnswer: 0,
  },
      {
        question: 'What is a key advantage of DCA?',
        options: ['It eliminates all risk', 'It reduces the impact of volatility and timing risk', 'It guarantees higher returns than lump sum investing'],
        correctAnswer: 1
      },
      {
        question: 'When might DCA not be ideal?',
        options: ['When an asset is in a strong downtrend and fundamentals are weakening', 'When the market is ranging', 'When you have no budget'],
        correctAnswer: 0
      },
      {
        question: 'How can you make DCA more effective?',
        options: ['Ignore fundamentals', 'Combine with fundamental analysis and automate purchases', 'Change the amount randomly'],
        correctAnswer: 1
      },
      {
        question: 'What does DCA require from the investor?',
        options: ['Patience and discipline', 'Constant market monitoring', 'No involvement at all'],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Investopedia', url: 'https://www.investopedia.com/' }],
  }
};