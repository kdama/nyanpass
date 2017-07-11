import * as React from "react";

import { Presets } from "../constants/Presets";
import { generateString } from "../utils/Password";

export class Root extends React.Component<{}> {
  public render() {
    return (
      <p>
        Your password is <code>{generate()}</code>
      </p>
    );
  }
}

function generate() {
  return generateString({
    includes: [Presets.LowerAlphabets, Presets.Numbers, Presets.UpperAlphabets],
    maxLength: 32,
    minLength: 32,
  });
}
