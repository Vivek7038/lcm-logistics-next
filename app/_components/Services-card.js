export default function Card(props) {
    return (
        <div className={"w-[355px] h-[410px]  relative shadow-lg "}>
            <div >
                <img src={"services.png"} alt={"img"} className={"h-[203px] w-[100%]"}/>
            </div>
            <div className={"p-4"}>
                <p className={"text-xl font-medium my-2"}>
                    WAREHOUSE
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisiciquaerat quisquam cum ratione ea aliquid qui hic recusandae atque corporisng elit. Inventore,
                </p>
                <a className={"absolute font-medium right-4 bottom-4 "}>
                    READ MORE
                </a>
            </div>

        </div>

)
}