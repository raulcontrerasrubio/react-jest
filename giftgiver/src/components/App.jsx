import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class App extends Component{

  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: maxId+1});
    this.setState({gifts});
  }

  render(){
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App;