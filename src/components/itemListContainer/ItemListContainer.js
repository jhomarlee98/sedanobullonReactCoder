import React from 'react'
import {Card,Button} from 'react-bootstrap'


function ItemListContainer({greeting}) {
    return (
        <>
            <Card>
                <Card.Header>Bienvido {greeting}</Card.Header>
                <Card.Body>
                    <Card.Title>¿Que deseas aprender hoy?</Card.Title>
                    <Card.Text>
                        Tenemos la mejor selección de cursos para tí <span className="resalted-de">{greeting}</span>
                    </Card.Text>
                    <button className="btn btn-de" variant="primary">Ver Mas</button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemListContainer

