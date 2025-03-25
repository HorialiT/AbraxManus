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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Structure des campagnes Google Ads</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Organisation optimale des campagnes</h3>
            <p className="text-gray-700 mb-4">
              Pour maximiser l'efficacité de vos campagnes Google Ads, nous recommandons une structure en 4 campagnes principales :
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
