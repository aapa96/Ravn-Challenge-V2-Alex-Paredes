import React from 'react'
import '../styles/components/card.scss';
import { Link } from 'react-router-dom';

export const CardComponent = ({ data, index, navigate }) => {
    return (
        <React.Fragment>
            <div className="myCard">
                <h3>{index + 1} {data.name}</h3>
                <table>
                    <tbody>
                        <tr><td>Gender:</td><td>{data.gender}</td></tr>
                        <tr><td>Eye color:</td><td>{data.eyeColor}</td></tr>
                        <tr><td>Hair color:</td><td>{data.hairColor}</td></tr>
                        <tr><td>Skin color:</td><td>{data.skinColor}</td></tr>
                    </tbody>
                </table>
                <div className="btns">
                    <Link to={`person/${data.id}`} className="btn" onClick={() => {

                    }}>View</Link>
                </div>
            </div>
        </React.Fragment>
    )
}