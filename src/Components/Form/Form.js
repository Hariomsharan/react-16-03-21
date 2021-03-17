import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Form extends Component {

  static s = {
    componentName: 'Form',
    desc: 'Takes the input of Card'
  }

  

    state = {
        title: '',
        desc: '',
        image: ''
    }

    OnChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
    
      OnSubmitHandler = async (event) =>{
        event.preventDefault();

        if(this.state.title.trim() && this.state.desc.trim() && this.state.image.trim()){
          let {image, title, desc} = this.state;
          let newCard = {image, title, desc};
          await this.props.addCard(newCard);
          this.setState({title: '', desc: '', image: ''});
        } else {
          window.alert('*all fields must not be empty!')
        }

      
      }


    render() {

      console.log(this.props)
      console.log(Form.s)

        return (
            <form onSubmit={this.OnSubmitHandler} >
        <input 
            onChange={this.OnChangeHandler}
            value={this.state.image}
            name="image"
            type="text" 
            placeholder="image url"  />
          <input 
            onChange={this.OnChangeHandler}
            value={this.state.title}
            name="title"
            type="text" 
            placeholder="title"  />

            <input 
            onChange={this.OnChangeHandler}
            value={this.state.desc}
            name="desc"
            type="text" 
            placeholder="desc"  />
            <button>Add Card</button>
      </form>
        )
    }
}


Form.propTypes = {
  addCard: PropTypes.func
}

Form.defaultProps = {
  data: 'This is fake prop'
}

export default Form;