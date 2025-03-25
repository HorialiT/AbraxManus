import Link from 'next/link';

export default function StrategieSEO() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Stratégie SEO personnalisée
          </h1>
          <p className="text-xl text-gray-600">
            Pour Abradebarras, leader du débarras écologique en Loire-Atlantique
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Analyse de la situation actuelle</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Forces d'Abradebarras</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Jeune entreprise avec un positionnement écologique fort</li>
              <li>Service d'enlèvement d'encombrants avec tri et recyclage</li>
              <li>Excellente réputation (4.9/5 basée sur 110 avis Google)</li>
              <li>Zone d'intervention bien définie (1h30 autour de Nantes)</li>
              <li>Processus client simple et efficace</li>
              <li>Slogan mémorable : "Faites disparaître vos encombrants comme par magie !"</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Faiblesses à adresser</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Jeune entreprise face à des concurrents établis depuis longtemps</li>
              <li>Besoin de renforcer la visibilité en ligne</li>
              <li>Nécessité de se différencier dans un marché concurrentiel</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Objectifs SEO</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4">
            <li className="font-semibold">Augmenter la visibilité organique dans la zone d'intervention (1h30 autour de Nantes)</li>
            <li className="font-semibold">Positionner Abradebarras comme leader du débarras écologique et responsable</li>
            <li className="font-semibold">Générer des demandes de devis qualifiées via le référencement naturel</li>
            <li className="font-semibold">Développer l'autorité du site dans le secteur du débarras et du recyclage</li>
            <li className="font-semibold">Surpasser Grand Ouest Débarras sur les mots-clés stratégiques</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Stratégie de contenu</h2>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Optimisation des pages principales</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Page d'accueil</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Titre SEO :</p>
                <p className="text-gray-700">"Abradebarras | Débarras écologique à Nantes et en Loire-Atlantique (44)"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Meta description :</p>
                <p className="text-gray-700">"Service d'enlèvement d'encombrants écologique à Nantes et en Loire-Atlantique. Débarras de maison, appartement, cave avec tri et recyclage. Devis gratuit ☎ 02 28 34 91 89"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">H1 :</p>
                <p className="text-gray-700">"Débarras écologique à Nantes et en Loire-Atlantique"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Contenu à développer :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>Présentation claire des services avec mots-clés principaux</li>
                  <li>Section "Pourquoi choisir Abradebarras" mettant en avant l'aspect écologique</li>
                  <li>Témoignages clients avec mots-clés naturellement intégrés</li>
                  <li>Carte de la zone d'intervention</li>
                  <li>Call-to-action pour estimation en ligne</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Page "Débarras de maison"</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Titre SEO :</p>
                <p className="text-gray-700">"Débarras de maison écologique à Nantes et en Loire-Atlantique | Abradebarras"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Meta description :</p>
                <p className="text-gray-700">"Service professionnel de débarras de maison à Nantes et en Loire-Atlantique. Valorisation des objets, recyclage et respect de l'environnement. Devis gratuit."</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Contenu à développer :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>Description détaillée du service avec mots-clés ciblés</li>
                  <li>Processus de débarras étape par étape</li>
                  <li>Photos avant/après de débarras réalisés</li>
                  <li>Section FAQ répondant aux questions fréquentes</li>
                  <li>Témoignages spécifiques au débarras de maison</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Nouvelles pages à créer</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Page "Débarras appartement"</span> - Ciblage des mots-clés : débarras appartement Nantes, vider appartement Loire-Atlantique</li>
                <li><span className="font-semibold">Page "Débarras cave et grenier"</span> - Ciblage des mots-clés : débarras cave Nantes, débarras grenier Loire-Atlantique</li>
                <li><span className="font-semibold">Page "Débarras après succession"</span> - Ciblage des mots-clés : débarras succession, débarras après décès</li>
                <li><span className="font-semibold">Page "Débarras écologique"</span> - Ciblage des mots-clés : débarras écologique, débarras zéro déchet</li>
                <li><span className="font-semibold">Pages locales</span> pour les principales villes de la zone d'intervention : Nantes, Saint-Nazaire, La Baule, Rezé, Saint-Herblain, etc.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Stratégie de blog</h3>
            <p className="text-gray-700 mb-4">Création d'un blog avec publication régulière (2 articles par mois) sur les thématiques suivantes :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Guides pratiques</h4>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>"Comment organiser un débarras écologique de maison"</li>
                  <li>"Que faire des objets dont vous ne voulez plus : alternatives à la déchetterie"</li>
                  <li>"Guide complet du débarras de succession : aspects légaux et pratiques"</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Conseils et astuces</h4>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>"5 erreurs à éviter lors d'un débarras de maison"</li>
                  <li>"Comment estimer le coût d'un débarras professionnel"</li>
                  <li>"Débarras de cave : comment éviter les mauvaises surprises"</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Écologie et recyclage</h4>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>"Seconde vie : que deviennent vos meubles après un débarras"</li>
                  <li>"L'impact environnemental des encombrants : pourquoi choisir un débarras écologique"</li>
                  <li>"Économie circulaire : comment Abradebarras valorise vos objets"</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Actualités locales</h4>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>"Nouvelles réglementations sur les déchets en Loire-Atlantique"</li>
                  <li>"Événements recyclage et seconde main à Nantes"</li>
                  <li>"Initiatives écologiques dans le 44 : Abradebarras s'engage"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Optimisations techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Structure du site</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Mise en place d'une architecture de site claire et logique</li>
                <li>Création d'un sitemap XML optimisé</li>
                <li>Implémentation d'un fil d'Ariane sur toutes les pages</li>
                <li>Optimisation de la navigation interne avec ancres textuelles pertinentes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Optimisations on-page</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Balises title et meta descriptions uniques et optimisées</li>
                <li>Structure de H1-H6 cohérente et optimisée pour les mots-clés</li>
                <li>Optimisation des URL (courtes, descriptives, avec mots-clés)</li>
                <li>Balisage schema.org pour les services locaux et les avis clients</li>
                <li>Optimisation des images (compression, attributs alt, nommage)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Optimisations techniques</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Amélioration de la vitesse de chargement du site</li>
                <li>Optimisation pour mobile (responsive design)</li>
                <li>Mise en place du HTTPS sur l'ensemble du site</li>
                <li>Correction des erreurs 404 et redirections 301 appropriées</li>
                <li>Implémentation des balises canoniques</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Optimisation locale</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Création et optimisation d'une fiche Google Business Profile</li>
                <li>Inscription sur les annuaires locaux pertinents</li>
                <li>Création de pages locales pour chaque ville principale</li>
                <li>Balisage schema.org LocalBusiness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Stratégie de netlinking</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Création de liens internes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Maillage interne cohérent entre les pages de services</li>
                <li>Liens contextuels depuis le blog vers les pages de services</li>
                <li>Utilisation d'ancres variées et pertinentes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Acquisition de backlinks</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Partenariats avec des sites locaux</li>
                <li>Création de contenu informatif de qualité</li>
                <li>Relations presse locales</li>
                <li>Participation à des événements locaux</li>
                <li>Témoignages et études de cas avec des partenaires locaux</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Suivi et mesure des performances</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Mise en place d'outils</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Configuration de Google Analytics 4</li>
                <li>Installation de Google Search Console</li>
                <li>Mise en place d'outils de suivi de positionnement</li>
                <li>Création de tableaux de bord personnalisés</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">KPIs à suivre</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Positions sur les mots-clés stratégiques</li>
                <li>Trafic organique global et par page</li>
                <li>Taux de conversion des visiteurs organiques</li>
                <li>Visibilité locale (recherches "près de moi")</li>
                <li>Nombre et qualité des backlinks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Calendrier d'optimisation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Audit SEO complet tous les 6 mois</li>
                <li>Suivi hebdomadaire des positions</li>
                <li>Rapport mensuel sur les performances</li>
                <li>Mise à jour trimestrielle du contenu</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan d'action à court terme (3 mois)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Mois 1</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                <li>Audit technique complet du site</li>
                <li>Optimisation des balises title et meta descriptions</li>
                <li>Création/optimisation de la fiche Google Business Profile</li>
                <li>Mise en place de la structure du blog</li>
                <li>Publication des 2 premiers articles</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Mois 2</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                <li>Création des nouvelles pages de services</li>
                <li>Optimisation des images et de la vitesse du site</li>
                <li>Inscription aux annuaires locaux pertinents</li>
                <li>Publication de 2 nouveaux articles</li>
                <li>Début de la stratégie de netlinking local</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Mois 3</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                <li>Création des premières pages locales</li>
                <li>Mise en place du balisage schema.org</li>
                <li>Optimisation de l'expérience mobile</li>
                <li>Publication de 2 nouveaux articles</li>
                <li>Analyse des premiers résultats et ajustements</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link href="/strategie-sea" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors">
            Voir la stratégie SEA complémentaire
          </Link>
        </div>

        <div className="text-center mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
