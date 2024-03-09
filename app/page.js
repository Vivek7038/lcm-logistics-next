import Image from "next/image";
import Card from "@/app/_components/Services-card";

export default function Home() {
    return (
        <div>
        <div
            className={"w-[100dvw] h-[100dvh] bg-[url('../public/Bg-home.png')] bg-cover flex justify-center pt-[30dvh]"}>
            <div className={"flex flex-col items-center text-white"}>
                <div className={"2xl:text-9xl xl:text-8xl font-bold   "}>LCM LOGISTICS</div>
                <div className={"flex flex-col items-center mt-8"}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,</p>
                    <p>quaerat quisquam cum ratione ea aliquid qui hic recusandae atque corporis.
                        Best LMD services Award in Bangalore more than Thrice </p>
                </div>
                <div className={"flex mt-8 items-center"}>
                    <svg width="30" height="32" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.00016 0.333008C2.70016 0.333008 0.833496 2.19967 0.833496 4.49967V8.37301C0.834384 9.26414 1.07342 10.1388 1.52585 10.9066C1.97829 11.6743 2.62769 12.3072 3.40683 12.7397L12.9935 18.0697C10.9855 19.0834 9.3779 20.7445 8.43047 22.7846C7.48304 24.8248 7.2511 27.1247 7.77213 29.3129C8.29316 31.5011 9.53673 33.4498 11.3019 34.844C13.0671 36.2382 15.2508 36.9966 17.5002 36.9966C19.7495 36.9966 21.9332 36.2382 23.6984 34.844C25.4636 33.4498 26.7072 31.5011 27.2282 29.3129C27.7492 27.1247 27.5173 24.8248 26.5699 22.7846C25.6224 20.7445 24.0148 19.0834 22.0068 18.0697L31.5968 12.743C32.3758 12.3098 33.0249 11.6762 33.4768 10.9079C33.9286 10.1395 34.1669 9.26437 34.1668 8.37301V4.49967C34.1668 2.19967 32.3002 0.333008 30.0002 0.333008H5.00016ZM4.16683 4.49967C4.16683 4.27866 4.25463 4.0667 4.41091 3.91042C4.56719 3.75414 4.77915 3.66634 5.00016 3.66634H10.8335V13.0563L5.0235 9.82967C4.76382 9.68527 4.54748 9.47408 4.39685 9.21797C4.24623 8.96185 4.16682 8.67013 4.16683 8.37301V4.49967ZM14.1668 14.9063V3.66634H20.8335V14.9063L17.5002 16.7597L14.1668 14.9063ZM24.1668 13.0563V3.66634H30.0002C30.2212 3.66634 30.4331 3.75414 30.5894 3.91042C30.7457 4.0667 30.8335 4.27866 30.8335 4.49967V8.37301C30.8335 8.67013 30.7541 8.96185 30.6035 9.21797C30.4528 9.47408 30.2365 9.68527 29.9768 9.82967L24.1668 13.0563ZM24.1668 26.9997C24.1668 28.7678 23.4645 30.4635 22.2142 31.7137C20.964 32.964 19.2683 33.6663 17.5002 33.6663C15.7321 33.6663 14.0364 32.964 12.7861 31.7137C11.5359 30.4635 10.8335 28.7678 10.8335 26.9997C10.8335 25.2316 11.5359 23.5359 12.7861 22.2856C14.0364 21.0354 15.7321 20.333 17.5002 20.333C19.2683 20.333 20.964 21.0354 22.2142 22.2856C23.4645 23.5359 24.1668 25.2316 24.1668 26.9997Z"
                            fill="white"/>
                    </svg>

                    <a className={"ml-4"}>Best LMD services Award in Bangalore more than Thrice</a>
                </div>
            </div>
        </div>


        {/*    --------------------------services*/}
            <div className={" w-[100dwh] pt-12 flex flex-col items-center "}>
                <div className={"w-[80%]"}>
                    <div className={"text-1xl"}>
                        LOGISTIC DELIVERY
                    </div>
                    <div className={"font-medium text-3xl my-2"}>
                        OUR SERVICES
                    </div>
                    <div className={"w-12 h-0 border-2 border-black border-solid"}>
<Card/>
                    </div>


                </div>
            </div>

        </div>
    );
}
