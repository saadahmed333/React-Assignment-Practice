import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import "./functionality/sidebar"

function Sidebar() {
    return (
        <div className="bg-[#8dc63f] w-[400px] h-[100vh] absolute top-0 left-[-400px] transition-all duration-700" id='sideBar'>
        <div className='flex justify-end w-[90%] mt-[30px]'>
        <FontAwesomeIcon icon={faXmark} className="text-[30px] cursor-pointer" id='cross' />
        </div>
        <ul className='h-[300px] font-bold text-[white] text-[20px] flex flex-col items-center mt-[50px]'>
            <li className='text-[25px] my-[10px]'>Home</li>
            <li className='text-[25px] my-[10px]'>Service</li>
            <li className='text-[25px] my-[10px]'>About</li>
            <li className='text-[25px] my-[10px]'>Contact Us</li>
        </ul>
        <div className='flex justify-center'>
            <button className='w-[100px] p-[5px] bg-white rounded-md text-[#8dc63f] font-semibold hover:bg-transparent hover:border-[2px] hover:border-[white] hover:text-[white]'>SignIn</button>
        </div>
        </div>

    )
}

export {Sidebar}