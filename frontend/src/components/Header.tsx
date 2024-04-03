import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="border-b-2 border-b-cyan-600 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" 
            className="text-2xl font-bold tracking-tight text-cyan-600">
                SharePlate
            </Link>
        </div>
    </div>
  )
}

export default Header;