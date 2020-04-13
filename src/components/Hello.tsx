import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

//state is never set to type {} used
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        FT app built with {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
