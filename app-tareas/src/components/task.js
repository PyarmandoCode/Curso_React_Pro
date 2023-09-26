import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import React, { Component } from "react";


//Programacion Orientada a Objetos
class Tasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: "",
            list: []
        }
    }

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder"
                    }}

                >
                    TABLERO DE TAREAS
                </Row>
                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Agregar Tarea"
                                size="lg"

                            />

                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                >
                                    Adicionar
                                </Button>
                            </InputGroup>
                           </InputGroup> 



                    </Col>

                </Row>

            </Container>
        )
    }


}

export default Tasks;