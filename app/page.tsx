import Heading from "./ui/Heading";
import UserLogins from "./ui/overview/UserLogins";
import AreaChart from "./ui/AreaChart";
import UpcomingMovies from "./ui/overview/UpcomingMovies";
import TrendingMovies from "./ui/overview/TrendingMovies";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]  pb-[32px] px-[128px] max-[1280px]:px-[60px]">

      <div className="">
        <Heading heading="Overview"/>

        <div className="pt-8 max-h-[364px] grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <UserLogins />
          </div>
          
          <div className="col-span-8">
            <AreaChart />
          </div>
          
        </div>
      </div>

      <div className="mt-4 ">
        <UpcomingMovies />
        <TrendingMovies />
      </div>
      
    </div>
  );
}
