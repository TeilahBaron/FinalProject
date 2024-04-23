import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appdownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
          });  
    };
  return(
    <div className="flex flex-col gap-12">
        <div className=" md:px-32 bg-white rounded-lg shadow-md py-8 lex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-cyan-700 m-3">
                SharePlate: Sharing Surplus, Nourishing Communities
            </h1>
            <span className="text-lg">Join the moovment to reduce food waste and fight hunger together</span>
            <SearchBar placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit} />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter m-1">Sharing Excess, Spreading Kindness!</span>
                <span>Join the SharePlate Community and Make an Impact. Save our Planet!</span>
                <span>Download our App</span>
                <img className="m-3" src={appDownloadImage} />
            </div>
        </div>
    </div>
  );
};

export default HomePage;