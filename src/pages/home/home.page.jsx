// Components
import { HomeHero } from "../../components/home-hero/home-hero.component";
import { CaseStudyCardBase } from "../../components/case-study-card-base/case-study-card-base.component";
import { SideProjectsBase } from "../../components/side-projects-base/side-projects-base.component";

// Styles
import { HomeWrapper } from "./home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHero />
      <CaseStudyCardBase />
      <SideProjectsBase />
    </HomeWrapper>
  );
};

export default Home;
