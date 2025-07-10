import { redirect } from "next/navigation"

export default function MoreOptions() {
    return (
        <div className="font-chess font-sm">
            <div className="flex align-middle">
                <div className="sprite logo-openings"></div>
                <div className="mt-3.5">Openings</div>
            </div> 
            <div className="flex align-middle -mt-2" onClick={()=>{
                redirect("https://www.chesskid.com/")
            }}>
                <div className="sprite logo-kids"></div>
                <div className="mt-3.5">Chess Kids</div>
            </div> 
        </div>
    )
};
