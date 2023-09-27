import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function PokemonApp() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.results);
                console.log(data.results);
            })
            .catch((error) => {
                console.log("Ha Ocurrido un Error", error)
            });
    }, []);

    return (
        <Container>
            <h1>Lista de Pokemones</h1>
            <Row>
                {pokemons.map((pokemon, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            />
                            <Card.Body>
                                <Card.Title>{pokemon.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )

}

export default PokemonApp;