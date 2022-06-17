import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Chat from './components/Chat';
import Message from './components/Message';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-md-3 user-card'>
          <User/>
        </div>
        <div className='col-md-9'>
         <Chat/>
         <Message/>
        </div>
      </div>
    </div>
  );
}

export default App;
