import React, { useContext } from 'react';
import { MyContext } from '../../../items/context';
import { CheckIfProvides, GetProviders } from '../../../items/state';
import { Card, Accordion } from 'react-bootstrap'


export function RenderFilter({ typeState, filterToggle, showFilter, setIdState, idState, setTypeState }) {

    const context = useContext(MyContext);

    function Filter() {
        return <>
            <Accordion defaultActiveKey="1" >
                <Card                            
                    style={{backgroundColor: '#010103', border: '2px solid #FFC107', color:'white'}}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Filter
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> 
                            <h5>Services:</h5>
                            <ul>
                                {context.listOfTypes.map((item) => {
                                    if (CheckIfProvides(idState, item.type) === false) {
                                        return <li key={item.title}>
                                            <label htmlFor="">{item.title}
                                                <input
                                                    type="radio"
                                                    name="types_filter"
                                                    disabled />
                                            </label>
                                        </li>
                                    } else
                                        if (item.type === typeState) {
                                            return <li key={item.title}>
                                                <label htmlFor="">{item.title}
                                                    <input
                                                        type="radio"
                                                        name="types_filter"
                                                        onChange={() => setTypeState(item.type)}
                                                        defaultChecked={true} />
                                                </label>
                                            </li>
                                        } else return <li key={item.title}>
                                            <label htmlFor="">{item.title}
                                                <input
                                                    type="radio"
                                                    name="types_filter"
                                                    onChange={() => setTypeState(item.type)} />
                                            </label>
                                        </li>
                                    }
                                )}
                            </ul>
                            <h5>All providers:</h5>
                            <ul>
                                {GetProviders(typeState).map((item) => {
                                    if (item.id === idState) {
                                        return <li key={item.id}>
                                            <label htmlFor="">{item.name}
                                                <input
                                                    type="radio"
                                                    name="provider_filter"
                                                    onChange={() => setIdState(item.id)}
                                                    defaultChecked={true} />
                                            </label>
                                        </li>
                                    } else return <li key={item.id}>
                                        <label htmlFor="">{item.name}
                                            <input
                                                type="radio"
                                                name="provider_filter"
                                                onChange={() => setIdState(item.id)} />
                                        </label>
                                    </li>
                                }
                                )}
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    }
    return <>
    <Filter/>

    </>
}