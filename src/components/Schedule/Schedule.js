import React, { Component } from "react";

class Scbedule extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  componentDidMount() {
    this.addScript();
  }

  addScript() {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);
  }

  render() {
    return (
      <healcode-widget
        data-type="schedules"
        data-widget-partner="object"
        data-widget-id="b31347573881"
        data-widget-version="1"
      ></healcode-widget>
    );
  }
}

export default Scbedule;
