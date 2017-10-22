import React, { Component } from "react";

import CodeMirror from "@skidding/react-codemirror";

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/mode/xml/xml");
require("codemirror/mode/markdown/markdown");
require("codemirror/theme/solarized.css");

class Editor extends Component {
  updateCode = e => {
    this.props.onChange(e);
  };

  render() {
    var options = {
      mode: "markdown",
      theme: "solarized"
    };
    return (
      <CodeMirror
        value={this.props.value}
        onChange={this.updateCode}
        options={options}
        height="100%"
      />
    );
  }
}

export default Editor;
