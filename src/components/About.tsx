import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Sailboat } from "lucide-react";
import kyleHeadshot from "@/assets/kyle-headshot.jpg";

const TriangularScale = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {/* Triangular prism cross-section */}
    <polygon points="12,3 3,21 21,21" />
    {/* Inner detail lines for engineering scale look */}
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="7.5" y1="12" x2="16.5" y2="12" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headshot */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
              <img 
                src={kyleHeadshot} 
                alt="Kyle Manson, P.Eng" 
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TriangularScale className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Hydrogen Dinner Cruise Vessel (H2Ocean)</h3>
                <p className="text-muted-foreground mb-4">Capilano Maritime Design</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                  <li>Led a three-person team for the preliminary design of a hydrogen powered dinner cruise vessel</li>
                  <li>Designed layout of hydrogen fuel cell powered electric propulsion system with help from project sponsors such as Ballard Power Systems, HTEC, and Lloyd's Register</li>
                  <li>Designed the structure for the vessel based on Lloyd's Register class rules</li>
                  <li>3D modeled the vessel and renderings in Rhinoceros</li>
                  <li>Created a general arrangement, midship section, and hydrogen electric propulsion system plan for the vessel</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Performance Offshore Sailboat (PHK-20)</h3>
                <p className="text-muted-foreground mb-4">UBC NAME Program Capstone Project</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                  <li>Worked in a three-person team to design a performance offshore expedition sailing yacht</li>
                  <li>Won the Naval Architecture and Marine Engineering Design Award for best final ship design project</li>
                  <li>Generated a hull form for the yacht in MAXSURF</li>
                  <li>Designed the carbon fiber structure for the yacht based on DNV-GL Rules for Yachts and Principles of Yacht Design by Lars Larsson</li>
                  <li>Met stability criterion of OSR1 regulations for offshore racing vessels</li>
                  <li>Created a 3D model, general arrangement, structural layout, and rig plan</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Automated Conveyor System</h3>
                <p className="text-muted-foreground mb-4">Mechanical Engineering 4th Year Capstone Project</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                  <li>Worked in a three-person engineering team to design a conveyor automation system</li>
                  <li>Fully assembled, wired, and initialized a PLC control box</li>
                  <li>Programmed the microcontroller in C and the PLC with human interface touchpad using ladder logic</li>
                  <li>Designed and built a physical level sensor to measure volume flowrate on a conveyor</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Capilano Maritime Design Ltd.</h3>
                <p className="text-accent font-semibold">Project Naval Architect</p>
                <p className="text-muted-foreground mb-4">North Vancouver, British Columbia • Summer 2019, 2020-Present</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                  <li>Created stability books for landing craft, passenger vessels, cargo ships, tugs, and barges using Maxsurf Stability Software</li>
                  <li>Analysed longitudinal strength of a landing barge using Maxsurf Stability Software</li>
                  <li>Analysed stress and deformations in ship structures supporting high load fittings using ANSYS FEA</li>
                  <li>Modelled hullforms for barges using Rhino 3D Software</li>
                  <li>Led the preliminary design of a hydrogen powered dinner cruise vessel</li>
                  <li>Led the preliminary design of a log carrying double ended barge</li>
                  <li>Designed many custom lifting lugs for uses such as hoisting modular barges</li>
                  <li>Created a general arrangement of a dredge in AutoCAD</li>
                  <li>Created assembly details of dredge discharge piping and bilge piping in AutoCAD</li>
                  <li>Reviewed pipe support drawings to verify that pipe support locations did not cause any interference</li>
                  <li>Reviewed structure and outfit drawings of a dredge to ensure major equipment was properly supported by the hull structure</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">FVB Energy</h3>
                <p className="text-accent font-semibold">Summer Student</p>
                <p className="text-muted-foreground mb-4">Edmonton & Vancouver • Summer 2017 and 2018</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm">
                  <li>Gained experience in the process of creating and issuing engineering drawings including P&ID process layout drawings using AutoCAD</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Naval Architecture and Marine Engineering M.Eng.</h3>
                <p className="text-muted-foreground mb-2">University of British Columbia • September 2020</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Graduate Academic Achievement Award</li>
                  <li>Naval Architecture & Marine Engineering Design Award (PHK-20 Team)</li>
                  <li>NAME Peer Mentorship Award</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Mechanical Engineering Degree</h3>
                <p className="text-muted-foreground">British Columbia Institute of Technology • May 2019</p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-xl font-bold text-foreground">Mechanical Engineering Technology Diploma, Design Option</h3>
                <p className="text-muted-foreground mb-2">British Columbia Institute of Technology • May 2017</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>BCIT President's Entrance Scholarship</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Sailboat className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Interests</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">Boat Building and Sailing</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
                  <li>Completed two wooden sailboats; won "Boat of the Show" and "Best Small Boat of Modern Construction" at the 2016 Vancouver Wooden Boat Show</li>
                  <li>Sailed for the MAC sailing race team in the 420 class</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">Sports</h3>
                <p className="text-muted-foreground text-sm">Skiing, Muay Thai</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
