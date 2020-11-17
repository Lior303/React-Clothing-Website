import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom';

const NewPage = () => (
  <div>
    <h1>NEW PAGE!</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={NewPage} />
      </Switch>
    </div>
  );
}

export default App;
