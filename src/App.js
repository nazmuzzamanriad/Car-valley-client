
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import AddNewProduct from './components/DashBoard/AddNewProduct/AddNewProduct';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import MyOrders from './components/DashBoard/MyOrders/MyOrders';
import ExploreCars from './components/pages/ExploreCars/ExploreCars';


import Home from './components/pages/Home/Home/Home';
import NotFound from './components/pages/Home/Home/NotFound/NotFound';
import Login from './components/pages/Login/Login/Login';
import Register from './components/pages/Login/Register/Register';
import Purchase from './components/pages/Purchase/Purchase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/'>
              <Home></Home>

            </Route>

            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/register'>
              <Register>

              </Register>

            </Route>
            <Route path='/addnewproduct'>
              <AddNewProduct></AddNewProduct>
            </Route>
            <Route path='/explorecars'>
              <ExploreCars></ExploreCars>

            </Route>

            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>

            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>

            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
