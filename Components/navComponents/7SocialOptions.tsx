export default function SocialOptions() {
    return (
        <div className="font-chess font-sm">
            <div className="flex align-middle">
                <div className="sprite logo-social"></div>
                {/*friends and social have same logo*/}
                <div className="mt-7">Friends</div>
            </div> 
            <div className="flex align-middle -mt-2">
                <div className="sprite logo-clubs"></div>
                <div className="mt-3.5">Clubs</div>
            </div> 
            <div className="flex align-middle">
                <div className="sprite logo-members"></div>
                <div className="mt-3.5">Members</div>
            </div>
        </div>
    )
};
