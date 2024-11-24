export default function Home() {
  return (
    <div>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{
        width:"100%",
        height:0,
        paddingBottom: "100%",
     position:"relative"
     }}>
      <iframe src="https://giphy.com/embed/F4v3txFTUplfKQvbGT"
       width="100%" 
       height="100%" 
       style={{position:"absolute"}}
       frameBorder="0"
        className="giphy-embed" 
        allowFullScreen>
      </iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/pudgypenguins-saturday-morning-happy-F4v3txFTUplfKQvbGT">via GIPHY</a>
        </p>
    </div>
    </div>
  
  );
}