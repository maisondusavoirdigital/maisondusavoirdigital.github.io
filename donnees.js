/* =====================================================================
   CATALOGUE — LA SEULE ZONE À MODIFIER POUR AJOUTER OU CHANGER UN PRODUIT
   Chaque produit génère automatiquement : sa carte, sa fiche, son aperçu,
   sa barre d'achat mobile, son lien de partage (#p-identifiant) et ses
   données Google. Catégories : ebook, formation, template, outil, pack.
   Statuts : '' (aucun), 'nouveau', 'populaire', 'bientot'.
   featured:true = produit mis en avant à l'ouverture de la page.
   ===================================================================== */
var MSD_CATALOG=[
 {id:'ia-business-pro',category:'ebook',status:'',featured:true,
  badge:'EBOOK + BONUS',tag:'EBOOK NUMÉRIQUE + BONUS',
  title:'IA Business Pro',fullTitle:'IA Business Pro — 150 Prompts IA pour Entrepreneurs',
  cover:'150<br>PROMPTS<br>IA',sub:'150 PROMPTS IA  •  BONUS 30 JOURS',
  coverTitle:'IA<br>BUSINESS<br>PRO',coverSub:'IA BUSINESS PRO<br>+ BONUS 30 JOURS',
  insideTitle:'150 prompts pour vos projets.',insideSub:'+ PLAN D’ACTION 30 JOURS',
  short:'150 prompts IA pour entrepreneurs, avec bonus plan d’action 30 jours.',
  text:'Une ressource numérique consacrée à l’utilisation de prompts d’intelligence artificielle pour accompagner les activités entrepreneuriales. L’offre Chariow comprend également un bonus « Plan d’action 30 jours ».',
  benefits:['150 prompts IA','Bonus plan d’action 30 jours','29 pages pour le livre','8 pages pour le bonus'],
  price:'5 900 FCFA', /* texte affiché — laissez '' tant que le prix n'est pas confirmé */
  priceValue:5900,    /* nombre — active les données de prix pour Google */
  currency:'XOF',
  url:'https://msavoirdigital.mychariow.co/prd_kwjgvueq',
  bar:'150 prompts + bonus 30 jours',
  preview:[
   {k:'01 — LE LIVRE',t:'150 prompts IA',p:'Une ressource numérique de 29 pages consacrée à l’utilisation de prompts d’intelligence artificielle.'},
   {k:'02 — LE BONUS',t:'Plan d’action 30 jours',p:'Un bonus de 8 pages, inclus dans l’offre officielle Chariow.'},
   {k:'03 — POUR QUI',t:'Les entrepreneurs',p:'Pensé pour accompagner les activités entrepreneuriales. Format numérique, accès après l’achat.'}
  ]}
 /* ---- MODÈLE : copiez ce bloc après une virgule, puis remplissez-le ----
 ,{id:'mon-produit',category:'formation',status:'nouveau',featured:false,
  badge:'FORMATION',tag:'FORMATION EN LIGNE',
  title:'Titre court',fullTitle:'Titre complet du produit',
  cover:'LIGNE 1<br>LIGNE 2',sub:'SOUS-TITRE DE COUVERTURE',
  coverTitle:'TITRE<br>COUVERTURE',coverSub:'SOUS-TITRE',
  insideTitle:'Phrase d’accroche.',insideSub:'MENTION BONUS',
  short:'Description courte pour la carte.',
  text:'Description complète pour la fiche.',
  benefits:['Atout 1','Atout 2','Atout 3','Atout 4'],
  price:'5 000 FCFA',priceValue:5000,currency:'XOF',
  url:'https://msavoirdigital.mychariow.co/prd_xxxxx',
  bar:'Phrase courte pour la barre mobile',
  preview:[{k:'01 — …',t:'…',p:'…'},{k:'02 — …',t:'…',p:'…'},{k:'03 — …',t:'…',p:'…'}]}
 Pour un produit pas encore en vente : status:'bientot' (le champ url devient facultatif). */
];
/* Adresse publique de la page : utilisée pour le partage et le QR code.
   Remplacez-la par votre nom de domaine le jour où vous en aurez un. */
var MSD_SITE_URL='';

/* ===== À PROPOS : emplacement photo (facultatif) =====
   photo : nom d'un fichier image placé à côté de index.html (ex. 'portrait.jpg'). Vide = le logo s'affiche.
   name / role / quote ne s'affichent que s'ils sont remplis. */
var MSD_ABOUT={photo:'',name:'',role:'',quote:''};

/* ===== INFORMATIONS LÉGALES : complétez ce que vous savez ; les lignes vides ne s'affichent pas =====
   remboursement : 'standard' (pas de remboursement après l'accès, sauf cas prévus) ou 'garantie' (avec garantieJours) */
var MSD_LEGAL={
 nom:'Maison du Savoir Digital',marque:'LA MSD IN AFRICA',
 responsable:'AGBE JUNIOR SÈHO',
 statut:'',immatriculation:'',adresse:'',pays:'',email:'',
 whatsapp:'+229 01 54 53 20 77',tiktok:'@obiojr',
 hebergeur:'GitHub, Inc. (GitHub Pages)',
 boutique:'msavoirdigital.mychariow.com',
 remboursement:'standard',garantieJours:0,
 delaiSupport:'',
 maj:'13 novembre 2026'
};

/* ===== AVIS CLIENTS : n'ajoutez que de vrais avis ; la section apparaît dès le premier =====
   Modèle : {name:'Prénom N.',role:'Entrepreneur, Ville',rating:5,text:'Texte exact du client.',product:'IA Business Pro',date:'Novembre 2026',photo:'',verified:true}
   verified:true uniquement si l'achat a été vérifié. photo : nom d'un fichier image (facultatif). */
var MSD_REVIEWS=[];

/* ===== CAPTURES / PREUVES : images placées à côté de index.html (avec l'accord du client, nom masqué) =====
   Modèle : {src:'capture-1.jpg',caption:'Message reçu d'un client'} */
var MSD_PROOFS=[];

