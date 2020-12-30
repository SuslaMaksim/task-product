import {Header,BodyProducts,ProductCard,Auth,Registration} from './Components';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={()=> <BodyProducts/> }/>
        <Route exact path='/product/:id' component={()=> <ProductCard/> }/>
        <Route exact path='/auth' component={()=> <Auth/> }/>
        <Route exact path='/registration' component={()=> <Registration/> }/>
        <Route component={()=> <div>404 The page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
