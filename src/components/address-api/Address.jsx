import { useEffect, useState } from 'react';
import { getRequest } from '../../utils/request';
import './address.css';

const Address = ({ onCoordinatesChange }) => {
    const [ad, setAd] = useState("");
    const [features, setFeatures] = useState([]);

    const cleanText = (input) => {
        input = input.toLocaleLowerCase().replaceAll(/[^\p{Ll}\p{Nd}]+/gu, "+");
        return input;
    }

    const handleInput = (e) => {
        setAd(cleanText(e.target.value));
    }

    useEffect(() => {
        if (ad.length > 3) {
            const url = new URL('https://api-adresse.data.gouv.fr/search/');
            url.searchParams.set("q", ad);

            getRequest(url)
                .then(json => {
                    json.features;

                    const coordX = json.features.length > 0
                        ? json.features[0].geometry.coordinates[0]
                        : 48.858370;

                    const coordY = json.features.length > 0
                        ? json.features[0].geometry.coordinates[1]
                        : 2.294481;
                        
                    onCoordinatesChange(coordX, coordY);

                    setFeatures((json.features))
                })
        }
    }, [ad, onCoordinatesChange]);

    return (
        <main className='address'>
            <header>
                <h2>Localisateur d'adresses</h2>
                <hr />
            </header>

            <section>
                <div>
                    <input list='features' placeholder='Entrez une adresse...'
                        onInput={handleInput} />
                </div>

                <datalist id='features'>
                    {
                        features &&
                        features.map((f, i) => {
                            return <option key={i}>{f.properties.label}</option>
                        })
                    }
                </datalist>
            </section>
        </main>
    )
}

export default Address;