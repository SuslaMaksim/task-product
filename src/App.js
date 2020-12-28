import {Header,BodyProducts,ProductCard} from './Components';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path='/' component={()=> <BodyProducts/> }/>
        <Route exact path='/product' component={()=> <ProductCard/> }/>
        <Route component={()=> <div>404 The page not found</div>} />
      </Switch>

    
    </div>
  );
}

export default App;
