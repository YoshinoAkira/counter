import React from "react";
import { createContext } from "react";
import AiueoContext from "../contexts/aiueo";
import Text from "../components/text";

class Aiueo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aiueo: "this is aiueo",
      text: "default",
      helloAiueo: this.helloAiueo,
      byeAiueo: this.byeAiueo,
    };
  }

  helloAiueo = () => this.setState({ text: "hello aiueo " });
  byeAiueo = () => this.setState({ text: "bye aiueo" });

  render() {
    return (
      <AiueoContext.Provider value={this.state}>
        <div>AIUEOO</div>
        <Text />
      </AiueoContext.Provider>
    );
  }
}

export default Aiueo;
