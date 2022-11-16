//  import "../index.css"

function SigninBtn() {
    return (
        <button className="bg-[#8dc63f] rounded-[20px] py-[5px] px-[25px] text-[15px] font-bold cursor-pointer text-white hover:text-[#8dc63f] hover:bg-white hover:border">SignIn</button>
    )
}

export {SigninBtn}



function Mybutton(props) {
    return (
        <button className="border w-[80px]">{props.title}</button>
    )
}
export {Mybutton}