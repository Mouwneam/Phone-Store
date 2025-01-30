import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div className="flex flex-col text-4xl m-10 gap-4">
            404 Not Found <br />
            <div className="underline text-yellow-500">
                <Link to="/">Home</Link>
            </div>
            
            
        </div>
    );
}

export default NotFoundPage