import React from 'react'
import { LoaderComponent } from '../Components/Loader';
export const LoaderContext = React.createContext(null);
export const LoaderProvider = (props) => {
    const [isVisible, setisVisible] = React.useState(false);
    const show = () => {
        setisVisible(true);
    }
    const hide = () => {
        setTimeout(() => {
            setisVisible(false);
        }, 1000);
    }
    return (
        <LoaderContext.Provider value={{ show, hide }}>
            {
                isVisible && (
                    <div className="loader">
                        <div className="bgLoader"></div>
                        <div className="component">
                            <LoaderComponent />
                        </div>
                    </div>
                )
            }
            {
                props.children
            }
        </LoaderContext.Provider>
    )
}
