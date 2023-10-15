import { Presets, generateString } from "../lib/Password";

const App = () => {
  return (
    <p>
      Your password is <code>{generate()}</code>
    </p>
  );
};

function generate() {
  return generateString({
    includes: [Presets.LowerAlphabets, Presets.Numbers, Presets.UpperAlphabets],
    maxLength: 32,
  });
}

export default App;
