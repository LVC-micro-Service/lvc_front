import { useState } from "react"
import { Form } from "react-bootstrap"
import { api, inserirROUTE, tratamentoROUTE } from "../../api"
import { useNavigate } from "react-router-dom"
import { drogas } from '../../data/'
import { getCasoGlobal, setCasoGlobal } from "../../data/tratamento"


export function TratamentoForm() {
    const navigate = useNavigate();
    const [droga, setDroga] = useState("")
    const [dosagem, setDosagem] = useState("")
    const data = new Date();
    const dataRegistro = data.getFullYear() + '-' + String(data.getUTCMonth()).padStart(2, '0') + '-' + String(data.getUTCDate()).padStart(2, '0');
    const caso = getCasoGlobal()

    async function inserirTratamento() {


        api.post(tratamentoROUTE + "/" + inserirROUTE + "/" + caso.CasoCompleto.id, {
            tratamento: {
                "dataRegistro": dataRegistro,
                "droga":droga.name,
                "dosagem": Number(dosagem)
            }
        }).then(function (res) {
            if (res.status === 200) {
                setCasoGlobal({})
                navigate('/')
            }
            alert("Concluído com sucesso!")
        }).catch(function (err) {
            console.log(err)
            alert("Algo de errado não está certo")
        })

    }


    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Dosagem</Form.Label>
                    <Form.Control type="text" placeholder="20ml" value={dosagem} onChange={(e) => { setDosagem(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect"> Droga Utilizada</Form.Label>
                    <Form.Select id="disabledSelect" onChange={(e) => {
                        var a;
                        drogas.forEach((droga) => {
                            if (droga.name === e.target.value) {
                                return a = droga;
                            }
                        });
                        setDroga(a);

                    }}>
                        {drogas.map(droga => {
                            return (
                                <option key={droga.id}> {droga.name} </option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>



            </Form>

            <button onClick={() => { inserirTratamento() }}>
                Inserir
            </button>

        </div >
    )
}