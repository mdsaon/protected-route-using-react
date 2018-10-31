import React, { Component } from 'react';

class Main extends Component {
    constructor(props){
        super(props);
            this.state={
                skills: "",
            }
    }
    onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]:value
        });
      };
      handleAddInput = (e) =>{
        e.preventDefault();
        this.props.handleAddInput(this.state);
      }
  render() {
    let items = this.props.users.map((item,index) => <li key={index}>Your Skills:{item.skills}</li>);
    return (
      <div className="App-form">
         <form>

        <label>
            Skills:
            <input type="text" 
                name="skills"
                value={this.state.skills}
                onChange={this.onChange} />
        </label>
        <button onClick={this.handleAddInput}>Submit</button>
        </form>
        {items}
      </div>
    );
  }
}

export default Main;
