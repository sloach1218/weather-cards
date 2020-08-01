import React from 'react';
import dummyweather from './dummyweather';
import Cards from './Cards'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: []
    }
  }

  componentDidMount() {
    
    this.setState({
      weather: dummyweather.weather
    })
  }

  render(){
    
    return (
      <div className='App'>
        <header>
          <h1>Milwaukee Weather</h1>
        </header>
        <main>
          <section>
            <Cards weather={this.state.weather}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;