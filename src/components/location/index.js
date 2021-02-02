import React from "react";

const Location = () => {
  return (
    <div className={"location_wrapper"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3354.3378319108747!2d-96.8078569!3d32.7833005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe%20Dallas%20World%20Aquarium!5e0!3m2!1sen!2sru!4v1612293124981!5m2!1sen!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={"location_tag"}>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
