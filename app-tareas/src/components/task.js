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

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }



    addTasks() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            //Sintaxis de propagacion
            const list = [...this.state.list];
            //Push añade elementos al Array
            list.push(userInput);
            //Reseteo los valores
            this.setState({
                list,
                userInput: "",
            });


        }
    }

    deleteTask(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);
        this.setState({
            list: updateList
        })
    }

    editTask = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt('Ingrese el Nuevo valor de la Task');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updateTodos = [...todos]
            updateTodos[index].value = editedTodo
            this.setState({
                list: updateTodos,
            });

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
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }

                            />

                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addTasks()}
                                >
                                    Adicionar
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ListGroup.Item
                                            variant="primary"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}

                                        >
                                            {item.value}
                                            <span>
                                                <Button
                                                    style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() => this.deleteTask(item.id)}

                                                >
                                                    Eliminar

                                                </Button>

                                                <Button
                                                    style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={()=>this.editTask(index)}

                                                >
                                                    Editar

                                                </Button>
                                            </span>
                                        </ListGroup.Item>

                                    </div>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        )
    }


}

export default Tasks;