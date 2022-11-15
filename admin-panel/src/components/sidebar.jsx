import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="bg-[#8dc63f] w-[400px] h-[100vh] absolute top-0">
        <div className='flex justify-end w-[90%] mt-[30px]'>
        <FontAwesomeIcon icon={faXmark} className="text-[30px]" />
        </div>
        <ul className='h-[400px] font-bold text-[white] text-[20px]'>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </div>
    )
}

export {Sidebar}