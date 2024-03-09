export default function Navbar(){
    return(
        <>
        <div className="flex flex-col justify-between items-center border-b-2 gap-1">
            <h1 className="flex font-semibold text-lg my-1 p-1 gap-0.5"><span className="text-red-500 font-bold">S</span>onsuz <span className="text-red-500 font-bold">E</span>tkileşimli <span className="text-red-500 font-bold">X</span>press <span className="text-red-500 font-bold">Y</span>azıları</h1>
            <ul className="flex gap-2 text-sm">
                <li>GÜNDEM</li>
                <li>EKONOMİ</li>
                <li>SPOR</li>
                <li>YAŞAM</li>
            </ul>  
        </div>
        </>
    )
}