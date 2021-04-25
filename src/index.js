import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import {store} from './redux/index';
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)