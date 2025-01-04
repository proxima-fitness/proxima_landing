
import styles from "./style";
import { CTA, Footer, Themes, Navbar, Testimonials, Hero, Stats, CustomPrograms, PersonalRecords, Programs } from "./components";
import FAQAccordion from "./components/faqs/FAQ";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useExitIntent } from 'use-exit-intent';
import { DownloadPopup } from "./components/call-to-action/DownloadPopup";
import { useState } from "react";

const App = () => {
    const { registerHandler } = useExitIntent({
        desktop: {
          delayInSecondsToTrigger: 3,
          triggerOnMouseLeave: true,
          triggerOnIdle: true,
          useBeforeUnload: false
        },
        mobile: {
            delayInSecondsToTrigger: 2,
            triggerOnIdle: true,
          }
      })

    // This handler will be triggered on desktop and mobile
    registerHandler({
      id: 'desktop',
      handler: () => {
        setIsOpen(true);
      },
      context: ['onDesktop']
    })

    // This handler will be triggered only on mobile
    registerHandler({
      id: 'mobile',
      handler: () => {
        setIsMobile(true);setIsOpen(true);
      },
      context: ['onMobile']
    })

    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
    <Router>
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <DownloadPopup isOpen={ isOpen } setIsOpen={ setIsOpen } isMobile={ isMobile } />

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
};

export default App;

