import Link from 'next/link';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-green-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-xl">
                  Abradebarras
                </Link>
                <span className="ml-2 text-sm bg-white text-green-700 px-2 py-1 rounded-full">
                  Stratégie SEO/SEA
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/strategie-seo" className="hover:text-green-200 transition-colors">
                  Stratégie SEO
                </Link>
                <Link href="/strategie-sea" className="hover:text-green-200 transition-colors">
                  Stratégie SEA
                </Link>
                <Link href="/analyse-marche" className="hover:text-green-200 transition-colors">
                  Analyse du marché
                </Link>
                <Link href="/mots-cles" className="hover:text-green-200 transition-colors">
                  Mots-clés
                </Link>
                <Link href="/plan-action" className="hover:text-green-200 transition-colors">
                  Plan d'action
                </Link>
              </nav>
              <div className="md:hidden">
                {/* Mobile menu button would go here */}
                <button className="text-white">
                  Menu
                </button>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
