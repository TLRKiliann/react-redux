import Counter from './features/counter/Counter';
import SimpleReducer from './components/SimpleReducer';
import TodoList from './features/todos/TodoList';
import './App.css';

function App() {
  return (
    <>
      <h2 className='title-tuto'>React-Redux</h2>
      <Counter />
      <h2 className='title-tuto'>Simple Reducer (useReducer)</h2>
      <SimpleReducer />
      <h2 className='title-tuto'>React-Redux</h2>      
      <TodoList />
    </>
  )
}
export default App;
