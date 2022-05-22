import React from "react";
class FormVidu2 extends React.Component {
    constructor(props) {
<<<<<<< HEAD
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
=======
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form div="container"onSubmit={this.handleSubmit}>
                <div c>
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange}/>
                </div>
                
                <div class="mb-3" value={this.state.value} onChange={this.handleChange}>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                </div>
                <div class="mb-3">
                    <input type="checkbox" id="topping" name="topping" value="Paneer" />Paneer
                </div >
                <div class="mb-3">
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
               
                <div class="mb-3">
                    <label>
                        Essay:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        );
    }
}
>>>>>>> d96b9b4f4fd85fc88ec4490de4a9bf66d52a3cc2
export default FormVidu2;