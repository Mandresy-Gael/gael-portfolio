export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {year} Gaël Randriamanana</p>
        <p className="font-mono text-xs tracking-wide">Développé par Gaël</p>
      </div>
    </footer>
  );
}
