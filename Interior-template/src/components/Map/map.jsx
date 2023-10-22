import React from "react";

const Map = () => {
  return <>
  <section>
        <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Maps"
        ></iframe>
        <a href="https://connectionsgame.org/">Connections Puzzle</a>
      </div>
      <style>
        {`.mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 300px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          width: 100%;
          height: 300px;
        }
        .gmap_iframe {
          height: 400px!important;
        }`}
      </style>
    </div>
        </section>
  </>;
};

export default Map;
