export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
   
        <div>
            <div style={{height:"50px", background:"pink"}}></div>
            {children}
        </div>
      
    
    );
  }
  