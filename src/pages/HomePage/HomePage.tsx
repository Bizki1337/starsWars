import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

import {
	getPersonsSelector,
	getPersonsPendingSelector,
	getPersonsErrorSelector
} from 'library/common/selectors/personsSeletors';

import { fetchPersonsRequest } from "library/common/actions/personsActions";

const HomePage = () => {
    const dispatch = useDispatch();
	
	const persons = useSelector(getPersonsSelector);
	const personsPending = useSelector(getPersonsPendingSelector);
	const personsError = useSelector(getPersonsErrorSelector);
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		if (!!inputValue) {
			dispatch(fetchPersonsRequest(inputValue));
		}
      // setResults(allPersons.results)
	}, [inputValue]);

	const handleChange = (e: any) => {
		setInputValue(e.target.value);
		console.log(e.target.value);
	}

    const handleClick = (id: string) => {
        const visitedPages = localStorage.getItem('visitedPages')
        const newVisitedPages = [];
        if (!visitedPages) {
            newVisitedPages.push(id);
            localStorage.setItem('visitedPages', JSON.stringify(newVisitedPages))
        } else {
            const localStorageRef = JSON.parse(localStorage.getItem('visitedPages')|| '{}');
            const isIdAlreadyInLocalStorage = localStorageRef.some((item: string) => item === id)
            if (!isIdAlreadyInLocalStorage) {
                localStorageRef.push(id)
                localStorage.setItem('visitedPages', JSON.stringify(localStorageRef))
            }
        }
    }

    const visitedPages = JSON.parse(localStorage.getItem('visitedPages')|| '{}')
    console.log('visitedPages',visitedPages)

    return (
        <div>
            <header className="App-header">
                <input 
                    type='text'
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                />
                {
                    personsPending ? (
                        <div>Loading...</div>
                    ) : personsError ? (
                        <div>Some Error...</div>
                    ) : (
                        persons.results && (
                            persons.results.map((item: any, index: number) => (
                                <Link 
                                    key={`names-${index}`}
                                    to={`/${item.name}`}
                                    onClick={(e) => handleClick(item.name)}
                                >
                                    {item.name}
                                </Link>
                            ))
                        )
                    )
                }
            <div>
                <h2>Visited pages</h2>
                {
                    visitedPages.length ? (
                        visitedPages.map((item: string) => (
                            <div key={`visitedPages-${item}`}>{item}</div>
                        ))
                    ) : (
                        <div>There are no visited pages now</div>
                    )
                }
            </div>
            </header>
        </div>
    )
}

export default HomePage;