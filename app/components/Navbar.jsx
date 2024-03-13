export default function Navbar(){
    return(
        <>
        <div className="flex flex-col tb:flex-row tb:px-4 tb:py-2 justify-around items-center border-b-2 gap-1">
            <a href="/"><h1 className="flex font-bold text-xl l:text-2xl lp:text-3xl my-1 p-1 gap-0.5"><span className="text-red-500">X</span>press</h1></a>
            <ul className="flex gap-2 text-sm m:text-md lp:text-lg font-semibold">
                <li><a href="/gundem">GÜNDEM</a></li>
                <li><a href="/ekonomi">EKONOMİ</a></li>
                <li><a href="/spor">SPOR</a></li>
                <li><a href="/life">YAŞAM</a></li>
            </ul>  
        </div>
        </>
    )
}