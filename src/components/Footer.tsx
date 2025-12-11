const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/favicon.png" 
              alt="Kyle Manson Logo" 
              className="h-6 w-6"
              style={{ filter: 'brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(800%) hue-rotate(175deg) brightness(100%) contrast(95%)' }}
            />
            <div>
              <h3 className="font-bold">Kyle Manson, P.Eng</h3>
              <p className="text-sm text-primary-foreground/80">Naval Architect and Marine Engineer</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Kyle Manson. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              Professional Engineering Services | British Columbia, Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
