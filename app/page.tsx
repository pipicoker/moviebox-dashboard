import Heading from "./ui/Heading";
import UserLogins from "./ui/overview/UserLogins";
import AreaChart from "./ui/AreaChart";
import UpcomingMovies from "./ui/overview/UpcomingMovies";
import TrendingMovies from "./ui/overview/TrendingMovies";

export default function Home() {
  return (
    <div className="pb-[32px]">

      <div className="px-[128px] max-[1280px]:px-[80px]">
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

      <div className="mt-4 px-[128px] max-[1280px]:px-[80px]">
        <UpcomingMovies />
        <TrendingMovies />
      </div>
      
    </div>
  );
}
