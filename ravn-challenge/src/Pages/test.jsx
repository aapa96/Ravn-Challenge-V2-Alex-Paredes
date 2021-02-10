import React from 'react'

import { ApiContext, ApiProvider } from '../Services/Api';
export const Test = () => {
    const api = React.useContext(ApiContext);
    React.useEffect(async () => {
        const test = await api.getAllPeople()
        console.log(test);
    }, [])
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
