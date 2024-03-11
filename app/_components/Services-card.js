"use client";
import { useRouter } from "next/navigation"
export default function Card({item}) {
    const router=useRouter()
    const handleClick=()=>{
        router.push("/services")
    }
    return (
        <div className={"w-[355px] h-[410px]  relative shadow-lg bg-white dark:  rounded-md"}>
            <div className="">
                <img src={"services.png"} alt={"img"} className={"h-[203px] w-[100%]  rounded-md "} />
            </div>
            <div className={"p-4"}>
                <p className={"text-xl font-medium my-2"}>
                   {item.name}
                </p>
                <p>
                  {item.desc.slice(0,100)}{"..."}
                </p>
                <a className={"absolute font-medium right-4 bottom-4 cursor-pointer"} onClick={()=>handleClick()}>
                    READ MORE
                </a>
            </div>

        </div>

)
}