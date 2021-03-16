import React, { Component } from 'react';
import Appcss from './App.module.css';
import Card from './Components/Card/Card';
import Form from './Components/Form/Form';


const style ={
  color: 'green',
  backgroundColor: 'yellow'
}

class App extends Component {
  
  state = {
    cards: [
      {image : 'https://images.unsplash.com/photo-1615292026763-3af006e59a67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Ola Dybul', desc: 'ye laude jaisa naam kine rkkha tera re...'},
      {image : 'https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Rui Silvestre', desc: 'ye laude jaisa naam kine rkkha tera re...'}
    ]
  }

  OnAddCard = (newCard) => {
    let CopyCards = [...this.state.cards];
    CopyCards.push(newCard);    
    this.setState({cards: CopyCards});
  }

  onDeleteCard = (index) => {
    let CopyCards = [...this.state.cards];
    CopyCards.splice(index, 1);
    this.setState({cards: CopyCards});
  }
  

  render() {
    
      // let cardList = this.state.cards.map( (c, index) => {
      //   return <Card deleteCard={this.onDeleteCard.bind(this, index)} key={index} card1={c} />
      // })

      let cardList = this.state.cards.map( (c, index) => {
        return <Card deleteCard={() => this.onDeleteCard(index)} key={index} card1={c} />
      })

    return (
      <section className="App" style={style}>

      <Form addCard={this.OnAddCard} />  

       <br/><hr/><br/>

        <div className={Appcss.card_container}>
         {cardList}
        </div>
        
      </section>
    )
  }
}

export default App;