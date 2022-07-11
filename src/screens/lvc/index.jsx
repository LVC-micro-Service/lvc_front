import React, { useState } from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { api, caso, inserir } from "../../api";
import { Form } from 'react-bootstrap'
import { etnia, sexoLista, sintomas as s } from "../../data";
import { useNavigate } from "react-router-dom";


function NewLVC() {
    const navigate = useNavigate();
    const data = new Date();
    const dataRegistro = data.getFullYear() + '-' + String(data.getUTCMonth()).padStart(2, '0') + '-' + String(data.getUTCDate()).padStart(2, '0');
    const [name, setName] = useState("");
    const [codigoIBGE, setCodigoIBGE] = useState("");
    const [nomeMae, setNomeMae] = useState("");
    const [hiv, setHiv] = useState(false);
    const [telefone, setTelefone] = useState("");
    const [peso, setPeso] = useState("");
    const [gestante, setGestante] = useState(false);
    const [numCartaoSus, setNumCartaoSus] = useState("");
    const [etniaEnum, setEtniaEnum] = useState();
    const [escolaridade, setEscolaridade] = useState("");
    const [sexo, setSexo] = useState("");
    const [enderecoCodigoIBGE, setEnderecoCodigoIBGE] = useState('');
    const [uf, setUf] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cep, setCep] = useState('');
    const [zona, setZona] = useState('');
    const [distrito, setDistrito] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    var sintomas = [];


    function enviarReq() {

        api.post('/caso/inserir', {

            dataRegistro,
            codigoIbge: codigoIBGE,
            'paciente': {
                name,
                nomeMae,
                hiv,
                telefone,
                peso,
                gestante,
                numCartaoSus,
                etniaEnum,
                escolaridade,
                sexo,
                endereco: {
                    codigoIBGE,
                    uf,
                    municipio,
                    cep,
                    zona,
                    distrito,
                    bairro,
                    logradouro,
                    complemento,
                    numeroCasa,
                    geoLocalizacao:
                    {
                        latitude: Number(latitude),
                        longitude: Number(longitude)
                    }
                },


            },
            sintomas
        }).then(function (res) {
            if (res.status === 200) {
                navigate('/casos/listar')
            }
        })

    }


    return (
        <div style={{ justifyContent: "center", alignSelf: "center", backGroundColor: "black", position: 'relative' }}>

            <h1> Registro de um caso </h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nome do Paciente</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do Paciente" value={name} onChange={(e) => { setName(e.target.value) }} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nome da Mãe</Form.Label>
                    <Form.Control type="text" placeholder="Nome da Mãe" value={nomeMae} onChange={(e) => { setNomeMae(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Telefone para contato" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="text" placeholder="Peso em KG" value={peso} onChange={(e) => { setPeso(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label  >Número cartão do sus</Form.Label>
                    <Form.Control type="text" placeholder="Numero do Cartão do SUS" value={numCartaoSus} onChange={(e) => { setNumCartaoSus(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label >Escolaridade</Form.Label>
                    <Form.Control type="text" placeholder="Numero do Cartão do SUS" value={escolaridade} onChange={(e) => { setEscolaridade(e.target.value) }} />
                </Form.Group>

                <Form.Group>
                    <Form.Check type="checkbox" label="Portador de HIV?" value={hiv} onChange={() => { setHiv(!hiv) }}>
                    </Form.Check>
                </Form.Group>

                <Form.Group>
                    <Form.Check type="checkbox" label="Gestante?" value={gestante} onChange={() => { setGestante(!gestante) }}>
                    </Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect"> Etnia</Form.Label>
                    <Form.Select id="disabledSelect" onChange={(e) => {
                        var a;
                        etnia.forEach((etnia) => {
                            if (etnia.name === e.target.value) {
                                return a = etnia.id;
                            }
                        });
                        setEtniaEnum(a)

                    }}>
                        {etnia.map(etnia => {
                            return (
                                <option key={etnia.id}> {etnia.name} </option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect"> Sexo</Form.Label>
                    <Form.Select id="disabledSelect" onChange={(e) => {
                        var a;
                        sexoLista.forEach((sexo) => {
                            if (sexo.name === e.target.value) {
                                return a = sexo.id;
                            }
                        });

                        setSexo(a)

                    }}>
                        {sexoLista.map(sexo => {
                            return (
                                <option key={sexo.id}> {sexo.name} </option>
                            )
                        })}


                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Código IBGE</Form.Label>
                    <Form.Control type="text" placeholder="Codigo IBGE" value={codigoIBGE} onChange={(e) => { setCodigoIBGE(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" placeholder="Numero do Cartão do SUS" value={uf} onChange={(e) => { setUf(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Município</Form.Label>
                    <Form.Control type="text" placeholder="Municipio de Origem" value={municipio} onChange={(e) => { setMunicipio(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="Codigo IBGE" value={cep} onChange={(e) => { setCep(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Rua" value={logradouro} onChange={(e) => { setLogradouro(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="Numero da casa" value={numeroCasa} onChange={(e) => { setNumeroCasa(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Zona</Form.Label>
                    <Form.Control type="text" placeholder="Codigo IBGE" value={zona} onChange={(e) => { setZona(e.target.value) }} />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Distrito</Form.Label>
                    <Form.Control type="text" placeholder="Distrito" value={distrito} onChange={(e) => {
                        setDistrito(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" placeholder="Bairro"
                        value={bairro}
                        onChange={(e) => {
                            setBairro(e.target.value)
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="Casa, APTO, Condominio..." value={complemento} onChange={(e) => {

                        setComplemento(e.target.value)
                    }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lagitude</Form.Label>
                    <Form.Control type="text" placeholder="Latitude" value={latitude} onChange={(e) => {
                        setLatitude(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control type="text" placeholder="Longitude" value={longitude} onChange={(e) => {
                        setLongitude(e.target.value)
                    }} />
                </Form.Group>

                <Button

                    onClick={() => {


                        const rand = Math.floor(Math.random() * 10)
                        sintomas.push(s[rand])


                    }}

                >Adicionar Sintoma</Button>

                <Button

                    onClick={() => {
                        enviarReq();
                    }}

                >Enviar</Button>

            </Form>
        </div >
    )
}

export { NewLVC }