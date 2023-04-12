import Navbar from './components/Navbar';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import { store } from './services/Store';

function App() {
  return (
    <div>
      <div className="hidden sm:flex h-screen flex-row bg-primary">
        <Provider store={store}>
          <div className="xs:basis-full md:basis-1/6">
            <Navbar/>
          </div>
          <div className="xs:basis-full md:basis-5/6">
            <Chat/>
          </div>
        </Provider>
      </div>

      <div className="sm:hidden h-screen flex flex-col bg-primary relative">
        <Provider store={store}>
          <div className="xs:basis-full md:basis-1/6">
            <Navbar/>
          </div>
          <div className="xs:basis-full md:basis-5/6 absolute inset-x-0 bottom-0">
            <Chat/>
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
