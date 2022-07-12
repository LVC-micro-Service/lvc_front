import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/";
import { NewLVC } from "./screens/lvc/";
import CasosScreen from "./screens/casos";
import { TratamentoForm } from "./screens/tratamento";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lvc/registro" element={<NewLVC />} />
                <Route path="/casos/listar" element={<CasosScreen />} />
                <Route path="/tratamento/inserir" element={<TratamentoForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export {Router}