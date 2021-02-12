import React from 'react'
import '../styles/components/loader.scss';


export const LoaderComponent = (props) => {
    return (
        <React.Fragment>
            <div className="myLoader">
                <div className="cs-loader">
                    <div className="cs-loader-inner">
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                    </div>
                </div>
            </div>
            {
                props.children
            }
        </React.Fragment>
    )
}