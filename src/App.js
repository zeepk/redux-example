import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggleLogin, getStats } from './actions'
import axios from 'axios';

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLogged)
  const totalXp = useSelector(state => state.totalXp)
  const dispatch = useDispatch();
  const getItemsAction = () => {
      console.log('getting...')
        axios.get('http://localhost:5000/api/users/gains/zee+pk').then(res => {
            console.log(res)
            dispatch(getStats(res.data.skillGains[0].xp))
        })
};
  return (
    <div className="App">
      <h1>Signed {isLoggedIn ? "in" : "out"}</h1>
      <h1>Counter: {counter}</h1>
      <h1>XP: {typeof(totalXp) === 'object' ? 0 : totalXp}</h1>
      <button onClick={() => getItemsAction()}>Get Total Xp</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(toggleLogin())}>Log {isLoggedIn ? "out" : "in"}</button>
    </div>
  );
}

export default App;
