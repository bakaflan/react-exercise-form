import React from 'react';
import './MyProfile.css'

class MyProfile extends React.Component {
    state = {
        name: 'Your name',
        gendar: 'Male',
        description: 'Description about yourself',
        check: false
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleGendarChange = event => {
        this.setState({
            gendar: event.target.value
        })
    }

    handleDescriptionChange = event => {
      this.setState({
        description: event.target.value
      })
    }

    handleCheckChange = event => {
      this.setState({
        check: event.target.checked
      })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.name, this.state.gendar, this.state.description, this.state.check);
    }

    render() {
        return <form className = 'form'>
          <h1>My Profile</h1>
            <div className = 'component'>
                <label htmlFor = 'name'>Name</label>
                <input type = 'text' id = 'name' value = {this.state.name} onChange = {this.handleNameChange}/>
            </div>
            <div className = 'component'>
                <label > Gendar</label>
                <select value = {this.state.gendar} onChange={this.handleGendarChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className = 'component'>
                <label htmlFor = 'description'>Description</label>
                <textarea id = 'description' value = {this.state.description} onChange = {this.handleDescriptionChange}></textarea>
            </div>
            <div className = 'component checkBoxDiv'>
              <input className='checkBox' type = 'checkbox' onChange = {this.handleCheckChange}></input>
              <label className = "checkText">I have read the terms of conduct</label>
            </div>
            <div calss = 'component'>
                <button className = 'button' type = 'submit' onClick = {this.handleSubmit} disabled={!this.state.name||!this.state.description||!this.state.gendar}>
                    submit
                </button>
            </div>
        </form>
    }
}

export default MyProfile;