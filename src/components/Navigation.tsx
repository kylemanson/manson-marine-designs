import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/favicon.png" 
              alt="Kyle Manson Logo" 
              className="h-8 w-8"
              style={{ filter: 'brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(800%) hue-rotate(175deg) brightness(100%) contrast(95%)' }}
            />
            <div>
              <h2 className="text-xl font-bold text-primary">Kyle Manson</h2>
              <p className="text-xs text-muted-foreground">Naval Architecture & Marine Engineering</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Link 
              to="/blog"
              className="text-foreground hover:text-accent transition-colors"
            >
              Blog
            </Link>
          </div>
          
          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-4">
            <Link 
              to="/blog"
              className="text-foreground hover:text-accent transition-colors text-sm"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
