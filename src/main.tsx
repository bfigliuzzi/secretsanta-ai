import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";

// Import debug tools in development
if (import.meta.env.DEV) {
  import("./utils/debug.ts");
}

render(<App />, document.getElementById("app")!);
