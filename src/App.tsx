"use client";

import styles from "./style";
import { Programs, CallToAction, Themes, Testimonials, Hero, Stats, CustomPrograms, PersonalRecords } from "@/components";

import FAQAccordion from "./components/faqs/FAQ";
import { useExitIntent } from 'use-exit-intent';
import { DownloadPopup } from "./components/call-to-action/DownloadPopup";
import { useState } from "react";

const App = () => {

    const { registerHandler } = useExitIntent({
        desktop: {
          delayInSecondsToTrigger: 4,
          triggerOnMouseLeave: true,
          triggerOnIdle: true,
          useBeforeUnload: false,
        },
        mobile: {
            delayInSecondsToTrigger: 2,
            triggerOnIdle: true,
          },
      });

    // This handler will be triggered on desktop and mobile
    registerHandler({
      id: 'desktop',
      handler: () => {
        setIsOpen(true);
      },
      context: ['onDesktop'],
    });

    // This handler will be triggered only on mobile
    registerHandler({
      id: 'mobile',
      handler: () => {
        setIsMobile(true);setIsOpen(true);
      },
      context: ['onMobile'],
    });

    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <DownloadPopup isOpen={ isOpen } setIsOpen={ setIsOpen } isMobile={ isMobile } />
            <div className={ `bg-primary ${styles.flexStart}` }>
                <div className={ `${styles.boxWidth}` }>
                    <Hero />
                </div>
            </div>

            <div className={ `bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col` }>
                <div className={ `${styles.boxWidth}` }>
                    <Stats />
                </div>
            </div>
            <div className={ `bg-white ${styles.paddingX} ${styles.flexCenter} flex-col` }>
                <div className={ `${styles.boxWidth}` }>
                    <Programs />
                </div>
            </div>
            <div className={ `bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col` }>
                <div className={ `${styles.boxWidth}` }>
                    <Testimonials />
                    {/* <FirstVisual /> */}
                    <CustomPrograms />
                </div>
            </div>
            <div className={ `bg-white ${styles.paddingX} ${styles.flexCenter} flex-col` }>
                <div className={ `${styles.boxWidth}` }>
                    <PersonalRecords />
                </div>
            </div>
            <div className={ `bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col` }>
                <div className={ `${styles.boxWidth}` }>
                    <Themes />
                    {/* <SecondVisual /> */}
                    {/* <Premium /> */}
                    <FAQAccordion />
                    <CallToAction />
                </div>
            </div>
        </>
    );
};

export default App;

