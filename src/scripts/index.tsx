import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "./components/Root";

const node = document.createElement("div");
document.body.appendChild(node);

ReactDOM.render(<Root />, node);
