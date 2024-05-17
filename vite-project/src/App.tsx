import ReduxComp from './components/ReduxComp';
import ReducerContext from './components/ReducerContext';
import SimpleReducer from './components/SimpleReducer';
import './App.css'

function App() {
  return (
    <>
      <h2 className='title-tuto'>React-Redux</h2>
      <ReduxComp />
      <h2 className='title-tuto'>useReducer & useContext</h2>
      <ReducerContext />
      <h2 className='title-tuto'>Simple Reducer</h2>
      <SimpleReducer />
    </>
  )
}

export default App
