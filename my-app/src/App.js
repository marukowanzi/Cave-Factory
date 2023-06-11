
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AboutUs } from './AboutUs';
import { Alchemy } from './Alchemy';

function App() {
  return (
    <Router>
      <div className='App'>
        
        <link to='/aboutus'>关于我们1</link>
        <link to='/alchemy'> 炼金术1 </link>

        <Route path='/aboutus' element={ <AboutUs /> }></Route>
        <Route path='alchemy' element={ <Alchemy /> }></Route>
      </div>

        
        
    </Router>
  );
}

export default App;