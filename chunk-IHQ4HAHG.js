import {
  require_jsx_runtime
} from "./chunk-WKPQ4ZTV.js";
import {
  require_react
} from "./chunk-BG45W2ER.js";
import {
  __toESM
} from "./chunk-HXA6O6EE.js";

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/number/dist/index.mjs
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

export {
  useDirection,
  clamp
};
//# sourceMappingURL=chunk-IHQ4HAHG.js.map
