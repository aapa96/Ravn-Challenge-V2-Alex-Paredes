import React from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/pages/person.scss';
import { ApiContext } from '../../Services/Api'
import { LoaderContext } from '../../context/loader'

export const PersonPage = () => {
    const api = React.useContext(ApiContext)
    const loader = React.useContext(LoaderContext)
    const [person, setPerson] = React.useState({});
    const { id } = useParams();
    const getData = async () => {
        loader.show();
        try {
            let _person = await api.getPerson(id);
            setPerson(_person.data.person)
            loader.hide();
        } catch (error) {
            loader.hide();
        }
    }
    React.useEffect(() => {
        getData();
    }, [id])
    return (
        <div className="personContainer">
            <div className="personCard">
                <section className="block">
                    {/* Name */}
                    <h2>{person.name}</h2>
                    {/* Divider */}
                    <div className="divider"></div>
                    {/* Profiñe */}
                    <h4>Profile</h4>
                    <div className="item">
                        <div className="key">Height:</div>
                        <div className="value">{person.height}</div>
                    </div>
                    <div className="item">
                        <div className="key">Mass:</div>
                        <div className="value">{person.mass}</div>
                    </div>
                    <div className="item">
                        <div className="key">Eye color:</div>
                        <div className="value">{person.eyeColor}</div>
                    </div>
                    <div className="item">
                        <div className="key">Hair color:</div>
                        <div className="value">{person.hairColor}</div>
                    </div>
                    <div className="item">
                        <div className="key">gender:</div>
                        <div className="value">{person.gender}</div>
                    </div>
                    <div className="item">
                        <div className="key">Skin color:</div>
                        <div className="value">{person.skinColor}</div>
                    </div>
                    <div className="item">
                        <div className="key">Birth year:</div>
                        <div className="value">{person.birthYear}</div>
                    </div>
                </section>
                {/* Homeworld */}
                <section className="block">
                    <div className="divider"></div>
                    <h4>Homeworld</h4>
                    {
                        person.homeworld && (
                            <React.Fragment>
                                <div className="item">
                                    <div className="key">Name:</div>
                                    <div className="value">{person.homeworld.name}</div>
                                </div>
                                <div className="item">
                                    <div className="key">Population:</div>
                                    <div className="value">{person.homeworld.population}</div>
                                </div>
                                <div className="item">
                                    <div className="key">Terrains:</div>
                                    <div className="value">{person.homeworld.terrains}</div>
                                </div>
                                <div className="item">
                                    <div className="key">Climates:</div>
                                    <div className="value">{person.homeworld.climates}</div>
                                </div>
                            </React.Fragment>
                        )
                    }
                </section>
                <section className="block">
                    <div className="divider"></div>
                    <h4>Vehicles</h4>
                    {
                        person?.vehicleConnection?.vehicles?.length > 0 &&
                        person.vehicleConnection?.vehicles.map((v, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="item">
                                        <div className="key">Name:</div>
                                        <div className="value">{v.name}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">Model:</div>
                                        <div className="value">{v.model}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">Vehicle Class:</div>
                                        <div className="value">{v.vehicleClass}</div>
                                    </div>
                                    {
                                        idx % 2 == 0 && idx >= 0 && (
                                            <div className="dividerChild"></div>
                                        )
                                    }
                                </React.Fragment>
                            )
                        }
                        )

                    }
                    {
                        person?.vehicleConnection?.vehicles?.length == 0 && (
                            <h6 className="notData" >Not data</h6>
                        )
                    }
                </section>
                <section className="block">
                    <div className="divider"></div>
                    <h4>StartShips</h4>
                    {
                        person?.starshipConnection?.starships?.length > 0 &&
                        person.starshipConnection?.starships.map((v, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="item">
                                        <div className="key">Name:</div>
                                        <div className="value">{v.name}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">Model:</div>
                                        <div className="value">{v.model}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">Starship Class:</div>
                                        <div className="value">{v.starshipClass}</div>
                                    </div>
                                    {
                                        idx % 2 == 0 && idx >= 0 && (
                                            <div className="dividerChild"></div>
                                        )
                                    }
                                </React.Fragment>
                            )
                        }
                        )

                    }
                    {
                        person?.starshipConnection?.starships?.length == 0 && (
                            <h6 className="notData" >Not data</h6>
                        )
                    }
                </section>
                <section className="block">
                    <div className="divider"></div>
                    <h4>Films</h4>
                    {
                        person?.filmConnection?.films?.length > 0 &&
                        person.filmConnection?.films.map((v, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className="item">
                                        <div className="key">Title:</div>
                                        <div className="value">{v.title}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">Director:</div>
                                        <div className="value">{v.director}</div>
                                    </div>
                                    <div className="item">
                                        <div className="key">release Date:</div>
                                        <div className="value">{v.releaseDate}</div>
                                    </div>
                                    {
                                        idx % 2 == 0 && idx >= 0 && (
                                            <div className="dividerChild"></div>
                                        )
                                    }
                                </React.Fragment>
                            )
                        }
                        )

                    }
                    {
                        person?.filmConnection?.films?.length == 0 && (
                            <h6 className="notData" >Not data</h6>
                        )
                    }
                    <div className="divider"></div>
                </section>
                <div className="clearBoth"></div>
            </div>
        </div>
    )
}
