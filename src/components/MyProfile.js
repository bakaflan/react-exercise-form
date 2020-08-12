import React from 'react';

class MyProfile extends React.Component {
    state = {
        name: '',
        gendar: 'male',
        description: '',
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
            <div>
                <label htmlFor = 'name'>Name:
                    <input type = 'text' id = 'name' value = {this.state.name} onChange = {this.handleNameChange}/>
                </label>
            </div>
            <div>
                <label > Gendar
                    <select value = {this.state.gendar} onChange={this.handleGendarChange}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor = 'description'>Description:
                    <input type = 'text' id = 'description' value = {this.state.description} onChange = {this.handleDescriptionChange}/>
                </label>
            </div>
            <div>
              <input type = 'checkbox' onChange = {this.handleCheckChange}></input>
              <label>I have read the terms of conduct</label>
            </div>
            <div>
                <button type = 'submit' onClick = {this.handleSubmit} disabled={!this.state.name||!this.state.description||!this.state.gendar}>
                    submit
                </button>
            </div>
        </form>
    }
}

export default MyProfile;