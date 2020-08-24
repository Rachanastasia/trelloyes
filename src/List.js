import Card from './Card'
import React from 'react';

function List(props){
    

    return (
    <section className = 'List'>
        <header className='List-cards'>{props.header}</header>
    <div className='List-cards'>{props.card.map(card => <Card key={card.id} title={card.title} content={card.content}/>)}
    </div>
    </section>


    )

//section class 'list'


}






export default {List};