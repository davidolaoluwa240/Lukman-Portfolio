// Modules
import { lazy } from "react";

// Components
import { Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("../pages/home/home.page"));
const About = lazy(() => import("../pages/about/about.page"));
const Bookshelf = lazy(() => import("../pages/bookshelf/bookshelf.page"));
const BongaloCaseStudy = lazy(() =>
  import("../pages/case-studies/bongalo-case-study/bongalo-case-study.page")
);
const AsusuCaseStudy = lazy(() =>
  import("../pages/case-studies/asusu-case-study/asusu-case-study.page")
);
const FreteriumCaseStudy = lazy(() =>
  import("../pages/case-studies/freterium-case-study/freterium-case-study.page")
);
const SwimmoCaseStudy = lazy(() =>
  import("../pages/case-studies/swimmo-case-study/swimmo-case-study.page")
);

// Layouts
import { DefaultLayout, CaseStudyLayout } from "../layouts";

export const Routes = () => {
  return (
    <Suspense fallback={<div>Loading Spinner Will In Here</div>}>
      <Switch>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bookshelf" element={<Bookshelf />} />
        </Route>
        <Route path="/case-study" element={<CaseStudyLayout />}>
          <Route path="bongalo" element={<BongaloCaseStudy />} />
          <Route path="asusu" element={<AsusuCaseStudy />} />
          <Route path="freterium" element={<FreteriumCaseStudy />} />
          <Route path="swimmo" element={<SwimmoCaseStudy />} />
        </Route>
      </Switch>
    </Suspense>
  );
};
