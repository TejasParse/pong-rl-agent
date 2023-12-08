import { IpynbRenderer } from "react-ipynb-renderer";

import "react-ipynb-renderer/dist/styles/monokai.css";

import ipynb from "./RLProject.ipynb";

function App() {
  return (
    <div className="text-3xl">
      <IpynbRenderer
        ipynb={ipynb}
      />
    </div>
  );
}

export default App;
