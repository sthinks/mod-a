import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
