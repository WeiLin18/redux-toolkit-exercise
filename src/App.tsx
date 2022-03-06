import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
