import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/";
import { NewLVC } from "./screens/lvc/";
import CasosScreen from "./screens/casos";

function Router() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lvc/registro" element={<NewLVC />} />
                    <Route path="/casos/listar" element={<CasosScreen />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { Router }