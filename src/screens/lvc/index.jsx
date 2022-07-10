import React, { useState } from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { api, caso, inserir } from "../../api";


function enviaForm() {
    api.post(caso + '' + inserir, {
        "dataRegistro": "",
        "codigoIbge": "",
        "paciente":
        {
            "name": "",
            "nomeMae": "",
            "hiv": "",
            "telefone": "",
            "peso": "",
            "gestante": "",
            "numCartaoSus": "",
            "etniaEnum": "",
            "escolaridade": "",
            "sexo": "",
            "endereco":
            {
                "codigoIBGE": "",
                "uf": "",
                "municipio": "",
                "cep": "",
                "zona": "",
                "distrito": "",
                "bairro": "Vila Barrinha",
                "logradouro": "rua",
                "complemento": "rua de chão",
                "numeroCasa": "",
                "geoLocalizacao":
                {
                    "latitude": "",
                    "longitude": ""
                }
            }
        },
        "sintomas": [{ "id": 5 },
        { "id": 8 }]
    }).then(function (res) {
        console.log(res.status)
    })
}


function NewLVC() {
    const [name, setName] = useState("");
    const [dataRegistro, setDataRegistro] = useState("");
    const [codigoIbge, setCodigoIbge] = useState("");
    const [nomeMae, setNomeMae] = useState("");
    const [hiv, setHiv] = useState("");
    const [telefone, setTelefone] = useState("");
    const [peso, setPeso] = useState("");
    const [gestante, setGestante] = useState("");
    const [numCartaoSus, setNumCartaoSus] = useState("");
    const [etniaEnum, setEtniaEnum] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [sexo, setSexo] = useState("");
    const [enderecoCodigoIBGE, setEnderecoCodigoIBGE] = useState('');
    const [uf, setUf] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [cep, setCep] = useState('');
    const [zona, setZona] = useState('');
    const [distrito, setDistrito] = useState('');
    const [bairro, setBairro] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button style={{ color: "black", backgroundColor: "green" }} onClick={() => {


                }}>Enviar infos</Button>
            </label>
        </form>
    )
}

export { NewLVC }