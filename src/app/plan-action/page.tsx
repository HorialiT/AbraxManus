import Link from 'next/link';

export default function PlanAction() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-teal-600 hover:text-teal-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Plan d'action
          </h1>
          <p className="text-xl text-gray-600">
            Mise en œuvre des stratégies SEO et SEA pour Abradebarras
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Actions à court terme (0-3 mois)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Mois 1</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Audit technique complet du site</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Optimisation des balises title et meta descriptions des pages principales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Configuration des campagnes SEA principales (Débarras par type de bien et Débarras par situation)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Création/optimisation de la fiche Google Business Profile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Mise en place de la structure du blog et publication des 2 premiers articles</span>
                </li>
              </ol>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Mois 2</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Création des nouvelles pages de services recommandées</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Optimisation des images et de la vitesse du site</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Lancement de la campagne SEA "Débarras écologique"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Inscription aux annuaires locaux pertinents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Publication de 2 nouveaux articles de blog et début de la stratégie de netlinking local</span>
                </li>
              </ol>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Mois 3</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Création des premières pages locales (Nantes, Saint-Nazaire, La Baule)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Lancement de la campagne SEA "Débarras par ville"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Mise en place du balisage schema.org et optimisation de l'expérience mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Publication de 2 nouveaux articles de blog</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Analyse des premiers résultats et ajustements des stratégies SEO et SEA</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Actions à moyen terme (4-6 mois)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">SEO</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Développement continu du blog (2 articles par mois)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Création progressive des pages locales pour toutes les villes principales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Renforcement de la stratégie de netlinking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Mise à jour et enrichissement régulier du contenu existant</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Développement de contenus multimédias (vidéos, infographies)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">6.</span>
                  <span>Expansion des partenariats locaux</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">SEA</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Transition vers les stratégies d'enchères automatisées pour les campagnes performantes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Expansion des mots-clés basée sur les données de recherche</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Optimisation des pages de destination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Développement de la stratégie de remarketing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Test de nouvelles variantes d'annonces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">6.</span>
                  <span>Ajustement de la répartition du budget selon les performances</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Actions à long terme (7-12 mois)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">SEO</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Audit SEO complet et ajustements de la stratégie</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Développement de contenus spécialisés pour des niches spécifiques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Renforcement de l'autorité du site par des publications externes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Optimisation avancée pour la recherche vocale et mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Développement d'une stratégie de contenu interactif</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">SEA</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Développement de campagnes saisonnières (printemps, été)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Test de nouveaux formats d'annonce (responsive search ads)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Expansion vers le réseau Display pour les campagnes de notoriété</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Intégration plus poussée avec la stratégie SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Test de campagnes vidéo sur YouTube</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Suivi et mesure des performances</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">KPIs SEO</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Positions sur les mots-clés stratégiques</li>
                <li>Trafic organique global et par page</li>
                <li>Taux de conversion des visiteurs organiques</li>
                <li>Visibilité locale (recherches "près de moi")</li>
                <li>Nombre et qualité des backlinks</li>
                <li>Taux de rebond et temps passé sur le site</li>
                <li>Vitesse de chargement des pages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">KPIs SEA</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Taux de clics (CTR)</li>
                <li>Coût par clic (CPC)</li>
                <li>Taux de conversion</li>
                <li>Coût par conversion</li>
                <li>Retour sur les dépenses publicitaires (ROAS)</li>
                <li>Score de qualité des mots-clés</li>
                <li>Part d'impression</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Calendrier d'optimisation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Suivi hebdomadaire des positions sur les mots-clés prioritaires</li>
                <li>Ajustement hebdomadaire des enchères SEA</li>
                <li>Rapport mensuel sur les performances SEO et SEA</li>
                <li>Audit SEO complet tous les 6 mois</li>
                <li>Mise à jour trimestrielle du contenu existant</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommandations finales</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Différenciation écologique</h3>
              <p className="text-gray-700">
                Faire de l'aspect écologique le pilier central de toute la communication, documenter et partager le parcours complet des objets débarrassés, et créer du contenu éducatif sur l'impact environnemental des débarras traditionnels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Expertise locale</h3>
              <p className="text-gray-700">
                Développer une présence forte dans chaque ville principale de la zone d'intervention, créer des partenariats avec des acteurs locaux (associations écologiques, agences immobilières, notaires), et participer à des événements locaux liés à l'écologie et au recyclage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Excellence de service</h3>
              <p className="text-gray-700">
                Continuer à solliciter activement des avis clients, créer des études de cas détaillées avec photos avant/après, et mettre en avant la transparence du processus et la satisfaction client.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Intégration SEO-SEA</h3>
              <p className="text-gray-700">
                Utiliser les données SEA pour optimiser la stratégie SEO et vice versa, coordonner les messages entre les annonces payantes et le contenu organique, et ajuster la répartition des efforts selon les performances de chaque canal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Suivi et optimisation continue</h3>
              <p className="text-gray-700">
                Mettre en place un système de suivi rigoureux des KPIs, analyser régulièrement les performances et ajuster les stratégies, et rester à l'affût des nouvelles tendances et fonctionnalités SEO/SEA.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <Link href="/strategie-seo" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors w-full">
              Voir la stratégie SEO
            </Link>
          </div>
          <div className="text-center">
            <Link href="/strategie-sea" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors w-full">
              Voir la stratégie SEA
            </Link>
          </div>
        </div>

        <div className="text-center mb-8">
          <Link href="/" className="text-teal-600 hover:text-teal-800">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
