export function Footer() {
  return (
    <footer className="py-8 border-t border-stone-100 dark:border-[#141414]">
      <div className="section-container flex items-center justify-between">
        <p className="font-mono text-[11px] text-stone-400 dark:text-[#2A2A2A]">
          © {new Date().getFullYear()} Prakhar Verma
        </p>
        <a
          href="#"
          className="font-mono text-[11px] text-stone-300 dark:text-[#2A2A2A] hover:text-stone-700 dark:hover:text-[#777] transition-colors"
        >
          ↑ top
        </a>
      </div>
    </footer>
  )
}
