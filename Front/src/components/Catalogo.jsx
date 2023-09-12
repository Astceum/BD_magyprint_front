import '../css/catalogo.css'
import Cards from './Cards'

import { usePosts } from "../context/PostContext";

function Catalogo() {
    const { posts } = usePosts();
    return (
        <div className="container-fluid">
            <div className='flex justify-center'>
            
                <div id="productos">
                    <div id="container">

                        <div className="flex flex-wrap items-center justify-center ">
                            {posts.map((post) => (
                            <Cards post={post} key={post._id} />
                            ))}
                        </div>
                    </div>
                 </div>
        </div>
</div>
    )

}

export default Catalogo;