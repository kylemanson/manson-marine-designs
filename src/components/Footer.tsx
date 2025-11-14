import { Ship } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Ship className="h-6 w-6 text-accent" />
            <div>
              <h3 className="font-bold">Kyle Manson, P.Eng</h3>
              <p className="text-sm text-primary-foreground/80">Naval Architecture & Marine Engineering</p>
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
