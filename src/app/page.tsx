import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-4">
            Abradebarras
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Stratégie SEO et SEA pour dominer le marché du débarras écologique en Loire-Atlantique
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Résumé exécutif</h2>
          <p className="text-gray-700 mb-4">
            Ce rapport présente une stratégie complète de référencement naturel (SEO) et de publicité en ligne (SEA) 
            pour Abradebarras, entreprise de débarras écologique en Loire-Atlantique. L'objectif est d'améliorer 
            significativement la visibilité en ligne d'Abradebarras dans un périmètre de 1h30 autour de Nantes et 
            de se démarquer de la concurrence, notamment Grand Ouest Débarras.
          </p>
          <p className="text-gray-700 mb-4">
            L'analyse approfondie du marché du débarras en Loire-Atlantique, des concurrents et des tendances SEO/SEA 2025 
            a permis d'élaborer une stratégie sur mesure qui capitalise sur les forces d'Abradebarras : son positionnement 
            écologique, sa réputation excellente et son processus client efficace.
          </p>
          <p className="text-gray-700 mb-4">
            Les recommandations stratégiques s'articulent autour de trois axes principaux :
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-4 pl-4">
            <li className="mb-2"><span className="font-semibold">Différenciation écologique</span> : Positionner Abradebarras comme le leader du débarras écologique et responsable</li>
            <li className="mb-2"><span className="font-semibold">Expertise locale</span> : Renforcer la présence géographique dans la zone d'intervention</li>
            <li className="mb-2"><span className="font-semibold">Excellence de service</span> : Mettre en avant la qualité du service et les avis clients positifs</li>
          </ol>
          <p className="text-gray-700">
            La mise en œuvre coordonnée des stratégies SEO et SEA permettra de maximiser la visibilité en ligne, 
            de générer des demandes de devis qualifiées et de renforcer la position d'Abradebarras face à la concurrence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Stratégie SEO</h3>
            <p className="text-gray-700 mb-4">
              Une approche complète pour améliorer le référencement naturel d'Abradebarras, 
              incluant optimisation technique, création de contenu et netlinking.
            </p>
            <Link href="/strategie-seo" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Voir la stratégie SEO
            </Link>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Stratégie SEA</h3>
            <p className="text-gray-700 mb-4">
              Une stratégie Google Ads optimisée pour générer des demandes de devis qualifiées 
              et augmenter la notoriété d'Abradebarras.
            </p>
            <Link href="/strategie-sea" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Voir la stratégie SEA
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Analyse du marché</h3>
            <p className="text-gray-700 mb-3">
              Étude du marché du débarras en Loire-Atlantique, tendances et opportunités.
            </p>
            <Link href="/analyse-marche" className="text-green-600 hover:text-green-800 font-semibold">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Analyse concurrentielle</h3>
            <p className="text-gray-700 mb-3">
              Étude détaillée de Grand Ouest Débarras et autres concurrents locaux.
            </p>
            <Link href="/analyse-concurrentielle" className="text-green-600 hover:text-green-800 font-semibold">
              En savoir plus →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mots-clés stratégiques</h3>
            <p className="text-gray-700 mb-3">
              Identification des mots-clés prioritaires pour le SEO et le SEA.
            </p>
            <Link href="/mots-cles" className="text-green-600 hover:text-green-800 font-semibold">
              En savoir plus →
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan d'action</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Court terme (0-3 mois)</h3>
              <ul className="list-disc list-inside text-gray-700 pl-4">
                <li>Audit technique complet du site</li>
                <li>Optimisation des balises title et meta descriptions</li>
                <li>Configuration des campagnes SEA principales</li>
                <li>Création/optimisation de la fiche Google Business Profile</li>
                <li>Mise en place de la structure du blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Moyen terme (4-6 mois)</h3>
              <ul className="list-disc list-inside text-gray-700 pl-4">
                <li>Développement continu du blog (2 articles par mois)</li>
                <li>Création progressive des pages locales</li>
                <li>Transition vers les stratégies d'enchères automatisées</li>
                <li>Renforcement de la stratégie de netlinking</li>
                <li>Développement de contenus multimédias</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Long terme (7-12 mois)</h3>
              <ul className="list-disc list-inside text-gray-700 pl-4">
                <li>Audit SEO complet et ajustements de la stratégie</li>
                <li>Développement de campagnes saisonnières</li>
                <li>Test de nouveaux formats d'annonce</li>
                <li>Expansion vers le réseau Display</li>
                <li>Intégration plus poussée des stratégies SEO et SEA</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/plan-action" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition-colors">
              Voir le plan d'action détaillé
            </Link>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Prêt à dominer le marché du débarras en Loire-Atlantique ?</h2>
          <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors">
            Contactez-nous
          </Link>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>© 2025 Abradebarras - Stratégie SEO et SEA par Manus</p>
        </footer>
      </div>
    </main>
  );
}
