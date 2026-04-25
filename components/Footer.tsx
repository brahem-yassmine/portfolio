export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Yassmine Brahem. All rights reserved.</p>
        <p className="mt-2">Designed & Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
