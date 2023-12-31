import "../css/cardscatalogo.css"
import toast from "react-hot-toast";

export function PostEmpresa({post}) {
  const handelGet = () => {
    toast((t) => (
        <div className=" text-black text-center p-2">
                <div>
                    <strong>{post.image && (<img src={post.image.url} />)}</strong>
                    <h2 className=" text-3xl font-bold m-3">{post.title}</h2>
                    <h5>{post.description}</h5>
                    <p className="m-4"></p>
                    <div className="bg-[#3fa09b] hover:bg-[#177571] text-white text-sm mb-6 font-bold py-2 px-4  rounded-sm mx-2">
                        <a href="https://api.whatsapp.com/send/?phone=%2B56962610425&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos&type=phone_number&app_absent=0">Cotizar</a>
                    </div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm mx-2" onClick={() => toast.dismiss(t.id)}>
                        Cerrar
                </button>
                </div>
            </div>
        ))
    }



    return (
        <div onClick={(e) => {
            e.stopPropagation();
            handelGet(post._id)
        }}
        >
            <div className="catcards">
                <div id="cards">
                    <figure>
                        {post.image && (<img src={post.image.url} />)}
                    </figure>
                    <div id="contenido">
                        <h3>{post.title}</h3>
                        {/* <h5>{post.description}</h5> */}
                        <a href="https://api.whatsapp.com/send/?phone=%2B56962610425&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos&type=phone_number&app_absent=0">Cotizar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PostEmpresa