import Galeriaimagenes from "./galeriaimagenes";

import auto1 from '../assets/auto1.jpeg';
import auto2 from '../assets/auto2.jpeg';
import auto3 from '../assets/auto3.jpeg';

const cards = [
    {
        id: 1,
        name: 'Auto1',
        image: auto1,
        price: 100.20
    },
    {
        id: 2,
        name: 'Auto2',
        image: auto2,
        price: 100.20
    },
    {
        id: 3,
        name: 'Auto3',
        image: auto3,
        price: 100.20
    },
]


function Autos() {
    return (

        <div className="container">
            <div className="row">
                {
                    cards.map(card =>

                        <div className="col-md-4" key={card.id}>
                            <Galeriaimagenes name={card.name} image={card.image} />

                        </div>
                    )

                }

            </div>
        </div>

    )
}

export default Autos;

