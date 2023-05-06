import Head from 'next/head';
import Script from 'next/script';

export const config = { amp: true }

export default function Home() {
    return(
  <>
    <Head>
      <title>Story</title>
      <Script async key="amp-story" custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />

    </Head>

    <amp-story
      standalone=""
      title="Stories in AMP - Hello World"
      publisher="AMP Project"
      publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
      poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
      poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
      poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
      >


  {/* <!-- Cover Page --> */}
            <amp-story-page id="cover" style={{flex: "auto"}} auto-advance-after="5s">

                {/* <!-- First Layer --> */}
                <amp-story-grid-layer template="fill">
                    <amp-img src="/webStory/images/img1.jpg"
                        width="720" height="1280"
                        layout="responsive"
                        alt="">
                    </amp-img>
                </amp-story-grid-layer>

                {/* <!-- Second Layer --> */}
                <amp-story-grid-layer template="vertical" style={{padding: "25px"}}>
                            <a href='https://propreturns.com'></a><amp-img width="50px" height="40px" src="/webStory/images/logo_best.jpg"  style={{backgroundColor: "white", width: "35%"}} alt="" />                       
                </amp-story-grid-layer>

                {/* <!-- Third Layer --> */}
                <amp-story-grid-layer template="vertical" style={{
                                                          alignContent: 'end',
                                                          padding: '0',
                                                        }}>
                    <div style={{
                                background: 'rgba(0, 0, 0, 0)',
                                padding: '68px 16px 16px',
                              }}>
                    <h2 style={{ 
                    fontSize: "24px",
                    lineHeight: "28px",
                    padding: "8px",
                    borderLeft: "1px solid #ff6000",
                    marginTop: "5px",
                    backgroundColor: "rgba(0,0,0,.5)",
                    fontFamily: "'Roboto', sans-serif",
                    color: "#fff",
                    width: "100%",
                    float: "left"
                  }}>Go-anywhere adventure touring bikes in India under Rs 3 lakh: RE Himalayan to KTM 390 ADV​</h2>


                  <p style={{
                    fontSize: "12px",
                    fontFamily: "'Roboto', sans-serif",
                    width: "100%",
                    float: "left",
                    lineHeight: 1,
                    color: "#fff",
                    marginTop: "10px"
                  }}>May 26, 2023</p>


                  <b style={{
                    width: '100%',
                    float: 'left',
                    marginBottom: '3px',
                    display: 'block',
                    marginTop: '10px',
                    fontSize: '14px',
                    lineHeight: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}>By: Ruchir Dandge</b>

                    </div>
                </amp-story-grid-layer>
              </amp-story-page>
            
   {/* <!-- Second Page --> */}
            <amp-story-page id="page2" auto-advance-after="5s">

                    {/* <!-- First Layer --> */}
                    <amp-story-grid-layer template="fill">
                        <amp-img src="/webStory/images/img2.jpg"
                            width="720" height="1280"
                            layout="responsive"
                            alt="">
                        </amp-img>
                    </amp-story-grid-layer>

                    {/* <!-- Second Layer --> */}
                    <amp-story-grid-layer template="vertical" style={{ alignContent: 'end', padding: '0',}}>
                        <div style={{ background: 'rgba(0, 0, 0, 0)', padding: '68px 16px 16px', }} animate-in="fade-in" animate-in-delay="1s" animate-in-duration="1.5s">
                        <h2 style={{ 
                        fontSize: "24px",
                        lineHeight: "28px",
                        padding: "8px",
                        borderLeft: "1px solid #ff6000",
                        marginTop: "5px",
                        backgroundColor: "rgba(0,0,0,.5)",
                        fontFamily: "'Roboto', sans-serif",
                        color: "#fff",
                        width: "100%",
                        float: "left"
                  }}>Adventure touring motorcycles ​</h2>


                  <p style={{fontSize: '16px',
                                lineHeight: '22px',
                                width: '100%',
                                color: '#fff',
                                float: 'left',
                                fontFamily: "'Roboto', sans-serif",
                                marginTop: '7px',
                                background: "rgba(0,0,0,.5)",
                                padding: "11px"}}>Go-anywhere adventure touring motorcycles have gained immense popularity in the Indian market in recent years, resulting in a host of new products launched in this category. Here is a list of all ADV bikes you can buy under Rs 3 lakh (ex-showroom) in 2023.</p>
                        </div>
                    </amp-story-grid-layer>

                    {/* <!-- Third Layer --> */}

                    <amp-story-grid-layer template="vertical" style={{ alignContent: 'end', padding: '0',}}>
                        <div style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.61))', padding: '68px 16px 16px', textAlign: 'right' }} animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in">
                        <a style={{ textDecoration: 'none', color: '#fff', fontFamily: "'Roboto', sans-serif", fontSize: '15px' }} href="https://www.propreturns.com/">PROPRETURNS.COM</a>
                        </div>
                    </amp-story-grid-layer>
                    
              </amp-story-page>
  
     {/* <!-- Third Page --> */}
            <amp-story-page id="page2" auto-advance-after="5s">

        {/* <!-- First Layer --> */}
        <amp-story-grid-layer template="fill">
            <amp-img src="/webStory/images/img3.jpg"
                width="720" height="1280"
                layout="responsive"
                alt="">
            </amp-img>
        </amp-story-grid-layer>

        {/* <!-- Second Layer --> */}
        <amp-story-grid-layer template="vertical" style={{ alignContent: 'end', padding: '0',}}>
            <div style={{ background: 'rgba(0, 0, 0, 0)', padding: '68px 16px 16px', }} animate-in="fade-in" animate-in-delay="1s" animate-in-duration="1.5s">
            <h2 style={{ 
            fontSize: "24px",
            lineHeight: "28px",
            padding: "8px",
            borderLeft: "1px solid #ff6000",
            marginTop: "5px",
            backgroundColor: "rgba(0,0,0,.5)",
            fontFamily: "'Roboto', sans-serif",
            color: "#fff",
            width: "100%",
            float: "left"
        }}>BMW G 310 GS: A worthy mention​</h2>


        <p style={{fontSize: '16px',
                    lineHeight: '22px',
                    width: '100%',
                    color: '#fff',
                    float: 'left',
                    fontFamily: "'Roboto', sans-serif",
                    marginTop: '7px',
                    background: "rgba(0,0,0,.5)",
                    padding: "11px"}}>he BMW G 310 GS is priced from Rs 3.20 lakh (ex-showroom), but is a worthy mention considering it is the entry point to the BMW Motorrad's GS adventure touring range and is just a little over Rs 3 lakh.</p>
            </div>
        </amp-story-grid-layer>

        {/* <!-- Third Layer --> */}

        <amp-story-grid-layer template="vertical" style={{ alignContent: 'end', padding: '0',}}>
            <div style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.61))', padding: '68px 16px 16px', textAlign: 'right' }} animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in">
            <a style={{ textDecoration: 'none', color: '#fff', fontFamily: "'Roboto', sans-serif", fontSize: '15px' }} href="https://www.propreturns.com/">PROPRETURNS.COM</a>
            </div>
        </amp-story-grid-layer>

              </amp-story-page>

   {/* Last Page */}
            <amp-story-page id="last-page" auto-advance-after="5s">

          {/* <!-- First Layer --> */}
          <amp-story-grid-layer template="fill">
              <amp-img src="/webStory/images/img4.jpg"
                  width="720" height="1280"
                  layout="responsive"
                  alt="">
              </amp-img>
          </amp-story-grid-layer>

          {/* <!-- Second Layer --> */}
          <amp-story-grid-layer template="thirds">
              <div grid-area="middle-third" animate-in-duration="3s" animate-in-delay=".5s" animate-in="fade-in">
                  <h2 style={{fontSize: "20px",
                      padding: "10px",
                      margin: "5px",
                      backgroundColor: "rgba(0,0,0,.5)",
                      fontFamily: "'Roboto', sans-serif",
                      color: "#fff",
                      width: "fit-content",}}
                      >Thanks for Watching</h2>
              </div>
          </amp-story-grid-layer>


          {/* <!-- Swip-up Layer --> */}
          <amp-story-page-outlink layout="nodisplay">
              <a href="https://www.propreturns.com/">Propreturns.com</a>

          </amp-story-page-outlink>
              </amp-story-page> 

    </amp-story>
  </>
    );
}