import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={"w-[100%] relative"}>
            <div
                className={"flex w-[100%] bg-black lg:py-12 py-6 md:py-8 lg:px-40 md:px-4 md:justify-between flex-col md:flex-row items-center"}>
                <div className={"text-white w-[88%] md:w-[20%] lg:w-[30%] flex md:block flex-col items-center"}>
                    <p className={"font-medium xl:text-xl mb-4  "}>LCM LOGISTICS PVT LTD</p>
                    <p>
                        Streamline Your Supply Chain with Our Comprehensive Logistics Solutions
                    </p>
                </div>
                <div className={"w-[20] h-40 border-white border-solid border-[1px] hidden md:block"}>

                </div>
                <div className={"flex md:hidden my-6 w-[61%] justify-between"}>
                    <div>
                        <ul className={"list-none text-gray-500 flex flex-col gap-4"}>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/services"}>Services</Link></li>
                            <li><Link href={"/about-us"}>About</Link></li>
                            <li><Link href={"#Contact"}>Contact</Link></li>
                        </ul>

                    </div>
                    <div>
                        <ul className={"list-none text-gray-500 flex flex-col gap-4"}>
                            <li><Link href={""}>Privacy Policy</Link></li>
                            <li><Link href={""}>Terms of Use</Link></li>
                        </ul>
                    </div>

                </div>


                <div className={"hidden md:block"}>
                    <ul className={"list-none text-gray-500 flex flex-col gap-6"}>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/services"}>Services</Link></li>
                        <li><Link href={"/about-us"}>About</Link></li>
                        <li><Link href={"#Contact"}>Contact</Link></li>
                    </ul>

                </div>
                <div className={"hidden md:block"}>
                    <ul className={"list-none text-gray-500 flex flex-col gap-6"}>
                        <li><Link href={""}>Privacy Policy</Link></li>
                        <li><Link href={""}>Terms of Use</Link></li>
                    </ul>
                </div>
                <div className={"w-[80%] lg:w-72 md:w-56 text-white flex flex-col gap-4 items-center md:items-start"}>
                    <p>Join Group</p>
                    <div className={"flex"}>
                        <input className={" w-48  lg:w-60  md:w-36 px-4 h-12 outline-0 border-0 text-black"}
                            type={"email"}
                            placeholder={"example@gmail.com"} />
                        <button className={"h-12 px-4 lg:px-8 md:px-4 text-white bg-red-700"}>Join</button>
                    </div>
                    <p className={"text-xs"}>Join to stay up to date with latest services and news</p>
                    <div className={"flex w-[90%] justify-between"}>
                        <a href={""}>
                            <svg className={"w-[24px] h-[24px]  md:w-[32px] md:h-[32px] "} viewBox="0 0 32 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.1888 0H30.0723L19.4056 12.2731L32 28.9157H22.1044L14.3936 18.8273L5.5261 28.9157H0.64257L12.0803 15.8072L0 0H10.1526L17.1566 9.25301L25.1888 0ZM23.4538 25.9598H26.1526L8.6747 2.76305H5.71888L23.4538 25.9598Z"
                                    fill="white" />
                            </svg>

                        </a>
                        <a href={""}>
                            <svg className={"w-[24px] h-[24px]  md:w-[32px] md:h-[32px] "} viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.37347 0.1119C7.67107 0.19222 6.50851 0.4639 5.49219 0.86326C4.44035 1.27318 3.54883 1.82326 2.66179 2.7135C1.77475 3.60374 1.22851 4.4959 0.821466 5.54934C0.427546 6.5679 0.160666 7.73142 0.0854659 9.43478C0.010266 11.1381 -0.00637406 11.6857 0.00194594 16.0306C0.0102659 20.3756 0.0294659 20.9202 0.112026 22.6271C0.193306 24.3292 0.464026 25.4914 0.863386 26.5081C1.27395 27.5599 1.82339 28.4511 2.71395 29.3385C3.60451 30.2258 4.49603 30.7708 5.55203 31.1785C6.56963 31.5717 7.73347 31.8399 9.43651 31.9145C11.1395 31.989 11.6877 32.0063 16.0314 31.998C20.3751 31.9897 20.9219 31.9705 22.6285 31.8895C24.3351 31.8085 25.4912 31.5359 26.5082 31.1385C27.56 30.7269 28.4519 30.1785 29.3386 29.2876C30.2253 28.3967 30.7712 27.5039 31.1779 26.4498C31.5722 25.4322 31.84 24.2684 31.9139 22.5666C31.9885 20.8588 32.0061 20.3135 31.9978 15.9692C31.9895 11.6249 31.9699 11.0802 31.889 9.37398C31.808 7.66774 31.537 6.50902 31.1379 5.49174C30.7267 4.4399 30.1779 3.54934 29.2877 2.66134C28.3975 1.77334 27.504 1.22774 26.4503 0.82198C25.432 0.42806 24.2688 0.15958 22.5658 0.0859802C20.8627 0.0123802 20.3146 -0.00649982 15.9693 0.00182018C11.624 0.0101402 11.08 0.0287002 9.37347 0.1119ZM9.56035 29.0361C8.00035 28.9682 7.15331 28.709 6.58883 28.4921C5.84131 28.2041 5.30883 27.8559 4.74627 27.2988C4.18371 26.7417 3.83811 26.2073 3.54627 25.4613C3.32707 24.8969 3.06307 24.0508 2.99011 22.4908C2.91075 20.8047 2.89411 20.2985 2.88483 16.0268C2.87555 11.7551 2.89187 11.2495 2.96579 9.56278C3.03235 8.00406 3.29315 7.15606 3.50979 6.5919C3.79779 5.84342 4.14467 5.3119 4.70307 4.74966C5.26147 4.18742 5.79427 3.84118 6.54083 3.54934C7.10467 3.32918 7.95075 3.06742 9.51011 2.99318C11.1975 2.91318 11.7031 2.89718 15.9741 2.8879C20.2451 2.87862 20.752 2.89462 22.44 2.96886C23.9987 3.0367 24.8471 3.29494 25.4106 3.51286C26.1584 3.80086 26.6906 4.14678 27.2528 4.70614C27.8151 5.2655 28.1616 5.79638 28.4535 6.54454C28.6739 7.10678 28.9357 7.95254 29.0093 9.51286C29.0896 11.2002 29.1079 11.7061 29.1155 15.9769C29.1232 20.2476 29.1082 20.7548 29.0343 22.4409C28.9661 24.0009 28.7075 24.8482 28.4903 25.4133C28.2023 26.1605 27.8551 26.6933 27.2963 27.2553C26.7376 27.8172 26.2055 28.1634 25.4586 28.4553C24.8954 28.6751 24.0483 28.9375 22.4903 29.0117C20.8029 29.0911 20.2973 29.1077 16.0247 29.117C11.752 29.1263 11.248 29.109 9.56067 29.0361M22.6039 7.44854C22.6045 7.82831 22.7177 8.19936 22.9293 8.51476C23.1408 8.83016 23.4411 9.07575 23.7922 9.22047C24.1433 9.36518 24.5295 9.40253 24.9018 9.32777C25.2741 9.25301 25.6159 9.06952 25.884 8.80049C26.152 8.53146 26.3343 8.18899 26.4077 7.81638C26.4811 7.44377 26.4423 7.05777 26.2963 6.70719C26.1503 6.35661 25.9036 6.0572 25.5874 5.84683C25.2713 5.63646 24.8998 5.52458 24.52 5.52534C24.0109 5.52636 23.5231 5.72953 23.1637 6.09018C22.8044 6.45084 22.603 6.93944 22.6039 7.44854ZM7.78467 16.0159C7.79363 20.5535 11.4787 24.2236 16.0154 24.2149C20.552 24.2063 24.2247 20.5215 24.216 15.9839C24.2074 11.4463 20.5213 7.77526 15.984 7.78422C11.4467 7.79318 7.77603 11.4789 7.78467 16.0159ZM10.6666 16.0101C10.6645 14.9553 10.9753 13.9235 11.5596 13.0453C12.1439 12.167 12.9755 11.4818 13.9492 11.0762C14.923 10.6706 15.9952 10.5628 17.0302 10.7666C18.0651 10.9703 19.0165 11.4764 19.7638 12.2208C20.5112 12.9652 21.0211 13.9146 21.2289 14.9487C21.4367 15.9829 21.3332 17.0555 20.9315 18.0308C20.5298 19.0062 19.8478 19.8405 18.9719 20.4283C18.096 21.0161 17.0654 21.3309 16.0106 21.333C15.3102 21.3345 14.6163 21.198 13.9687 20.9313C13.321 20.6645 12.7322 20.2728 12.236 19.7786C11.7397 19.2843 11.3457 18.697 11.0764 18.0505C10.8072 17.4039 10.6679 16.7106 10.6666 16.0101Z"
                                    fill="white" />
                            </svg>

                        </a>

                        <a>
                            <svg className={"w-[24px] h-[24px]  md:w-[32px] md:h-[32px] "} viewBox="0 0 32 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.7273 15.9758V6.49258L21.0909 11.2344L12.7273 15.9758ZM31.3313 3.50864C30.9633 2.12758 29.8789 1.04005 28.5022 0.670959C26.0067 0.000177383 16 0.000177383 16 0.000177383C16 0.000177383 5.99333 0.000177383 3.4978 0.670959C2.12102 1.04005 1.03665 2.12758 0.668678 3.50864C0 6.01171 0 11.2342 0 11.2342C0 11.2342 0 16.4567 0.668678 18.9598C1.03665 20.3409 2.12102 21.4284 3.4978 21.7976C5.99333 22.4683 16 22.4683 16 22.4683C16 22.4683 26.0067 22.4683 28.5022 21.7976C29.8789 21.4284 30.9633 20.3409 31.3313 18.9598C32 16.4567 32 11.2342 32 11.2342C32 11.2342 32 6.01171 31.3313 3.50864Z"
                                    fill="white" />
                            </svg>

                        </a>
                        <a>
                            <svg className={"w-[24px] h-[24px]  md:w-[32px] md:h-[32px] "} viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M32 16C32 7.16347 24.8366 3.62396e-05 16 3.62396e-05C7.16344 3.62396e-05 0 7.16347 0 16C0 23.9861 5.85097 30.6053 13.5 31.8057V20.625H9.4375V16H13.5V12.475C13.5 8.46504 15.8887 6.25004 19.5434 6.25004C21.294 6.25004 23.125 6.56254 23.125 6.56254V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8057C26.149 30.6053 32 23.9861 32 16Z"
                                    fill="white" />
                            </svg>

                        </a>
                    </div>

                </div>

            </div>
            <div className={"flex w-[100%] py-4 text-white justify-center py-8s bg-stone-950 text-sm"}>
                Copyright@LCM LOGISTICS PVT LTD.All right reserved
            </div>
        </div>
    )
}