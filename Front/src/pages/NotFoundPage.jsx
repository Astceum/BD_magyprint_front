import { VscEmptyWindow } from "react-icons/vsc";


function NotFoundPage() {


    return (
        <div>
        <div className="text-white flex h-[calc(100vh-100px)] flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48" />
        <h1 className="mb-12 text-5xl font-black">Error 404</h1>
        <h1 className="mb-12 text-5xl font-black">Página no existe</h1>
        </div>
        </div>
    )
}

export default NotFoundPage