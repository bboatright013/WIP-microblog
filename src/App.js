import './App.css';
import NavHeader from './components/Navbar';
import Routes from './components/Routes';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from './actions/actionCreators';





function App() {
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(getPosts())
}, [dispatch])

  return (
    <div className="App">
      <NavHeader />
      <Routes />
    </div>
  );
}

export default App;
