import { useState } from "react";
import styles from "./faq-accordion.module.scss";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (index: number) => activeIndex === index;

  return (
    <div className={styles["faq-section__content"]}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles["faq-section__item"]}`}
          data-active={isActive(index)}
        >
          <button
            className={styles["faq-section__question"]}
            onClick={() => toggleAccordion(index)}
            aria-expanded={isActive(index)}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            {item.question}
            <span className={styles["faq-section__icon"]}>+</span>
          </button>

          <div
            className={styles["faq-section__answer"]}
            id={`faq-answer-${index}`}
            aria-labelledby={`faq-question-${index}`}
            data-active={isActive(index)}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
