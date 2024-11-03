import gsap from "gsap";
import Component from "../classes/component";
import { split } from "../utils/text";

interface HomeAnimationProps {
  element: string | HTMLElement;
  elements: {
    animationsTitles: string;
    animationsParagraphs: string;
  };
}

export default class HomeAnimation extends Component {
  private observer!: IntersectionObserver;
  //  private elementLinesSpans!: NodeListOf<HTMLSpanElement>;

  constructor(props: HomeAnimationProps) {
    super(props);

    this.handleIntersection = this.handleIntersection.bind(this);
    this.initObserver();
  }

  private initObserver() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5,
    });
    this.observeElements();
  }

  private observeElements() {
    console.log(Object.values({ ...this.elements }));
    Object.values({ ...this.elements }).forEach((elementList) => {
      if (elementList instanceof NodeList) {
        elementList.forEach((el) => this.observer.observe(el as HTMLElement));
      }
    });
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        if (el.dataset.animation === "title") {
          this.animateTitleIn(el);
        } else if (el.dataset.animation === "paragraph") {
          this.animateParagraphIn(el);
        }
      } else {
        if (el.dataset.animation === "title") {
          this.animateTitleOut(el);
        } else if (el.dataset.animation === "paragraph") {
          this.animateParagraphOut(el);
        }
      }
    });
  }

  private animateTitleIn(element: HTMLElement) {
    if (!element.hasAttribute("data-animated")) {
      split({ element, expression: " " });
      split({ element, expression: " " });
      element.setAttribute("data-animated", "true");
    }

    const elementLinesSpans = element.querySelectorAll("span span");

    gsap.set(elementLinesSpans, {
      autoAlpha: 1,
    });

    gsap.fromTo(
      elementLinesSpans,
      { y: "100%", autoAlpha: 0 },
      {
        y: "0%",
        ease: "power3.out",
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1,
      }
    );
  }

  private animateTitleOut(element: HTMLElement) {
    const elementLinesSpans = element.querySelectorAll("span span");

    gsap.set(elementLinesSpans, {
      autoAlpha: 0,
    });
  }

  private animateParagraphIn(element: HTMLElement) {
    if (!element.hasAttribute("data-animated")) {
      split({ element, expression: " " });
      split({ element, expression: " " });
      element.setAttribute("data-animated", "true");
    }

    const elementWordsSpans = element.querySelectorAll("span span");

    gsap.set(elementWordsSpans, {
      autoAlpha: 1,
    });

    gsap.fromTo(
      elementWordsSpans,
      { y: "100%" },
      {
        y: "0%",
        ease: "expo.out",
        autoAlpha: 1,
        stagger: 0.06,
        duration: 0.75,
      }
    );
  }

  private animateParagraphOut(element: HTMLElement) {
    const elementWordsSpans = element.querySelectorAll("span span");

    gsap.set(elementWordsSpans, {
      autoAlpha: 0,
    });
  }

  public destroy() {
    this.observer.disconnect();
  }

  private static map<T, U>(
    array: T[],
    callback: (element: T, index: number, array: T[]) => U
  ): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
}
