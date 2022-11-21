import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

export const RemoteWidget = (): ReactElement => {
  return <div>Hello from Remote Widget.</div>
}

export function render(container: HTMLElement) {
  ReactDOM.render(<RemoteWidget />, container);
}

export default RemoteWidget;
