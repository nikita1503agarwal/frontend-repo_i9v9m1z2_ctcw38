import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-gray-900/70 border border-white/40 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-red-500" />
              <span className="text-gray-900 dark:text-white font-extrabold text-xl">DominoGrid</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-gray-700 dark:text-gray-200 hover:text-rose-600 transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors">
                Start Now
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/40 bg-white/60 dark:bg-gray-900/60 text-gray-800 dark:text-gray-100">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/40 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-rose-600 font-medium">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors">
                  Start Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
