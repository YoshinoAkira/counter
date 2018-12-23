import React from "react";
import AiueoContext from "../contexts/aiueo";

class Text extends React.Component {
  render() {
    return (
      <AiueoContext.Consumer>
        {({ text, helloAiueo, byeAiueo }) => {
          return (
            <React.Fragment>
              <div>{text}</div>
              <button onClick={helloAiueo}>hello</button>
              <button onClick={byeAiueo}>bye</button>
            </React.Fragment>
          );
        }}
      </AiueoContext.Consumer>
    );
  }
}

export default Text;
