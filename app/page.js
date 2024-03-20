import Image from "next/image";
import Card from "@/app/_components/Services-card";
import Choosecard from "@/app/_components/chooseus-card";
import AboutUs from "./_components/AboutUs";
import { data } from "./data";

export default function Home() {

    // -----------------Constants
    const chooseus = [{
        title: `Experience Management Team

        `,
        desc: `Highly experienced senior management Team.
        Qualified Team of 50+ Professionals
        `,
        svg: <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"fill-black dark:fill-white"}
                d="M18.9096 29.5445C18.859 29.721 18.7421 29.8777 18.5773 29.9897C18.4125 30.1018 18.2094 30.1626 18.0002 30.1627C17.9233 30.1625 17.8467 30.1543 17.7721 30.1383L12.7721 29.0513C12.6681 29.0282 12.5694 28.99 12.4799 28.9385L8.72991 26.7646C8.62731 26.7052 8.53918 26.6288 8.47054 26.5398C8.40191 26.4507 8.35411 26.3508 8.32988 26.2457C8.28094 26.0335 8.33098 25.813 8.46897 25.6328C8.60697 25.4526 8.82162 25.3275 9.06571 25.285C9.18657 25.2639 9.31102 25.2637 9.43196 25.2845C9.55289 25.3052 9.66794 25.3465 9.77053 25.4059L13.3846 27.501L18.2283 28.554C18.3479 28.5801 18.4604 28.6263 18.5594 28.6902C18.6584 28.7541 18.742 28.8344 18.8052 28.9264C18.8685 29.0184 18.9103 29.1203 18.9282 29.2264C18.9461 29.3325 18.9398 29.4406 18.9096 29.5445ZM39.6487 16.4195C39.559 16.6565 39.4161 16.8757 39.2284 17.0643C39.0406 17.253 38.8117 17.4074 38.5549 17.5187L34.8049 19.1491L26.1627 26.6641C25.9868 26.8165 25.7486 26.902 25.5002 26.9018C25.4233 26.9018 25.3467 26.8935 25.2721 26.8774L15.2721 24.7035C15.1597 24.6781 15.0538 24.6348 14.9596 24.5758L6.26585 19.179L2.44866 17.5187C1.9299 17.2931 1.53543 16.8975 1.352 16.419C1.16858 15.9405 1.21121 15.4182 1.47053 14.9671L5.35335 8.2157C5.61283 7.76461 6.06773 7.42159 6.618 7.26209C7.16828 7.10259 7.76888 7.13967 8.28772 7.36516L11.844 8.91136L20.2424 6.8244C20.4109 6.78249 20.5895 6.78249 20.758 6.8244L29.1565 8.91136L32.7127 7.36516C33.2316 7.13967 33.8322 7.10259 34.3824 7.26209C34.9327 7.42159 35.3876 7.76461 35.6471 8.2157L39.5299 14.9671C39.659 15.1904 39.736 15.4337 39.7563 15.683C39.7767 15.9322 39.7401 16.1826 39.6487 16.4195ZM3.28772 16.0608L6.33147 17.391L10.5002 10.1464L7.44866 8.82304C7.37447 8.79101 7.2887 8.78589 7.21018 8.80882C7.13166 8.83175 7.06682 8.88085 7.02991 8.94532L3.1471 15.6967C3.11076 15.761 3.10515 15.8353 3.13147 15.9032C3.14369 15.9374 3.16386 15.969 3.19074 15.9961C3.21762 16.0233 3.25063 16.0453 3.28772 16.0608ZM30.344 20.7184L25.5424 17.3747C22.5737 19.6002 18.733 19.929 15.5737 18.1736C15.2972 18.0207 15.0638 17.8159 14.8907 17.5741C14.7175 17.3323 14.609 17.0598 14.5731 16.7766C14.5373 16.4935 14.575 16.207 14.6836 15.9382C14.7921 15.6695 14.9687 15.4253 15.2002 15.2239L22.344 9.19668C22.4479 9.10954 22.5735 9.04444 22.7112 9.00647L20.5002 8.45619L12.4049 10.4616L7.9471 18.2198L15.9002 23.1586L25.2127 25.1831L30.344 20.7184ZM33.1065 18.3162L28.6705 10.5975H23.3799L16.519 16.3855C16.4885 16.4133 16.4656 16.4466 16.4518 16.483C16.438 16.5195 16.4337 16.5581 16.4393 16.5961C16.4441 16.6376 16.4599 16.6776 16.4854 16.7129C16.5108 16.7483 16.5453 16.7781 16.5862 16.7999C18.6627 17.9535 21.9205 18.2768 24.8346 15.7239C24.9977 15.5815 25.2154 15.4965 25.4461 15.4853C25.6768 15.474 25.9042 15.5372 26.0846 15.6627L31.6815 19.5649L33.1065 18.3162ZM37.8502 15.6967L33.9705 8.94532C33.9336 8.88085 33.8688 8.83175 33.7903 8.80882C33.7117 8.78589 33.626 8.79101 33.5518 8.82304L30.508 10.1464L34.669 17.391L37.7127 16.0676C37.7498 16.0521 37.7828 16.0301 37.8097 16.0029C37.8366 15.9758 37.8568 15.9442 37.869 15.91C37.8831 15.8754 37.889 15.8386 37.8863 15.8019C37.8836 15.7653 37.8724 15.7295 37.8533 15.6967H37.8502Z"
            />
        </svg>
    },
    {
        title: `Strong Client Relationship`,
        desc: `Longstanding Relationship with a Marquee Customer Base
            Service 30+clients in Fy20
            E-commerce , Retail are major Clientele
            `,
        svg: <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"fill-black dark:fill-white"}
                d="M18.9096 29.5445C18.859 29.721 18.7421 29.8777 18.5773 29.9897C18.4125 30.1018 18.2094 30.1626 18.0002 30.1627C17.9233 30.1625 17.8467 30.1543 17.7721 30.1383L12.7721 29.0513C12.6681 29.0282 12.5694 28.99 12.4799 28.9385L8.72991 26.7646C8.62731 26.7052 8.53918 26.6288 8.47054 26.5398C8.40191 26.4507 8.35411 26.3508 8.32988 26.2457C8.28094 26.0335 8.33098 25.813 8.46897 25.6328C8.60697 25.4526 8.82162 25.3275 9.06571 25.285C9.18657 25.2639 9.31102 25.2637 9.43196 25.2845C9.55289 25.3052 9.66794 25.3465 9.77053 25.4059L13.3846 27.501L18.2283 28.554C18.3479 28.5801 18.4604 28.6263 18.5594 28.6902C18.6584 28.7541 18.742 28.8344 18.8052 28.9264C18.8685 29.0184 18.9103 29.1203 18.9282 29.2264C18.9461 29.3325 18.9398 29.4406 18.9096 29.5445ZM39.6487 16.4195C39.559 16.6565 39.4161 16.8757 39.2284 17.0643C39.0406 17.253 38.8117 17.4074 38.5549 17.5187L34.8049 19.1491L26.1627 26.6641C25.9868 26.8165 25.7486 26.902 25.5002 26.9018C25.4233 26.9018 25.3467 26.8935 25.2721 26.8774L15.2721 24.7035C15.1597 24.6781 15.0538 24.6348 14.9596 24.5758L6.26585 19.179L2.44866 17.5187C1.9299 17.2931 1.53543 16.8975 1.352 16.419C1.16858 15.9405 1.21121 15.4182 1.47053 14.9671L5.35335 8.2157C5.61283 7.76461 6.06773 7.42159 6.618 7.26209C7.16828 7.10259 7.76888 7.13967 8.28772 7.36516L11.844 8.91136L20.2424 6.8244C20.4109 6.78249 20.5895 6.78249 20.758 6.8244L29.1565 8.91136L32.7127 7.36516C33.2316 7.13967 33.8322 7.10259 34.3824 7.26209C34.9327 7.42159 35.3876 7.76461 35.6471 8.2157L39.5299 14.9671C39.659 15.1904 39.736 15.4337 39.7563 15.683C39.7767 15.9322 39.7401 16.1826 39.6487 16.4195ZM3.28772 16.0608L6.33147 17.391L10.5002 10.1464L7.44866 8.82304C7.37447 8.79101 7.2887 8.78589 7.21018 8.80882C7.13166 8.83175 7.06682 8.88085 7.02991 8.94532L3.1471 15.6967C3.11076 15.761 3.10515 15.8353 3.13147 15.9032C3.14369 15.9374 3.16386 15.969 3.19074 15.9961C3.21762 16.0233 3.25063 16.0453 3.28772 16.0608ZM30.344 20.7184L25.5424 17.3747C22.5737 19.6002 18.733 19.929 15.5737 18.1736C15.2972 18.0207 15.0638 17.8159 14.8907 17.5741C14.7175 17.3323 14.609 17.0598 14.5731 16.7766C14.5373 16.4935 14.575 16.207 14.6836 15.9382C14.7921 15.6695 14.9687 15.4253 15.2002 15.2239L22.344 9.19668C22.4479 9.10954 22.5735 9.04444 22.7112 9.00647L20.5002 8.45619L12.4049 10.4616L7.9471 18.2198L15.9002 23.1586L25.2127 25.1831L30.344 20.7184ZM33.1065 18.3162L28.6705 10.5975H23.3799L16.519 16.3855C16.4885 16.4133 16.4656 16.4466 16.4518 16.483C16.438 16.5195 16.4337 16.5581 16.4393 16.5961C16.4441 16.6376 16.4599 16.6776 16.4854 16.7129C16.5108 16.7483 16.5453 16.7781 16.5862 16.7999C18.6627 17.9535 21.9205 18.2768 24.8346 15.7239C24.9977 15.5815 25.2154 15.4965 25.4461 15.4853C25.6768 15.474 25.9042 15.5372 26.0846 15.6627L31.6815 19.5649L33.1065 18.3162ZM37.8502 15.6967L33.9705 8.94532C33.9336 8.88085 33.8688 8.83175 33.7903 8.80882C33.7117 8.78589 33.626 8.79101 33.5518 8.82304L30.508 10.1464L34.669 17.391L37.7127 16.0676C37.7498 16.0521 37.7828 16.0301 37.8097 16.0029C37.8366 15.9758 37.8568 15.9442 37.869 15.91C37.8831 15.8754 37.889 15.8386 37.8863 15.8019C37.8836 15.7653 37.8724 15.7295 37.8533 15.6967H37.8502Z"
            />
        </svg>
    },
    {
        title: `Strong Market Potential            `,
        desc: `Growth in online sales is increasing the number of deliveries in Tier 3 cities.
        With strong Regional presence in south, LCM has emerged as one of the leaders in Tier 1 and Tier 2 cities`,
        svg: <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"fill-black dark:fill-white"}
                d="M18.9096 29.5445C18.859 29.721 18.7421 29.8777 18.5773 29.9897C18.4125 30.1018 18.2094 30.1626 18.0002 30.1627C17.9233 30.1625 17.8467 30.1543 17.7721 30.1383L12.7721 29.0513C12.6681 29.0282 12.5694 28.99 12.4799 28.9385L8.72991 26.7646C8.62731 26.7052 8.53918 26.6288 8.47054 26.5398C8.40191 26.4507 8.35411 26.3508 8.32988 26.2457C8.28094 26.0335 8.33098 25.813 8.46897 25.6328C8.60697 25.4526 8.82162 25.3275 9.06571 25.285C9.18657 25.2639 9.31102 25.2637 9.43196 25.2845C9.55289 25.3052 9.66794 25.3465 9.77053 25.4059L13.3846 27.501L18.2283 28.554C18.3479 28.5801 18.4604 28.6263 18.5594 28.6902C18.6584 28.7541 18.742 28.8344 18.8052 28.9264C18.8685 29.0184 18.9103 29.1203 18.9282 29.2264C18.9461 29.3325 18.9398 29.4406 18.9096 29.5445ZM39.6487 16.4195C39.559 16.6565 39.4161 16.8757 39.2284 17.0643C39.0406 17.253 38.8117 17.4074 38.5549 17.5187L34.8049 19.1491L26.1627 26.6641C25.9868 26.8165 25.7486 26.902 25.5002 26.9018C25.4233 26.9018 25.3467 26.8935 25.2721 26.8774L15.2721 24.7035C15.1597 24.6781 15.0538 24.6348 14.9596 24.5758L6.26585 19.179L2.44866 17.5187C1.9299 17.2931 1.53543 16.8975 1.352 16.419C1.16858 15.9405 1.21121 15.4182 1.47053 14.9671L5.35335 8.2157C5.61283 7.76461 6.06773 7.42159 6.618 7.26209C7.16828 7.10259 7.76888 7.13967 8.28772 7.36516L11.844 8.91136L20.2424 6.8244C20.4109 6.78249 20.5895 6.78249 20.758 6.8244L29.1565 8.91136L32.7127 7.36516C33.2316 7.13967 33.8322 7.10259 34.3824 7.26209C34.9327 7.42159 35.3876 7.76461 35.6471 8.2157L39.5299 14.9671C39.659 15.1904 39.736 15.4337 39.7563 15.683C39.7767 15.9322 39.7401 16.1826 39.6487 16.4195ZM3.28772 16.0608L6.33147 17.391L10.5002 10.1464L7.44866 8.82304C7.37447 8.79101 7.2887 8.78589 7.21018 8.80882C7.13166 8.83175 7.06682 8.88085 7.02991 8.94532L3.1471 15.6967C3.11076 15.761 3.10515 15.8353 3.13147 15.9032C3.14369 15.9374 3.16386 15.969 3.19074 15.9961C3.21762 16.0233 3.25063 16.0453 3.28772 16.0608ZM30.344 20.7184L25.5424 17.3747C22.5737 19.6002 18.733 19.929 15.5737 18.1736C15.2972 18.0207 15.0638 17.8159 14.8907 17.5741C14.7175 17.3323 14.609 17.0598 14.5731 16.7766C14.5373 16.4935 14.575 16.207 14.6836 15.9382C14.7921 15.6695 14.9687 15.4253 15.2002 15.2239L22.344 9.19668C22.4479 9.10954 22.5735 9.04444 22.7112 9.00647L20.5002 8.45619L12.4049 10.4616L7.9471 18.2198L15.9002 23.1586L25.2127 25.1831L30.344 20.7184ZM33.1065 18.3162L28.6705 10.5975H23.3799L16.519 16.3855C16.4885 16.4133 16.4656 16.4466 16.4518 16.483C16.438 16.5195 16.4337 16.5581 16.4393 16.5961C16.4441 16.6376 16.4599 16.6776 16.4854 16.7129C16.5108 16.7483 16.5453 16.7781 16.5862 16.7999C18.6627 17.9535 21.9205 18.2768 24.8346 15.7239C24.9977 15.5815 25.2154 15.4965 25.4461 15.4853C25.6768 15.474 25.9042 15.5372 26.0846 15.6627L31.6815 19.5649L33.1065 18.3162ZM37.8502 15.6967L33.9705 8.94532C33.9336 8.88085 33.8688 8.83175 33.7903 8.80882C33.7117 8.78589 33.626 8.79101 33.5518 8.82304L30.508 10.1464L34.669 17.391L37.7127 16.0676C37.7498 16.0521 37.7828 16.0301 37.8097 16.0029C37.8366 15.9758 37.8568 15.9442 37.869 15.91C37.8831 15.8754 37.889 15.8386 37.8863 15.8019C37.8836 15.7653 37.8724 15.7295 37.8533 15.6967H37.8502Z"
            />
        </svg>
    },
    {
        title: `Strong Order Book value -
        `,

        desc: `Adding Blue chip clients with expected incremental revenue of INR 140 Mn
        Aditya Birla Group
        Amazon,B2B Business etc.,
        `,
        svg: <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"fill-black dark:fill-white"}
                d="M18.9096 29.5445C18.859 29.721 18.7421 29.8777 18.5773 29.9897C18.4125 30.1018 18.2094 30.1626 18.0002 30.1627C17.9233 30.1625 17.8467 30.1543 17.7721 30.1383L12.7721 29.0513C12.6681 29.0282 12.5694 28.99 12.4799 28.9385L8.72991 26.7646C8.62731 26.7052 8.53918 26.6288 8.47054 26.5398C8.40191 26.4507 8.35411 26.3508 8.32988 26.2457C8.28094 26.0335 8.33098 25.813 8.46897 25.6328C8.60697 25.4526 8.82162 25.3275 9.06571 25.285C9.18657 25.2639 9.31102 25.2637 9.43196 25.2845C9.55289 25.3052 9.66794 25.3465 9.77053 25.4059L13.3846 27.501L18.2283 28.554C18.3479 28.5801 18.4604 28.6263 18.5594 28.6902C18.6584 28.7541 18.742 28.8344 18.8052 28.9264C18.8685 29.0184 18.9103 29.1203 18.9282 29.2264C18.9461 29.3325 18.9398 29.4406 18.9096 29.5445ZM39.6487 16.4195C39.559 16.6565 39.4161 16.8757 39.2284 17.0643C39.0406 17.253 38.8117 17.4074 38.5549 17.5187L34.8049 19.1491L26.1627 26.6641C25.9868 26.8165 25.7486 26.902 25.5002 26.9018C25.4233 26.9018 25.3467 26.8935 25.2721 26.8774L15.2721 24.7035C15.1597 24.6781 15.0538 24.6348 14.9596 24.5758L6.26585 19.179L2.44866 17.5187C1.9299 17.2931 1.53543 16.8975 1.352 16.419C1.16858 15.9405 1.21121 15.4182 1.47053 14.9671L5.35335 8.2157C5.61283 7.76461 6.06773 7.42159 6.618 7.26209C7.16828 7.10259 7.76888 7.13967 8.28772 7.36516L11.844 8.91136L20.2424 6.8244C20.4109 6.78249 20.5895 6.78249 20.758 6.8244L29.1565 8.91136L32.7127 7.36516C33.2316 7.13967 33.8322 7.10259 34.3824 7.26209C34.9327 7.42159 35.3876 7.76461 35.6471 8.2157L39.5299 14.9671C39.659 15.1904 39.736 15.4337 39.7563 15.683C39.7767 15.9322 39.7401 16.1826 39.6487 16.4195ZM3.28772 16.0608L6.33147 17.391L10.5002 10.1464L7.44866 8.82304C7.37447 8.79101 7.2887 8.78589 7.21018 8.80882C7.13166 8.83175 7.06682 8.88085 7.02991 8.94532L3.1471 15.6967C3.11076 15.761 3.10515 15.8353 3.13147 15.9032C3.14369 15.9374 3.16386 15.969 3.19074 15.9961C3.21762 16.0233 3.25063 16.0453 3.28772 16.0608ZM30.344 20.7184L25.5424 17.3747C22.5737 19.6002 18.733 19.929 15.5737 18.1736C15.2972 18.0207 15.0638 17.8159 14.8907 17.5741C14.7175 17.3323 14.609 17.0598 14.5731 16.7766C14.5373 16.4935 14.575 16.207 14.6836 15.9382C14.7921 15.6695 14.9687 15.4253 15.2002 15.2239L22.344 9.19668C22.4479 9.10954 22.5735 9.04444 22.7112 9.00647L20.5002 8.45619L12.4049 10.4616L7.9471 18.2198L15.9002 23.1586L25.2127 25.1831L30.344 20.7184ZM33.1065 18.3162L28.6705 10.5975H23.3799L16.519 16.3855C16.4885 16.4133 16.4656 16.4466 16.4518 16.483C16.438 16.5195 16.4337 16.5581 16.4393 16.5961C16.4441 16.6376 16.4599 16.6776 16.4854 16.7129C16.5108 16.7483 16.5453 16.7781 16.5862 16.7999C18.6627 17.9535 21.9205 18.2768 24.8346 15.7239C24.9977 15.5815 25.2154 15.4965 25.4461 15.4853C25.6768 15.474 25.9042 15.5372 26.0846 15.6627L31.6815 19.5649L33.1065 18.3162ZM37.8502 15.6967L33.9705 8.94532C33.9336 8.88085 33.8688 8.83175 33.7903 8.80882C33.7117 8.78589 33.626 8.79101 33.5518 8.82304L30.508 10.1464L34.669 17.391L37.7127 16.0676C37.7498 16.0521 37.7828 16.0301 37.8097 16.0029C37.8366 15.9758 37.8568 15.9442 37.869 15.91C37.8831 15.8754 37.889 15.8386 37.8863 15.8019C37.8836 15.7653 37.8724 15.7295 37.8533 15.6967H37.8502Z"
            />
        </svg>
    },
    ]

    const trustedby = ["./trustedby/1.jpg", "./trustedby/2.png", "./trustedby/3.jpg", "./trustedby/4.png", "./trustedby/5.png", "./trustedby/6.jpg"]

    // -------------------------------------------
    return (
        <div className={"bg-white dark:bg-dark_bg"}>
            <div
                className={"w-[100dvw] h-[100dvh] bg-[url('../public/Bg-home.png')] bg-cover flex justify-center pt-[30dvh]"}>
                <div className={"flex flex-col items-center text-white w-[80%] md:w-[100%]"}>
                    <div className={"2xl:text-9xl xl:text-8xl md:text-6xl font-bold text-3xl   "}>LCM LOGISTICS</div>
                    <div className={"flex flex-col items-center mt-8 "}>

                        <p className="text-center">Streamline Your Supply Chain with Our Comprehensive Logistics Solutions</p>
                       
                    </div>
                    <div className={"flex mt-8 items-center text-center"}>
                        <svg width="30" height="32" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg " className="">
                            <path
                                d="M5.00016 0.333008C2.70016 0.333008 0.833496 2.19967 0.833496 4.49967V8.37301C0.834384 9.26414 1.07342 10.1388 1.52585 10.9066C1.97829 11.6743 2.62769 12.3072 3.40683 12.7397L12.9935 18.0697C10.9855 19.0834 9.3779 20.7445 8.43047 22.7846C7.48304 24.8248 7.2511 27.1247 7.77213 29.3129C8.29316 31.5011 9.53673 33.4498 11.3019 34.844C13.0671 36.2382 15.2508 36.9966 17.5002 36.9966C19.7495 36.9966 21.9332 36.2382 23.6984 34.844C25.4636 33.4498 26.7072 31.5011 27.2282 29.3129C27.7492 27.1247 27.5173 24.8248 26.5699 22.7846C25.6224 20.7445 24.0148 19.0834 22.0068 18.0697L31.5968 12.743C32.3758 12.3098 33.0249 11.6762 33.4768 10.9079C33.9286 10.1395 34.1669 9.26437 34.1668 8.37301V4.49967C34.1668 2.19967 32.3002 0.333008 30.0002 0.333008H5.00016ZM4.16683 4.49967C4.16683 4.27866 4.25463 4.0667 4.41091 3.91042C4.56719 3.75414 4.77915 3.66634 5.00016 3.66634H10.8335V13.0563L5.0235 9.82967C4.76382 9.68527 4.54748 9.47408 4.39685 9.21797C4.24623 8.96185 4.16682 8.67013 4.16683 8.37301V4.49967ZM14.1668 14.9063V3.66634H20.8335V14.9063L17.5002 16.7597L14.1668 14.9063ZM24.1668 13.0563V3.66634H30.0002C30.2212 3.66634 30.4331 3.75414 30.5894 3.91042C30.7457 4.0667 30.8335 4.27866 30.8335 4.49967V8.37301C30.8335 8.67013 30.7541 8.96185 30.6035 9.21797C30.4528 9.47408 30.2365 9.68527 29.9768 9.82967L24.1668 13.0563ZM24.1668 26.9997C24.1668 28.7678 23.4645 30.4635 22.2142 31.7137C20.964 32.964 19.2683 33.6663 17.5002 33.6663C15.7321 33.6663 14.0364 32.964 12.7861 31.7137C11.5359 30.4635 10.8335 28.7678 10.8335 26.9997C10.8335 25.2316 11.5359 23.5359 12.7861 22.2856C14.0364 21.0354 15.7321 20.333 17.5002 20.333C19.2683 20.333 20.964 21.0354 22.2142 22.2856C23.4645 23.5359 24.1668 25.2316 24.1668 26.9997Z"
                                fill="white" />
                        </svg>

                        <a className={"ml-2"}>Best LMD services Award in Bangalore more than Thrice</a>
                    </div>
                </div>
            </div>


            {/*    --------------------------services*/}
            <div className={" w-[100vw] py-12 flex flex-col items-center max-w-[100vw]  "}>
                <div className={"w-[80%] "}>
                    <div className={"text-1xl flex justify-center md:block dark:text-light_txt"}>
                        LOGISTIC DELIVERY
                    </div>
                    <div className={"font-medium text-3xl my-2 flex justify-center md:block dark:text-light_txt"}>
                        OUR SERVICES
                    </div>

                    <div className={"w-12 h-0 border-2 border-black border-solid flex justify-center md:block"}></div>
                    <div
                        className={"md:grid xl:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] mt-4 gap-x-2 gap-y-2 flex overflow-scroll md:overflow-hidden"}>
                        {
                            data.map((ele, index) => {
                                return (<div key={index} className={"col-span-1 row-span-1 relative"} ><Card item={ele} index={index} />
                                </div>)
                            }
                            )
                        }

                    </div>


                </div>
            </div>

            {/*    --------------------Why choose us*/}
            <div className={" w-[100vw] my-4 max-w-[100vw] py-12 flex flex-col items-center "}>
                <div
                    className={"w-[100%] flex justify-center font-bold xl:text-6xl md:text-5xl text-3xl dark:text-light_txt"}>

                    WHY CHOOSE US?
                </div>

                <div
                    className={"md:grid md:grid-cols-2 xl:gap-x-44 xl:gap-y-12 md:gap-x-12 md:gap-y-8 my-12 flex overflow-scroll md:overflow-hidden w-[95%] md:w-auto gap-4 ml-4 md:ml-0 "}>
                    {chooseus.map((ele, index) => {
                        return (
                            <div key={index}><Choosecard key={index} title={ele.title} desc={ele.desc} svg={ele.svg} />
                            </div>)
                    })}
                </div>
                <div className={"md:flex w-[100%] justify-center font-medium hidden "}>
                    Trusted by
                </div>
                <div
                    className={"md:flex xl:justify-between md:justify-around xl:w-[80%]  md:w-[50%] md:flex-wrap hidden "}>
                    {trustedby.map((e, index) => {
                        return <div key={index}><img className={"xl:h-24 md:h-8 w-auto my-4"} src={e} alt={"img"} /></div>
                    })}
                </div>
            </div>

            {/*    ---------------------About us*/}
            <div className={"flex justify-center w-[100%] px-4 md:px-0 dark:text-light_txt"}>
                <div className={"xl:w-[70%] md:w-[95%] relative w-[98%]"}>
                    <img src={"bubblebg.png"} alt={""}
                        className={"absolute h-40 w-40 z-0 xl:top-20 xl:-left-20 md:top-32 md:-left-2 hidden md:block"} />

                    <div className={"line w-[100%] h-0 border-[1px] border-solid border-gray-500 mt-4 mb-20"}></div>
                    <div
                        className={"font-bold xl:text-6xl md:text-5xl text-3xl md:flex md:flex-col md:items-center xl:block flex flex-col items-center flex-wrap z-20 relative"}>
                        ABOUT US
                        <div className={"xl:hidden mt-2 text-sm font-normal"}>We are logistics company based in <a
                            className={"font-bold italic"}>BANGALORE</a></div>
                    </div>

                    <div className={"md:grid md:grid-cols-2 my-12 font-medium"}>
                        <AboutUs />
                    </div>
                    <div className={"line w-[100%] h-0 border-[1px] border-solid border-gray-500 my-4"}></div>
                </div>
            </div>
            {/*    ---------------------------Contact Form----------*/}

            <div id={"Contact"} className={"md:flex w-[100%] h-[70vh]]  mt-8 dark:text-light_txt"}>
                <div
                    className={" hidden md:block w-[30vw] h-[95dvh] xl:[90dvh] bg-[url('../public/contactbg.png')] bg-cover text-white  "}>
                    <div className={"ml-8 mt-10"}><p>Get in Touch</p>
                        <p className={"mt-8 text-4xl font-bold"}>Reach Out to Us</p></div>
                </div>
                <div className={"text-white md:text-black flex flex-col mx-auto bg-[url('/contactbg.png')]  md:bg-none bg-cover backdrop-blur-3xl backdrop-opacity-90 bg-white/30  md:dark:text-light_txt "}>
                    <div className={"bg-white/30 md:bg-white/0 dark:md:bg-dark_bg md:bg-none"}>
                    <div className={"font-medium text-3xl flex justify-center mb-8  "}>
                        Contact Form
                    </div>
                    <div className={"xl:ml-0 p-4 md:p-0 md:ml-6 xl:w-[100%] md:w-[80%]"}>
                        <p>Have questions or feedback? We're here to help. Send us a
                            message, and we'll respond within 24 hours</p>
                    </div>
                    <div
                        className={"xl:w-[100%] md:w-[80%] md:ml-6 hidden md:block md:p-0 h-[0] border-[1px] border-gray-500 border-solid my-8"}></div>
                    <div className="w-[100%] p-4 md:p-0">
                        <form className={"xl:w-[100%] md:w-[80%] md:ml-6 flex flex-col xl:gap-10 md:gap-6"}>
                            <div className={"grid grid-cols-2 gap-4"}>
                                <label>
                                    First name
                                    <input className={" pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%]"}
                                        placeholder={"first name"} />
                                </label>
                                <label>
                                    Last name
                                    <input placeholder={"Last name"}
                                        className={"pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%]"} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email Address
                                    <input type={"email"} placeholder={"email address"}
                                        className={"pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%]"} />
                                </label>

                            </div>
                            <div>

                                <label>
                                    Message
                                    <input placeholder={"leave a message"}
                                        className={"pl-4 border-0 outline-0 h-28 rounded-xl bg-gray-200 w-[100%]"} />
                                </label>
                            </div>
                            <button
                                className={" mt-4 md:mt-0 outline-0 border-2 h-12 md:border-black  border-b-white border-solid rounded-xl"}>Send
                            </button>
                        </form>
                    </div>
                        </div>
                </div>


            </div>


        </div>
    );
}
