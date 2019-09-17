import React, { Component } from "react";
import "./navio.css";

class Navio extends Component {
  constructor() {
    super();
    this.state = { datos: [] };
  }

  render() {
    var {datos} = this.state;
    return (
      <div>
        <div id="navio">
<script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script src="https://unpkg.com/popper.js@1.14/dist/umd/popper.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/navio/dist/navio.min.js"></script>

<script>
var nv = navio(d3.select("#navio"), 600);

d3.csv(YOUR_DATA, function (err, data) {
  if (err) throw err;

  // NAVIO Step 2. Load your data!
  nv.data(data);

  // NAVIO Step 3. Detect your attributes (or load them manually)
  nv.addAllAttribs();

  // Optional, setup a selection callback
  nv.updateCallback( selected => console.log("selected in Navio: ", selected.length));
});
</script>
      </div>
      </div>
    );
  }
}

export default Navio;
