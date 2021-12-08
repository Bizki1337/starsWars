import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";

import {
	getPersonsResultsSelector,
} from 'library/common/selectors/personsSeletors';

const PersonPage = () => {
    const {id} = useParams();
    const [thisPerson, setThisPerson] = useState<any>();

	const persons = useSelector(getPersonsResultsSelector);

    useEffect(() => {
        if (persons) {
            setThisPerson(persons.find((item: any) => item.name === id));
        }
    }, [id])

    return (
        <div>
            {
                thisPerson && (
                    <div>
                        <div>Name: {thisPerson.name}</div>
                        <div>Gender: {thisPerson.gender}</div>
                        <div>Birth year: {thisPerson.birth_year}</div>
                        <div>Hair color: {thisPerson.hair_color}</div>
                        <div>Eye color: {thisPerson.eye_color}</div>
                        <div>Height: {thisPerson.height}</div>
                        <div>Mass: {thisPerson.mass}</div>
                        <div>Skin color: {thisPerson.skin_color}</div>
                    </div>
                )
            }
        </div>
    )
}

export default PersonPage;