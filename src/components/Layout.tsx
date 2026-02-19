import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-3xl font-bold">
                  <span className="text-rjds-teal">R</span>
                  <span className="text-rjds-orange">J</span>
                  <span className="text-rjds-blue">D</span>
                  <span className="text-rjds-teal">S</span>
                </span>
                <span className="hidden sm:block ml-3 text-gray-500 text-sm leading-tight border-l border-gray-300 pl-3">
                  RICHMOND<br />JEWISH<br />DAY SCHOOL
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/admissions"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' || location.pathname === '/admissions'
                    ? 'text-rjds-blue border-b-2 border-rjds-blue pb-1'
                    : 'text-gray-600 hover:text-rjds-blue'
                }`}
              >
                ADMISSIONS
              </Link>
              <Link
                to="/apply"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/apply'
                    ? 'text-rjds-blue border-b-2 border-rjds-blue pb-1'
                    : 'text-gray-600 hover:text-rjds-blue'
                }`}
              >
                APPLY NOW
              </Link>
              <a
                href="https://rjds.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-rjds-blue transition-colors"
              >
                RJDS.CA
              </a>
            </nav>
            <Link
              to="/apply"
              className="bg-rjds-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Application
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-rjds-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Richmond Jewish Day School</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Richmond Jewish Day School graduates confident, well-rounded, ethical and
                independent children immersed in Jewish values.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p>8760 No 5 Road</p>
                <p>Richmond BC V6Y 2V4, Canada</p>
                <p className="mt-2">
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:604-275-3393" className="hover:text-rjds-orange transition-colors">604-275-3393</a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:admissions@rjds.ca" className="hover:text-rjds-orange transition-colors">admissions@rjds.ca</a>
                </p>
                <p>
                  <span className="font-medium">Web:</span>{' '}
                  <a href="https://www.rjds.ca" target="_blank" rel="noopener noreferrer" className="hover:text-rjds-orange transition-colors">www.rjds.ca</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Acknowledgment</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We acknowledge and thank the Katzie, Tsawwassen, Kwantlen and Musqueam First
                Peoples on whose traditional, unceded territories we live, work, and play.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RJDS / All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
