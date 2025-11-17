function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">DominoGrid</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Interactive, minimalist, modern, and corporate-friendly.</p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} DominoGrid. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
