import React from 'react'
import { CardComponent } from '../../Components/Card';
import { FadeInSection } from '../../Components/FadeIn';
import { ApiContext } from '../../Services/Api'
import '../../styles/pages/people.scss';
import { useHistory } from "react-router-dom";
import { LoaderContext } from '../../context/loader';

export const PeoplePage = (props) => {
    let history = useHistory();
    const api = React.useContext(ApiContext);
    const loader = React.useContext(LoaderContext);
    const [people, setPeople] = React.useState([]);
    const getData = async () => {
        loader.show();
        try {
            var _people = await api.getAllPeople();
            setPeople(_people.data.allPeople.people)
            loader.hide();
        } catch (error) {
            loader.hide();
        }
    }
    const routerClick = (id) => {
        history.push(`/person`);
    }
    React.useEffect(() => {
        let isHere = true;
        if(isHere){
            getData();
        }
        return () => {
            isHere = false;
        }
    }, [])
    console.log(people);
    return (
        <div className="peopleContainer">
            {
                people.map((value, index) => {
                    return (
                        <div key={index} className="peopleCard">
                            <FadeInSection>
                                <CardComponent data={value} index={index} navigate={routerClick} />
                            </FadeInSection>
                        </div>
                    )
                })
            }
        </div>
    )
}
