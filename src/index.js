import React, { Suspense } from "react";
import { App } from "./app/App";
import "./index.css";
import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Suspense fallback={<div>Loading... </div>}>
  <App />
</Suspense>, rootElement);
} else {
  render(<Suspense fallback={<div>Loading... </div>}>
  <App />
</Suspense>, rootElement);
}
