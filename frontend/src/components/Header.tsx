import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-green-500 py-6">
        <div className="container mx-auto flex-justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-green-500">
                SharePlate.com
            </Link>
            <div className="md:hidden">
                <MobileNav/>
            </div>
        </div>
    </div>
  )
}

export default Header;