export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    //eslint-disable-next-line
    console.log(" disbling eslint for this console");
    return ( 
        <div>
            <div style={{height:"50px", background:"pink"}}></div>
            {children}
        </div>
    );
  }