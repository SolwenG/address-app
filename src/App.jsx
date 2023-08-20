import { useState } from 'react';
import './app.css';
import Address from './components/address-api/Address';
import Map from './components/map/Map';

const App = () => {
    const [coordinates, setCoordinates] = useState([48.858370, 2.294481]);

    return (
        <div className="App">
            <Address />
            <Map coord={coordinates} />
        </div>
    )
}

export default App;
