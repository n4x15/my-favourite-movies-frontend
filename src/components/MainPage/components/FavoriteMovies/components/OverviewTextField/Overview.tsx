import { IOverviewProps } from "src/types/favoriteMovies";
import { OverviewWrapper } from "./assets/styles";

const Overview: React.FC<IOverviewProps> = ({ overview }) => {
  return (
    <OverviewWrapper>
      {overview.length > 300 ? overview.substring(0, 300) + "..." : overview}
    </OverviewWrapper>
  );
};
export default Overview;
