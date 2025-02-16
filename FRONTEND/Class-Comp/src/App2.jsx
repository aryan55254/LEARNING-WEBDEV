//using state
import { Component } from "react";
class App2 extends Component {
    constructor(props){
         super(props);
     this.state = {
        todos : [],
        inputVal : "",
     }
    };
    render() {
        return (
          <section>
            <h3>{this.props.name}</h3>
            <form>
              <label htmlFor="task-entry">Enter a task: </label>
              <input type="text" name="task-entry" />
              <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul></ul>
          </section>
        );
      }
}
export default App2;