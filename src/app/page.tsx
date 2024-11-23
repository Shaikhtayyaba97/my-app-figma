import Image from "next/image"


export default function Figma(){
  return(
    <div className="flex  flex-row items-center p-4 w-[1920px] h-[92px]  absolute
    justify-between  " style={{backgroundColor: 'rgba(4,56,115,1'}}>
      
<div className="font-inter text-2xl font-bold leading-[33.89px] text-left underline decoration-skip-ink-none w-[191px] h-[34px] flex flex-row text-white "><img src="Logo icon.png" alt="" width="37px" height="27px" /> Whitespace</div>
<ul className="flex flex-row items-center p-0 gap-[60px] mx-auto w-[988.5px] h-[60px]"> 
  <li>Products</li>
  <li>Solution</li>
  <li>Recources</li>
  <li>Pricing</li>
  <li className="gap-10 bg-[#FFE492] border-r-8 w-[126px] pt-[16px] pr-40 pb-16 h-[60px] rounded-[8px] px-[40px] py-[16px]  ">Login</li>
  <li className="order-1">Try Whitespace Free</li> </ul></div>

      
    
  )}