import React from 'react'
import '../styles/components/header.scss';


export const HeaderComponent = (props) => {
    return (
        <React.Fragment>
            <div className="myHeader">
                <div className="title">
                    Star wars API
                </div>
            </div>
            {
                props.children
            }
        </React.Fragment>
    )
}