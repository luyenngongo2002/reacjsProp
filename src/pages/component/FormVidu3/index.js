import React from "react";
class FormVidu2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br/>
        <div value={this.state.value} onChange={this.handleChange}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <div>
      <input type="checkbox" id="topping" name="topping" value="Paneer" />Paneer
      </div>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br/>
          <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default FormVidu2;