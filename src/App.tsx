
import styles from "./style";
import { CTA, Footer, Themes, Navbar, Testimonials, Hero, Stats, CustomPrograms, PersonalRecords, Programs } from "./components";
import FAQAccordion from "./components/faqs/FAQ";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => (
    <Router>
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} flex-col`}>
    <div className={`${styles.boxWidth}`}>
        {/* <Business /> */}
        <Programs />
    </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
        <div className={`${styles.boxWidth}`}>
            <Testimonials />
            {/* <FirstVisual /> */}
            <CustomPrograms />
        </div>
    </div>
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.boxWidth}`}>
        <PersonalRecords />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.boxWidth}`}>
        <Themes />
        {/* <SecondVisual /> */}
        {/* <Premium /> */}
        <FAQAccordion/>
        <CTA />
        <Footer />
      </div>
      </div>
    </div>
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    </Router>
);

export default App;

