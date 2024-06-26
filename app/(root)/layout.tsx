import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relateive flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar />
                <section>
                  <div>
                    <div>
                      
                      MobileNav 

                    </div>
                    <div>
                      Toaster (notificatoin pup)
                      {children}
                    </div>
                  </div>
                </section>
            
            {children}
            <p className="text-white-1"> RIGHT SIDEBAR</p> 
            

        </main>
    </div>
  );
}
