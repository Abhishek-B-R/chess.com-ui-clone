import userImage from "../../assets/user-image.007dad08.svg"
import Image from "next/image"

export default function HomeOptions() {
    return (
        <div className="font-chess font-sm">
            <div className="flex align-middle">
                <div className="sprite logo-home mt-3"></div>
                <div className="mt-6">Home</div>
            </div> 
            <div className="flex align-middle -ml-0.5">
                <Image suppressHydrationWarning
                src={userImage} alt="user image" className="h-12 w-12 scale-50"/>
                <div className="mt-[14px]">Profile</div>
            </div> 
            <div className="flex align-middle">
                <div className="sprite logo-logout"></div>
                <div className="mt-3.5">Logout</div>
            </div> 
        </div>
    )
};
