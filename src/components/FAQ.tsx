
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      className={`flex flex-col p-6 rounded-[20px] mb-0 feature-card `}
      onClick={toggleAccordion}
      style={{ cursor: 'pointer' }}
    >

      <div
        className="flex-1 flex flex-col ml-3"
      >
        <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1`}>{question}</h4>
      </div>
      {isOpen && (
          <p className={styles.paragraph}>{answer}</p>
      )}
    </motion.div>
  );
};


const FAQAccordion = () => (
  <section id="faqs" data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-once="true">
      <h2 className={styles.heading2}>Frequently Asked Questions</h2>
      <div className="mt-10">
        <FAQItem
          question="I don't have much time. How can this app fit into my busy schedule?"
          answer="Our app is designed for flexibility. You can choose from various workout durations and intensity levels to match your available time and energy."
        />
        <FAQItem
          question="Is this app legit? How can I trust it?"
          answer="We are a legitimate fitness platform with a growing community of satisfied users. Check out our reviews, testimonials, and partnerships to see the positive impact we've made."
        />
        <FAQItem
            question="How can I be sure this app is reliable?"
            answer="While we embrace technology, we understand concerns. Our app undergoes rigorous testing to ensure reliability, and our support team is available to address any issues you may encounter."
          />
        <FAQItem
            question="I can't afford to pay. Is the app still accessible for me?"
            answer="Absolutely! We offer a range of features for free, and our premium options are designed to enhance your experience but are not necessary for a fulfilling fitness journey. We believe in inclusivity."
          />
        <FAQItem
            question="Can I use this app with my existing fitness routine?"
            answer="Certainly! Our app is adaptable to various fitness levels and routines. You can integrate it seamlessly with your current workout plan or use it as a standalone solution."
          />
        <FAQItem
            question="How can I involve friends in my fitness journey through this app?"
            answer="Our app supports social connectivity! You can invite friends to join challenges, share achievements, and motivate each other. Fitness is more fun when shared."
          />
        <FAQItem
            question="Are the workouts customizable to my fitness level?"
            answer="Yes, indeed! We offer personalized workout recommendations based on your fitness level and goals. You can also customize workouts to match your preferences and requirements."
          />
        <FAQItem
            question="Can I use the app without revealing personal information?"
            answer="Absolutely! While some information is helpful for personalized recommendations, you can control the amount of personal data you share. We prioritize user comfort and consent."
          />
          </div>
  </section>
);

export default FAQAccordion;

