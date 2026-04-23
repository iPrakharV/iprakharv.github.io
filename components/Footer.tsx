export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10">
      <div className="section-container flex items-center justify-between">
        <p className="font-mono text-[11px] text-[#655f52] dark:text-[#aaa18f]">
          © {new Date().getFullYear()} Prakhar Verma
        </p>
        <a
          href="#"
          className="font-mono text-[11px] text-teal-700 transition-colors hover:text-amber-700 dark:text-teal-300 dark:hover:text-amber-200"
        >
          ↑ top
        </a>
      </div>
    </footer>
  )
}
