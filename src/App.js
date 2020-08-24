import React from 'react';
import List from './List';
import { render } from '@testing-library/react';


class App extends Component { 
  
  static defaultProps = { 
    store: { lists: [], allCards: {} } 
   
  };

};

 render(){
      const{store} = this.props;
      return (
      <main>
        <header className ="trelloyes">Trelloyes</header>
          <div className ="app-list">
            {store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])}/>);}
        </div>
        
        </main>
        )
    };


 

export default App;