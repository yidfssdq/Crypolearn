import { Lesson, Category } from '@/types/course';

export const categories: Category[] = [
  {
    id: 'basics',
    name: 'Bases du trading',
    icon: '🪙',
    lessons: [
      '6-rules-of-trading',
      'type-of-trader',
      'what-is-leverage-in-trading',
      'trading-plan',
      'risk-management',
      'trading-terms',
      'dictionary',
      'market-psychology',
      'trading-journal',
      'position-sizing',
      'market-orders',
      'candlestick-patterns'
    ]
  },
  {
    id: 'technical',
    name: 'Analyse technique',
    icon: '📈',
    lessons: [
      'boll',
      'stochastic',
      'rsi',
      'order-block',
      'fair-value-gaps',
      'inversion-fair-value-gaps',
      'macd-indicator',
      'fibonacci-retracement',
      'ema-sma',
      'support-resistance',
      'trend-lines',
      'volume-analysis',
      'ichimoku-cloud',
      'divergence-trading'
    ]
  },
  {
    id: 'fundamental',
    name: 'Analyse fondamentale',
    icon: '🧠',
    lessons: [
      'fundamental-analysis-basics',
      'interesting-site-links',
      'ws-asian-london-session',
      'tokenomics',
      'on-chain-analysis',
      'news-trading',
      'economic-calendar',
      'whale-watching'
    ]
  },
  {
    id: 'strategies',
    name: 'Stratégies avancées',
    icon: '🎯',
    lessons: [
      'scalping-strategy',
      'swing-trading-strategy',
      'breakout-trading',
      'range-trading',
      'arbitrage',
      'grid-trading',
      'dca-strategy'
    ]
  },
  {
    id: 'misc',
    name: 'Divers',
    icon: '💰',
    lessons: [
      'memecoins-tutorial',
      'ebook-pdf',
      'tax-crypto',
      'wallet-security',
      'defi-basics'
    ]
  }
];

