import {Header,BodyProducts,ProductCard,Auth} from './Components';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={()=> <BodyProducts/> }/>
        <Route exact path='/product/:id' component={()=> <ProductCard/> }/>
        <Route exact path='/auth' component={()=> <Auth/> }/>
        <Route component={()=> <div>404 The page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
