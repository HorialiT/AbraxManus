import Link from 'next/link';

export default function AnalyseMarche() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-amber-600 hover:text-amber-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
            Analyse du marché
          </h1>
          <p className="text-xl text-gray-600">
            Le secteur du débarras en Loire-Atlantique
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tendances du marché</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Croissance du secteur</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Croissance annuelle moyenne de <span className="font-semibold">7,2%</span> entre 2014 et 2018</li>
              <li>Prévision de croissance de <span className="font-semibold">4,4%</span> entre 2019 et 2023</li>
              <li>Marché en expansion continue malgré les fluctuations économiques</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Facteurs de croissance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Sensibilité écologique</h4>
                <p className="text-gray-700">Préoccupation croissante pour le recyclage et la valorisation des objets plutôt que leur mise en décharge.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Dynamisme immobilier</h4>
                <p className="text-gray-700">Forte activité du marché immobilier en Loire-Atlantique générant des besoins en débarras lors des ventes et déménagements.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Vieillissement de la population</h4>
                <p className="text-gray-700">Augmentation des successions et des entrées en EHPAD nécessitant des services de débarras.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Évolution des attentes clients</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Demande croissante pour des services <span className="font-semibold">écologiques et responsables</span></li>
              <li>Attente de <span className="font-semibold">transparence</span> sur le devenir des objets débarrassés</li>
              <li>Recherche de services <span className="font-semibold">complets</span> incluant estimation, tri, recyclage et débarras</li>
              <li>Importance croissante des <span className="font-semibold">avis en ligne</span> dans le choix d'un prestataire</li>
              <li>Préférence pour les entreprises proposant une <span className="font-semibold">intervention rapide</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Données démographiques de Loire-Atlantique</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Population</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">1 473 156 habitants</span> en 2022</li>
                <li>Croissance démographique de <span className="font-semibold">1,1% par an</span></li>
                <li>5ème département français en termes de croissance</li>
                <li>Forte attractivité résidentielle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Activité immobilière</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Marché immobilier <span className="font-semibold">très dynamique</span></li>
                <li>Augmentation des transactions immobilières</li>
                <li>Développement de nouveaux quartiers résidentiels</li>
                <li>Forte demande de logements dans l'agglomération nantaise</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Répartition géographique</h3>
            <p className="text-gray-700 mb-4">La zone d'intervention d'Abradebarras (1h30 autour de Nantes) couvre :</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-bold text-amber-700">Nantes Métropole</p>
                <p className="text-gray-700">670 000 habitants</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-bold text-amber-700">Saint-Nazaire</p>
                <p className="text-gray-700">70 000 habitants</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-bold text-amber-700">La Baule</p>
                <p className="text-gray-700">16 000 habitants</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-bold text-amber-700">Autres communes</p>
                <p className="text-gray-700">~700 000 habitants</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Paysage concurrentiel</h2>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Grand Ouest Débarras</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <p className="font-bold text-gray-800 text-lg">Principal concurrent</p>
                  <p className="text-gray-700">Plus de 10 ans d'expérience</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">2500+ clients satisfaits</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-800">Positionnement :</p>
                <p className="text-gray-700">"Spécialiste débarras et nettoyage à Nantes"</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-800">Forces :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>Service complet "3 en 1" (débarras, déménagement, nettoyage)</li>
                  <li>Expertise dans les cas complexes (syndrome de Diogène)</li>
                  <li>Rapidité (devis en 24h) et flexibilité (intervention sans présence du client)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Faiblesses :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>Peu d'accent sur l'aspect écologique et le recyclage</li>
                  <li>Manque de transparence sur le devenir des objets</li>
                  <li>Site web moins moderne et moins optimisé</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Trokeur</h3>
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <div className="mb-4">
                  <p className="font-bold text-gray-800">Établi depuis 2000</p>
                  <p className="text-gray-700">Basé à Saint-Nazaire</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Positionnement :</p>
                  <p className="text-gray-700">Valorisation des objets et expertise en successions</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Forces :</p>
                  <ul className="list-disc list-inside text-gray-700 pl-4">
                    <li>Longue expérience sur le marché</li>
                    <li>Expertise en estimation et valorisation</li>
                    <li>Forte présence à Saint-Nazaire</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Vide Maison 44</h3>
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <div className="mb-4">
                  <p className="font-bold text-gray-800">Établi depuis 1994</p>
                  <p className="text-gray-700">Expertise familiale</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Positionnement :</p>
                  <p className="text-gray-700">Rachat de meubles et service rapide</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Forces :</p>
                  <ul className="list-disc list-inside text-gray-700 pl-4">
                    <li>Très longue présence sur le marché</li>
                    <li>Expertise dans le rachat de meubles</li>
                    <li>Réputation établie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Opportunités pour Abradebarras</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Différenciation écologique</h3>
              <p className="text-gray-700">Capitaliser sur la sensibilité croissante aux enjeux environnementaux en mettant en avant le recyclage et la valorisation des objets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Transparence</h3>
              <p className="text-gray-700">Communiquer clairement sur le devenir des objets débarrassés pour répondre à la demande de transparence des clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Expertise locale</h3>
              <p className="text-gray-700">Développer une connaissance approfondie des spécificités de chaque ville/quartier de la zone d'intervention.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Niches spécifiques</h3>
              <p className="text-gray-700">Se spécialiser dans des segments peu exploités comme le débarras écologique d'EHPAD ou le débarras avec réemploi des matériaux.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Partenariats locaux</h3>
              <p className="text-gray-700">Développer des collaborations avec des acteurs locaux (agences immobilières, notaires, associations écologiques).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Présence digitale</h3>
              <p className="text-gray-700">Investir dans une stratégie digitale complète pour capter la demande croissante de recherche en ligne de services de débarras.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Conclusion de l'analyse de marché</h2>
          
          <p className="text-gray-700 mb-4">
            Le marché du débarras en Loire-Atlantique présente un potentiel de croissance significatif, porté par le dynamisme démographique et immobilier du département, ainsi que par l'évolution des attentes des consommateurs vers des services plus écologiques et transparents.
          </p>
          
          <p className="text-gray-700 mb-4">
            Abradebarras dispose d'atouts importants pour se démarquer dans ce marché concurrentiel, notamment son positionnement écologique fort, sa réputation excellente et son processus client efficace. Face à des concurrents établis depuis longtemps comme Grand Ouest Débarras, Trokeur et Vide Maison 44, Abradebarras doit capitaliser sur ces forces et exploiter les opportunités identifiées.
          </p>
          
          <p className="text-gray-700 mb-4">
            La mise en œuvre d'une stratégie SEO et SEA efficace permettra à Abradebarras d'améliorer sa visibilité en ligne, de générer des demandes de devis qualifiées et de renforcer sa position sur le marché du débarras écologique en Loire-Atlantique.
          </p>
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
          <Link href="/" className="text-amber-600 hover:text-amber-800">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
