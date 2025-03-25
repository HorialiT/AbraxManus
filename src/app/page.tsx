import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Stratégie SEO et SEA pour Abradebarras
          </h1>
          <p className="text-xl text-gray-600">
            Leader du débarras écologique en Loire-Atlantique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Stratégie SEO</h2>
            <p className="text-gray-700 mb-6">
              Optimisation pour les moteurs de recherche avec focus sur le positionnement écologique et local.
            </p>
            <Link href="/strategie-seo" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Voir la stratégie SEO
            </Link>
          </div>
          
          <div className="bg-blue-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Stratégie SEA</h2>
            <p className="text-gray-700 mb-6">
              Campagnes Google Ads ciblées pour maximiser les conversions dans votre zone d'intervention.
            </p>
            <Link href="/strategie-sea" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Voir la stratégie SEA
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-amber-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Analyse du marché</h2>
            <p className="text-gray-700 mb-6">
              Étude du secteur du débarras en Loire-Atlantique et des tendances actuelles.
            </p>
            <Link href="/analyse-marche" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Voir l'analyse
            </Link>
          </div>
          
          <div className="bg-purple-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Mots-clés stratégiques</h2>
            <p className="text-gray-700 mb-6">
              Sélection des termes de recherche à cibler pour maximiser votre visibilité.
            </p>
            <Link href="/mots-cles" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Voir les mots-clés
            </Link>
          </div>
          
          <div className="bg-teal-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Plan d'action</h2>
            <p className="text-gray-700 mb-6">
              Calendrier de mise en œuvre des stratégies SEO et SEA à court, moyen et long terme.
            </p>
            <Link href="/plan-action" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Voir le plan
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Stratégie développée pour Abradebarras, entreprise de débarras écologique en Loire-Atlantique.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 - Tous droits réservés
          </p>
        </div>
      </div>
    </main>
  );
}
