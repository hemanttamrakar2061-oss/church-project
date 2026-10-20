import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Body from "./components/Body";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Ministries from "./components/Ministrires";
import Services from "./components/Services";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";

const Home = () => {
  return (
    <>
      <Body />
      <About />
      <Services />
      <Ministries />
      <Events />

    </>
  );
};

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#12345A]">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <PageContainer>
                <About />
              </PageContainer>
            }
          />

          <Route
            path="/services"
            element={
              <PageContainer>
                <Services />
              </PageContainer>
            }
          />

          <Route
            path="/ministries"
            element={
              <PageContainer>
                <Ministries />
              </PageContainer>
            }
          />

          <Route
            path="/events"
            element={
              <PageContainer>
                <Events />
              </PageContainer>
            }
          />

          <Route
            path="/donate"
            element={
              <PageContainer>
                <h1 className="text-3xl font-bold">Support Our Church</h1>
                <p className="mt-4 text-slate-600">
                  Donation information will be available soon.
                </p>
                <Donate/>
              </PageContainer>
            }
          />

          <Route
            path="/contact"
            element={
              <PageContainer>
                <h1 className="text-3xl font-bold">
                  Visit Everest Gospel Church
                </h1>
                <Contact/>
              </PageContainer>
            }
          />

           <Route
            path="/gallary"
            element={
              <PageContainer>
                <h1 className="text-3xl font-bold">
                  Visit Everest Gospel Church
                </h1>
                <Gallary/>
              </PageContainer>
            }
          />


          <Route
            path="*"
            element={
              <PageContainer>
                <h1 className="text-3xl font-bold">Page Not Found</h1>
              </PageContainer>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
