"use client";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/navigation";

const data = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Discover",
        link: "/discover",
    },
    {
        label: "Special Deals ",
        link: "/",
    },
    {
        label: "Contact",
        link: "/",
    },
];
const Navbar = () => {
    const [color, setColor] = useState(true);
    let [open, setOpen] = useState(false);
    const router = useRouter();

    function toggleDarkMode() {

        var body = document.body;

        if (body.classList.contains('dark')) {
            body.classList.remove('dark')

        } else {
            body.classList.add('dark')

        }

    }

    const handleClick = (link) => {
        setOpen(false)
        router.push(link)
    }
    useEffect(() => {
        const changeColor = () => {
            if (typeof window !== "undefined" && window.scrollY >= 90) {
                setColor(true);
            } else {
                setColor(false);
            }
        };

        window.addEventListener("scroll", changeColor);

        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    return (
        <main
            className={`z-[9999] min-h-30  min-w-[100vw] fixed  lg:w-[100vw]  text-white ${
                color ? "bg-black" : ""
            }`}
        >
            <div className="flex flex-row  items-center  justify-between py-7 px-10">
                <div className="font-bold text-[18px] flex items-center justify-between">
                    <img src={"./logo.png"} alt={"logo"} className={"h-8 w-8 pr-2"}></img>
                    <div className={`text-2xl text-black ${color ? "text-white" : ""}`}>
                        LCM.PVT.LTD
                    </div>
                </div>


                <div className="ml-auto z-[999] md:hidden w-12 h-10 text-center">
                    {open ?
                        <CloseIcon
                            onClick={() => setOpen(!open)}
                            className=" w-20 h-15"
                        /> :
                        <MenuIcon onClick={() => setOpen(!open)}
                                  className=" w-20 h-15"
                        />
                    }
                </div>
                <ul
                    className={`ml-auto text-center font-bold  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:hidden ${
                        open ? "top-20 " : "top-[-490px] "
                    }`}
                >
                    {data.map((link) => (
                        <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
                            <a
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                                onClick={() => handleClick(link.link)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="ml-auto hidden md:flex flex-row  gap-x-12 cursor-pointer ">
                    {data.map((item) => (
                        <h1 key={item.name}>
                            <Link href={item.link}>{item.label}</Link>
                        </h1>
                    ))}
                </div>
                <div className={"ml-4"}>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onClick={toggleDarkMode} className="sr-only peer" value="" type="checkbox"/>
                        <div
                            className=" md:w-20 md:h-10 w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute md:before:h-8 md:before:w-8 before:h-4 before:w-4 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full md:after:w-8 md:after:h-8 after:w-4 after:h-4 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                        ></div>
                    </label>

                </div>
            </div>

        </main>
    );
};

export default Navbar;
