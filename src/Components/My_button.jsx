

// eslint-disable-next-line react/prop-types
const My_button = ({ text, style }) => {
  return (
    <div className={` bg-[#00D681] h-[55px] flex items-center hover:cursor-pointer text-[white] font-[700] tracking-[1px] hover:bg-[#53bd93] justify-center w-[230px] rounded-[36px] 
         ${style} `} >
         {text}
    </div>
  )
}

export default My_button