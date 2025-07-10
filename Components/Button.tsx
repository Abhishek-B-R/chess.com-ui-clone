import { ButtonParams } from ".";

export default function Button(params:ButtonParams) {
    return (
        <button onClick={params.onClick} 
        className={`${params.pref==="primary"?"bg-[#81B64C] px-10":"bg-[#3C3A39] px-12"}
             py-2 rounded-lg my-2 ml-1`}
        >{params.children}</button>
    )
};
