import './App.css';
import TodoList from './components/ToDoList';
import Calendar from './components/Calendar';
import StopwatchApp from './components/StopWatch';

function App() {
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <StopwatchApp/>
      </div>
      <div className="right-side">
        <Calendar />
      </div>
    </div>
    </>
  );
}

export default App;
