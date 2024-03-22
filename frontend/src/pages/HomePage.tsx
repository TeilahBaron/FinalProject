import landingImage from "../assets/app.png"
import appDownloadImage from "../assets/appdownload.png"
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-cyan-600">
            SharePlate: Sharing Surplus, Nourishing Communities
            </h1>
            <span className="text-lg">Join the Movement to Reduce Food Waste and Fight Hunger Together</span>
        </div>
        <div className="grid md:grid-cols-2 gap5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tigher my-4">
                Sharing Excess, Spreading Kindness!
                </span>
                <span>
                   Join the SharePlate Community and Make an Impact. Save our Planet!
                </span>
                <span>Download our App</span>

                <img src={appDownloadImage} className="my-8"/>
            </div>
        </div>
    </div>
  );
};

export default HomePage;