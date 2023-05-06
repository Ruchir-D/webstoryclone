import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Scripts required for AMP Story player */}
      <Script async src="https://cdn.ampproject.org/amp-story-player-v0.js" />
      <link href="https://cdn.ampproject.org/amp-story-player-v0.css" rel="stylesheet" type="text/css" />
      
      {/* AMP Story player */}
      <div className=" flex justify-center items-center relative overflow-hidden w-screen h-screen">
      <amp-story-player className="rounded-lg w-screen h-screen" >
        <a href="../pages/story">
          Stories in AMP
        </a>
      </amp-story-player>
      </div>
    </>
  );
}
