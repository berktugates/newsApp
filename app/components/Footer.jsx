export default function Footer() {
    return (
        <>
            <div className="flex justify-between items-center p-2 border-t">
                <a href="/" className="font-bold text-md m:text-lg tb:text-2xl l:text-xl"><span className="text-red-500">X</span>press</a>
                <p className="text-xs text-center">All Rights Reserved</p>
                <ul className="flex gap-2 text-xs m:text-lg l:text-xl">
                    <li><i className="fa-brands fa-x-twitter"></i></li>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </>
    )
}