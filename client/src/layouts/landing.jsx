import { Routes, Route } from "react-router-dom";
import { LandingFooter, LandingNavBar } from "@/widgets/layout";
import routes from "@/routes";

export function Landing() {

  return (
    <div className="relative min-h-screen w-full">
    <LandingNavBar />
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "" &&
            pages.map(({ path, element }) => (
              <Route  key={path} exact path={path} element={element} />
            ))
        )}
      </Routes>
      <LandingFooter />
    </div>
  );
}

Landing.displayName = "/src/layout/landing.jsx";

export default Landing;