export const lessons: Record<string, Lesson> = {
  'portfolio': {
    id: 'portfolio',
    title: 'Gestion de portefeuille',
    category: 'fundamentals',
    objective: 'Diversification et suivi.',
    content: `**Résumé** La gestion de portefeuille crypto consiste à diversifier ses investissements et à suivre ses performances pour optimiser ses rendements et maîtriser ses risques.
- Diversification : répartir ses investissements entre différentes catégories d'actifs (BTC, altcoins, DeFi).
- Allocation : définir un pourcentage pour chaque position selon le profil de risque.
- Suivi : utiliser des outils pour visualiser la performance et ajuster ses positions.
- Ajustement : rebalancer le portefeuille selon l'évolution du marché et ses objectifs personnels.
**Exemple** Allouer 50 % en Bitcoin, 30 % en altcoins et 20 % en stablecoins, puis ajuster mensuellement.
**À retenir** Une bonne gestion permet de maximiser la croissance tout en limitant les pertes.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Gestion de portefeuille', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Gestion de portefeuille', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Gestion de portefeuille', url: 'https://www.investopedia.com/' }],
  },
  'regulation': {
    id: 'regulation',
    title: 'Régulation',
    category: 'fundamentals',
    objective: 'L’avenir légal du Web3.',
    content: `**Résumé** La régulation crypto évolue et vise à encadrer l'utilisation et la diffusion des actifs numériques pour protéger les utilisateurs et l'économie.
- Lois : normes européennes (MiCA) et directives nationales.
- KYC/AML : procédures d'identification pour lutter contre le blanchiment.
- Impacts : plus de clarté pour les investisseurs, mais parfois des contraintes.
**Exemple** La réglementation MiCA oblige les exchanges à s'enregistrer auprès des autorités compétentes.
**À retenir** Suivre l'évolution légale est indispensable pour rester conforme et anticiper les changements.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Régulation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Régulation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Régulation', url: 'https://www.investopedia.com/' }],
  },
  'taxes': {
    id: 'taxes',
    title: 'Fiscalité crypto',
    category: 'fundamentals',
    objective: 'Obligations France/UE.',
    content: `**Résumé** La fiscalité crypto concerne l'imposition des gains et des pertes liés aux transactions, selon la réglementation de votre pays.
- Obligations : déclarer les plus-values et suivre les règles locales (France, UE).
- Calcul : différence entre prix de vente et prix d'achat, en tenant compte des frais.
- Régimes : régime forfaitaire pour les particuliers, régime professionnel pour les traders réguliers.
**Exemple** Remplir sa déclaration annuelle en reportant ses gains en cryptomonnaies.
**À retenir** Bien comprendre la fiscalité évite les sanctions et aide à optimiser sa situation.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Fiscalité crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Fiscalité crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Fiscalité crypto', url: 'https://www.investopedia.com/' }],
  },
  'hardware-wallet': {
    id: 'hardware-wallet',
    title: 'Hardware wallet',
    category: 'fundamentals',
    objective: 'Sécurité maximale (Ledger, Trezor).',
    content: `**Résumé** Les hardware wallets sont des dispositifs physiques qui isolent les clés privées de votre ordinateur et offrent une sécurité maximale.
- Avantages : résistance au piratage, utilisation hors ligne, signature sécurisée.
- Marques : Ledger, Trezor, KeepKey.
- Fonctionnement : les clés ne quittent jamais l'appareil ; on valide chaque transaction manuellement.
**Exemple** Utiliser un Ledger Nano pour signer des transactions sur MetaMask via le Bluetooth ou USB.
**À retenir** Investir dans un hardware wallet est indispensable pour sécuriser de fortes sommes en crypto.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Hardware wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Hardware wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Hardware wallet', url: 'https://www.investopedia.com/' }],
  },
  'backup-wallet': {
    id: 'backup-wallet',
    title: 'Sauvegarde du wallet',
    category: 'fundamentals',
    objective: 'Clés et seed phrase.',
    content: `**Résumé** Sauvegarder son wallet consiste à conserver une copie sécurisée de ses clés privées ou seed phrase pour pouvoir restaurer l'accès à ses fonds.
- Seed phrase : écrire la phrase sur papier et la stocker à plusieurs endroits.
- Sauvegarde matérielle : utiliser des plaques métalliques résistantes au feu et à l'eau.
- Mise à jour : chaque fois que vous créez un nouveau wallet, sauvegardez-le immédiatement.
**Exemple** Noter la seed phrase sur du papier et la conserver dans un coffre-fort.
**À retenir** Une bonne sauvegarde vous protège des pertes accidentelles et des défaillances matérielles.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Sauvegarde du wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Sauvegarde du wallet', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Sauvegarde du wallet', url: 'https://www.investopedia.com/' }],
  },
  'rugpulls': {
    id: 'rugpulls',
    title: 'Rug Pulls',
    category: 'fundamentals',
    objective: 'Comment les repérer.',
    content: `**Résumé** Les rug pulls désignent des projets où les développeurs disparaissent avec les fonds, laissant les investisseurs avec des tokens sans valeur.
- Signes : anonymat de l'équipe, code non audité, promesses de rendements irréalistes.
- Conséquences : perte totale du capital investi.
- Prévention : effectuer des recherches, privilégier les projets transparents et audités.
**Exemple** Un projet DeFi qui ferme son site du jour au lendemain en emportant la liquidité.
**À retenir** La prudence est de mise ; diversifiez et évitez les offres trop belles pour être vraies.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Rug Pulls', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Rug Pulls', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Rug Pulls', url: 'https://www.investopedia.com/' }],
  },
  'scams': {
    id: 'scams',
    title: 'Arnaques',
    category: 'fundamentals',
    objective: 'Phishing, faux sites, promesses douteuses.',
    content: `**Résumé** Les arnaques crypto exploitent la crédulité des utilisateurs via des phishing, faux airdrops et promesses irréalistes.
- Phishing : messages qui imitent des services officiels pour voler vos informations.
- Faux airdrops : tokens gratuits conditionnés à la saisie de votre clé privée ou à un envoi d'argent.
- Schemes : Ponzi, pyramides de Ponzi qui garantissent des rendements fixes.
**Exemple** Un site clone de Metamask demandant votre seed phrase pour récupérer vos fonds.
**À retenir** Vérifier l'URL, ne jamais partager vos informations et se méfier des offres trop alléchantes.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Arnaques', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Arnaques', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Arnaques', url: 'https://www.investopedia.com/' }],
  },
  'key-security': {
    id: 'key-security',
    title: 'Sécurité des clés privées',
    category: 'fundamentals',
    objective: 'Ne jamais partager.',
    content: `**Résumé** La sécurité des clés privées est essentielle pour protéger ses cryptomonnaies et éviter tout accès non autorisé.
- Clé privée : code secret qui permet de dépenser des cryptos ; ne doit jamais être divulgué.
- Seed phrase : liste de mots servant de sauvegarde ; à stocker hors ligne.
- Bonnes pratiques : utiliser des wallets matériels, éviter les liens suspects, activer l'authentification à deux facteurs.
**Exemple** Ne jamais envoyer votre seed phrase par email ou sur un site web.
**À retenir** La perte ou le vol de votre clé privée entraîne la perte définitive de vos fonds.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Sécurité des clés privées', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Sécurité des clés privées', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Sécurité des clés privées', url: 'https://www.investopedia.com/' }],
  },
  'metaverse': {
    id: 'metaverse',
    title: 'Métavers et crypto',
    category: 'fundamentals',
    objective: 'L’avenir immersif du Web3.',
    content: `**Résumé** Le métavers désigne un univers virtuel persistant où les utilisateurs peuvent interagir, travailler, jouer et posséder des biens numériques.
- Terrains virtuels : parcelles achetées et revendues sous forme de NFT.
- Avatars : représentation numérique d'une personne dans le monde virtuel.
- Économie : biens et services vendus en cryptomonnaies.
**Exemple** Participer à un concert virtuel dans le métavers avec son avatar.
**À retenir** Le métavers associe immersion, propriété numérique et nouvelles formes de socialisation.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Métavers et crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Métavers et crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Métavers et crypto', url: 'https://www.investopedia.com/' }],
  },
  'social-tokens': {
    id: 'social-tokens',
    title: 'Tokens sociaux',
    category: 'fundamentals',
    objective: 'Créer des communautés.',
    content: `**Résumé** Les social tokens sont des actifs qui permettent de créer et de fédérer une communauté autour d'un créateur ou d'un projet.
- Fonction : donner des droits d'accès, de vote ou des avantages exclusifs aux membres.
- Créateurs : artistes, influenceurs ou communautés qui souhaitent monétiser leur base.
- Tokenomics : distribution et utilisation pensées pour renforcer la communauté.
**Exemple** Détenir des tokens d'un artiste pour accéder à des contenus inédits et à des votes sur ses créations.
**À retenir** Les social tokens transforment la relation entre créateurs et fans.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Tokens sociaux', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Tokens sociaux', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Tokens sociaux', url: 'https://www.investopedia.com/' }],
  },
  'web3-identity': {
    id: 'web3-identity',
    title: 'Identité Web3',
    category: 'fundamentals',
    objective: 'ENS, Lens, soulbound tokens.',
    content: `**Résumé** L'identité Web3 permet de représenter qui l'on est sur la blockchain via des pseudonymes, des noms de domaine et des attestations décentralisées.
- ENS (Ethereum Name Service) : noms en .eth liés à une adresse.
- Soulbound tokens : tokens non transférables attestant d'une compétence ou d'un statut.
- Lens Protocol : réseau social décentralisé basé sur l'identité des utilisateurs.
**Exemple** Posséder un nom ENS pour simplifier les transactions vers votre adresse.
**À retenir** L'identité Web3 renforce la propriété et la réputation en ligne.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Identité Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Identité Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Identité Web3', url: 'https://www.investopedia.com/' }],
  },
  'dao-intro': {
    id: 'dao-intro',
    title: 'DAO',
    category: 'fundamentals',
    objective: 'Gouvernance communautaire.',
    content: `**Résumé** Une DAO (organisation autonome décentralisée) est une entité gouvernée par des smart contracts et ses membres via un système de vote tokenisé.
- Gouvernance : décisions prises collectivement par les détenteurs de tokens de vote.
- Transparence : chaque action et transaction est publique sur la blockchain.
- Exemples : MakerDAO, Uniswap, ConstitutionDAO.
**Exemple** Proposer et voter une amélioration de protocole sur une DAO.
**À retenir** Les DAOs redéfinissent la gouvernance en supprimant la hiérarchie traditionnelle.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'DAO', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'DAO', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'DAO', url: 'https://www.investopedia.com/' }],
  },
  'marketplaces': {
    id: 'marketplaces',
    title: 'Marketplaces NFT',
    category: 'fundamentals',
    objective: 'OpenSea, Magic Eden.',
    content: `**Résumé** Les marketplaces NFT sont des plateformes où l'on crée, vend et achète des actifs numériques uniques.
- Plateformes : OpenSea, Magic Eden, Foundation ; chacune a sa spécialisation.
- Fonctionnement : connexion via un wallet, création ou enchère, smart contracts qui gèrent l'échange.
- Frais : frais de service et de gas selon la blockchain utilisée.
**Exemple** Vendre une œuvre numérique sur OpenSea en quelques clics.
**À retenir** Choisir la bonne marketplace dépend du type d'art ou de l'écosystème visé.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Marketplaces NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Marketplaces NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Marketplaces NFT', url: 'https://www.investopedia.com/' }],
  },
  'nft-utility': {
    id: 'nft-utility',
    title: 'NFT utilitaires',
    category: 'fundamentals',
    objective: 'Accès, gaming, identité.',
    content: `**Résumé** Certains NFTs offrent des utilités au‑delà de la collection, comme donner accès à des services, des événements ou des jeux.
- Accès : billets pour des concerts, adhésion à un club privé.
- Gaming : items, avatars ou pouvoirs uniques utilisables dans des jeux blockchain.
- Identité : badges attestant de compétences ou de participation.
**Exemple** Un NFT qui donne accès à une communauté privée et à des conférences en ligne.
**À retenir** L'utilité renforce la valeur d'un NFT en le rendant fonctionnel.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'NFT utilitaires', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'NFT utilitaires', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'NFT utilitaires', url: 'https://www.investopedia.com/' }],
  },
  'mint-nft': {
    id: 'mint-nft',
    title: 'Créer un NFT',
    category: 'fundamentals',
    objective: 'Processus de minting.',
    content: `**Résumé** Minter un NFT consiste à enregistrer une création sur la blockchain pour lui donner une existence numérique vérifiable.
- Création : préparer l'œuvre (image, audio, vidéo) et les métadonnées.
- Plateforme : choisir un marketplace (OpenSea, Rarible) et connecter son wallet.
- Frais de gas : payer les frais de transaction pour enregistrer l'œuvre sur la chaîne.
**Exemple** Publier une photo sur OpenSea et recevoir un NFT en échange.
**À retenir** Le minting officialise l'existence numérique d'une œuvre et permet de la revendre.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Créer un NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Créer un NFT', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Créer un NFT', url: 'https://www.investopedia.com/' }],
  },
  'nft-basics': {
    id: 'nft-basics',
    title: 'C’est quoi un NFT ?',
    category: 'fundamentals',
    objective: 'Propriété numérique unique.',
    content: `**Résumé** Un NFT (non-fungible token) est un actif numérique unique représentant une propriété, certifié via la blockchain.
- Unicité : chaque NFT possède un identifiant unique non échangeable contre un autre.
- Propriété : preuve d'authenticité et de possession immuable.
- Applications : art, musique, jeux, identités numériques.
**Exemple** Posséder un NFT artistique qui prouve la détention d'une œuvre numérique.
**À retenir** Les NFTs ouvrent de nouvelles formes de valorisation et de créateur de richesse.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'C’est quoi un NFT ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'C’est quoi un NFT ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'C’est quoi un NFT ?', url: 'https://www.investopedia.com/' }],
  },
  'bridges-defi': {
    id: 'bridges-defi',
    title: 'Bridges DeFi',
    category: 'fundamentals',
    objective: 'Connecter plusieurs écosystèmes.',
    content: `**Résumé** Les bridges DeFi relient différents écosystèmes de finance décentralisée en facilitant les transferts de valeur entre chaînes.
- Cross-chain : permettre aux utilisateurs de déplacer des actifs pour profiter d'opportunités sur plusieurs réseaux.
- Protocoles : Synapse, Multichain, LayerZero agissent comme des passerelles sécurisées.
- Risques : bugs, hacks, frais et délais variables.
**Exemple** Transférer des stablecoins de Ethereum vers Avalanche pour staker sur TraderJoe.
**À retenir** Choisir un bridge fiable est crucial pour minimiser les risques.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Bridges DeFi', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Bridges DeFi', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Bridges DeFi', url: 'https://www.investopedia.com/' }],
  },
  'onchain-tools': {
    id: 'onchain-tools',
    title: 'Suivre la blockchain',
    category: 'fundamentals',
    objective: 'Outils : Etherscan, DeBank, Zapper.',
    content: `**Résumé** Les outils on-chain permettent d'analyser les transactions et les données de la blockchain en temps réel.
- Explorateurs : Etherscan, BscScan pour suivre les adresses, les transactions, les contrats.
- Agrégateurs : DeBank, Zapper pour visualiser un portefeuille multi-chaînes.
- Analyse : Dune Analytics, Nansen pour extraire des métriques et tendances.
**Exemple** Consulter Etherscan pour vérifier qu'une transaction est confirmée.
**À retenir** Les outils on-chain sont essentiels pour la transparence et le suivi.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Suivre la blockchain', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Suivre la blockchain', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Suivre la blockchain', url: 'https://www.investopedia.com/' }],
  },
  'wrapped-tokens': {
    id: 'wrapped-tokens',
    title: 'Tokens “wrapped”',
    category: 'fundamentals',
    objective: 'Compatibilité inter-chaînes.',
    content: `**Résumé** Les wrapped tokens sont des versions tokenisées d'un actif sur une autre blockchain pour permettre l'interopérabilité.
- Fonctionnement : l'actif d'origine est déposé dans un contrat, et un équivalent tokenisé est émis sur une autre chaîne.
- Exemples : WBTC (Bitcoin sur Ethereum), WETH (Ether tokenisé).
- Utilité : accéder à la DeFi sans quitter sa position sur l'actif sous-jacent.
**Exemple** Utiliser du WBTC pour emprunter sur Aave via Ethereum.
**À retenir** Les wrapped tokens facilitent les interactions cross-chain mais reposent sur la confiance envers l'émetteur.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Tokens “wrapped”', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Tokens “wrapped”', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Tokens “wrapped”', url: 'https://www.investopedia.com/' }],
  },
  'risks': {
    id: 'risks',
    title: 'Risques',
    category: 'fundamentals',
    objective: 'Perte impermanente, rug pulls.',
    content: `**Résumé** Les risques de la DeFi incluent la perte impermanente, les bugs de smart contracts et les arnaques.
- Perte impermanente : diminution de la valeur de vos actifs par rapport au HODL lors de la fourniture de liquidité.
- Bugs et hacks : un contrat vulnérable peut entraîner une perte totale des fonds.
- Rug pull : développeurs malhonnêtes qui retirent la liquidité d'un projet.
**Exemple** Un protocole piraté comme le hack de Poly Network.
**À retenir** Évaluer le code, l'équipe et la communauté pour limiter ces risques.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Risques', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Risques', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Risques', url: 'https://www.investopedia.com/' }],
  },
  'lending': {
    id: 'lending',
    title: 'Prêt et emprunt',
    category: 'fundamentals',
    objective: 'Gagner ou emprunter avec crypto.',
    content: `**Résumé** Le prêt et l'emprunt décentralisés permettent aux utilisateurs d'obtenir des liquidités ou un rendement sans passer par une banque.
- Plateformes : Aave, Compound ; prêt surcollatéralisé pour se prémunir du risque.
- Collateral : actif déposé en garantie pour emprunter un autre actif.
- Taux d'intérêt : variables selon la demande et l'offre du marché.
**Exemple** Emprunter du stablecoin USDC en déposant du BTC comme garantie.
**À retenir** Ces services démocratisent le crédit mais nécessitent de surveiller son ratio de collatéral.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Prêt et emprunt', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Prêt et emprunt', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Prêt et emprunt', url: 'https://www.investopedia.com/' }],
  },
  'staking': {
    id: 'staking',
    title: 'Staking',
    category: 'fundamentals',
    objective: 'Récompense pour participation.',
    content: `**Résumé** Le staking permet de participer à la sécurité d'un réseau et de gagner des récompenses en verrouillant ses tokens.
- Proof of Stake : remplacement du minage par le verrouillage de tokens.
- Récompenses : tokens gagnés proportionnellement à sa mise et à la durée de verrouillage.
- Validators : acteurs qui valident les blocs et reçoivent les frais.
**Exemple** Staker des ADA sur le réseau Cardano pour recevoir des récompenses.
**À retenir** Le staking est un moyen passif de soutenir un réseau et d'obtenir un rendement.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Staking', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Staking', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Staking', url: 'https://www.investopedia.com/' }],
  },
  'yield-farming': {
    id: 'yield-farming',
    title: 'Yield farming',
    category: 'fundamentals',
    objective: 'Générer des revenus passifs.',
    content: `**Résumé** Le yield farming consiste à optimiser ses rendements en plaçant des tokens sur plusieurs protocoles DeFi.
- Stratégies : fournir de la liquidité puis staker les tokens LP, arbitrer entre différents protocoles.
- Récompenses : tokens d'incitation, frais de transaction, intérêts.
- Risques : volatilité, smart contracts défectueux, rendements variables.
**Exemple** Farmer un token DeFi en déposant des stablecoins sur Curve puis en stakant les CRV.
**À retenir** Le yield farming peut être lucratif mais doit être surveillé de près.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Yield farming', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Yield farming', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Yield farming', url: 'https://www.investopedia.com/' }],
  },
  'liquidity-pools': {
    id: 'liquidity-pools',
    title: 'Pools de liquidité',
    category: 'fundamentals',
    objective: 'Échanges automatisés.',
    content: `**Résumé** Les pools de liquidité sont des réserves de tokens déposées par des utilisateurs pour permettre des échanges automatisés sur les DEX.
- Fonctionnement : des déposants fournissent deux actifs dans un smart contract.
- AMM (Automated Market Maker) : algorithme qui détermine le prix selon l'offre et la demande du pool.
- Incitations : les fournisseurs de liquidité touchent des frais de transaction.
**Exemple** Déposer ETH et USDC sur Uniswap pour gagner des frais de trading.
**À retenir** Les pools apportent de la liquidité mais présentent des risques de perte impermanente.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Pools de liquidité', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Pools de liquidité', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Pools de liquidité', url: 'https://www.investopedia.com/' }],
  },
  'defi-intro': {
    id: 'defi-intro',
    title: 'C’est quoi la DeFi ?',
    category: 'fundamentals',
    objective: 'La finance sans intermédiaire.',
    content: `**Résumé** La DeFi (finance décentralisée) regroupe des services financiers exécutés par des smart contracts sans intermédiaire.
- Produits : prêts, emprunts, échanges, assurances et dérivés.
- Avantages : transparence, accessibilité mondiale, absence de banque.
- Risques : code vulnérable, volatilité des actifs, régulation floue.
**Exemple** Emprunter du DAI contre un dépôt d'ETH sur Aave.
**À retenir** La DeFi révolutionne les services financiers mais nécessite prudence.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'C’est quoi la DeFi ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'C’est quoi la DeFi ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'C’est quoi la DeFi ?', url: 'https://www.investopedia.com/' }],
  },
  'bridges': {
    id: 'bridges',
    title: 'Les bridges',
    category: 'fundamentals',
    objective: 'Relier plusieurs blockchains.',
    content: `**Résumé** Les bridges permettent de transférer des tokens d'une blockchain à une autre en verrouillant l'actif sur une chaîne et en le recréant sur l'autre.
- Fonctionnement : verrouillage d'un token source et émission d'un token équivalent sur la chaîne destination.
- Risques : bugs de smart contracts, hacks, pertes liées aux taux de change.
- Utilité : accéder à des écosystèmes et des applications spécifiques (ex. ETH vers BNB).
**Exemple** Utiliser un bridge pour envoyer des USDC de Ethereum vers Polygon afin de profiter de frais réduits.
**À retenir** Les bridges sont pratiques mais imposent de bien évaluer les risques.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Les bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Les bridges', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Les bridges', url: 'https://www.investopedia.com/' }],
  },
  'exchanges': {
    id: 'exchanges',
    title: 'CEX vs DEX',
    category: 'fundamentals',
    objective: 'Plateformes centralisées et décentralisées.',
    content: `**Résumé** Les échanges crypto se font via des plateformes centralisées (CEX) ou décentralisées (DEX).
- CEX : Binance, Coinbase ; offrent liquidité et services mais nécessitent une identification (KYC).
- DEX : Uniswap, PancakeSwap ; fonctionnent sans intermédiaire grâce à la blockchain.
- Avantages et inconvénients : frais, sécurité, possession des clés.
**Exemple** Trader des tokens sur Uniswap directement depuis son wallet.
**À retenir** Le choix entre CEX et DEX dépend de l'expérience et des besoins.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'CEX vs DEX', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'CEX vs DEX', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'CEX vs DEX', url: 'https://www.investopedia.com/' }],
  },
  'send-receive': {
    id: 'send-receive',
    title: 'Envoyer / recevoir',
    category: 'fundamentals',
    objective: 'Transactions sécurisées.',
    content: `**Résumé** Envoyer ou recevoir des cryptomonnaies implique d'utiliser une adresse publique et de vérifier les frais de réseau.
- Adresse publique : identifiant unique auquel on peut envoyer des tokens.
- Clé privée : secret permettant de signer les transactions et d'accéder aux fonds.
- Réseau : chaque blockchain possède ses propres frais et vitesses de confirmation.
**Exemple** Copier l'adresse ERC‑20 pour recevoir de l'USDC ; vérifier le réseau avant d'envoyer.
**À retenir** Une erreur d'adresse ou de réseau peut entraîner une perte irréversible.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Envoyer / recevoir', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Envoyer / recevoir', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Envoyer / recevoir', url: 'https://www.investopedia.com/' }],
  },
  'metamask-tutorial': {
    id: 'metamask-tutorial',
    title: 'Créer un wallet Metamask',
    category: 'fundamentals',
    objective: 'Tutoriel pratique.',
    content: `**Résumé** Metamask est un wallet sous forme d'extension de navigateur qui permet de gérer des tokens et d'interagir avec des applications Web3.
- Installation : télécharger l'extension officielle depuis le store du navigateur.
- Création du compte : générer une seed phrase et choisir un mot de passe local.
- Gestion des réseaux : ajouter des réseaux comme Polygon, Binance Smart Chain.
- Sécurité : ne jamais partager sa seed phrase et vérifier l'URL avant de signer une transaction.
**Exemple** Se connecter à une plateforme DeFi via Metamask et signer une transaction.
**À retenir** Metamask est la porte d'entrée vers le Web3 ; son utilisation requiert vigilance et rigueur.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Créer un wallet Metamask', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Créer un wallet Metamask', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Créer un wallet Metamask', url: 'https://www.investopedia.com/' }],
  },
  'wallets': {
    id: 'wallets',
    title: 'Les wallets',
    category: 'fundamentals',
    objective: 'Portefeuilles numériques sécurisés.',
    content: `**Résumé** Un wallet est un logiciel ou un matériel qui permet de stocker, envoyer et recevoir des cryptomonnaies en toute sécurité.
- Wallet logiciel (hot wallet) : application mobile ou extension navigateur (Metamask, Phantom).
- Wallet matériel (cold wallet) : appareil physique (Ledger, Trezor) pour une sécurité maximale.
- Seed phrase : suite de mots permettant de restaurer l'accès au wallet, à conserver secrètement.
**Exemple** Créer un compte Metamask et sauvegarder la seed phrase sur papier.
**À retenir** La sécurité du wallet est essentielle pour protéger ses actifs crypto.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Les wallets', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Les wallets', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Les wallets', url: 'https://www.investopedia.com/' }],
  },
  'stablecoins': {
    id: 'stablecoins',
    title: 'Stabilité en crypto',
    category: 'fundamentals',
    objective: 'Usage et utilité.',
    content: `**Résumé** Les stablecoins sont des cryptomonnaies conçues pour maintenir une valeur stable, souvent indexée sur une devise comme le dollar américain.
- Types : collatéralisés en monnaie fiduciaire (USDC, USDT) ou algorithmiques (DAI).
- Utilité : se protéger contre la volatilité, faciliter les paiements et le trading.
- Risques : défaillance de la réserve ou désancrage temporaire (depeg).
**Exemple** Utiliser l'USDC pour stocker des profits sans sortir de l'écosystème crypto.
**À retenir** Les stablecoins constituent une brique essentielle pour la finance décentralisée.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Stabilité en crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Stabilité en crypto', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Stabilité en crypto', url: 'https://www.investopedia.com/' }],
  },
  'altcoins': {
    id: 'altcoins',
    title: 'Les altcoins',
    category: 'fundamentals',
    objective: 'Autres tokens aux rôles variés.',
    content: `**Résumé** Les altcoins sont toutes les cryptomonnaies autres que Bitcoin ; elles remplissent divers rôles et expérimentations.
- Cryptos alternatives : Ethereum, Solana, Cardano, Dogecoin et des milliers d'autres.
- Rôles variés : plateformes smart contracts, tokens utilitaires, stablecoins, tokens de gouvernance.
- Potentiel : plus d'innovation mais aussi plus de risque que Bitcoin.
**Exemple** Un token de gouvernance comme UNI donne un droit de vote sur Uniswap.
**À retenir** Les altcoins sont divers et nécessitent une analyse approfondie avant investissement.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Les altcoins', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Les altcoins', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Les altcoins', url: 'https://www.investopedia.com/' }],
  },
  'ethereum-basics': {
    id: 'ethereum-basics',
    title: 'Ethereum et les smart contracts',
    category: 'fundamentals',
    objective: 'Programmabilité du Web3.',
    content: `**Résumé** Ethereum est une plateforme blockchain lancée en 2015 qui introduit les smart contracts, permettant la création d'applications décentralisées programmables.
- Ethereum : réseau décentralisé pour le déploiement de contrats intelligents et de tokens.
- Smart contracts : programmes auto‑exécutifs codant des règles et des accords.
- Ether (ETH) : crypto native utilisée pour payer les frais de transaction (gas).
- Écosystème : DeFi, NFT, DAO et autres innovations basées sur Ethereum.
**Exemple** Lancer un token ERC‑20 ou créer un NFT sur la blockchain Ethereum.
**À retenir** Ethereum est la base programmable du Web3.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Ethereum et les smart contracts', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Ethereum et les smart contracts', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Ethereum et les smart contracts', url: 'https://www.investopedia.com/' }],
  },
  'bitcoin-story': {
    id: 'bitcoin-story',
    title: 'L’histoire du Bitcoin',
    category: 'fundamentals',
    objective: 'Le premier réseau monétaire libre.',
    content: `**Résumé** Bitcoin est né en 2009 en réponse à la crise financière, offrant un réseau monétaire libre, transparent et sans autorité centrale.
- Origine : créé par Satoshi Nakamoto, un pseudonyme.
- Objectif : permettre des transferts de valeur peer‑to‑peer sans passer par les banques.
- Offre limitée : 21 millions de bitcoins seulement, rendant l'actif rare.
- Blockchain Bitcoin : chaîne publique où chaque transaction est transparente.
**Exemple** Acheter un bien en ligne et payer directement avec des bitcoins via une adresse de portefeuille.
**À retenir** Bitcoin inaugure la première monnaie numérique résistante à la censure.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'L’histoire du Bitcoin', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'L’histoire du Bitcoin', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'L’histoire du Bitcoin', url: 'https://www.investopedia.com/' }],
  },
  'consensus': {
    id: 'consensus',
    title: 'Proof of Work / Proof of Stake',
    category: 'fundamentals',
    objective: 'Comprendre les mécanismes de validation.',
    content: `**Résumé** Le consensus est le mécanisme par lequel les participants d'une blockchain s'accordent sur l'état du registre sans autorité centrale.
- Proof of Work : sécurisation par la puissance de calcul, nécessitant des mineurs.
- Proof of Stake : sécurisation par la mise en gage de tokens, nécessitant des validateurs.
- Mining : processus de résolution de calculs pour proposer un bloc (PoW).
- Staking : verrouillage de tokens pour participer à la validation (PoS).
**Exemple** Bitcoin fonctionne en PoW, tandis qu'Ethereum est passé au PoS.
**À retenir** Les mécanismes de consensus remplacent la confiance par des règles mathématiques.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Proof of Work / Proof of Stake', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Proof of Work / Proof of Stake', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Proof of Work / Proof of Stake', url: 'https://www.investopedia.com/' }],
  },
  'blockchain-intro': {
    id: 'blockchain-intro',
    title: 'C’est quoi une blockchain ?',
    category: 'fundamentals',
    objective: 'Comprendre la structure blockchain.',
    content: `**Résumé** Une blockchain est un registre distribué où les transactions sont regroupées en blocs liés cryptographiquement, créant une chaîne immuable et transparente.
- Bloc : ensemble de transactions vérifiées, relié au précédent par un hash.
- Hash : empreinte cryptographique unique garantissant l'intégrité d'un bloc.
- Ledger : registre public accessible à tous qui enregistre l'historique complet.
**Exemple** Une transaction Bitcoin est incluse dans un bloc, qui est ensuite ajouté à la chaîne.
**À retenir** La blockchain apporte sécurité, transparence et immuabilité des données.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'C’est quoi une blockchain ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'C’est quoi une blockchain ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'C’est quoi une blockchain ?', url: 'https://www.investopedia.com/' }],
  },
  'decentralization': {
    id: 'decentralization',
    title: 'Le pouvoir de la décentralisation',
    category: 'fundamentals',
    objective: 'Comprendre pourquoi la décentralisation est révolutionnaire.',
    content: `**Résumé** La décentralisation consiste à répartir le pouvoir et les données sur un réseau de nœuds indépendants plutôt que de s'appuyer sur une entité centrale.
- Décentralisation : suppression du point unique de contrôle et de défaillance.
- Nœud (node) : ordinateur participant à la validation et à la propagation des transactions.
- Avantages : résilience, transparence, résistance à la censure et réduction de la corruption.
**Exemple** Bitcoin fonctionne grâce à des milliers de nœuds qui valident les blocs.
**À retenir** La décentralisation favorise la liberté et la confiance sans tiers.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Le pouvoir de la décentralisation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Le pouvoir de la décentralisation', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Le pouvoir de la décentralisation', url: 'https://www.investopedia.com/' }],
  },
  'web3-intro': {
    id: 'web3-intro',
    title: 'Qu’est-ce que le Web3 ?',
    category: 'fundamentals',
    objective: 'Définir le Web3.',
    content: `**Résumé** Le Web3 désigne un Internet basé sur la blockchain, où les utilisateurs possèdent leurs actifs numériques grâce à des tokens et aux smart contracts.
- Web3 : convergence de la blockchain, de la tokenisation et de la propriété numérique.
- Token : unité numérique échangeable représentant une valeur ou un droit.
- Smart contract : programme auto-exécutif qui applique des règles sans intermédiaire.
**Exemple** Utiliser un wallet et signer une transaction pour interagir avec une application décentralisée sans identifiant ni mot de passe.
**À retenir** Le Web3 apporte transparence, immuabilité et liberté aux utilisateurs.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Qu’est-ce que le Web3 ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Qu’est-ce que le Web3 ?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Qu’est-ce que le Web3 ?', url: 'https://www.investopedia.com/' }],
  },
  'data-ownership': {
    id: 'data-ownership',
    title: 'La donnée comme richesse',
    category: 'fundamentals',
    objective: 'Comprendre la valeur des données personnelles.',
    content: `**Résumé** Dans le Web2, les plateformes captent la valeur de nos données. Le Web3 permet aux créateurs et utilisateurs de récupérer cette richesse.
- Data Ownership : droit de posséder et de contrôler ses données personnelles.
- Big Data : ensemble des informations collectées par les plateformes sur nos activités.
- Web3 : modèle où les utilisateurs peuvent monétiser leurs données via des tokens ou des applications décentralisées.
**Exemple** Être rémunéré pour l'utilisation de ses données dans une application Web3.
**À retenir** La reprise du contrôle des données est un pilier du Web3.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'La donnée comme richesse', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'La donnée comme richesse', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'La donnée comme richesse', url: 'https://www.investopedia.com/' }],
  },
  'internet-evolution': {
    id: 'internet-evolution',
    title: 'Du Web1 au Web3',
    category: 'fundamentals',
    objective: 'Comprendre l’évolution d’Internet.',
    content: `**Résumé** Internet a évolué du Web1 (lecture) au Web2 (interaction) puis au Web3 (propriété et décentralisation). Chaque génération apporte de nouveaux droits aux utilisateurs.
- Web1 : pages statiques consultables sans interaction.
- Web2 : plateformes sociales où chacun peut publier et commenter, mais où les données sont centralisées.
- Web3 : utilisation de la blockchain pour donner la propriété des données et des actifs aux utilisateurs.
**Exemple** YouTube (Web2) contrôle la plateforme, tandis que les NFT (Web3) permettent d'échanger des biens numériques uniques.
**À retenir** Le Web3 ambitionne de rendre Internet plus équitable en redistribuant la valeur créée.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'Du Web1 au Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'Du Web1 au Web3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'Du Web1 au Web3', url: 'https://www.investopedia.com/' }],
  },
  'what-is-fiat': {
    id: 'what-is-fiat',
    title: 'La monnaie fiat et ses limites',
    category: 'fundamentals',
    objective: 'Comprendre les limites du système monétaire actuel.',
    content: `**Résumé** La monnaie fiat est émise par un État via une banque centrale. Elle repose sur la confiance et peut être diluée par l'inflation et l'endettement public.
- Fiat : monnaie légale sans valeur intrinsèque, garantie par la confiance collective.
- Inflation : hausse générale des prix qui diminue le pouvoir d'achat.
- Banque centrale : institution qui gère l'émission monétaire et la politique monétaire.
- Limitations : risque de dévaluation, création monétaire illimitée, contrôle centralisé.
**Exemple** Une banque centrale qui imprime massivement peut provoquer une perte de valeur de la monnaie.
**À retenir** Les cryptomonnaies offrent une alternative transparente et limitée face aux dérives potentielles des monnaies fiat.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'La monnaie fiat et ses limites', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'La monnaie fiat et ses limites', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'La monnaie fiat et ses limites', url: 'https://www.investopedia.com/' }],
  },
  'money-evolution': {
    id: 'money-evolution',
    title: 'L’histoire de la monnaie',
    category: 'fundamentals',
    objective: 'Comprendre l’évolution de l’échange de valeur, du troc à la monnaie numérique.',
    content: `**Résumé** L'évolution de la monnaie retrace le passage du troc aux pièces, billets, monnaies fiduciaires et enfin aux monnaies numériques. Chaque étape a simplifié les échanges et permis des économies plus complexes.
- Troc : échange direct de biens, limité par la double coïncidence des besoins.
- Métaux précieux : usage universel mais lourds à transporter et stocker.
- Billets et banques : représentation de valeur stockée en sécurité et traçable.
- Monnaie numérique et mobile : banques électroniques et paiements instantanés.
- Cryptomonnaies : actifs décentralisés, transparents et résistants à la censure.
**Exemple** Un virement bancaire instantané illustre la transition vers une valeur pure informationnelle.
**À retenir** Les cryptos prolongent cette évolution en apportant décentralisation, sécurité et transparence.`,
    quiz: [
      { question: 'Question 1: point clé ?', options: ['Réponse A','Réponse B','Réponse C'], correctAnswer: 1 },
      { question: 'Question 2: à retenir ?', options: ['Choix 1','Choix 2','Choix 3'], correctAnswer: 2 }
    ],
    videos: [
      { type: 'intro', title: 'L’histoire de la monnaie', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'demo', title: 'L’histoire de la monnaie', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ],
    documentation: [{ title: 'L’histoire de la monnaie', url: 'https://www.investopedia.com/' }],
  },
  'macd-indicator': {
    id: 'macd-indicator',
    title: 'Indicateur MACD - Moving Average Convergence Divergence',
    category: 'technical',
    objective: 'Maîtriser le MACD pour détecter les changements de tendance',
    content: `Le MACD est l'un des indicateurs les plus populaires et puissants en analyse technique. Il combine plusieurs moyennes mobiles pour identifier les changements de momentum.

**Qu'est-ce que le MACD ?**

Le MACD (Moving Average Convergence Divergence) mesure la relation entre deux moyennes mobiles exponentielles (EMA). Il se compose de trois éléments :
- La ligne MACD : différence entre l'EMA 12 et l'EMA 26
- La ligne de signal : EMA 9 de la ligne MACD
- L'histogramme : différence entre la ligne MACD et la ligne de signal

**Comment interpréter le MACD ?**

**Croisements de lignes :**
- Quand la ligne MACD croise au-dessus de la ligne de signal = signal d'achat 📈
- Quand la ligne MACD croise en-dessous de la ligne de signal = signal de vente 📉

**Croisements avec le zéro :**
- MACD passe au-dessus de 0 = tendance haussière se renforce
- MACD passe en-dessous de 0 = tendance baissière se renforce

**Divergences :**
Les divergences sont des signaux très puissants :
- Divergence haussière : le prix fait des plus bas, mais le MACD fait des plus hauts = retournement potentiel à la hausse
- Divergence baissière : le prix fait des plus hauts, mais le MACD fait des plus bas = retournement potentiel à la baisse

**L'histogramme**

L'histogramme montre la force du mouvement :
- Barres qui grandissent = momentum s'accélère
- Barres qui rétrécissent = momentum ralentit
- Passage du positif au négatif (ou inverse) = changement de momentum

**Stratégie MACD simple**

1. Attendre un croisement de la ligne MACD avec la ligne de signal
2. Confirmer avec l'histogramme qui change de couleur
3. Vérifier qu'il n'y a pas de divergence contre ta position
4. Placer ton stop-loss sous le dernier support (achat) ou résistance (vente)

**Limites du MACD**

- Retard : étant basé sur des moyennes mobiles, le MACD est un indicateur retardé
- Faux signaux en range : dans un marché sans tendance claire, le MACD peut donner beaucoup de faux signaux
- Nécessite confirmation : toujours combiner avec d'autres indicateurs (RSI, volume, support/résistance)

**Paramètres recommandés**

Les paramètres standards (12, 26, 9) fonctionnent bien sur la plupart des timeframes. Pour le scalping, tu peux essayer (5, 13, 7) pour plus de réactivité.`,
    quiz: [
      {
        question: 'De quoi est composé le MACD ?',
        options: [
          'Une seule moyenne mobile',
          'La ligne MACD, la ligne de signal et l\'histogramme',
          'Uniquement l\'histogramme'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Quel signal donne un croisement de la ligne MACD au-dessus de la ligne de signal ?',
        options: [
          'Signal de vente',
          'Signal de maintien',
          'Signal d\'achat'
        ],
        correctAnswer: 2
      },
      {
        question: 'Qu\'est-ce qu\'une divergence baissière ?',
        options: [
          'Le prix fait des plus hauts mais le MACD fait des plus bas',
          'Le prix et le MACD montent ensemble',
          'Le prix fait des plus bas et le MACD aussi'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que représente l\'histogramme du MACD ?',
        options: [
          'Le volume de transactions',
          'La différence entre la ligne MACD et la ligne de signal',
          'Le prix de l\'actif'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la principale limite du MACD ?',
        options: [
          'Il est trop complexe à comprendre',
          'C\'est un indicateur retardé qui donne parfois de faux signaux',
          'Il ne fonctionne que sur Bitcoin'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'fibonacci-retracement': {
    id: 'fibonacci-retracement',
    title: 'Retracements de Fibonacci',
    category: 'technical',
    objective: 'Utiliser Fibonacci pour identifier les niveaux de support et résistance clés',
    content: `Les retracements de Fibonacci sont l'un des outils les plus utilisés en analyse technique pour identifier les niveaux où le prix pourrait rebondir ou casser.

**D'où vient Fibonacci ?**

Leonardo Fibonacci était un mathématicien italien qui a découvert une séquence de nombres (0, 1, 1, 2, 3, 5, 8, 13, 21...) où chaque nombre est la somme des deux précédents. Cette séquence apparaît partout dans la nature et... dans les marchés financiers.

**Les niveaux de Fibonacci**

Les niveaux clés utilisés en trading sont :
- **23.6%** : retracement faible
- **38.2%** : retracement modéré
- **50%** : niveau psychologique (pas un vrai nombre de Fibonacci mais très utilisé)
- **61.8%** : le "Golden Ratio" - niveau le plus important
- **78.6%** : retracement profond

**Comment tracer les Fibonacci ?**

1. Identifie un mouvement significatif (swing low to swing high ou vice versa)
2. Trace l'outil Fibonacci du point A au point B
3. Les niveaux apparaissent automatiquement

En tendance haussière : trace du bas (swing low) vers le haut (swing high)
En tendance baissière : trace du haut (swing high) vers le bas (swing low)

**Comment utiliser les Fibonacci ?**

**En tendance haussière :**
Après une montée, le prix va souvent "retracer" (redescendre) avant de repartir à la hausse. Les niveaux Fibonacci indiquent où le prix pourrait rebondir :
- 23.6% = retracement léger, tendance très forte
- 38.2% - 50% = zone de retracement "normale"
- 61.8% = dernier niveau de défense avant cassure de tendance

**En tendance baissière :**
Même principe inversé. Le prix remonte un peu avant de continuer sa chute.

**Stratégie de trading Fibonacci**

1. Attendre une forte tendance (haussière ou baissière)
2. Tracer les Fibonacci du point bas au point haut
3. Attendre que le prix revienne sur un niveau Fibonacci (généralement 38.2%, 50% ou 61.8%)
4. Chercher une confirmation (chandelier de retournement, volume, RSI oversold/overbought)
5. Entrer en position avec stop-loss juste en-dessous/au-dessus du niveau Fibonacci

**Extensions de Fibonacci**

Au-delà du retracement, on utilise aussi les extensions pour identifier les objectifs de prix :
- 127.2%
- 161.8% (objectif classique)
- 261.8%

Ces niveaux indiquent jusqu'où le prix pourrait aller après avoir cassé le précédent high/low.

**Combiner Fibonacci avec d'autres outils**

Fibonacci est encore plus puissant quand tu le combines avec :
- Support et résistance horizontaux
- Moyennes mobiles
- Trendlines
- Volume

Quand plusieurs indicateurs convergent sur le même niveau = probabilité élevée de réaction du prix.

**Erreurs à éviter**

❌ Tracer des Fibonacci sur n'importe quel mouvement : choisis des swings significatifs
❌ Trader uniquement sur Fibonacci sans confirmation
❌ Oublier que Fibonacci n'est pas magique : ce sont des zones, pas des prix exacts`,
    quiz: [
      {
        question: 'Quel est le niveau de Fibonacci le plus important ?',
        options: [
          '23.6%',
          '50%',
          '61.8% (Golden Ratio)'
        ],
        correctAnswer: 2,
  },
      {
        question: 'Comment trace-t-on Fibonacci en tendance haussière ?',
        options: [
          'Du haut vers le bas',
          'Du bas (swing low) vers le haut (swing high)',
          'Au hasard'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que représente un retracement de 38.2% ?',
        options: [
          'Le prix a baissé de 38.2% depuis le dernier high',
          'Le prix est revenu à 38.2% du mouvement précédent',
          'Le volume a baissé de 38.2%'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle extension Fibonacci est l\'objectif de prix classique ?',
        options: [
          '127.2%',
          '161.8%',
          '261.8%'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi combiner Fibonacci avec d\'autres indicateurs ?',
        options: [
          'C\'est obligatoire par la loi',
          'Pour augmenter la probabilité de succès quand plusieurs signaux convergent',
          'Fibonacci seul ne fonctionne jamais'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'ema-sma': {
    id: 'ema-sma',
    title: 'Moyennes Mobiles - EMA et SMA',
    category: 'technical',
    objective: 'Maîtriser les moyennes mobiles pour identifier les tendances',
    content: `Les moyennes mobiles sont les indicateurs les plus simples et les plus utilisés en trading. Elles lissent les variations de prix pour révéler la tendance.

**SMA - Simple Moving Average**

La SMA calcule la moyenne arithmétique des prix sur une période donnée.
Exemple SMA 20 : moyenne des 20 dernières bougies.

**EMA - Exponential Moving Average**

L'EMA donne plus de poids aux prix récents. Elle réagit donc plus vite aux changements de prix que la SMA.

**Quelle moyenne mobile choisir ?**

- **SMA** : plus lisse, moins de faux signaux, mais plus de retard
- **EMA** : plus réactive, détecte plus vite les changements, mais plus de faux signaux

En général, les traders préfèrent l'EMA pour sa réactivité.

**Périodes courantes**

- **EMA 9** : court terme, pour le scalping et day trading
- **EMA 20/21** : court-moyen terme
- **EMA 50** : moyen terme, très populaire
- **EMA 200** : long terme, support/résistance majeur

**Comment utiliser les moyennes mobiles ?**

**1. Identifier la tendance**
- Prix au-dessus de l'EMA = tendance haussière 📈
- Prix en-dessous de l'EMA = tendance baissière 📉

Règle simple : ne trade que dans le sens de la tendance.

**2. Support et résistance dynamiques**
Les EMA agissent comme des supports/résistances qui se déplacent :
- En tendance haussière, le prix rebondit souvent sur l'EMA 20 ou 50
- En tendance baissière, l'EMA agit comme résistance

**3. Croisements (Crossovers)**
Les croisements entre deux moyennes mobiles donnent des signaux :
- **Golden Cross** : EMA courte croise au-dessus d'EMA longue = signal haussier fort
- **Death Cross** : EMA courte croise en-dessous d'EMA longue = signal baissier fort

Exemple : EMA 50 croise au-dessus EMA 200 = Golden Cross = très haussier

**4. Croisement Prix/EMA**
- Prix croise au-dessus de l'EMA = signal d'achat potentiel
- Prix croise en-dessous de l'EMA = signal de vente potentiel

**Stratégies populaires**

**Stratégie EMA 9/21 (court terme)**
- Achat : EMA 9 croise au-dessus EMA 21 + prix au-dessus des deux EMA
- Vente : EMA 9 croise en-dessous EMA 21 + prix en-dessous des deux EMA

**Stratégie EMA 50/200 (moyen-long terme)**
- Achat : Golden Cross (EMA 50 > EMA 200) + pullback sur EMA 50
- Vente : Death Cross (EMA 50 < EMA 200)

**Stratégie Triple EMA (EMA 9, 21, 55)**
- Toutes les EMA alignées dans le même ordre = tendance forte
- Rechercher des entrées lors des pullbacks sur EMA 21

**Limites des moyennes mobiles**

⚠️ **Indicateur retardé** : les moyennes mobiles se basent sur les prix passés
⚠️ **Faux signaux en range** : dans un marché sans tendance, les croisements donnent beaucoup de faux signaux
⚠️ **Whipsaws** : le prix peut traverser l'EMA plusieurs fois rapidement

**Conseils pratiques**

✅ Utilise les EMA sur des timeframes plus élevés pour des signaux plus fiables (4H, Daily)
✅ Combine toujours avec d'autres indicateurs (RSI, volume, support/résistance)
✅ Teste différentes périodes pour trouver celles qui fonctionnent sur tes actifs préférés
✅ Respecte toujours la tendance donnée par l'EMA 200`,
    quiz: [
      {
        question: 'Quelle est la différence entre SMA et EMA ?',
        options: [
          'Il n\'y a aucune différence',
          'L\'EMA donne plus de poids aux prix récents',
          'La SMA est plus rapide que l\'EMA'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Qu\'est-ce qu\'un Golden Cross ?',
        options: [
          'Une EMA courte qui croise au-dessus d\'une EMA longue - signal haussier',
          'Une EMA courte qui croise en-dessous d\'une EMA longue',
          'Le prix qui touche l\'EMA 200'
        ],
        correctAnswer: 0
      },
      {
        question: 'Comment utilise-t-on l\'EMA pour identifier la tendance ?',
        options: [
          'Prix au-dessus de l\'EMA = tendance haussière, en-dessous = baissière',
          'L\'EMA ne peut pas identifier les tendances',
          'Il faut 10 EMA pour identifier une tendance'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle EMA est considérée comme un support/résistance majeur long terme ?',
        options: [
          'EMA 9',
          'EMA 20',
          'EMA 200'
        ],
        correctAnswer: 2
      },
      {
        question: 'Quelle est la principale limite des moyennes mobiles ?',
        options: [
          'Elles sont trop complexes',
          'C\'est un indicateur retardé qui donne des faux signaux en range',
          'Elles ne fonctionnent pas sur les cryptos'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'support-resistance': {
    id: 'support-resistance',
    title: 'Support et Résistance - Les fondations du trading',
    category: 'technical',
    objective: 'Identifier et utiliser les niveaux clés de support et résistance',
    content: `Les supports et résistances sont les concepts les plus importants en analyse technique. Maîtrise-les, et tu auras déjà une longueur d'avance.

**Qu'est-ce qu'un Support ?**

Un support est un niveau de prix où la demande est suffisamment forte pour empêcher le prix de descendre plus bas. C'est comme un "plancher" que le prix a du mal à traverser.

Psychologie : à ce niveau, les acheteurs pensent que c'est une bonne affaire et achètent massivement, ce qui fait remonter le prix.

**Qu'est-ce qu'une Résistance ?**

Une résistance est un niveau de prix où l'offre est suffisamment forte pour empêcher le prix de monter plus haut. C'est comme un "plafond".

Psychologie : à ce niveau, les vendeurs pensent que le prix est trop élevé et vendent, ce qui fait redescendre le prix.

**Comment identifier Support et Résistance ?**

**1. Niveaux horizontaux**
Regarde les zones où le prix a rebondi plusieurs fois :
- Si le prix est remonté 2-3 fois depuis un niveau = support
- Si le prix a chuté 2-3 fois depuis un niveau = résistance

Plus un niveau a été testé et tenu, plus il est fort.

**2. Anciens sommets et creux**
- Les anciens plus hauts (swing highs) deviennent des résistances
- Les anciens plus bas (swing lows) deviennent des supports

**3. Niveaux psychologiques**
Les nombres ronds attirent l'attention des traders :
- Bitcoin à 50,000$ est un niveau psychologique fort
- Ethereum à 3,000$ aussi
- Les traders placent souvent leurs ordres à ces niveaux ronds

**Support devient Résistance (et vice-versa)**

C'est un concept clé : quand un support est cassé, il devient une résistance. Et quand une résistance est cassée, elle devient un support.

Exemple :
- BTC rebondit sur 40K$ 3 fois = support à 40K$
- BTC casse 40K$ et descend à 38K$
- BTC essaie de remonter mais bloque à 40K$ = 40K$ est maintenant une résistance

**Zones vs Lignes**

❌ Erreur fréquente : penser que support/résistance sont des lignes précises
✅ Réalité : ce sont des ZONES

Ne cherche pas le niveau exact au centime près. Considère plutôt une zone de 1-2% autour du niveau.

**Comment trader Support et Résistance ?**

**Stratégie 1 : Rebond sur Support**
1. Identifier un support fort (testé 2-3 fois minimum)
2. Attendre que le prix approche du support
3. Chercher une confirmation (chandelier de retournement, divergence RSI, volume)
4. Acheter avec stop-loss juste en-dessous du support

**Stratégie 2 : Cassure de Résistance (Breakout)**
1. Identifier une résistance forte
2. Attendre que le prix casse la résistance avec un fort volume
3. Attendre un retest de la résistance (devenue support)
4. Acheter lors du retest avec stop-loss sous le nouveau support

**Stratégie 3 : Vente à la Résistance**
1. Prix approche d'une résistance en tendance baissière ou range
2. Chercher des signes de rejet (mèche haute, volume vendeur)
3. Shorter avec stop-loss au-dessus de la résistance

**Confirmations importantes**

Ne trade jamais uniquement sur support/résistance. Cherche des confirmations :
- **Volume** : une cassure avec fort volume est plus fiable
- **Chandeliers** : patterns de retournement (doji, marteau, étoile filante)
- **Indicateurs** : RSI, MACD qui confirment le mouvement

**Types de support/résistance**

**Statiques :**
- Lignes horizontales
- Niveaux psychologiques

**Dynamiques :**
- Moyennes mobiles (EMA 50, 200)
- Trendlines (lignes de tendance)
- Bollinger Bands

**Fausses cassures (Fake Breakout)**

Attention aux pièges ! Parfois, le prix casse un niveau puis revient immédiatement = fausse cassure.

Comment les éviter :
- Attendre une bougie de clôture au-dessus/en-dessous du niveau
- Vérifier le volume (faible volume = méfiance)
- Attendre un retest avant d'entrer

**Force d'un Support/Résistance**

Un niveau est plus fort quand :
- Il a été testé plusieurs fois
- Il correspond à un niveau psychologique rond
- Il aligne plusieurs timeframes (support 4H + Daily)
- Il coïncide avec Fibonacci, EMA ou autre indicateur`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'un support ?',
        options: [
          'Un niveau où le prix monte toujours',
          'Un niveau où la demande empêche le prix de descendre plus bas',
          'Un indicateur technique'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Que se passe-t-il quand un support est cassé ?',
        options: [
          'Il disparaît pour toujours',
          'Il devient une résistance',
          'Il devient plus fort'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un niveau psychologique ?',
        options: [
          'Un niveau qui n\'existe que dans la tête',
          'Un nombre rond (ex: 50,000$) qui attire l\'attention des traders',
          'Un support émotionnel'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle confirmation est importante pour valider une cassure ?',
        options: [
          'Un fort volume',
          'La couleur de la bougie',
          'L\'heure de la journée'
        ],
        correctAnswer: 0
      },
      {
        question: 'Support et résistance sont-ils des lignes ou des zones ?',
        options: [
          'Des lignes précises au centime près',
          'Des zones de 1-2% environ',
          'Ça n\'a aucune importance'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une fausse cassure (fake breakout) ?',
        options: [
          'Une cassure qui n\'est pas réelle',
          'Le prix casse un niveau puis revient immédiatement',
          'Une cassure pendant les weekends'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'risk-management': {
    id: 'risk-management',
    title: 'Gestion du risque dans le trading',
    category: 'basics',
    objective: 'Apprendre à protéger son capital et éviter les pertes inutiles',
    content: `La gestion du risque est la pierre angulaire du trading réussi. Sans une stratégie solide de risk management, même les meilleurs traders finissent par perdre leur capital.

**Pourquoi le Risk Management est crucial ?**

Le trading n'est pas seulement une question de gains, mais surtout de protection de ton capital. Un trader qui ne gère pas ses risques peut avoir raison 90% du temps et tout perdre en quelques mauvais trades. La règle d'or : "Ne jamais risquer plus que ce que tu peux te permettre de perdre."

**La règle des 2%**

C'est l'une des règles fondamentales du trading : ne jamais risquer plus de 2% de ton capital total sur un seul trade. Par exemple, si tu as 1000€ sur ton compte, tu ne devrais pas risquer plus de 20€ par position. Cela te permet d'encaisser plusieurs pertes consécutives sans détruire ton compte.

**Le Stop-Loss : Ton meilleur ami**

Le stop-loss est un ordre automatique qui clôture ta position si le prix atteint un certain niveau de perte. C'est ton filet de sécurité. Définir ton stop-loss AVANT d'entrer en position est essentiel. Ne le déplace jamais pour éviter de sortir d'un trade perdant - c'est le piège de l'espoir qui ruine de nombreux traders.

**Le Ratio Risk/Reward**

Toujours viser un ratio minimum de 1:2 ou 1:3 (risque:récompense). Si tu risques 20€, vise au moins 40€ de gain potentiel. Cela signifie que même avec un taux de réussite de 40%, tu peux être profitable sur le long terme.

**Exemple concret d'un trade bien géré**

Imaginons que tu as 1000€ et tu veux acheter du Bitcoin :
- Capital : 1000€
- Risque maximal (2%) : 20€
- Prix d'entrée : 40,000€
- Stop-loss : 39,600€ (perte de 400€/BTC)
- Tu peux acheter : 20€ ÷ 400€ = 0.05 BTC
- Take profit : 41,200€ (gain de 1200€/BTC = 60€ pour toi)
- Ratio R:R = 60:20 = 1:3 ✅

**Les erreurs à éviter**

Ne jamais moyenner à la baisse (acheter plus quand ça descend pour "récupérer"), ne jamais trader avec de l'argent dont tu as besoin, ne jamais ignorer ton stop-loss, et surtout, ne jamais trader sous le coup de l'émotion.`,
    quiz: [
      {
        question: 'Que signifie la "règle des 2%" ?',
        options: [
          'Ne jamais risquer plus de 2% de ton capital par trade',
          'Toujours risquer 20% minimum',
          'Miser 2% de ton portefeuille sur chaque crypto'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que fait un stop-loss ?',
        options: [
          'Il achète plus de cryptos',
          'Il vend automatiquement en cas de perte',
          'Il bloque les frais'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le ratio Risk/Reward minimum recommandé ?',
        options: [
          '1:1',
          '1:2 ou plus',
          '3:1'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faire si ton trade est en perte et approche du stop-loss ?',
        options: [
          'Déplacer le stop-loss plus loin pour éviter la perte',
          'Acheter plus pour moyenner à la baisse',
          'Laisser le stop-loss se déclencher comme prévu'
        ],
        correctAnswer: 2
      },
      {
        question: 'Avec un capital de 2000€, quel montant maximum devrais-tu risquer par trade selon la règle des 2% ?',
        options: [
          '20€',
          '40€',
          '100€'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi est-il important de définir son stop-loss AVANT d\'entrer en position ?',
        options: [
          'Pour augmenter ses gains potentiels',
          'Pour éviter les décisions émotionnelles en cas de perte',
          'Pour payer moins de frais'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  '6-rules-of-trading': {
    id: '6-rules-of-trading',
    title: 'Les 6 règles d\'or du trading',
    category: 'basics',
    objective: 'Maîtriser les principes fondamentaux pour trader avec succès',
    content: `Ces 6 règles constituent le socle de tout trader performant. Respecte-les religieusement et tu augmenteras considérablement tes chances de succès.

**1. Toujours avoir un plan de trading**

Ne jamais entrer en position sans savoir exactement pourquoi, à quel prix entrer, où placer ton stop-loss et où prendre tes profits. Un plan détaillé élimine les décisions émotionnelles.

**2. Gérer ton risque (Risk Management)**

Comme vu précédemment, ne risque jamais plus de 1-2% de ton capital par trade. Cette règle seule peut faire la différence entre survie et faillite.

**3. Tenir un journal de trading**

Note TOUS tes trades : entrée, sortie, raison, émotion ressentie, résultat. Ce journal est ta meilleure source d'apprentissage. Tu verras rapidement tes patterns d'erreurs.

**4. Contrôler tes émotions**

La peur et la cupidité sont tes pires ennemis. Stick à ton plan, même quand c'est difficile. Un bon trader est discipliné, pas émotionnel.

**5. Ne jamais trader avec de l'argent dont tu as besoin**

Utilise uniquement de l'argent que tu peux te permettre de perdre. Le trading avec de l'argent "urgent" crée un stress insupportable qui conduit à de mauvaises décisions.

**6. Apprendre continuellement**

Les marchés évoluent. Ce qui fonctionnait hier peut ne plus fonctionner demain. Reste humble, continue à apprendre, à tester, à t'adapter. Les meilleurs traders sont des étudiants perpétuels.`,
    quiz: [
      {
        question: 'Quelle est la première chose à faire avant d\'entrer en position ?',
        options: [
          'Acheter immédiatement',
          'Avoir un plan de trading clair',
          'Demander l\'avis sur Twitter'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Pourquoi tenir un journal de trading ?',
        options: [
          'C\'est obligatoire par la loi',
          'Pour identifier ses erreurs et progresser',
          'Pour impressionner ses amis'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le pire ennemi d\'un trader ?',
        options: [
          'Les frais de transaction',
          'Les émotions (peur et cupidité)',
          'Le manque d\'Internet'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que doit contenir un journal de trading ?',
        options: [
          'Uniquement les trades gagnants',
          'Tous les trades avec entrée, sortie, raison et émotions',
          'Seulement le résultat final du mois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi ne faut-il jamais trader avec de l\'argent dont on a besoin ?',
        options: [
          'Cela crée un stress qui conduit à de mauvaises décisions',
          'C\'est illégal',
          'Les plateformes l\'interdisent'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'type-of-trader': {
    id: 'type-of-trader',
    title: 'Les différents types de traders',
    category: 'basics',
    objective: 'Identifier ton style de trading pour maximiser tes chances de succès',
    content: `Tous les traders ne sont pas pareils. Comprendre les différents styles t'aidera à trouver celui qui correspond le mieux à ta personnalité et ton emploi du temps.

**Le Scalper**

Le scalper réalise des dizaines voire des centaines de trades par jour, avec des positions qui durent de quelques secondes à quelques minutes. Il cherche de petits profits rapides et répétés. Ce style demande une concentration extrême, une excellente connexion Internet et beaucoup de temps devant les écrans.

**Le Day Trader**

Le day trader ouvre et ferme toutes ses positions dans la même journée. Il ne garde jamais de positions overnight. Ce style nécessite plusieurs heures par jour et une bonne maîtrise de l'analyse technique à court terme.

**Le Swing Trader**

Le swing trader garde ses positions de quelques jours à quelques semaines. Il cherche à capturer des "swings" ou mouvements de prix significatifs. Ce style est idéal si tu as un emploi à temps plein car il ne nécessite pas une surveillance constante.

**Le Position Trader (ou Investisseur long terme)**

Ce trader garde ses positions pendant des mois voire des années. Il se base principalement sur l'analyse fondamentale et les tendances macroéconomiques. C'est le style le moins stressant mais qui demande beaucoup de patience.

**Le Trader Algorithmique**

Ce trader utilise des robots et des algorithmes pour trader automatiquement selon des règles prédéfinies. Nécessite des compétences en programmation.

**Quel style te correspond ?**

Demande-toi : combien de temps puis-je consacrer au trading chaque jour ? Quelle est ma tolérance au stress ? Est-ce que je préfère l'action rapide ou la patience ? Tes réponses détermineront ton style optimal.`,
    quiz: [
      {
        question: 'Quelle est la principale caractéristique d\'un scalper ?',
        options: [
          'Il garde ses positions plusieurs mois',
          'Il fait des dizaines de trades par jour',
          'Il ne trade que le Bitcoin'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Quel style convient le mieux si tu as un travail à temps plein ?',
        options: [
          'Scalping',
          'Day Trading',
          'Swing Trading'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que fait un Day Trader à la fin de la journée ?',
        options: [
          'Il garde toutes ses positions ouvertes',
          'Il ferme toutes ses positions',
          'Il double ses positions'
        ],
        correctAnswer: 1
      },
      {
        question: 'Combien de temps un Position Trader garde-t-il ses positions ?',
        options: [
          'Quelques minutes',
          'Une seule journée',
          'Des mois voire des années'
        ],
        correctAnswer: 2
      },
      {
        question: 'Quel type de trading nécessite des compétences en programmation ?',
        options: [
          'Day Trading',
          'Trading Algorithmique',
          'Swing Trading'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'what-is-leverage-in-trading': {
    id: 'what-is-leverage-in-trading',
    title: 'Qu\'est-ce que le Leverage (effet de levier) ?',
    category: 'basics',
    objective: 'Comprendre l\'effet de levier et ses risques',
    content: `Le leverage est un outil puissant mais extrêmement dangereux. Comprendre son fonctionnement est crucial avant de l'utiliser.

**Qu'est-ce que le Leverage ?**

Le leverage (ou effet de levier) te permet de trader avec plus d'argent que tu n'en as réellement. Par exemple, avec un leverage x10, si tu as 100€, tu peux trader comme si tu avais 1000€.

**Comment ça fonctionne ?**

L'exchange te "prête" temporairement de l'argent pour amplifier ta position. Si le prix évolue en ta faveur, tes gains sont multipliés. Mais attention : tes pertes aussi sont multipliées.

**Exemple concret**

Sans leverage :
- Capital : 100€
- Prix BTC : 40,000€
- Tu achètes : 0.0025 BTC
- Prix monte à 42,000€ (+5%)
- Ton gain : 5€ (nouveau total : 105€)

Avec leverage x10 :
- Capital : 100€
- Position équivalente : 1000€
- Tu contrôles : 0.025 BTC
- Prix monte à 42,000€ (+5%)
- Ton gain : 50€ (nouveau total : 150€) 🎉

Mais si le prix descend de 5% :
- Sans leverage : perte de 5€ (reste 95€)
- Avec leverage x10 : perte de 50€ (reste 50€) 😱

**Les dangers du Leverage**

Avec un leverage élevé, une variation de seulement 10% contre toi peut liquider entièrement ta position. La liquidation signifie que l'exchange ferme automatiquement ta position et tu perds tout ton capital investi.

**Règle d'or**

Si tu es débutant, NE PAS utiliser de leverage. Une fois expérimenté, limite-toi à x2 ou x3 maximum. Les leverages x50 ou x100 sont des pièges à débutants.

**Cross vs Isolated Margin**

En mode Cross, tout ton capital peut être utilisé pour maintenir la position. En mode Isolated, seul le capital alloué à cette position spécifique est à risque. Préfère toujours le mode Isolated.`,
    quiz: [
      {
        question: 'Qu\'est-ce que le leverage x10 ?',
        options: [
          'Tu trades avec 10 fois ton capital',
          'Tu gagnes 10€ par trade',
          'Tu peux faire 10 trades'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Avec leverage x5, si le prix baisse de 20%, que se passe-t-il ?',
        options: [
          'Tu perds 20€',
          'Tu es liquidé (perte totale)',
          'Tu doubles ton argent'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel mode de marge est recommandé pour limiter les risques ?',
        options: [
          'Cross Margin',
          'Isolated Margin',
          'Full Margin'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel niveau de leverage est recommandé pour un débutant ?',
        options: [
          'x50 ou x100 pour maximiser les gains',
          'x10 minimum',
          'Aucun leverage, ou maximum x2-x3'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que se passe-t-il lors d\'une liquidation ?',
        options: [
          'Tu gagnes un bonus',
          'L\'exchange ferme ta position et tu perds ton capital investi',
          'Ta position est automatiquement doublée'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la différence entre Cross Margin et Isolated Margin ?',
        options: [
          'En Cross tout le capital peut être utilisé, en Isolated seul le capital alloué est à risque',
          'Cross est plus sûr qu\'Isolated',
          'Il n\'y a aucune différence'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'trading-plan': {
    id: 'trading-plan',
    title: 'Créer un plan de trading efficace',
    category: 'basics',
    objective: 'Construire un plan de trading personnalisé et le suivre rigoureusement',
    content: `Un plan de trading est ta feuille de route. Sans plan, tu navigues à l'aveugle.

**Les composantes d'un bon plan de trading**

**1. Tes objectifs**
Définis des objectifs réalistes et mesurables : "Je vise 5% de gain par mois" plutôt que "Je veux devenir riche".

**2. Ton style de trading**
Scalping, day trading, swing trading ? Choisis en fonction de ton temps disponible et ta personnalité.

**3. Tes règles d'entrée**
Quelles conditions doivent être réunies pour que tu entres en position ? RSI en survente + cassure de résistance ? Support testé 3 fois ?

**4. Tes règles de sortie**
Où places-tu ton take-profit ? Ton stop-loss ? À quel moment sors-tu manuellement ?

**5. Ta gestion du risque**
Combien risques-tu par trade ? Quel est ton capital maximum à risquer par jour ?

**6. Les actifs que tu trades**
Ne trade pas tout. Concentre-toi sur 2-3 paires que tu connais bien (BTC/USDT, ETH/USDT...).

**7. Tes horaires de trading**
Quand trades-tu ? Évite de trader durant les périodes de faible liquidité (weekends).

**Exemple de plan simple**

Objectif : +3% par mois
Style : Swing trading
Actifs : BTC/USDT, ETH/USDT
Horaires : Vérification matin et soir
Entrée : RSI < 30 + prix sur support clé + volume croissant
Stop-loss : 2% sous le support
Take-profit : 6% au-dessus de l'entrée
Risque max : 2% du capital par trade

**L'importance de la discipline**

Avoir un plan est une chose, le suivre en est une autre. La discipline est ce qui sépare les traders gagnants des perdants. Respecte ton plan, même quand c'est dur.`,
    quiz: [
      {
        question: 'Quelle est la première étape d\'un plan de trading ?',
        options: [
          'Acheter des cryptos au hasard',
          'Définir des objectifs clairs et réalistes',
          'Regarder YouTube'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Combien de paires de cryptos un débutant devrait-il trader ?',
        options: [
          'Au moins 20 pour diversifier',
          '2-3 paires qu\'il connaît bien',
          'Toutes les paires disponibles'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faut-il faire une fois le plan créé ?',
        options: [
          'Le modifier tous les jours',
          'Le suivre avec discipline',
          'L\'oublier et trader à l\'instinct'
        ],
        correctAnswer: 1
      },
      {
        question: 'Dans un plan de trading, pourquoi définir des horaires spécifiques ?',
        options: [
          'Pour avoir une routine et éviter les périodes de faible liquidité',
          'Pour trader 24h/24',
          'Ce n\'est pas important'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel type d\'objectif est le plus approprié dans un plan de trading ?',
        options: [
          'Devenir millionnaire en un mois',
          'Viser 5% de gain mensuel de façon mesurable',
          'Trader autant que possible'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'rsi': {
    id: 'rsi',
    title: 'RSI - Relative Strength Index',
    category: 'technical',
    objective: 'Maîtriser l\'indicateur RSI pour détecter les zones de surachat et survente',
    content: `Le RSI est l'un des indicateurs les plus populaires en analyse technique. Simple mais puissant.

**Qu'est-ce que le RSI ?**

Le RSI (Relative Strength Index) mesure la force et la vitesse des mouvements de prix. Il oscille entre 0 et 100.

**Comment l'interpréter ?**

- RSI > 70 : Zone de SURACHAT → Le prix est peut-être trop haut, attention à un retournement baissier
- RSI < 30 : Zone de SURVENTE → Le prix est peut-être trop bas, attention à un rebond haussier
- RSI = 50 : Zone neutre

**Stratégies de base avec le RSI**

**1. Stratégie de Mean Reversion (retour à la moyenne)**
- Achète quand RSI < 30 (survente)
- Vends quand RSI > 70 (surachat)

Cette stratégie fonctionne bien dans les marchés en range (sans tendance claire).

**2. Stratégie de divergence**
Une divergence se produit quand le prix fait un nouveau plus haut mais le RSI fait un plus bas (divergence baissière), ou inversement.

Exemple : Le BTC atteint 42,000€ (nouveau plus haut) mais le RSI atteint seulement 65 alors qu'il était à 75 au précédent plus haut → Signal baissier fort

**3. Cassure de niveaux**
Quand le RSI casse 50 en tendance haussière, c'est souvent un bon signal de continuation.

**Erreurs courantes**

Ne JAMAIS acheter uniquement parce que le RSI est < 30. En forte tendance baissière, le RSI peut rester en survente pendant longtemps. Combine toujours le RSI avec d'autres indicateurs ou analyse de structure.

**Paramètres**

Le paramètre standard est RSI(14), c'est-à-dire calculé sur 14 périodes. Tu peux ajuster selon ton timeframe : RSI(7) pour du court terme, RSI(21) pour du long terme.`,
    quiz: [
      {
        question: 'Que signifie un RSI à 75 ?',
        options: [
          'Zone de survente, opportunité d\'achat',
          'Zone de surachat, attention possible retournement',
          'Zone neutre'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Qu\'est-ce qu\'une divergence baissière ?',
        options: [
          'Le prix monte mais le RSI descend',
          'Le prix descend et le RSI aussi',
          'Le RSI est à 50'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est le paramètre standard du RSI ?',
        options: [
          'RSI(7)',
          'RSI(14)',
          'RSI(50)'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle stratégie RSI fonctionne mieux dans un marché en range ?',
        options: [
          'Acheter uniquement quand RSI > 70',
          'Acheter en survente (RSI < 30) et vendre en surachat (RSI > 70)',
          'Ignorer le RSI complètement'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi ne faut-il pas acheter uniquement parce que le RSI est < 30 ?',
        options: [
          'Car en forte tendance baissière le RSI peut rester bas longtemps',
          'Car c\'est illégal',
          'Car le RSI n\'est jamais fiable'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie un RSI qui casse 50 en tendance haussière ?',
        options: [
          'Signal de vente immédiate',
          'Signal de continuation de la tendance',
          'Aucune signification'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'dictionary': {
    id: 'dictionary',
    title: 'Dictionnaire des termes de trading',
    category: 'basics',
    objective: 'Maîtriser le vocabulaire essentiel du trading crypto',
    content: `Voici les termes les plus importants à connaître :

**ATH (All-Time High)** : Le prix le plus haut jamais atteint par un actif.

**ATL (All-Time Low)** : Le prix le plus bas jamais atteint.

**Bullish** : Marché haussier, optimiste. "Je suis bullish sur BTC" = je pense que le prix va monter.

**Bearish** : Marché baissier, pessimiste.

**FOMO (Fear Of Missing Out)** : La peur de rater une opportunité. Souvent cause de mauvaises décisions.

**FUD (Fear, Uncertainty, Doubt)** : Propagation de peur et doute, souvent pour manipuler le marché.

**HODL** : Hold On for Dear Life. Garder ses cryptos long terme malgré la volatilité.

**Pump & Dump** : Manipulation où le prix est artificiellement gonflé (pump) puis vendu massivement (dump).

**Whale** : Gros détenteur de crypto capable d'influencer le marché.

**Resistance** : Niveau de prix où la pression vendeuse est forte.

**Support** : Niveau de prix où la pression acheteuse est forte.

**Market Order** : Ordre exécuté immédiatement au prix du marché.

**Limit Order** : Ordre exécuté uniquement à un prix spécifique ou meilleur.

**Spread** : Différence entre le prix d'achat et de vente.

**Slippage** : Différence entre le prix attendu et le prix réel d'exécution.

**Gas Fees** : Frais de transaction sur les blockchains (surtout Ethereum).

**Staking** : Bloquer ses cryptos pour gagner des récompenses.

**DCA (Dollar Cost Averaging)** : Investir régulièrement la même somme, peu importe le prix.

**Long Position** : Parier sur la hausse du prix.

**Short Position** : Parier sur la baisse du prix.

**Liquidation** : Fermeture forcée d'une position avec leverage quand les pertes sont trop importantes.

**Capitulation** : Vente massive par panique, souvent marque le bas du marché.`,
    quiz: [
      {
        question: 'Que signifie "être bullish" ?',
        options: [
          'Penser que le prix va baisser',
          'Penser que le prix va monter',
          'Ne pas avoir d\'opinion'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Qu\'est-ce qu\'un support ?',
        options: [
          'Un niveau où la pression acheteuse est forte',
          'Un service client',
          'Un type de wallet'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie HODL ?',
        options: [
          'Hold On for Dear Life - garder long terme',
          'Un type de trading rapide',
          'Une stratégie de short'
        ],
        correctAnswer: 0
      },
      {
        question: 'Qu\'est-ce que le FOMO ?',
        options: [
          'Fear Of Missing Out - peur de rater une opportunité',
          'Un type d\'ordre',
          'Une crypto-monnaie'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle est la différence entre un Market Order et un Limit Order ?',
        options: [
          'Aucune différence',
          'Market s\'exécute immédiatement, Limit à un prix spécifique',
          'Market est moins cher'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie DCA (Dollar Cost Averaging) ?',
        options: [
          'Acheter tout d\'un coup',
          'Investir régulièrement la même somme',
          'Vendre en panique'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'boll': {
    id: 'boll',
    title: 'Les Bandes de Bollinger',
    category: 'technical',
    objective: 'Comprendre et utiliser les Bandes de Bollinger pour identifier la volatilité et les opportunités de trading',
    content: `Les Bandes de Bollinger ont été développées par John Bollinger dans les années 1980 comme un outil pour aider les traders à identifier la volatilité potentielle des prix et les zones de prix relativement élevées ou basses par rapport aux échanges précédents.

Elles offrent une définition relative des notions de "haut" et de "bas" du marché et permettent d'identifier les situations de surachat ou de survente.

**Qu'est-ce que c'est et ce que ça montre**

Les Bandes de Bollinger se composent de trois lignes :

**Bande du milieu** : une moyenne mobile simple (généralement une SMA sur 20 périodes)

**Bande supérieure** : moyenne mobile + (multiplicateur × écart-type)

**Bande inférieure** : moyenne mobile - (multiplicateur × écart-type)

Le réglage standard utilise une période de 20 jours avec un multiplicateur de 2 écarts-types, mais cela peut être adapté selon l'actif ou l'unité de temps.

Lorsque les bandes se resserrent, cela indique une période de faible volatilité (appelée "squeeze"). Lorsqu'elles s'écartent, cela signale une augmentation de la volatilité.

**Comment les trader**

**1. Le rebond de Bollinger (Bollinger Bounce)**
Les prix ont tendance à rebondir sur les bandes extérieures, qui agissent comme des zones de support ou de résistance.
Exemple : Si le prix d'une action touche la bande inférieure et remonte, cela peut être vu comme une opportunité d'achat.

**2. Le Squeeze de Bollinger**
Quand les bandes se rapprochent fortement, cela signale souvent un mouvement imminent — soit une hausse, soit une baisse.

**3. "Riding the Bands" (Suivre les bandes)**
En tendance haussière forte, le prix peut coller à la bande supérieure ; en tendance baissière, à la bande inférieure.
Cela indique que la tendance actuelle est puissante et peut se poursuivre.

**4. Les Cassures (Breakouts)**
Une clôture au-dessus de la bande supérieure peut indiquer un possible repli, tandis qu'une clôture sous la bande inférieure peut signaler un rebond potentiel.

**⚠️ Important**

Il est recommandé d'utiliser les Bandes de Bollinger avec d'autres indicateurs pour confirmer les signaux. Ne trade jamais uniquement sur la base d'un seul indicateur.`,
    quiz: [
      {
        question: 'De combien de lignes se composent les Bandes de Bollinger ?',
        options: [
          'Une seule ligne',
          'Deux lignes',
          'Trois lignes'
        ],
        correctAnswer: 2,
  },
      {
        question: 'Que représente la bande du milieu ?',
        options: [
          'Une moyenne mobile simple',
          'Le prix le plus haut',
          'Le prix le plus bas'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie un "Bollinger Squeeze" ?',
        options: [
          'Les bandes s\'écartent fortement',
          'Les bandes se resserrent, signalant un mouvement imminent',
          'Le prix sort des bandes'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le réglage standard des Bandes de Bollinger ?',
        options: [
          '10 périodes avec 1 écart-type',
          '20 périodes avec 2 écarts-types',
          '50 périodes avec 3 écarts-types'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que suggère un prix qui "colle" à la bande supérieure ?',
        options: [
          'Une tendance haussière forte',
          'Une tendance baissière',
          'Aucune tendance'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi ne faut-il pas trader uniquement avec les Bandes de Bollinger ?',
        options: [
          'Elles sont toujours fausses',
          'Il faut les combiner avec d\'autres indicateurs pour confirmer',
          'Elles sont interdites'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'stochastic': {
    id: 'stochastic',
    title: 'L\'Oscillateur Stochastique',
    category: 'technical',
    objective: 'Maîtriser l\'oscillateur stochastique pour identifier les zones de surachat et survente',
    content: `L'Oscillateur Stochastique est un indicateur de momentum développé par George C. Lane à la fin des années 1950.
Il compare le prix de clôture actuel d'un actif à l'ensemble de ses prix sur une période donnée.

Sa sensibilité aux mouvements du marché peut être ajustée en modifiant la période ou en prenant une moyenne mobile du résultat.

**Qu'est-ce que c'est et ce que ça montre**

L'oscillateur mesure la position du prix actuel par rapport au plus haut et au plus bas d'une période donnée.

**Formule :**

%K = [(Clôture actuelle - Plus bas) / (Plus haut - Plus bas)] × 100

%D = moyenne mobile à 3 jours de %K

Généralement, deux lignes sont tracées :

**%K** (ligne rapide)

**%D** (ligne lente, moyenne de %K)

Lorsque la valeur dépasse 80, l'actif est souvent considéré comme suracheté.
En dessous de 20, il est souvent survendu.

**Comment le trader**

**1. Zones de surachat/survente**

Au-dessus de 80 = zone de surachat possible.
En dessous de 20 = zone de survente.

**2. Divergences haussières et baissières**

Une **divergence haussière** se produit lorsque le prix fait un nouveau plus bas, mais pas l'oscillateur.
Inversement, une **divergence baissière** se produit quand le prix fait un nouveau plus haut, mais pas l'oscillateur.

**3. Croisements (%K et %D)**

Si la ligne %K croise au-dessus de %D → signal haussier.

Si la ligne %K croise en dessous de %D → signal baissier.

**⚠️ Important**

Comme toujours, cet indicateur doit être utilisé avec d'autres outils techniques pour confirmer les signaux. Ne te fie jamais à un seul indicateur.`,
    quiz: [
      {
        question: 'Qui a développé l\'Oscillateur Stochastique ?',
        options: [
          'John Bollinger',
          'George C. Lane',
          'Welles Wilder'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Que mesure l\'oscillateur stochastique ?',
        options: [
          'Le volume des transactions',
          'La position du prix actuel par rapport au plus haut et plus bas',
          'La volatilité uniquement'
        ],
        correctAnswer: 1
      },
      {
        question: 'À partir de quelle valeur considère-t-on un actif comme suracheté ?',
        options: [
          'Au-dessus de 50',
          'Au-dessus de 70',
          'Au-dessus de 80'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que signifie %D dans le stochastique ?',
        options: [
          'La ligne rapide',
          'La moyenne mobile de %K (ligne lente)',
          'Le prix de clôture'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une divergence haussière ?',
        options: [
          'Le prix fait un nouveau plus haut mais pas l\'oscillateur',
          'Le prix fait un nouveau plus bas mais pas l\'oscillateur',
          'L\'oscillateur est à 50'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel signal donne un croisement de %K au-dessus de %D ?',
        options: [
          'Signal baissier',
          'Signal haussier',
          'Aucun signal'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'market-psychology': {
    id: 'market-psychology',
    title: 'Psychologie des marchés',
    category: 'basics',
    objective: 'Comprendre les émotions qui influencent les marchés',
    content: `La psychologie est souvent plus importante que l'analyse technique. Comprendre comment les émotions influencent les prix est essentiel.

**Les cycles émotionnels du marché**

Les marchés suivent des cycles émotionnels prévisibles : euphorie, cupidité, déni, peur, capitulation, puis espoir. Identifier où nous sommes dans ce cycle peut te donner un avantage considérable.

**L'euphorie et la cupidité**

Quand tout le monde parle de crypto, que les médias mainstream en parlent positivement, que ton coiffeur te donne des conseils d'investissement... c'est souvent le signe d'un sommet proche. L'euphorie pousse les prix à des niveaux irrationnels.

**La peur et la capitulation**

À l'inverse, quand les médias proclament "la mort du Bitcoin", que personne ne veut en entendre parler, que les prix sont au plus bas depuis des mois... c'est souvent le meilleur moment pour acheter. Warren Buffett le dit bien : "Sois craintif quand les autres sont cupides, et cupide quand les autres sont craintifs."

**Le biais de confirmation**

Nous avons tous tendance à chercher des informations qui confirment nos croyances existantes. Si tu es bullish sur Bitcoin, tu vas naturellement ignorer les analyses baissières et ne lire que les analyses haussières. Lutte contre ce biais en cherchant activement des opinions contraires.

**L'effet de foule (FOMO)**

Fear Of Missing Out - la peur de rater quelque chose. C'est ce qui pousse les gens à acheter au sommet parce que "tout le monde gagne de l'argent". Ne jamais entrer en position par FOMO. Attends toujours ton setup.

**La discipline émotionnelle**

Les meilleurs traders sont ceux qui peuvent rester rationnels quand tout le monde panique ou s'excite. Avoir un plan et s'y tenir, quoi qu'il arrive, est la clé du succès à long terme.`,
    quiz: [
      {
        question: 'Quel est souvent le meilleur moment pour acheter selon la psychologie des marchés ?',
        options: [
          'Quand tout le monde est euphorique',
          'Quand les médias proclament la mort du Bitcoin',
          'Quand ton coiffeur te donne des conseils'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Qu\'est-ce que le FOMO ?',
        options: [
          'Fear Of Missing Out',
          'First Order Market Operation',
          'Financial Optimization Method'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est le conseil de Warren Buffett ?',
        options: [
          'Acheter toujours haut',
          'Être craintif quand les autres sont cupides',
          'Suivre toujours la foule'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le biais de confirmation ?',
        options: [
          'Chercher uniquement des infos qui confirment nos croyances',
          'Confirmer tous ses trades par email',
          'Vérifier deux fois ses ordres'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire quand tout le monde parle positivement de crypto dans les médias ?',
        options: [
          'Acheter immédiatement',
          'Être prudent, c\'est souvent signe d\'un sommet',
          'Vendre tout'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'trading-journal': {
    id: 'trading-journal',
    title: 'Tenir un journal de trading',
    category: 'basics',
    objective: 'Apprendre à documenter et analyser ses trades',
    content: `Un journal de trading est ton outil d'apprentissage le plus puissant. Sans lui, tu répètes les mêmes erreurs indéfiniment.

**Que noter dans ton journal ?**

Pour chaque trade, note :
- Date et heure d'entrée/sortie
- Paire tradée (BTC/USDT, ETH/USDT, etc.)
- Direction (Long/Short)
- Prix d'entrée et de sortie
- Taille de position
- Stop-loss et take-profit
- Raison d'entrée (setup technique, signal...)
- Émotion ressentie (confiant, stressé, FOMO...)
- Résultat (gain/perte en € et en %)
- Leçons apprises

**L'importance de l'honnêteté**

Sois brutalement honnête dans ton journal. Personne ne le lira sauf toi. Si tu as perdu par cupidité, écris-le. Si tu as ignoré ton stop-loss, note-le.

**Analyse hebdomadaire**

Chaque dimanche, revois tes trades de la semaine :
- Quel est ton taux de réussite ?
- Quels sont tes meilleurs setups ?
- Quelles erreurs reviennent le plus souvent ?
- Sur quelles paires es-tu le plus profitable ?

**Exemple de journal simplifié**

Date : 15/03/2024 10:30
Paire : BTC/USDT
Direction : LONG
Entrée : 65,000$
Stop-loss : 64,500$
Take-profit : 66,500$
Taille : 0.1 BTC
Raison : Cassure de résistance + RSI sortant de survente
Émotion : Confiant, setup clair
Résultat : +150$ (+2.3%)
Leçon : Bon respect du plan

**Outils pour ton journal**

Tu peux utiliser :
- Un simple fichier Excel/Google Sheets
- Une application dédiée comme Edgewonk ou TradingView
- Un carnet papier (moins pratique pour l'analyse)

**Pourquoi ça fonctionne ?**

Le simple fait de noter te force à réfléchir avant d'agir. Tu ne pourras plus trader impulsivement si tu sais que tu devras l'écrire et l'analyser ensuite.`,
    quiz: [
      {
        question: 'Quelle information n\'est PAS essentielle dans un journal de trading ?',
        options: [
          'L\'émotion ressentie',
          'Le résultat du trade',
          'La couleur de tes vêtements ce jour-là'
        ],
        correctAnswer: 2,
  },
      {
        question: 'À quelle fréquence faut-il analyser son journal ?',
        options: [
          'Jamais, juste le remplir suffit',
          'Au moins une fois par semaine',
          'Une fois par an'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi noter l\'émotion ressentie pendant le trade ?',
        options: [
          'Pour identifier les patterns émotionnels qui causent des erreurs',
          'C\'est inutile',
          'Pour se souvenir de son humeur'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire si tu as fait une erreur dans un trade ?',
        options: [
          'Ne pas la noter pour ne pas se sentir mal',
          'L\'écrire honnêtement pour en tirer des leçons',
          'Effacer le trade du journal'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le principal avantage d\'un journal de trading ?',
        options: [
          'Impressionner ses amis',
          'Identifier ses erreurs récurrentes et ses meilleurs setups',
          'Remplir du temps'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'position-sizing': {
    id: 'position-sizing',
    title: 'Calcul de la taille de position',
    category: 'basics',
    objective: 'Maîtriser le dimensionnement des positions',
    content: `Savoir combien acheter est aussi important que savoir quand acheter. Une mauvaise taille de position peut ruiner même la meilleure stratégie.

**La formule de base**

Taille de position = (Capital × Risque%) ÷ Distance au stop-loss

**Exemple pratique**

Tu as 5000€ de capital et tu respectes la règle des 2% de risque maximum :
- Risque maximum : 5000€ × 2% = 100€
- Tu veux acheter BTC à 40,000€
- Ton stop-loss est à 39,000€
- Distance : 1,000€ par BTC

Taille de position = 100€ ÷ 1,000€ = 0.1 BTC

Tu peux donc acheter 0.1 BTC. Si le stop-loss se déclenche, tu perds exactement 100€ (2% de ton capital).

**L'erreur classique du débutant**

Beaucoup de débutants font l'inverse : ils décident d'acheter pour 1000€ de BTC, puis placent un stop-loss au hasard. C'est la pire approche car tu ne contrôles pas ton risque.

**Position sizing avec leverage**

Si tu utilises un leverage x5 :
- Même calcul de base
- Mais divise ta position par 5 car le leverage la multiplie
- Avec notre exemple : 0.1 BTC ÷ 5 = 0.02 BTC avec leverage x5

**Le risque adaptatif**

Certains traders ajustent leur risque selon leur confiance :
- Setup A+ : 2% de risque
- Setup A : 1.5% de risque
- Setup B : 1% de risque

Mais JAMAIS plus de 2% même sur les meilleurs setups.

**Pyramidage**

Si tu veux ajouter à une position gagnante :
- Ne jamais augmenter ton risque total au-delà de 2%
- Remonte ton stop-loss au point d'entrée initial
- Chaque ajout doit être plus petit que le précédent

**Règle des 6%**

Ne jamais avoir plus de 6% de ton capital total en risque simultanément. Si tu as déjà 3 positions ouvertes risquant 2% chacune, n'en ouvre pas de nouvelle.`,
    quiz: [
      {
        question: 'Comment calculer la taille de position ?',
        options: [
          'Acheter autant que possible',
          '(Capital × Risque%) ÷ Distance au stop-loss',
          'Capital ÷ Prix de l\'actif'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Avec 10,000€ de capital, 2% de risque et un stop à 500€ de distance, quelle position prendre ?',
        options: [
          '200€ ÷ 500€ = 0.4 unités',
          '10,000€ ÷ 500€ = 20 unités',
          '2% de 10,000€ = 200 unités'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire si tu utilises du leverage ?',
        options: [
          'Augmenter la taille de position',
          'Diviser la taille de position par le leverage',
          'Ignorer le leverage dans le calcul'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que la règle des 6% ?',
        options: [
          'Risquer 6% par trade',
          'Ne jamais avoir plus de 6% de capital total en risque simultanément',
          'Gagner 6% par mois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est l\'erreur classique du débutant ?',
        options: [
          'Calculer la position selon le risque',
          'Décider du montant d\'abord, puis placer le stop au hasard',
          'Utiliser un stop-loss'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'market-orders': {
    id: 'market-orders',
    title: 'Types d\'ordres de trading',
    category: 'basics',
    objective: 'Maîtriser les différents types d\'ordres',
    content: `Connaître les différents types d'ordres et quand les utiliser est crucial pour exécuter ta stratégie efficacement.

**Market Order (Ordre au marché)**

Achète ou vend immédiatement au meilleur prix disponible.
- Avantage : Exécution garantie et instantanée
- Inconvénient : Prix non garanti, peut être moins bon que prévu
- Quand l'utiliser : Quand tu veux entrer/sortir rapidement

**Limit Order (Ordre à cours limité)**

Tu fixes le prix maximum que tu veux payer (achat) ou minimum que tu veux recevoir (vente).
- Avantage : Tu contrôles le prix d'exécution
- Inconvénient : L'ordre peut ne jamais se remplir
- Quand l'utiliser : Pour entrer à un prix spécifique

Exemple : BTC est à 40,000€. Tu places un limit order d'achat à 39,500€. L'ordre ne s'exécutera que si le prix descend à 39,500€ ou moins.

**Stop-Loss Order**

Ordre qui devient un market order quand le prix atteint un certain niveau.
- But : Limiter tes pertes
- Attention : En forte volatilité, peut s'exécuter à un prix pire que prévu (slippage)

**Stop-Limit Order**

Combinaison de stop et limit. Quand le prix stop est atteint, un limit order est placé.
- Avantage : Contrôle du prix même lors du déclenchement du stop
- Inconvénient : Peut ne pas s'exécuter si le prix bouge trop vite

**Take-Profit Order**

Ferme automatiquement ta position quand le profit cible est atteint.
- Essentiel pour sécuriser tes gains
- Évite l'indécision émotionnelle

**Trailing Stop**

Stop-loss qui suit le prix. Si le prix monte, le stop monte aussi, mais ne descend jamais.

Exemple : Tu achètes à 1000€ avec un trailing stop de 5%
- Prix monte à 1100€ → Stop monte à 1045€ (1100€ - 5%)
- Prix monte à 1200€ → Stop monte à 1140€ (1200€ - 5%)
- Si prix redescend à 1140€ → Position fermée avec 140€ de profit

**OCO (One Cancels Other)**

Deux ordres liés : si l'un s'exécute, l'autre est automatiquement annulé.

Exemple : Tu achètes BTC à 40,000€
- OCO : Take-profit à 42,000€ + Stop-loss à 38,000€
- Si l'un se déclenche, l'autre est annulé automatiquement

**Conseils d'utilisation**

- Pour entrer : Utilise limit orders pour avoir le meilleur prix
- Pour sortir d'urgence : Market order
- Pour protéger : Stop-loss obligatoire
- Pour sécuriser profits : Take-profit ou trailing stop`,
    quiz: [
      {
        question: 'Quel ordre garantit l\'exécution immédiate mais pas le prix ?',
        options: [
          'Limit Order',
          'Market Order',
          'Stop-Limit Order'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Un Limit Order d\'achat à 39,500€ s\'exécutera si le prix est à :',
        options: [
          '40,000€',
          '39,000€',
          'Jamais'
        ],
        correctAnswer: 1
      },
      {
        question: 'À quoi sert un Trailing Stop ?',
        options: [
          'À acheter automatiquement',
          'À suivre le prix à la hausse tout en protégeant les profits',
          'À annuler tous les ordres'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie OCO ?',
        options: [
          'One Cancels Other',
          'Only Cash Orders',
          'Open Close Operation'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel type d\'ordre utiliser pour entrer à un prix précis ?',
        options: [
          'Market Order',
          'Limit Order',
          'Stop-Loss'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le slippage ?',
        options: [
          'Un type d\'ordre',
          'La différence entre le prix attendu et le prix d\'exécution réel',
          'Un indicateur technique'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'candlestick-patterns': {
    id: 'candlestick-patterns',
    title: 'Patterns de chandeliers japonais',
    category: 'basics',
    objective: 'Reconnaître et utiliser les patterns de chandeliers',
    content: `Les chandeliers japonais racontent l'histoire de la bataille entre acheteurs et vendeurs. Apprendre à les lire donne un avantage énorme.

**Anatomie d'un chandelier**

- Corps : Différence entre ouverture et clôture
- Mèche haute : Plus haut atteint
- Mèche basse : Plus bas atteint
- Vert/Blanc : Clôture > Ouverture (haussier)
- Rouge/Noir : Clôture < Ouverture (baissier)

**Patterns haussiers**

**1. Hammer (Marteau)**
- Petit corps en haut
- Longue mèche basse (2-3x le corps)
- Apparaît après une baisse
- Signal : Les vendeurs ont poussé bas mais les acheteurs ont repris le contrôle

**2. Bullish Engulfing (Engloutissant haussier)**
- Deux chandeliers : petit rouge puis grand vert
- Le vert "engloutit" complètement le rouge
- Signal très fort de retournement haussier

**3. Morning Star (Étoile du matin)**
- Trois chandeliers : grand rouge, petit (rouge ou vert), grand vert
- Signal de fin de baisse

**Patterns baissiers**

**4. Shooting Star (Étoile filante)**
- Petit corps en bas
- Longue mèche haute
- Apparaît après une hausse
- Signal : Les acheteurs ont poussé haut mais les vendeurs ont repris le contrôle

**5. Bearish Engulfing (Engloutissant baissier)**
- Deux chandeliers : petit vert puis grand rouge
- Le rouge engloutit le vert
- Signal fort de retournement baissier

**6. Evening Star (Étoile du soir)**
- Trois chandeliers : grand vert, petit, grand rouge
- Signal de fin de hausse

**Patterns de continuation**

**7. Three White Soldiers (Trois soldats blancs)**
- Trois grands chandeliers verts consécutifs
- Confirmation de tendance haussière forte

**8. Three Black Crows (Trois corbeaux noirs)**
- Trois grands chandeliers rouges consécutifs
- Confirmation de tendance baissière forte

**Patterns d'indécision**

**9. Doji**
- Ouverture = Clôture (pas de corps)
- Signal d'indécision du marché
- Important aux niveaux de support/résistance

**10. Spinning Top**
- Petit corps (peu importe la couleur)
- Longues mèches haut et bas
- Indécision, potentiel retournement

**Règles d'utilisation**

1. Ne JAMAIS trader un pattern seul
2. Toujours confirmer avec :
   - Niveau de support/résistance
   - Volume (pattern plus fort si volume élevé)
   - Indicateurs techniques (RSI, MACD...)
3. Attendre la confirmation du chandelier suivant

**Exemple de trade**

BTC est en baisse depuis 3 jours. Un Hammer apparaît sur un support majeur à 38,000€. Le chandelier suivant ouvre en hausse.
- Signal : Potentiel retournement haussier
- Confirmation : Support + Hammer + chandelier de confirmation
- Action : Envisager un achat avec stop sous le Hammer`,
    quiz: [
      {
        question: 'Qu\'indique un Hammer après une baisse ?',
        options: [
          'Continuation de la baisse',
          'Potentiel retournement haussier',
          'Indécision'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Combien de chandeliers composent un Bullish Engulfing ?',
        options: [
          'Un seul',
          'Deux',
          'Trois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie un Doji ?',
        options: [
          'Forte tendance haussière',
          'Indécision du marché',
          'Crash imminent'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où apparaît une Shooting Star ?',
        options: [
          'Après une baisse',
          'Après une hausse',
          'N\'importe où'
        ],
        correctAnswer: 1
      },
      {
        question: 'Faut-il trader un pattern de chandelier seul ?',
        options: [
          'Oui, c\'est suffisant',
          'Non, toujours le confirmer avec d\'autres éléments',
          'Seulement le lundi'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que représentent les "Three White Soldiers" ?',
        options: [
          'Signal baissier',
          'Confirmation de tendance haussière forte',
          'Indécision'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'trading-terms': {
    id: 'trading-terms',
    title: 'Termes de trading essentiels',
    category: 'basics',
    objective: 'Comprendre les principaux termes utilisés en trading',
    content: `Maîtriser le vocabulaire du trading est indispensable pour comprendre les analyses et communiquer avec d'autres traders.

**Termes de marché**

- **Marché haussier (Bull)** : prix en hausse, sentiment positif 📈
- **Marché baissier (Bear)** : prix en baisse, sentiment négatif 📉
- **Range** : marché sans direction claire, oscillant entre un support et une résistance

**Types d'ordres**

- **Long** : acheter dans l'espoir que le prix monte
- **Short** : vendre à découvert, parier sur la baisse
- **Ordre au marché** : exécution immédiate au meilleur prix disponible
- **Ordre limite** : ordre placé à un prix spécifique
- **Stop-loss** : ordre de sortie automatique si la perte atteint un certain niveau
- **Take-profit** : ordre de sortie automatique lorsque l'objectif est atteint

**Termes d'analyse**

- **Support** : niveau où les acheteurs sont suffisamment forts pour arrêter une baisse
- **Résistance** : niveau où les vendeurs sont suffisamment forts pour arrêter une hausse
- **Breakout** : cassure d'un support ou d'une résistance
- **Pullback/Retracement** : correction temporaire dans une tendance

**Autres indicateurs**

- **Volume** : quantité d'actifs échangés sur une période
- **Volatilité** : amplitude des variations de prix
- **Liquidité** : facilité avec laquelle un actif peut être acheté ou vendu
- **Slippage** : différence entre le prix attendu et le prix d'exécution

**Expressions crypto**

- **FOMO** : Fear Of Missing Out – peur de rater une opportunité
- **FUD** : Fear, Uncertainty and Doubt – rumeurs négatives
- **ATH** : All-Time High – plus haut historique
- **ATL** : All-Time Low – plus bas historique
- **Pump** : hausse rapide des prix
- **Dump** : chute rapide des prix
- **Whale** : investisseur détenant une quantité massive de crypto`,
    quiz: [
      {
        question: 'Que signifie \"Long\" ?',
        options: [
          'Acheter en pariant sur la hausse',
          'Vendre à découvert',
          'Attendre sans rien faire'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Qu\'est-ce qu\'un Stop-loss ?',
        options: [
          'Ordre de sortie automatique en cas de perte',
          'Ordre d\'achat immédiat',
          'Taxe sur les transactions'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que veut dire FOMO ?',
        options: [
          'Force Of Market Orders',
          'Fear Of Missing Out',
          'Fermer Une Position'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un support ?',
        options: [
          'Niveau où les vendeurs stoppent la hausse',
          'Niveau où les acheteurs stoppent la baisse',
          'Indicateur de volume'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie ATH ?',
        options: [
          'Amplitude Totale Horaire',
          'All-Time High',
          'Analyse Technique Horizontale'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'order-block': {
    id: 'order-block',
    title: 'Order Block (Bloc d\'ordre)',
    category: 'technical',
    objective: 'Comprendre et identifier les zones d\'order block sur un graphique',
    content: `Les order blocks sont des zones où des acteurs institutionnels placent des ordres importants qui provoquent souvent un retournement ou une accélération du prix. Ils permettent d'anticiper des points d'entrée ou de sortie.

**Qu'est-ce qu'un order block ?**

Un order block est une zone de consolidation ou de dernière bougie haussière/baissière avant un mouvement impulsif. Il représente les ordres d'achat ou de vente massifs passés par des institutionnels.

**Identifier un order block**

- Rechercher un fort mouvement impulsif précédé d'un petit range ou d'une bougie opposée
- Délimiter la zone du dernier sommet ou creux avant l'impulsion
- Observer si le prix réagit (rebond ou rejet) lors d'un retour dans cette zone

**Utilisation**

- Entrer en position lorsque le prix revient dans l'order block (achat sur order block haussier, vente sur order block baissier)
- Placer son stop-loss de l'autre côté de l'order block
- Combiner avec d'autres confirmations (structure de marché, volume, indicateurs) pour augmenter la probabilité de succès

**Limites**

- Les order blocks ne sont pas toujours respectés ; ils peuvent être cassés
- Nécessitent de la pratique pour les identifier correctement`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'un order block ?',
        options: [
          'Une zone où se trouvent beaucoup d\'ordres institutionnels',
          'Un indicateur de momentum',
          'Un type de bougie japonaise'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Comment identifier un order block ?',
        options: [
          'Chercher un mouvement impulsif précédé d\'un range ou d\'une bougie opposée',
          'Regarder uniquement le RSI',
          'Utiliser seulement les volumes'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire quand le prix revient dans un order block haussier ?',
        options: [
          'Envisager un achat',
          'Vendre immédiatement',
          'Ignorer la zone'
        ],
        correctAnswer: 0
      },
      {
        question: 'Où placer le stop-loss lors d\'un trade sur order block ?',
        options: [
          'De l\'autre côté de l\'order block',
          'Au milieu de l\'order block',
          'N\'importe où'
        ],
        correctAnswer: 0
      },
      {
        question: 'Les order blocks garantissent-ils un rebond ?',
        options: [
          'Toujours',
          'Jamais',
          'Non, il faut les confirmer avec d\'autres éléments'
        ],
        correctAnswer: 2
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'fair-value-gaps': {
    id: 'fair-value-gaps',
    title: 'Fair Value Gaps (FVG)',
    category: 'technical',
    objective: 'Comprendre et trader les zones de déséquilibre FVG',
    content: `Les Fair Value Gaps (FVG) représentent des zones de déséquilibre entre l'offre et la demande créées par des mouvements brusques. Ces "trous" dans la structure de prix sont souvent comblés par le marché.

**Définition**

Un FVG apparaît lorsqu'il existe un espace inoccupé entre deux bougies successives, souvent après une grande bougie impulsive. Cela indique que peu d'échanges ont eu lieu et que le prix pourrait revenir combler ce gap.

**Comment repérer un FVG**

- Rechercher une bougie haussière ou baissière forte avec très peu de chevauchement avec la bougie précédente et suivante
- Définir le gap entre le haut de la première bougie et le bas de la bougie suivante (pour un gap haussier) ou l'inverse pour un gap baissier

**Utilisation du FVG**

- Zone de retour potentiel : le prix revient souvent combler le gap avant de poursuivre sa tendance
- Entrer en position lorsque le prix entre dans le FVG, en cherchant un signal de retournement ou de continuation
- Placer le stop-loss de l'autre côté du gap

**Conseils**

- Utiliser les FVG en conjonction avec la structure de marché, les niveaux de support/résistance et les indicateurs
- Les FVG sur des timeframes élevés (H4, Daily) sont plus pertinents que sur des timeframes très courts`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'un Fair Value Gap (FVG) ?',
        options: [
          'Une zone de déséquilibre entre l\'offre et la demande',
          'Une moyenne mobile',
          'Un pattern de chandelier'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que fait souvent le prix lorsqu\'un FVG se forme ?',
        options: [
          'Il ne revient jamais',
          'Il revient combler le gap',
          'Il s\'en écarte davantage'
        ],
        correctAnswer: 1
      },
      {
        question: 'Comment définir les limites d\'un FVG haussier ?',
        options: [
          'Entre le bas de la bougie précédente et le haut de la bougie suivante',
          'Entre le haut de la bougie précédente et le bas de la bougie suivante',
          'Entre l\'ouverture et la clôture'
        ],
        correctAnswer: 1
      },
      {
        question: 'Sur quels timeframes les FVG sont-ils les plus fiables ?',
        options: [
          'H4 et Daily',
          '1 minute',
          '15 secondes'
        ],
        correctAnswer: 0
      },
      {
        question: 'Faut-il utiliser les FVG seuls ?',
        options: [
          'Oui, c\'est suffisant',
          'Non, il faut les combiner avec d\'autres outils',
          'Seulement pour le scalping'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'inversion-fair-value-gaps': {
    id: 'inversion-fair-value-gaps',
    title: 'Inversion des FVG',
    category: 'technical',
    objective: 'Utiliser les FVG non comblés comme zones de retournement',
    content: `Lorsqu'un Fair Value Gap n'est pas comblé immédiatement, il peut devenir une zone d'inversion où le prix réagit fortement lors des retours ultérieurs.

**Inversion FVG**

- Un FVG non comblé se transforme en support (pour un FVG haussier) ou en résistance (pour un FVG baissier)
- Les traders surveillent ces zones pour entrer dans la direction de la réaction

**Identification**

- Repérer un FVG qui reste \"ouvert\" pendant plusieurs bougies sans être rempli
- Observer la réaction du prix lorsqu'il revient dans cette zone ultérieurement
- Si le prix réagit et repart dans le sens initial, l'inversion est confirmée

**Trading d'une inversion de FVG**

- Entrer en position dans le sens du rebond (achat sur FVG haussier, vente sur FVG baissier)
- Placer le stop-loss au-delà du FVG
- Combiner avec d'autres confirmations (divergences, structure)

**Limitations**

- Comme tout indicateur, les inversions de FVG ne sont pas infaillibles
- Nécessitent un contexte de marché clair (tendance) pour fonctionner au mieux`,
    quiz: [
      {
        question: 'Quand un FVG devient-il un niveau d\'inversion ?',
        options: [
          'Lorsqu\'il est comblé immédiatement',
          'Lorsqu\'il reste ouvert et le prix réagit plus tard',
          'Jamais'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Comment trader une inversion FVG haussière ?',
        options: [
          'En vente',
          'En achat lorsque le prix rebondit',
          'En restant neutre'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où placer le stop-loss lors d\'un trade d\'inversion FVG ?',
        options: [
          'Au-delà du FVG',
          'Juste au milieu',
          'Il n\'est pas nécessaire de mettre un stop'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est le risque principal avec les inversions FVG ?',
        options: [
          'Elles donnent toujours des gains',
          'Elles peuvent être cassées et ne pas réagir',
          'Elles remplacent tous les indicateurs'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faut-il combiner avec un FVG pour augmenter la probabilité de réussite ?',
        options: [
          'Rien',
          'D\'autres indicateurs et la structure de marché',
          'Uniquement le volume'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'trend-lines': {
    id: 'trend-lines',
    title: 'Lignes de tendance',
    category: 'technical',
    objective: 'Tracer et utiliser les lignes de tendance pour identifier la direction d\'un marché',
    content: `Les lignes de tendance sont des outils simples et puissants pour visualiser la direction d'un marché et détecter les points de rebond potentiels.

**Définition**

Une ligne de tendance relie une série de plus hauts ou de plus bas pour montrer la direction générale du prix.

- **Tendance haussière** : ligne qui relie des creux de plus en plus hauts
- **Tendance baissière** : ligne qui relie des sommets de plus en plus bas

**Tracer une ligne de tendance**

1. Identifier au moins deux points significatifs (creux ou sommets)
2. Tracer une ligne droite les reliant
3. Ajuster la ligne si nécessaire pour qu'elle touche le plus de points possible sans la couper

**Utilisation**

- Les lignes de tendance servent de support en tendance haussière et de résistance en tendance baissière
- Elles aident à entrer en position lors des rebonds ou à sortir lors des cassures
- Les cassures de ligne de tendance peuvent signaler un retournement

**Bonnes pratiques**

- Utiliser des timeframes plus élevés pour une tendance plus fiable
- Ne pas forcer la ligne : elle doit être évidente
- Combiner avec d'autres indicateurs (volumes, patterns) pour confirmation`,
    quiz: [
      {
        question: 'Que représente une ligne de tendance haussière ?',
        options: [
          'Une ligne reliant des creux de plus en plus hauts',
          'Une ligne horizontale',
          'Une ligne reliant des sommets'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Combien de points au minimum faut-il pour tracer une ligne de tendance ?',
        options: [
          '1',
          '2',
          '5'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que peut indiquer la cassure d\'une ligne de tendance ?',
        options: [
          'Un renforcement de la tendance actuelle',
          'Un potentiel retournement',
          'Une simple pause'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où placer un achat dans une tendance haussière ?',
        options: [
          'Lors d\'un rebond sur la ligne de tendance',
          'Lorsqu\'elle est cassée',
          'N\'importe quand'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi combiner les lignes de tendance avec d\'autres outils ?',
        options: [
          'Parce qu\'elles sont toujours fausses',
          'Pour augmenter la fiabilité des signaux',
          'Pour décorer le graphique'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'volume-analysis': {
    id: 'volume-analysis',
    title: 'Analyse du volume',
    category: 'technical',
    objective: 'Utiliser les volumes pour confirmer les mouvements et repérer les retournements',
    content: `Le volume représente la quantité d'échanges d'un actif sur une période donnée. Il est un indicateur clé pour évaluer la force d'un mouvement.

**Pourquoi le volume est important**

- Confirme la validité d'un mouvement de prix : un prix qui monte avec du volume est plus fiable qu'avec peu de volume
- Aide à repérer les retournements : divergence entre volume et prix

**Interprétation**

- **Augmentation du volume** : intérêt croissant, confirmation d'une tendance
- **Diminution du volume** : essoufflement, risque de retournement ou de consolidation
- **Climax volume** : pic de volume extrême souvent associé à un point de retournement

**Indicateurs basés sur le volume**

- **OBV (On-Balance Volume)** : cumule le volume en fonction des hausses et des baisses pour détecter les divergences
- **Volume Profile** : montre la distribution du volume par niveau de prix, aide à identifier les zones de valeur

**Bonnes pratiques**

- Toujours analyser le volume en conjonction avec l'action du prix
- Comparer le volume actuel à la moyenne (moyenne mobile du volume)
- Utiliser des timeframes supérieurs pour éviter les bruits`,
    quiz: [
      {
        question: 'Que représente le volume en trading ?',
        options: [
          'La volatilité du prix',
          'La quantité d\'échanges sur une période',
          'La valeur totale de l\'entreprise'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Qu\'indique un mouvement de prix avec un volume élevé ?',
        options: [
          'Un mouvement plus crédible',
          'Un mouvement faible',
          'Rien de particulier'
        ],
        correctAnswer: 0
      },
      {
        question: 'Qu\'est-ce qu\'un climax de volume ?',
        options: [
          'Un volume extrêmement élevé souvent associé à un retournement',
          'Une baisse soudaine du volume',
          'Un indicateur de tendance haussière'
        ],
        correctAnswer: 0
      },
      {
        question: 'À quoi sert l\'indicateur OBV ?',
        options: [
          'À mesurer la force d\'une divergence volume/prix',
          'À calculer une moyenne mobile',
          'À déterminer le temps restant'
        ],
        correctAnswer: 0
      },
      {
        question: 'Faut-il analyser le volume seul ?',
        options: [
          'Oui',
          'Non, toujours avec le prix et d\'autres indicateurs',
          'Seulement en cas de tendance'
        ],
        correctAnswer: 1
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'ichimoku-cloud': {
    id: 'ichimoku-cloud',
    title: 'Nuage Ichimoku',
    category: 'technical',
    objective: 'Apprendre à utiliser le nuage Ichimoku pour déterminer la tendance et les points d\'entrée',
    content: `L'Ichimoku Kinko Hyo est un indicateur japonais complet qui fournit en un coup d'œil la tendance, les supports, les résistances et des signaux d'achat/vente.

**Composants**

- **Tenkan-sen (ligne de conversion)** : moyenne des plus hauts et plus bas sur 9 périodes
- **Kijun-sen (ligne de base)** : moyenne des plus hauts et plus bas sur 26 périodes
- **Chikou Span (déporté)** : cours de clôture déplacé de 26 périodes en arrière
- **Senkou Span A** : moyenne entre Tenkan et Kijun, projetée 26 périodes en avant
- **Senkou Span B** : moyenne des plus hauts et plus bas sur 52 périodes, projetée 26 périodes en avant

Le nuage (Kumo) est l'espace entre Senkou Span A et B.

**Interprétation**

- **Prix au-dessus du nuage** : tendance haussière
- **Prix en dessous du nuage** : tendance baissière
- **Prix dans le nuage** : consolidation/incertitude
- **Croisement Tenkan/Kijun** : signal d'achat (Tenkan > Kijun) ou de vente (Tenkan < Kijun)
- **Chikou Span** : confirme le signal lorsqu'il est au-dessus/au-dessous du prix

**Utilisation**

- Entrer en position lorsque plusieurs signaux convergent (croisement + prix sortant du nuage)
- Utiliser le nuage comme zone de support ou résistance dynamique
- Adapter les paramètres (9,26,52) selon le timeframe`,
    quiz: [
      {
        question: 'Quel élément de l\'Ichimoku forme le nuage ?',
        options: [
          'Tenkan et Kijun',
          'Senkou Span A et B',
          'Chikou Span et prix'
        ],
        correctAnswer: 1,
  },
      {
        question: 'Que signifie un prix au-dessus du nuage ?',
        options: [
          'Tendance baissière',
          'Tendance haussière',
          'Marché neutre'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel croisement donne un signal d\'achat ?',
        options: [
          'Tenkan qui passe au-dessus du Kijun',
          'Kijun qui passe au-dessus du Tenkan',
          'Chikou qui passe au-dessus du nuage'
        ],
        correctAnswer: 0
      },
      {
        question: 'Où se situe le Chikou Span ?',
        options: [
          'Déplacé 26 périodes en arrière',
          'Projeté 26 périodes en avant',
          'Sur la ligne de prix'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie un prix dans le nuage ?',
        options: [
          'Consolidation/incertitude',
          'Forte tendance',
          'Signal de vente'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'divergence-trading': {
    id: 'divergence-trading',
    title: 'Trading des divergences',
    category: 'technical',
    objective: 'Détecter les divergences pour anticiper les retournements de tendance',
    content: `Les divergences se produisent lorsque le prix évolue dans une direction tandis qu'un indicateur (souvent un oscillateur comme le RSI ou MACD) évolue dans l'autre. Elles peuvent signaler un retournement imminent.

**Types de divergences**

- **Divergence haussière** : le prix fait des plus bas plus bas tandis que l'indicateur fait des plus bas plus hauts
- **Divergence baissière** : le prix fait des plus hauts plus hauts tandis que l'indicateur fait des plus hauts plus bas
- **Divergence cachée** : confirme la poursuite de la tendance (par exemple, prix fait un creux plus élevé mais l'indicateur fait un creux plus bas)

**Comment trader les divergences**

1. Choisir un oscillateur (RSI, MACD, Stochastique)
2. Identifier une tendance existante ou un range
3. Comparer les sommets et creux du prix avec ceux de l'indicateur
4. Attendre une confirmation (cassure de structure, bougie de retournement) avant d'entrer

**Conseils**

- Les divergences fonctionnent mieux sur des timeframes plus élevés (H1 et plus)
- Elles ne prédisent pas le timing exact, mais donnent une alerte
- Toujours combiner avec d'autres outils (supports/résistances, volume)`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'une divergence haussière ?',
        options: [
          'Prix fait des plus bas plus bas et indicateur des plus bas plus hauts',
          'Prix fait des plus hauts plus hauts et indicateur des plus hauts plus bas',
          'Les deux montent ensemble'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel indicateur est souvent utilisé pour repérer des divergences ?',
        options: [
          'RSI',
          'Moyenne mobile simple',
          'Bande de Bollinger'
        ],
        correctAnswer: 0
      },
      {
        question: 'Une divergence cachée indique généralement quoi ?',
        options: [
          'Un renversement certain',
          'Une poursuite de la tendance',
          'Aucune utilité'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi attendre une confirmation avant d\'entrer sur une divergence ?',
        options: [
          'Pour valider le signal et réduire les faux signaux',
          'Parce que c\'est obligatoire',
          'Pour augmenter le spread'
        ],
        correctAnswer: 0
      },
      {
        question: 'Sur quels timeframes les divergences sont-elles les plus fiables ?',
        options: [
          'H1 et plus',
          '1 minute',
          '5 secondes'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'fundamental-analysis-basics': {
    id: 'fundamental-analysis-basics',
    title: 'Bases de l’analyse fondamentale',
    category: 'fundamentals',
    objective: 'Comprendre les facteurs fondamentaux qui influencent le prix des cryptomonnaies',
    content: `L'analyse fondamentale évalue la valeur intrinsèque d'un projet en examinant ses éléments économiques, financiers et sociaux.

**Principaux facteurs**

- **Équipe et leadership** : compétences, expérience, réputation
- **Whitepaper et technologie** : qualité du protocole, innovation, cas d'utilisation
- **Tokenomics** : offre totale, distribution, mécanismes de burn
- **Communauté et adoption** : nombre d'utilisateurs, partenariats, activités sur les réseaux sociaux
- **Concurrence et marché** : taille du marché ciblé, compétiteurs existants

**Indicateurs financiers**

- **Capitalisation boursière** : valeur totale des jetons en circulation
- **Volume de trading** : liquidité du jeton
- **FDV (Fully Diluted Valuation)** : valeur totale si tous les jetons sont en circulation

**Méthodologie**

1. Lire le whitepaper et comprendre la proposition de valeur
2. Évaluer la transparence de l'équipe et le développement du projet
3. Analyser la santé financière du projet (trésorerie, financement)
4. Comparer avec des projets similaires pour déterminer un prix raisonnable`,
    quiz: [
      {
        question: 'Quel document décrit la technologie et les objectifs d\'un projet crypto ?',
        options: [
          'Le whitepaper',
          'La feuille de route routière',
          'La notice d’utilisation'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que représente la capitalisation boursière ?',
        options: [
          'La somme investie par les fondateurs',
          'La valeur totale des jetons en circulation',
          'Le volume quotidien de transactions'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi l\'équipe est-elle importante en analyse fondamentale ?',
        options: [
          'Elle détermine l’exécution et la crédibilité du projet',
          'Elle fixe le prix du jeton',
          'Elle choisit la couleur du logo'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie FDV ?',
        options: [
          'Financial Debt Value',
          'Fully Diluted Valuation',
          'Future Development Volume'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel facteur indique l\'adoption d\'un projet ?',
        options: [
          'Nombre d\'utilisateurs et partenariats',
          'Logo attrayant',
          'Prix élevé'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'interesting-site-links': {
    id: 'interesting-site-links',
    title: 'Sites et ressources utiles',
    category: 'fundamentals',
    objective: 'Découvrir des sites incontournables pour le suivi et l’analyse des cryptomonnaies',
    content: `Il existe de nombreux outils en ligne pour suivre les cours, analyser les graphiques et rester informé.

**Sites de données de marché**

- **CoinMarketCap / CoinGecko** : classement des cryptos, capitalisations, volumes
- **Glassnode / CryptoQuant** : indicateurs on-chain et données blockchain
- **DeFiLlama** : suivi de la TVL (total value locked) dans la DeFi

**Plates-formes de graphiques**

- **TradingView** : graphiques interactifs avec indicateurs et publication d’idées
- **DexTools** : analyse des paires DeFi en temps réel

**Suivi des portefeuilles**

- **Zapper / Zerion** : suivi de vos actifs DeFi et NFT
- **Debank** : aperçu global de vos portefeuilles sur plusieurs chaînes

**Actualités et veille**

- **The Block / CoinDesk** : articles et analyses
- **Twitter / X** : suivre les influenceurs et projets
- **Reddit / Discord** : échanger avec la communauté

L'utilisation régulière de ces ressources vous aidera à prendre de meilleures décisions.`,
    quiz: [
      {
        question: 'Quel site est connu pour ses graphiques interactifs ?',
        options: [
          'TradingView',
          'CoinMarketCap',
          'Debank'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que propose Glassnode ?',
        options: [
          'Des analyses on-chain et métriques blockchain',
          'Des memes crypto',
          'Des services de minage'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel outil permet de suivre votre portefeuille DeFi ?',
        options: [
          'Zapper',
          'Google Maps',
          'Wikipedia'
        ],
        correctAnswer: 0
      },
      {
        question: 'Où peut-on trouver des nouvelles crypto de qualité ?',
        options: [
          'CoinDesk et The Block',
          'Netflix',
          'Instagram Food'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel site affiche la TVL des protocoles DeFi ?',
        options: [
          'DeFiLlama',
          'DexTools',
          'Yahoo Finance'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'ws-asian-london-session': {
    id: 'ws-asian-london-session',
    title: 'Sessions de marché : Asie, Europe, Amériques',
    category: 'fundamentals',
    objective: 'Comprendre les différentes sessions de trading et leurs caractéristiques',
    content: `Sur les marchés financiers, l'activité varie selon l'heure de la journée. Les cryptomonnaies se négocient 24h/24, mais certaines périodes sont plus volatiles.

**Session asiatique (Tokyo)**

- Se déroule approximativement de 01:00 à 09:00 (heure de Paris)
- Volumes plus faibles, volatilité modérée
- Paires associées au Yen et aux marchés asiatiques

**Session européenne (Londres)**

- De 09:00 à 17:00 (heure de Paris)
- Forte activité, chevauchement avec l'Asie en début et New York en fin
- Souvent la session la plus volatile pour les devises

**Session américaine (New York)**

- De 14:00 à 22:00 (heure de Paris)
- Grande volatilité lors de l'ouverture (annonces économiques américaines)
- Chevauchement avec la session européenne de 14:00 à 17:00, période de forte activité

**Pourquoi cela compte pour les cryptos ?**

- Les marchés crypto suivent ces rythmes, avec plus de mouvements lors des ouvertures américaines
- Adapter son trading à la session peut améliorer les entrées et sorties
- Les annonces macroéconomiques impactent la volatilité (taux d'intérêt, emplois, etc.)`,
    quiz: [
      {
        question: 'Quand a lieu la session asiatique (heure de Paris) ?',
        options: [
          '01:00–09:00',
          '09:00–17:00',
          '14:00–22:00'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quelle session est généralement la plus volatile ?',
        options: [
          'Europe (Londres)',
          'Asie',
          'Australie'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel chevauchement est connu pour sa forte activité ?',
        options: [
          'Asie-Europe',
          'Europe-Amérique (14:00–17:00)',
          'Amérique-Océanie'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi connaître les sessions est-il utile en crypto ?',
        options: [
          'Pour ajuster ses heures de trading et anticiper la volatilité',
          'Pour savoir quand Netflix sort des séries',
          'Ce n’est pas utile'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel facteur peut augmenter la volatilité durant la session américaine ?',
        options: [
          'Annonces économiques US',
          'Fermeture des banques en Europe',
          'Météo à New York'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'tokenomics': {
    id: 'tokenomics',
    title: 'Tokenomics',
    category: 'fundamentals',
    objective: 'Règles économiques des cryptos.',
    content: `**Résumé** La tokenomics décrit l'économie d'un token : sa création, sa distribution et ses mécanismes d'incitation.
- Supply : quantité totale et circulation de tokens disponibles sur le marché.
- Burn : destruction volontaire de tokens pour réduire l'offre et soutenir le prix.
- Inflation : rythme d'émission des nouveaux tokens au fil du temps.
- Utilité : rôle du token (paiement, gouvernance, accès à des services).
**Exemple** Le token BNB brûle régulièrement une partie de l'offre pour maintenir la rare té.
**À retenir** Comprendre la tokenomics aide à évaluer la viabilité d'un projet.`,
    quiz: [
      {
        question: 'Qu’est-ce que l\'offre totale d\'un token ?',
        options: [
          'Le nombre maximum de tokens qui existeront',
          'La quantité actuelle en circulation',
          'Le nombre de tokens détenus par l’équipe'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel mécanisme réduit le nombre de tokens ?',
        options: [
          'Burn',
          'Mint',
          'Vesting'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi la distribution des tokens est-elle importante ?',
        options: [
          'Pour voir si une minorité contrôle une grande partie des tokens',
          'Pour connaître le prix exact',
          'Pour choisir un logo'
        ],
        correctAnswer: 0
      },
      {
        question: 'Qu\'est-ce qu\'un cas d\'utilisation possible d\'un token ?',
        options: [
          'Gouvernance, paiement de frais, staking',
          'Acheter une voiture',
          'Obtenir un passeport'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que permet la gouvernance par token ?',
        options: [
          'Participer aux décisions du protocole',
          'Réduire les taxes',
          'Avoir plus de RAM sur son PC'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Tokenomics', url: 'https://www.investopedia.com/' }],
  },
  'on-chain-analysis': {
    id: 'on-chain-analysis',
    title: 'Analyse on-chain',
    category: 'fundamentals',
    objective: 'Utiliser les données de la blockchain pour anticiper les mouvements de marché',
    content: `L’analyse on-chain consiste à étudier les données publiques enregistrées sur la blockchain (transactions, adresses, flux) afin de mieux comprendre le comportement des acteurs.

**Données clés**

- **Nombre d’adresses actives** : mesure l’adoption et l’activité du réseau
- **Volume de transfert** : valeur totale des actifs transférés sur une période
- **Solde des exchanges** : quantité de coins détenus sur les plateformes – une baisse peut indiquer une accumulation hors des exchanges
- **Hashrate (pour les réseaux PoW)** : puissance de calcul, reflète la sécurité du réseau

**Indicateurs populaires**

- **NVT Ratio (Network Value to Transactions)** : compare la capitalisation à la valeur des transactions
- **SOPR (Spent Output Profit Ratio)** : mesure si les coins dépensés sont en profit ou en perte
- **MVRV (Market Value to Realized Value)** : compare la valeur de marché à la valeur réalisée

**Utilisation**

- Identifier des tops et des bottoms potentiels via les comportements des whales
- Analyser les flux entrants/sortants des exchanges pour anticiper la pression acheteuse ou vendeuse
- Combiner avec l’analyse technique pour prendre des décisions éclairées`,
    quiz: [
      {
        question: 'Que mesure le nombre d’adresses actives ?',
        options: [
          'L’adoption et l’activité du réseau',
          'Le prix du token',
          'La puissance de calcul'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que peut indiquer une baisse du solde des exchanges ?',
        options: [
          'Une accumulation hors des exchanges',
          'Une vente massive imminente',
          'Rien du tout'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel indicateur compare la capitalisation au volume des transactions ?',
        options: [
          'NVT Ratio',
          'Hashrate',
          'SOPR'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi suivre les flux entrant/sortant des exchanges ?',
        options: [
          'Pour anticiper la pression acheteuse ou vendeuse',
          'Pour connaître les horaires d’ouverture',
          'Pour réduire les frais'
        ],
        correctAnswer: 0
      },
      {
        question: 'L’analyse on-chain doit être...',
        options: [
          'Combinée avec l’analyse technique',
          'Fait isolément',
          'Ignorée'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'news-trading': {
    id: 'news-trading',
    title: 'Trading sur les nouvelles',
    category: 'fundamentals',
    objective: 'Exploiter les annonces et actualités pour prendre des positions',
    content: `Les marchés réagissent rapidement aux nouvelles économiques, réglementaires ou technologiques. Savoir interpréter les annonces permet de profiter de ces mouvements.

**Types de nouvelles**

- **Annonces économiques** : taux d’intérêt, emploi, inflation
- **Actualités réglementaires** : nouvelles lois, interdictions, approbations
- **Adoptions et partenariats** : intégrations par des entreprises, collaborations
- **Failles ou piratages** : incidents de sécurité, hacks, rug pulls

**Stratégies**

- **Anticiper** : prendre position avant une annonce attendue (ex : décision de la Fed)
- **Réagir** : agir rapidement après la publication d’une nouvelle majeure
- **Filtrer** : distinguer les rumeurs (FUD) des informations confirmées

**Risques**

- Volatilité accrue : mouvements rapides et imprévisibles
- Fake news et rumeurs manipulées
- Slippage et spread plus élevés sur les ordres

**Bonnes pratiques**

- Suivre un calendrier économique
- Vérifier les sources (sites officiels, médias reconnus)
- Utiliser des stops serrés et réduire la taille de position
- Éviter de trader uniquement sur les nouvelles sans plan`,
    quiz: [
      {
        question: 'Quel type de nouvelle peut provoquer un mouvement de marché ?',
        options: [
          'Annonce de taux d’intérêt',
          'Publication d’un roman',
          'Météo locale'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que signifie trader les nouvelles ?',
        options: [
          'Exploiter l’impact des annonces pour prendre position',
          'Regarder la télévision en tradant',
          'Éviter toutes les annonces'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque du news trading ?',
        options: [
          'Volatilité et slippage élevés',
          'Aucune volatilité',
          'Frais nuls'
        ],
        correctAnswer: 0
      },
      {
        question: 'Comment vérifier la fiabilité d’une information ?',
        options: [
          'La source officielle et médias reconnus',
          'Uniquement un tweet anonyme',
          'Un commentaire YouTube'
        ],
        correctAnswer: 0
      },
      {
        question: 'Faut-il trader chaque nouvelle ?',
        options: [
          'Non, mieux vaut sélectionner et avoir un plan',
          'Oui absolument',
          'Seulement les dimanches'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'economic-calendar': {
    id: 'economic-calendar',
    title: 'Calendrier économique',
    category: 'fundamentals',
    objective: 'Utiliser le calendrier économique pour anticiper la volatilité et planifier ses trades',
    content: `Le calendrier économique répertorie les dates et heures des publications majeures (taux d’intérêt, indices macroéconomiques, discours) susceptibles d’influencer les marchés.

**Éléments clés**

- **Taux directeurs** : décisions des banques centrales (Fed, BCE) influencent les devises et le sentiment du marché
- **NFP (Non-Farm Payrolls)** : publication mensuelle des emplois aux USA, impact fort sur USD et marchés globaux
- **Indices d’inflation (CPI)** : mesurent l’évolution des prix et influencent la politique monétaire
- **PMI/ISM** : indices d’activité économique dans le secteur manufacturier ou des services

**Utilisation**

- Repérer les heures des annonces et éviter d’entrer en position juste avant si vous craignez la volatilité
- Ajuster la taille de vos positions et vos stops en fonction des annonces prévues
- Exploiter les mouvements en réaction à l’annonce (breakout ou retracement)

**Outils**

- Sites comme Investing.com, Forex Factory ou TradingView proposent des calendriers filtrables par importance et par pays
- Intégrer les événements dans votre planning de trading`,
    quiz: [
      {
        question: 'Quel indicateur mesure la variation des prix à la consommation ?',
        options: [
          'CPI (indice d’inflation)',
          'NFP',
          'PMI'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que signifie NFP ?',
        options: [
          'Non-Farm Payrolls',
          'New Financial Policy',
          'National Funding Program'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi consulter le calendrier économique ?',
        options: [
          'Pour anticiper les annonces qui peuvent créer de la volatilité',
          'Pour connaître les dates de vacances',
          'Pour suivre les prix des voitures'
        ],
        correctAnswer: 0
      },
      {
        question: 'Comment ajuster son trading lors d’une grosse annonce ?',
        options: [
          'Réduire sa taille de position ou attendre après l\'annonce',
          'Ouvrir une position au hasard',
          'Ignorer l\'annonce'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quels sites proposent des calendriers économiques ?',
        options: [
          'Investing.com et Forex Factory',
          'YouTube et Instagram',
          'Netflix'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'whale-watching': {
    id: 'whale-watching',
    title: 'Suivre les whales (gros porteurs)',
    category: 'fundamentals',
    objective: 'Analyser les transactions des grands investisseurs pour anticiper les mouvements',
    content: `Dans l’univers des cryptomonnaies, les "whales" (baleines) sont des adresses détenant une grande quantité de tokens. Leurs mouvements peuvent influencer significativement le marché.

**Pourquoi suivre les whales ?**

- Ils disposent de moyens financiers capables de provoquer des hausses ou des baisses rapides
- Leurs achats massifs peuvent signaler un intérêt croissant pour un actif
- Leurs ventes peuvent annoncer une prise de bénéfices ou un désengagement

**Outils pour surveiller les whales**

- **Whale Alert** : notifications de transferts importants sur les chaînes publiques
- **Etherscan / BSCscan** : explorer les portefeuilles et les transactions d’adresses particulières
- **Glassnode/CryptoQuant** : indicateurs dédiés aux mouvements des whales et aux soldes des exchanges

**Comment interpréter les mouvements**

- Un transfert d’un wallet privé vers un exchange peut indiquer une intention de vendre
- Un transfert de l’exchange vers un cold wallet peut indiquer une accumulation à long terme
- Évaluer le contexte (marché, actualités) avant de tirer des conclusions

**Limitations**

- Certaines transactions peuvent être internes (entre cold wallets du même exchange)
- Il faut un volume suffisant pour avoir un impact ; toutes les "baleines" ne sont pas égales`,
    quiz: [
      {
        question: 'Qui sont les whales en crypto ?',
        options: [
          'De grands investisseurs détenant beaucoup de tokens',
          'De petits traders',
          'Des robots de minage'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Que peut signifier un transfert d’un cold wallet vers un exchange ?',
        options: [
          'Possibilité de vente',
          'Accumulation à long terme',
          'Aucune signification'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel service envoie des alertes sur les transactions importantes ?',
        options: [
          'Whale Alert',
          'Netflix',
          'Spotify'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi faut-il tenir compte du contexte en observant les whales ?',
        options: [
          'Car certaines transactions peuvent être internes et sans impact réel',
          'Parce que les whales n’existent pas',
          'Parce que l’analyse technique est inutile'
        ],
        correctAnswer: 0
      },
      {
        question: 'Un transfert d’un exchange vers un portefeuille privé indique souvent...',
        options: [
          'Une accumulation à long terme',
          'Une vente imminente',
          'Un piratage'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'scalping-strategy': {
    id: 'scalping-strategy',
    title: 'Stratégie de scalping',
    category: 'strategies',
    objective: 'Apprendre à effectuer des trades très courts pour capturer de petits mouvements',
    content: `Le scalping consiste à réaliser de nombreux trades de très courte durée (secondes à minutes) pour tirer profit de petits écarts de prix.

**Principes**

- **Fréquence élevée** : de nombreuses opérations par jour
- **Positions courtes** : fermeture rapide dès que le profit est atteint
- **Effet de levier modéré** : utilisé pour amplifier de petits mouvements, avec prudence
- **Liquidité élevée** : privilégier les actifs et les marchés avec des spreads faibles et un volume important

**Conditions de réussite**

- Platforme avec faibles frais et exécution rapide
- Plan de trading clair avec niveaux d’entrée et de sortie prédéfinis
- Gestion du risque stricte (stop-loss serrés)

**Indicateurs utilisés**

- **Moyennes mobiles courtes (EMA 5/9/20)** : pour suivre le momentum
- **Bandes de Bollinger** : pour repérer les excès de volatilité
- **Order Flow/Depth** : pour analyser le carnet d’ordres

**Risques**

- Stress et fatigue dus à la concentration nécessaire
- Commissions pouvant ronger les gains
- Potentiel de pertes rapides en cas de volatilité soudaine`,
    quiz: [
      {
        question: 'Quelle est la durée typique d’un trade en scalping ?',
        options: [
          'Quelques secondes à quelques minutes',
          'Plusieurs semaines',
          'Plusieurs mois'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel est un élément clé pour réussir le scalping ?',
        options: [
          'Une plateforme avec des frais faibles et une exécution rapide',
          'Ignorer le carnet d’ordres',
          'Utiliser un fort effet de levier sans stop'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel indicateur est souvent utilisé pour le scalping ?',
        options: [
          'EMA courtes',
          'MACD sur 100 périodes',
          'Indice de vitesse'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi la gestion du risque est-elle cruciale en scalping ?',
        options: [
          'Les mouvements peuvent être rapides et imprévisibles',
          'Parce qu’on ne risque jamais rien',
          'Parce que le scalping ne fonctionne pas'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque du scalping ?',
        options: [
          'Fatigue et stress élevés',
          'Absence de frais',
          'Toujours rentable'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'swing-trading-strategy': {
    id: 'swing-trading-strategy',
    title: 'Stratégie de swing trading',
    category: 'strategies',
    objective: 'Profiter des mouvements de moyenne durée en gardant des positions quelques jours à quelques semaines',
    content: `Le swing trading vise à capturer des "swings", c’est-à-dire des oscillations de prix significatives au sein d’une tendance. Les positions sont maintenues plus longtemps que le scalping mais moins qu’un investissement long terme.

**Caractéristiques**

- **Durée des trades** : de quelques jours à plusieurs semaines
- **Analyse principale** : combinaison d’analyse technique et fondamentale légère
- **Moins de temps devant l’écran** : adaptée aux personnes ayant une autre activité

**Étapes**

1. Identifier la tendance principale (haussière ou baissière)
2. Repérer une zone de correction (pullback) ou de consolidation
3. Entrer dans la direction de la tendance au moment du rebond ou de la cassure
4. Définir un stop-loss et un objectif de profit basé sur des niveaux techniques (Fibonacci, supports/résistances)

**Outils courants**

- **Moyennes mobiles (50/200)** pour déterminer la tendance
- **RSI/Stochastique** pour repérer les conditions de surachat/survente
- **Patterns de continuation** (drapeau, triangle)

**Avantages**

- Plus de temps pour analyser et prendre des décisions
- Moins de stress que le day trading ou le scalping
- Potentiellement des gains plus importants par trade

**Inconvénients**

- Nécessite de dormir avec des positions ouvertes (risque de gap)
- Demande patience et discipline`,
    quiz: [
      {
        question: 'Combien de temps dure généralement un trade de swing trading ?',
        options: [
          'Quelques jours à quelques semaines',
          'Quelques secondes',
          'Plusieurs années'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel est un avantage du swing trading ?',
        options: [
          'Moins de stress que le scalping',
          'Besoin d’être connecté 24h/24',
          'Pas de stop-loss nécessaire'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle est la première étape d’un trade swing ?',
        options: [
          'Identifier la tendance principale',
          'Acheter tout de suite',
          'Demander conseil à un ami'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quels indicateurs aident à repérer les conditions de surachat/survente ?',
        options: [
          'RSI et Stochastique',
          'Moyenne mobile 1000',
          'Volume Profile'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque du swing trading ?',
        options: [
          'Gaps et overnight risk',
          'Pas de volatilité',
          'Absence de profit potentiel'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'breakout-trading': {
    id: 'breakout-trading',
    title: 'Trading de breakouts',
    category: 'strategies',
    objective: 'Entrer au moment où le prix casse un niveau clé pour suivre l\'impulsion',
    content: `Le trading de breakout consiste à prendre position lorsqu’un actif franchit une zone de support ou de résistance importante, en s’attendant à une forte continuation du mouvement.

**Identification des breakouts**

- Détecter des zones de consolidation ou de range avec des niveaux clairement définis
- Observer un resserrement de la volatilité (triangles, rectangles)
- Surveiller les volumes : un breakout réussi est souvent accompagné d’un volume élevé

**Stratégie**

1. Tracer les supports/résistances ou les lignes de tendance formant un pattern
2. Attendre la cassure avec une bougie significative et un volume supérieur à la moyenne
3. Entrer dans le sens de la cassure ; placer un stop-loss juste en dessous (breakout haussier) ou au-dessus (breakout baissier) du niveau cassé
4. Fixer un objectif basé sur la hauteur du range ou d’autres repères (Fibonacci, extensions)

**Faux breakouts (fakeouts)**

- Parfois, le prix dépasse brièvement un niveau puis revient dans le range : on parle de fakeout
- Se méfier des cassures sans volume
- Prévoir une stratégie de sortie rapide si le breakout échoue`,
    quiz: [
      {
        question: 'Qu’est-ce qu’un breakout ?',
        options: [
          'La cassure d’un niveau clé de support ou de résistance',
          'Un indicateur basé sur le volume',
          'Un type de slippage'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel élément confirme un breakout ?',
        options: [
          'Un volume élevé',
          'Un faible volume',
          'Aucune différence'
        ],
        correctAnswer: 0
      },
      {
        question: 'Où placer le stop-loss après un breakout haussier ?',
        options: [
          'Juste sous le niveau cassé',
          'Très loin sous le niveau',
          'Il n’est pas nécessaire de mettre un stop'
        ],
        correctAnswer: 0
      },
      {
        question: 'Qu’est-ce qu’un fakeout ?',
        options: [
          'Une cassure qui échoue et où le prix revient dans le range',
          'Un indicateur RSI',
          'Une stratégie d\'arbitrage'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un signe d’avertissement de breakout à éviter ?',
        options: [
          'Cassure sans volume',
          'Cassure avec volume élevé',
          'Cassure après consolidation'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'range-trading': {
    id: 'range-trading',
    title: 'Trading en range',
    category: 'strategies',
    objective: 'Profiter des fluctuations entre support et résistance lorsque le marché est neutre',
    content: `Lorsque le marché évolue latéralement, sans tendance claire, il oscille généralement entre un support et une résistance. Le range trading consiste à acheter près du support et vendre près de la résistance.

**Identification d’un range**

- Prix qui rebondit plusieurs fois entre deux niveaux horizontaux
- Absence de nouveaux plus hauts ou plus bas significatifs
- Volume qui diminue au centre du range et augmente sur les bords

**Stratégie**

1. Définir le support et la résistance à l’aide de multiples touches
2. Entrer en position longue près du support avec un stop-loss en dessous
3. Sortir ou prendre une position courte près de la résistance avec un stop-loss au-dessus
4. Éviter de trader au milieu du range

**Risques**

- Rupture soudaine du range (breakout) provoquant une perte rapide
- Sélection incorrecte des niveaux, entraînant des faux signaux

**Conseils**

- Utiliser des oscillateurs (RSI, Stochastique) pour identifier les conditions de surachat/survente à l’intérieur du range
- Être prêt à inverser sa position si une cassure valide se produit`,
    quiz: [
      {
        question: 'Quand utilise-t-on une stratégie de range trading ?',
        options: [
          'Quand le marché est latéral sans tendance',
          'Lors de fortes tendances',
          'Uniquement pendant les annonces'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Où faut-il acheter dans un range ?',
        options: [
          'Près du support',
          'Au milieu du range',
          'Près de la résistance'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque majeur du range trading ?',
        options: [
          'Une rupture soudaine du range',
          'Trop de volatilité',
          'Aucune perte possible'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel type d’oscillateur aide à repérer les conditions de surachat/survente dans un range ?',
        options: [
          'RSI',
          'Moyenne mobile 200',
          'Volume Profile'
        ],
        correctAnswer: 0
      },
      {
        question: 'Faut-il maintenir une position lorsque le prix casse le range ?',
        options: [
          'Non, il faut ajuster la stratégie ou sortir',
          'Oui, peu importe',
          'Seulement si c’est un faux breakout'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'arbitrage': {
    id: 'arbitrage',
    title: 'Arbitrage',
    category: 'strategies',
    objective: 'Exploiter les écarts de prix entre différentes plateformes pour réaliser un profit sans risque théorique',
    content: `L’arbitrage consiste à acheter un actif sur une plateforme où son prix est plus bas et à le vendre simultanément sur une plateforme où son prix est plus élevé.

**Types d’arbitrage**

- **Arbitrage spatial** : différences de prix entre deux exchanges (ex : acheter sur Binance, vendre sur Coinbase)
- **Arbitrage triangulaire** : exploiter les écarts entre trois paires de devises sur le même exchange
- **Arbitrage statistique** : stratégies basées sur des modèles de corrélation et de régression (plus avancé)

**Étapes**

1. Surveiller les prix sur différentes plateformes ou paires
2. Vérifier les frais de transaction, de dépôt et de retrait pour s’assurer que l’arbitrage reste rentable
3. Tenir compte de la vitesse de transfert des fonds entre exchanges
4. Automatiser la stratégie si possible (bots)

**Risques**

- Frais élevés ou cachés réduisant voire annulant les profits
- Temps de transfert qui élimine l’écart de prix
- Restrictions de retrait ou de dépôt sur certaines plateformes
- Risque de marché si les positions ne sont pas couvertes simultanément`,
    quiz: [
      {
        question: 'Quel est le principe de l’arbitrage ?',
        options: [
          'Acheter sur un marché et vendre sur un autre plus cher',
          'Acheter et conserver longtemps',
          'Trader uniquement sur un exchange'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel type d’arbitrage implique trois paires ?',
        options: [
          'Arbitrage triangulaire',
          'Arbitrage spatial',
          'Arbitrage de temps'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel facteur doit être pris en compte avant d’arbitrer ?',
        options: [
          'Les frais de transaction et le temps de transfert',
          'La couleur du logo de l’exchange',
          'Le nombre de followers du CEO'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi l’arbitrage peut-il échouer ?',
        options: [
          'Écarts de prix disparaissent pendant le transfert',
          'Les prix restent toujours identiques',
          'Les exchanges interdisent tous les transferts'
        ],
        correctAnswer: 0
      },
      {
        question: 'L’arbitrage est-il totalement sans risque ?',
        options: [
          'Non, des risques opérationnels et de marché existent',
          'Oui, c’est un gain garanti',
          'Seulement le week-end'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'grid-trading': {
    id: 'grid-trading',
    title: 'Grid Trading',
    category: 'strategies',
    objective: 'Mettre en place un filet d’ordres d’achat et de vente pour profiter des fluctuations latérales',
    content: `Le grid trading (stratégie en grille) consiste à placer une série d’ordres d’achat et de vente espacés à intervalles réguliers au-dessus et en dessous du prix actuel, formant une grille. Cette stratégie permet de profiter des mouvements de va-et-vient sans prédire la direction.

**Mise en place**

1. Choisir un intervalle de prix (par exemple, entre 0.9 et 1.1 du prix actuel)
2. Définir le nombre de grilles (ex : 10 niveaux)
3. Placer des ordres d’achat à intervalles réguliers sous le prix et des ordres de vente au-dessus
4. Chaque fois qu’un ordre est exécuté, placer l’ordre opposé pour maintenir la grille

**Avantages**

- Fonctionne bien dans les marchés en range ou légèrement volatiles
- Ne nécessite pas de prévoir la direction du marché
- Peut être automatisée via des bots

**Inconvénients**

- Moins efficace en tendance marquée (haussière ou baissière) ; risque de se retrouver avec une position déséquilibrée
- Nécessite une gestion du capital rigoureuse pour éviter une liquidation si effet de levier`,
    quiz: [
      {
        question: 'Qu’est-ce que le grid trading ?',
        options: [
          'Une stratégie qui place des ordres d’achat et de vente à intervalles réguliers',
          'Un indicateur technique',
          'Une nouvelle crypto'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Dans quel type de marché la grille est-elle la plus efficace ?',
        options: [
          'En range ou légèrement volatil',
          'En forte tendance haussière seulement',
          'En marché baissier uniquement'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que se passe-t-il après l’exécution d’un ordre dans une stratégie en grille ?',
        options: [
          'On place l’ordre opposé pour maintenir la grille',
          'On arrête la stratégie',
          'On double la taille des ordres'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque du grid trading ?',
        options: [
          'Accumulateur de positions en tendance marquée',
          'Toujours rentable',
          'Ne nécessite aucun capital'
        ],
        correctAnswer: 0
      },
      {
        question: 'Le grid trading peut-il être automatisé ?',
        options: [
          'Oui, grâce à des bots',
          'Non, il faut tout faire manuellement',
          'Seulement sur papier'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  },
  'dca-strategy': {
    id: 'dca-strategy',
    title: 'Stratégie DCA (Dollar-Cost Averaging)',
    category: 'strategies',
    objective: 'Investir régulièrement des montants fixes pour lisser le prix d’achat',
    content: `Le DCA (Dollar-Cost Averaging) consiste à investir une somme fixe à intervalles réguliers, indépendamment du prix. Cette approche réduit l’impact de la volatilité et élimine le besoin de "timer" le marché.

**Principe**

- Choisir un montant fixe (ex : 100€)
- Déterminer une fréquence (hebdomadaire, mensuelle)
- Acheter l’actif à chaque intervalle, peu importe son prix

**Avantages**

- Lisse le coût moyen d’acquisition ; on achète à la fois des hauts et des bas
- Réduit le stress lié aux fluctuations quotidiennes
- Adapté aux investisseurs long terme

**Inconvénients**

- Moins efficace si le marché reste longtemps baissier
- Peut générer des frais cumulés selon la plateforme

**Conseils**

- Choisir une période suffisamment longue (12 mois ou plus)
- Utiliser des plateformes avec frais réduits ou automatisation du DCA
- Ne pas modifier la somme investie selon l’émotion du moment`,
    quiz: [
      {
        question: 'Quel est le principe du DCA ?',
        options: [
          'Investir régulièrement des montants fixes quel que soit le prix',
          'Investir tout son capital en une fois',
          'Trader quotidiennement avec un fort levier'
        ],
        correctAnswer: 0,
  },
      {
        question: 'Quel est un avantage du DCA ?',
        options: [
          'Lisse le prix moyen d’achat et réduit le stress',
          'Permet de devenir riche rapidement',
          'Évite totalement toute perte'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle période est recommandée pour une stratégie DCA ?',
        options: [
          'Au moins plusieurs mois',
          'Quelques minutes',
          'Une journée'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est un risque du DCA ?',
        options: [
          'Accumuler des frais si la plateforme est chère',
          'Investir trop peu',
          'Investir trop vite'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faut-il éviter avec le DCA ?',
        options: [
          'Changer le montant selon ses émotions',
          'Investir automatiquement',
          'Être patient'
        ],
        correctAnswer: 0
      }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    documentation: [{ title: 'Official Investopedia Article', url: 'https://www.investopedia.com/' }],
  }
};

// Les autres leçons seront ajoutées progressivement
export const getAllLessons = (): Lesson[] => {
  return Object.values(lessons);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons[id];
};

export const getLessonsByCategory = (categoryId: string): Lesson[] => {
  return getAllLessons().filter(lesson => lesson.category === categoryId);
};
