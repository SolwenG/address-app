import { useEffect, useState } from 'react';
import './app.css';
import Address from './components/address-api/Address';
import Map from './components/map/Map';

const App = () => {
    const [coordinates, setCoordinates] = useState([48.858370, 2.294481]);
    const [coordX, setCoordX] = useState(48.858370);
    const [coordY, setCoordY] = useState(2.294481);

    useEffect(() => {
        setCoordinates([coordX, coordY]);
    }, [coordX, coordY]);

    return (
        <div className="App">
            <Address onCoordinatesChange={(newCoordX, newCoordY) => {
                setCoordX(newCoordX);
                setCoordY(newCoordY)
            }} />
            <Map coord={coordinates} />
        </div>
    )
}

export default App;
