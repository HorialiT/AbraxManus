import Link from 'next/link';

export default function StrategieSEA() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Stratégie SEA personnalisée
          </h1>
          <p className="text-xl text-gray-600">
            Pour Abradebarras, leader du débarras écologique en Loire-Atlantique
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Analyse de la situation actuelle</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Forces d'Abradebarras pour le SEA</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Positionnement écologique différenciant dans un secteur concurrentiel</li>
              <li>Zone d'intervention clairement définie (1h30 autour de Nantes)</li>
              <li>Excellente réputation (4.9/5 sur 110 avis Google)</li>
              <li>Services diversifiés (débarras maison, appartement, cave, grenier, etc.)</li>
              <li>Processus client simple et efficace</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Opportunités SEA</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Ciblage géographique précis pour maximiser le ROI</li>
              <li>Possibilité de capter les demandes urgentes (déménagements, successions)</li>
              <li>Faible présence publicitaire des concurrents sur certains mots-clés de niche</li>
              <li>Mise en avant de l'aspect écologique comme différenciateur</li>
              <li>Utilisation des extensions d'annonce pour se démarquer</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Objectifs de la stratégie SEA</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4">
            <li className="font-semibold">Générer des demandes de devis qualifiées dans la zone d'intervention</li>
            <li className="font-semibold">Augmenter la notoriété d'Abradebarras face à Grand Ouest Débarras</li>
            <li className="font-semibold">Optimiser le coût par acquisition pour maximiser le ROI</li>
            <li className="font-semibold">Capter les demandes urgentes à fort potentiel de conversion</li>
            <li className="font-semibold">Compléter la stratégie SEO en ciblant des mots-clés compétitifs</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Structure des campagnes Google Ads</h2>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Campagne 1 : Débarras par type de bien</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Groupe d'annonces 1 : Débarras maison</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Mots-clés :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>[débarras maison Nantes]</li>
                  <li>[débarras maison Loire-Atlantique]</li>
                  <li>"débarras de maison Nantes"</li>
                  <li>"entreprise débarras maison"</li>
                  <li>+débarras +maison +Nantes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Annonce 1 :</p>
                <div className="border border-gray-300 p-3 rounded">
                  <p className="font-bold text-blue-700">Débarras Maison Écologique | Nantes</p>
                  <p className="font-bold text-blue-700">Tri et Recyclage Inclus • Devis Gratuit en 24h</p>
                  <p className="text-gray-600 text-sm">abradebarras.com/Debarras-Maison</p>
                  <p className="text-gray-700">Service professionnel de débarras de maison à Nantes et en Loire-Atlantique. Valorisation des objets et recyclage.</p>
                  <p className="text-gray-700">Intervention rapide, devis gratuit. 110 avis 5★ sur Google. Contactez Abradebarras au 02 28 34 91 89.</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Autres groupes d'annonces</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Groupe d'annonces 2 : Débarras appartement</span> - Mots-clés et annonces similaires adaptés aux appartements</li>
                <li><span className="font-semibold">Groupe d'annonces 3 : Débarras cave et grenier</span> - Mots-clés et annonces similaires adaptés aux caves et greniers</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Campagne 2 : Débarras par situation</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Groupe d'annonces 1 : Débarras succession</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Mots-clés :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>[débarras succession Nantes]</li>
                  <li>[débarras après décès Loire-Atlantique]</li>
                  <li>"vider maison succession"</li>
                  <li>"débarras héritage"</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Annonce 1 :</p>
                <div className="border border-gray-300 p-3 rounded">
                  <p className="font-bold text-blue-700">Débarras Succession | Nantes</p>
                  <p className="font-bold text-blue-700">Service Respectueux & Discret • Devis Gratuit</p>
                  <p className="text-gray-600 text-sm">abradebarras.com/Succession</p>
                  <p className="text-gray-700">Service de débarras de succession à Nantes et en Loire-Atlantique. Approche respectueuse et discrète dans ces moments difficiles.</p>
                  <p className="text-gray-700">Prise en charge complète, tri et recyclage. Contactez Abradebarras pour un accompagnement personnalisé.</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Autres groupes d'annonces</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Groupe d'annonces 2 : Débarras urgent</span> - Annonces mettant en avant la rapidité d'intervention</li>
                <li><span className="font-semibold">Groupe d'annonces 3 : Débarras avant vente</span> - Annonces adaptées au contexte de vente immobilière</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Campagne 3 : Débarras écologique</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Groupe d'annonces 1 : Débarras recyclage</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Mots-clés :</p>
                <ul className="list-disc list-inside text-gray-700 pl-4">
                  <li>[débarras écologique Nantes]</li>
                  <li>[débarras recyclage Loire-Atlantique]</li>
                  <li>"débarras responsable"</li>
                  <li>"entreprise débarras écologique"</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold">Annonce 1 :</p>
                <div className="border border-gray-300 p-3 rounded">
                  <p className="font-bold text-blue-700">Débarras Écologique | Nantes</p>
                  <p className="font-bold text-blue-700">90% des Objets Recyclés • Service Responsable</p>
                  <p className="text-gray-600 text-sm">abradebarras.com/Ecologique</p>
                  <p className="text-gray-700">Service de débarras écologique à Nantes et en Loire-Atlantique. Valorisation des objets et recyclage pour minimiser l'impact environnemental.</p>
                  <p className="text-gray-700">Transparence sur le devenir de vos objets. Devis gratuit, intervention dans les 48h.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Campagne 4 : Débarras par ville</h3>
            <p className="text-gray-700 mb-4">Création de groupes d'annonces spécifiques pour chaque ville principale de la zone d'intervention :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Nantes</li>
              <li>Saint-Nazaire</li>
              <li>La Baule</li>
              <li>Rezé</li>
              <li>Saint-Herblain</li>
              <li>Vertou</li>
              <li>Etc.</li>
            </ul>
            <p className="text-gray-700 mt-4">Chaque groupe d'annonces utilisera des mots-clés géolocalisés et des annonces personnalisées mentionnant la ville spécifique.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Stratégie d'enchères et budget</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Stratégie d'enchères</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Phase initiale (1er mois) :</span> Enchères manuelles CPC pour contrôler les coûts et recueillir des données</li>
                <li><span className="font-semibold">Phase d'optimisation (2-3 mois) :</span> Transition vers CPA cible pour les campagnes performantes</li>
                <li><span className="font-semibold">Phase avancée (4+ mois) :</span> Stratégie ROAS pour les campagnes matures avec historique de conversion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Répartition du budget</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Campagne 1 (Débarras par type de bien) :</span> 35% du budget</li>
                <li><span className="font-semibold">Campagne 2 (Débarras par situation) :</span> 30% du budget</li>
                <li><span className="font-semibold">Campagne 3 (Débarras écologique) :</span> 20% du budget</li>
                <li><span className="font-semibold">Campagne 4 (Débarras par ville) :</span> 15% du budget</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Ajustements saisonniers</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Augmentation du budget au printemps et en été (périodes de déménagement)</li>
              <li>Augmentation du budget pour les campagnes "Débarras urgent" et "Débarras avant vente" pendant les périodes de forte activité immobilière</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Extensions d'annonce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Extensions de site</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Débarras maison</li>
                <li>Débarras appartement</li>
                <li>Débarras cave/grenier</li>
                <li>Débarras succession</li>
                <li>Recyclage et valorisation</li>
                <li>Demande de devis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Extensions de texte annexe</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Service écologique avec tri et recyclage</li>
                <li>Intervention dans les 48h</li>
                <li>Devis gratuit et sans engagement</li>
                <li>4.9/5 sur Google (110 avis)</li>
                <li>Zone d'intervention : 1h30 autour de Nantes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ciblage et paramètres de campagne</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Ciblage géographique</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Rayon de 1h30 autour de Nantes</li>
                <li>Ajustement des enchères :
                  <ul className="list-disc list-inside pl-4">
                    <li>+20% pour Nantes et agglomération</li>
                    <li>+10% pour les villes principales</li>
                    <li>Normal pour le reste de la zone</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Programmation des annonces</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Diffusion 7j/7</li>
                <li>Ajustement des enchères :
                  <ul className="list-disc list-inside pl-4">
                    <li>+10% pendant les heures de bureau (9h-18h)</li>
                    <li>-10% pendant la nuit (22h-7h)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Ciblage d'appareils</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Ordinateurs et mobiles</li>
                <li>Ajustement des enchères :
                  <ul className="list-disc list-inside pl-4">
                    <li>+10% pour les mobiles (recherches souvent plus urgentes)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Stratégie de remarketing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Liste d'audience</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Visiteurs du site (30 derniers jours)</li>
                <li>Visiteurs des pages de services spécifiques</li>
                <li>Visiteurs ayant commencé mais non terminé une demande de devis</li>
                <li>Visiteurs ayant passé plus de 2 minutes sur le site</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Campagne RLSA</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Augmentation des enchères de 15-20% pour les utilisateurs déjà venus sur le site</li>
                <li>Annonces personnalisées pour ces utilisateurs</li>
              </ul>
