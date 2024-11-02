import HomeAnimation from "@/animations/pages/home";
import FaqAccordion from "@/components/faq-accordion";
import LogoGrid from "@/components/logos";
import styles from "@/styles/Home.module.scss";
import localFont from "next/font/local";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { faqData } from "../constants";

const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/HelveticaNeue-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Roman.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeue-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-family-helvetica-neue",
});

const recoleta = localFont({
  src: [
    {
      path: "../assets/fonts/FONTSPRINGDEMO-RecoletaBlackRegular.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/FONTSPRINGDEMO-RecoletaAltRegular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/FONTSPRINGDEMO-RecoletaRegular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/FONTSPRINGDEMO-RecoletaAltBlackRegular.woff2",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-family-recoleta",
});

export default function Home() {
  const animationRef = useRef<HomeAnimation | null>(null);

  useEffect(() => {
    const homeAnimation = new HomeAnimation({
      element: styles.home,
      elements: {
        animationsTitles: '[data-animation="title"]',
        animationsParagraphs: '[data-animation="paragraph"]',
      },
    });

    animationRef.current = homeAnimation;

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Lósoja - Effortless Shopping & Errands</title>
        <meta name="description" content="Effortless Shopping & Errands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.home} ${helveticaNeue.variable} ${recoleta.variable}`}
      >
        <header className={styles.header}>
          <Image src="/logo.png" alt="logo" width={92} height={30} priority />
          <nav className={styles.header__nav}>
            <ul className={styles.header__menu}>
              <li className={styles.header__menu_item}>
                <a href="#" className={styles.header__link}>
                  Home
                </a>
              </li>
              <li className={styles.header__menu_item}>
                <a href="#" className={styles.header__link}>
                  About
                </a>
              </li>
              <li className={styles.header__menu_item}>
                <a href="#" className={styles.header__link}>
                  Services
                </a>
              </li>
              <li className={styles.header__menu_item}>
                <a href="#" className={styles.header__link}>
                  Company
                </a>
              </li>
              <li className={styles.header__menu_item}>
                <a href="#" className={styles.header__link}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.header__icons}>
            <button
              className={`${styles.header__icon_btn} ${styles["header__icon_btn--white"]}`}
            >
              {/* TODO: render as react component */}
              <Image
                src={"/hero-ask.svg"}
                alt="message us"
                width={24}
                height={24}
                unoptimized
              />
            </button>
            <button
              className={`${styles.header__icon_btn} ${styles["header__icon_btn--orange"]}`}
            >
              <Image
                src={"/hero-arrow-right.svg"}
                alt="message us"
                width={18}
                height={18}
                unoptimized
              />
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 data-animation="title" className={styles.hero__title}>
              Effortless Shopping
            </h1>
            <div className={styles.hero__subtitle_container}>
              <div className={styles["hero__subtitle_sub-container"]}>
                <h2
                  className={`${styles.hero__subtitle_text} ${styles["scroll-item-primary"]}`}
                >
                  Running Errands Made Easy{"-"}
                </h2>
                <h2
                  className={`${styles.hero__subtitle_text} ${styles["scroll-item-secondary"]}`}
                >
                  Running Errands Made Easy
                </h2>
              </div>
            </div>

            <div className={styles.hero__description}>
              <div className={styles["hero__profile-pic"]}>
                <Image
                  src="/hero-1.png"
                  alt="experience user 1"
                  width={40}
                  height={40}
                  className={styles["hero__profile-img"]}
                />
                <Image
                  src="/hero-2.png"
                  alt="experience user 2"
                  width={40}
                  height={40}
                  className={styles["hero__profile-img"]}
                />
              </div>
              <p className={styles.hero__text}>
                <span data-animation="paragraph">Experience a </span>
                <span
                  data-animation="paragraph"
                  className={styles.hero__highlight}
                >
                  new way of shopping.
                </span>
                <span data-animation="paragraph">
                  {" "}
                  Our dedicated runners handle your errands, so you can reclaim
                  your time.
                </span>
              </p>
            </div>
            <p className={styles["hero__scroll-note"]}>
              <span
                data-animation="paragraph"
                className={styles["hero__scroll-note__dot"]}
              >
                •
              </span>{" "}
              Scroll down to discover how it works
            </p>
          </section>
          <section className={styles["about"]}>
            <div className={styles["about__header"]}>
              <div className={styles["about__intro-block"]}>
                <h2 data-animation="title" className={styles["about__title"]}>
                  About
                </h2>
                <h3 className={styles["about__subtitle"]}>
                  <span data-animation="title">What</span>
                  <br />
                  <span data-animation="title"> We </span>
                  <span
                    data-animation="title"
                    className={styles["about__highlight"]}
                  >
                    Do
                  </span>
                </h3>
              </div>
              <p
                data-animation="paragraph"
                className={styles["about__description"]}
              >
                We simplify your life by taking care of your shopping and
                errands. We understand that your time is valuable, and we’re
                here to help you reclaim it. Our convenient service connects you
                with reliable errand-runners who are ready to handle your
                shopping needs.
              </p>
            </div>

            <div className={styles["about__features"]}>
              <div
                className={`${styles["about__feature"]} ${styles["about__feature--shopping"]}`}
              >
                <Image
                  src={"/shopping-made-easy.svg"}
                  alt="shopping made easy"
                  width={193.57}
                  height={183}
                  unoptimized
                  className={styles["about__feature-icon"]}
                />
                <div className={styles["about__feature-content"]}>
                  <h3
                    data-animation="title"
                    className={styles["about__feature-title"]}
                  >
                    Shopping Made Easy
                  </h3>
                  <p
                    data-animation="paragraph"
                    className={`${styles["about__feature-description"]}`}
                  >
                    Just tell us what you need, and we’ll do the shopping for
                    you. Whether it’s groceries, personal items, or a gift for a
                    special occasion, we’ve got you covered.
                  </p>
                </div>
              </div>

              <div
                className={`${styles["about__feature"]} ${styles["about__feature--payment"]}`}
              >
                <Image
                  src={"/secure-payment.svg"}
                  alt="secure payment"
                  width={163}
                  height={183}
                  unoptimized
                  className={styles["about__feature-icon"]}
                />
                <div className={styles["about__feature-content"]}>
                  <h3
                    data-animation="title"
                    className={styles["about__feature-title"]}
                  >
                    Secure Payment and Receipts
                  </h3>
                  <p
                    data-animation="paragraph"
                    className={styles["about__feature-description"]}
                  >
                    Pay for your items securely through our app. We’ll provide
                    you with a receipt for every transaction.
                  </p>
                </div>
              </div>

              <div
                className={`${styles["about__feature"]} ${styles["about__feature--delivery"]}`}
              >
                <Image
                  src={"/delivery.svg"}
                  alt="delivery"
                  className={styles["about__feature-icon"]}
                  width={183}
                  height={183}
                  unoptimized
                />
                <div className={styles["about__feature-content"]}>
                  <h3
                    data-animation="title"
                    className={styles["about__feature-title"]}
                  >
                    Delivery to Your Doorstep
                  </h3>
                  <p
                    data-animation="paragraph"
                    className={styles["about__feature-description"]}
                  >
                    Sit back and relax as your items are delivered to your
                    doorstep at your preferred time.
                  </p>
                </div>
              </div>

              <div
                className={`${styles["about__feature"]} ${styles["about__feature--runners"]}`}
              >
                <Image
                  src={"/trusted-errand-runners.svg"}
                  alt="trusted errand runners"
                  width={183}
                  height={183}
                  unoptimized
                  className={styles["about__feature-icon"]}
                />
                <div className={styles["about__feature-content"]}>
                  <h3
                    data-animation="title"
                    className={styles["about__feature-title"]}
                  >
                    Trusted Errand-Runners
                  </h3>
                  <p
                    data-animation="paragraph"
                    className={styles["about__feature-description"]}
                  >
                    We connect you with trustworthy and reliable errand-runners.
                    They are vetted and trained to ensure a quality service.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles["services"]}>
            <div className={styles["services__intro"]}>
              <div className={styles["services__intro-block"]}>
                <h2 className={styles["services__title"]}>Discover</h2>
                <h3
                  data-animation="title"
                  className={styles["services__subtitle"]}
                >
                  Our <br />{" "}
                  <span className={styles["services__highlight"]}>
                    Services
                  </span>
                </h3>
              </div>
              <p
                data-animation="paragraph"
                className={`${styles["services__description"]}`}
              >
                We offer a wide range of services to cater to your shopping
                needs. Whether you’re an individual, or a business looking to
                streamline your operations, we’ve got you covered.
              </p>
            </div>

            <div
              className={`${styles["services__item"]} ${styles["services__item--individual"]}`}
            >
              <div
                className={`${styles["services__item-icon-container"]} ${styles["services__item-icon-container--individual"]}`}
              >
                <Image
                  src={"/individual-shopping.svg"}
                  alt={`individual shopping`}
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
              <h3 data-animation="title">Individual Shopping</h3>
              <p data-animation="paragraph">
                We make shopping easy for individuals. Just tell us what you
                need, and we’ll do the shopping for you. From groceries to
                personal items, we’ve got you covered.
              </p>
              <button>Send us your shopping list →</button>
            </div>

            <div
              className={`${styles["services__item"]} ${styles["services__item--group"]}`}
            >
              <div
                className={`${styles["services__item-icon-container"]} ${styles["services__item-icon-container--group"]}`}
              >
                <Image
                  src={"/group-shopping.svg"}
                  alt={`group shopping`}
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
              <h3 data-animation="title">Group Shopping</h3>
              <p data-animation="paragraph">
                We understand that shopping can be a group effort. Our service
                allows multiple users to place their orders at once, ensuring
                everyone gets what they need.
              </p>
              <button>Join a shopping group →</button>
            </div>

            <div
              className={`${styles["services__item"]} ${styles["services__item--b2b"]}`}
            >
              <div className={styles["services__content"]}>
                <div
                  className={`${styles["services__item-icon-container"]} ${styles["services__item-icon-container--b2b"]}`}
                >
                  <Image
                    src={"/b2b-shopping.svg"}
                    alt={`b2b shopping`}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <h3 data-animation="title">B2B Shopping</h3>
                <p data-animation="paragraph">
                  We also cater to businesses, providing errand-running services
                  for restaurants, hotels, and other establishments.
                </p>
                <button>Let us shop for your business →</button>
              </div>
            </div>

            <div
              className={`${styles["services__item"]} ${styles["services__item--curated"]}`}
            >
              <div className={styles["services__content"]}>
                <div
                  className={`${styles["services__item-icon-container"]} ${styles["services__item-icon-container--curated"]}`}
                >
                  <Image
                    src={"/curated-shopping.svg"}
                    alt={`curated shopping`}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <h3 data-animation="title">Curated Shopping Lists</h3>
                <p data-animation="paragraph">
                  We offer specially curated shopping lists for you to use as a
                  shopping guide. This feature can save you time and ensure you
                  get everything you need.
                </p>
                <button>Checkout our shopping list →</button>
              </div>
            </div>
          </section>
          <section className={styles["trusted-section"]}>
            <div className={styles["trusted-section__header"]}>
              <p
                data-animation="paragraph"
                className={styles["trusted-section__subtitle"]}
              >
                Trusted by
              </p>
              <h1
                data-animation="title"
                className={styles["trusted-section__title"]}
              >
                200+ Companies <span> & Individuals</span>
              </h1>
              <button className={styles["trusted-section__button"]}>
                Register with us today →
              </button>
            </div>

            <LogoGrid />

            <LogoGrid />
          </section>
          <section className={styles["faq-section"]}>
            <div className={styles["faq-section__sidebar"]}>
              <h2 className={styles["faq-section__title"]}>
                <span data-animation="title">Frequently</span>
                <br />
                <span
                  data-animation="title"
                  className={styles["faq-section__title-asked"]}
                >
                  Asked
                </span>
                <br />
                <span
                  data-animation="title"
                  className={styles["faq-section__title-questions"]}
                >
                  Questions
                </span>
              </h2>
              <p
                data-animation="paragraph"
                className={styles["faq-section__subtitle"]}
              >
                Can&apos;t find what you&apos;re looking for? <br /> Contact us
                here:
              </p>
              <a
                href="mailto:info@losoja.com"
                className={styles["faq-section__contact"]}
              >
                info@losoja.com
              </a>
            </div>

            <FaqAccordion items={faqData} />
          </section>
          <section className={styles["subscribe-section"]}>
            <div className={styles["subscribe-section__box"]}>
              <div className={styles["subscribe-section__header"]}>
                <h3
                  data-animation="paragraph"
                  className={styles["subscribe-section__title"]}
                >
                  Let us help you run your shopping errands today
                </h3>
                <p
                  data-animation="paragraph"
                  className={styles["subscribe-section__text"]}
                >
                  With our platform, you can experience convenience and
                  efficiency in your shopping endeavors. Start experiencing the
                  difference today!
                </p>
              </div>

              <button
                type="submit"
                className={styles["subscribe-section__button"]}
              >
                Send us your shopping list →
              </button>
            </div>
          </section>
          <footer className={styles["social-section"]}>
            <div className={styles["social-section__subscribe"]}>
              <div className={styles["social-section__message-icon"]}>
                <Image
                  src={"/subscribe-message.svg"}
                  alt="subscribe message"
                  width={45}
                  height={45}
                  unoptimized
                />
              </div>
              <h3
                className={`${styles["social-section__title"]} ${styles["social-section__title--subscribe"]}`}
              >
                <span
                  data-animation="title"
                  className={`${styles["social-section__title-span"]}`}
                >
                  Subscribe to
                </span>
                <span
                  data-animation="title"
                  className={`${styles["social-section__title-newsletter"]}`}
                >
                  Our Newsletter
                </span>
              </h3>

              <p
                data-animation="paragraph"
                className={styles["social-section__text"]}
              >
                Stay up to date on market prices and related news when you sign
                up to our newsletter.
              </p>
              <form className={styles["social-section__form"]}>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className={styles["social-section__input"]}
                />
                <button
                  type="submit"
                  className={styles["social-section__button"]}
                >
                  Subscribe
                </button>
              </form>
              <p
                data-animation="paragraph"
                className={styles["social-section__disclaimer"]}
              >
                Don’t worry about spam. We hate it too!
              </p>
            </div>
            <div className={styles["social-section__follow"]}>
              <h3
                data-animation="title"
                className={`${styles["social-section__title"]} ${styles["social-section__title--follow"]}`}
              >
                Follow Us
              </h3>
              <div className={styles["social-section__icons"]}>
                <a
                  href="#"
                  className={`${styles["social-section__icon"]} ${styles["social-section__icon--instagram"]}`}
                >
                  <Image
                    src={"/instagram.svg"}
                    alt="instagram"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  className={`${styles["social-section__icon"]} ${styles["social-section__icon--twitter"]}`}
                >
                  <Image
                    src={"/x.svg"}
                    alt="x"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  className={`${styles["social-section__icon"]} ${styles["social-section__icon--email"]}`}
                >
                  <Image
                    src={"/mail.svg"}
                    alt="mail"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </a>
              </div>
              <div className={styles["footer__content"]}>
                <p className={styles["footer__text"]}>
                  Lọ́sọ́jà́ by{" "}
                  <span
                    data-animation="paragraph"
                    className={styles["footer__brand"]}
                  >
                    Detail Dive
                  </span>{" "}
                  © 2023. All rights reserved.
                </p>
                <div className={styles["footer__links"]}>
                  <a href="#" className={styles["footer__link"]}>
                    Privacy Policy
                  </a>
                  <a href="#" className={styles["footer__link"]}>
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <section className={styles["about-section"]}>
            <div className={styles["about-section__box"]}>
              <h2 className={`${styles["scroll-item-primary"]}`}>
                Let’s run your shopping errands today!
              </h2>
              <h2 className={`${styles["scroll-item-secondary"]}`}>
                Let’s run your shopping errands today!
              </h2>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
