import React, { useState, useEffect } from 'react'
// import database from '../firebase';
import TinderCards from 'react-tinder-card'
import './TinderCard.css'
import database from '../firebase';
import { onSnapshot, collection, query } from "firebase/firestore";

function TinderCard() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const q = query(collection(database, 'people'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setPeople(querySnapshot.docs.map(doc => doc.data()));
        });
    
        return () => {
            unsubscribe(); // Cleanup function unsubscribes from the snapshot listener
        };
    }, []);


    return (
        <div className="tinder_card_container">
            {people.map((person) => (
                <TinderCards
                    className='swipe_card'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCards>
            ))}
        </div>
    )
}

export default TinderCard