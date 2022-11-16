import './App.css';
import './index'
import './components/functionality/sidebar'
import {List} from './components/list'
import {SigninBtn} from './components/buttons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Sidebar} from './components/sidebar'
import {Mybutton} from './components/buttons'

let theme = "orange"
function App() {
  return (
    <div>
    <header>
      <div className='items'>
        <div className='ResponsiveHeader flex justify-between items-center'>
          <h1 className='text-[#8dc63f] font-bold text-[25px]'>STORE</h1>
        <FontAwesomeIcon icon={faBars} className='barIcon text-[25px] hidden' id='bar' />
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
        <div>
          <Mybutton title="signin" />
          <Mybutton title="saad" />
          <Mybutton title="1" />
          <Mybutton title="2" />
        </div>
    </div>
  );
}

export default App;
