import Image from "next/image"

export const LoginTop = () => {
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fbe2ec] to-[#fdeff4]">
            <div className="z-40 text-xl">
                Login
            </div>
            <div className="z-30">
                <Image
                    priority
                    src="login-component/ticket.svg"
                    fill
                    alt="bruh"
                />
            </div>
            <div className="z-10">
                <Image
                    priority
                    src="login-component/cloud.svg"
                    fill
                    alt="bruh"
                />
            </div>
    </div>
};