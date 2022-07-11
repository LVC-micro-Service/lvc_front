import { api } from "../../api";
import React, { useEffect, useState } from 'react'
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/esm/ListGroup";
import './styles.css'
import { Button } from "@material-ui/core";
import Modal from 'react-bootstrap/Modal';


function CasosScreen() {
    const [casos, setCasos] = useState([]);
    const [show, setShow] = useState(false);
    const [caso, setCaso] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        api.get('/caso/listar').then(response => {
            console.log(response.data)
            setCasos(response.data);
        })
    }, [])
    return (


        <div className="container">



            <ListGroup>
                {
                    casos.map((caso) => {
                        return (
                            <div className="listagem-casos">
                                <a>{caso.CasoCompleto.Paciente.name}</a>
                                <Button className="button-view-case" onClick={() => {
                                    handleShow()
                                    setCaso(caso)
                                }}> Visualizar</Button>
                            </div>
                        )
                    })
                }
            </ListGroup>


            {
                caso.CasoCompleto != undefined && (
                    <>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{caso.CasoCompleto.Paciente.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>

                                    <div className="paciente-infos-modal">

                                        <h5 >Paciente</h5>
                                        <p>
                                            {caso.CasoCompleto.Paciente.name}
                                        </p>
                                        <p>
                                            {caso.CasoCompleto.Paciente.telefone}
                                        </p>
                                        <p>
                                            {caso.CasoCompleto.Paciente.numCartaoSus}
                                        </p>
                                    </div>

                                    <h5>Sintomas</h5>
                                    {
                                        caso.CasoCompleto.Sintomas.map((sintoma) => {
                                            return (
                                                <div className="sintomas-info-modal">
                                                    <a style={{ marginLeft: 10 }}>{sintoma.name}</a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                <div className="endereco-paciente-infos-modal">

                                    <h5 >Endereco</h5>
                                    <p>
                                        {caso.CasoCompleto.Endereco.logradouro}     -      {caso.CasoCompleto.Endereco.bairro}   -     {caso.CasoCompleto.Endereco.municipio}  / {caso.CasoCompleto.Endereco.uf}

                                    </p>
                                </div>

                                <div>
                                    <h5>Tratamentos</h5>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Fechar
                                </Button>
                                <Button variant="primary">Editar</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                )
            }


        </div>
    )
}


export default CasosScreen;




