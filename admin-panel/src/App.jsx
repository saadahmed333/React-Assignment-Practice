import './App.css';
import './index'
import {List} from './components/list'
import {SigninBtn} from './components/buttons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Sidebar} from './components/sidebar'
function App() {
  return (
    <div>
    <header>
      <div className='items'>
        <div className='ResponsiveHeader flex justify-between items-center'>
          <h1 className='text-[#8dc63f] font-bold text-[25px]'>STORE</h1>
        <FontAwesomeIcon icon={faBars} className='barIcon text-[25px] hidden' />
        </div>
        <div className='menus'>
          <List />
        </div>
        <div className='signinBtn'>
          <SigninBtn />
        </div>
      </div>
    </header>
        <div>
        <Sidebar />
        </div>
    </div>
  );
}

export default App;
