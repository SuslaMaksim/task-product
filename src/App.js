import {BodyProductsContainer,ProductCard} from './Components';
import Registration from './Components/Registration';
import Header from './Components/Header';
import Auth from './Components/Auth';
import {Route,Switch} from 'react-router-dom'

const  App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={()=> <BodyProductsContainer/> }/>
        <Route exact path='/product/:id' component={()=> <ProductCard/> }/>
        <Route exact path='/auth' component={()=> <Auth/> }/>
        <Route exact path='/registration' component={()=> <Registration/> }/>
        <Route component={()=> <div>404 The page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
