import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/";
import { NewLVC } from "./screens/lvc/";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lvc/registro" element={<NewLVC />} />
            </Routes>
        </BrowserRouter>
    )
}

export {Router}