import EventEmitter from "events";

type SelectorType = string | HTMLElement;
type ElementsType = {
  [key: string]: string | NodeList | HTMLElement | HTMLElement[] | null;
};

interface ComponentProps {
  element: SelectorType;
  elements?: ElementsType;
}

export default class Component extends EventEmitter {
  private selector: SelectorType;
  private selectorChildren: ElementsType;
  public element!: HTMLElement | null;
  public elements!: {
    [key: string]: HTMLElement | NodeList | HTMLElement[] | null;
  };

  constructor({ element, elements = {} }: ComponentProps) {
    super();

    this.selector = element;
    this.selectorChildren = {
      ...elements,
    };

    this.create();
    this.addEventListeners();
  }

  // Custom 'each' function to iterate over an object
  private static each<T>(
    obj: { [key: string]: T },
    callback: (value: T, key: string) => void
  ): void {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        callback(obj[key], key);
      }
    }
  }

  create() {
    if (this.selector instanceof HTMLElement) {
      this.element = this.selector;
    } else {
      this.element = document.querySelector(
        this.selector
      ) as HTMLElement | null;
    }

    this.elements = {};

    Component.each(
      this.selectorChildren,
      (
        entry: string | NodeList | HTMLElement | HTMLElement[] | null,
        key: string
      ) => {
        if (
          entry instanceof HTMLElement ||
          entry instanceof NodeList ||
          Array.isArray(entry)
        ) {
          this.elements[key] = entry;
        } else if (typeof entry === "string" && entry !== "") {
          const nodeList = document.querySelectorAll(entry);

          this.elements[key] =
            nodeList.length === 0
              ? null
              : nodeList.length === 1
              ? (document.querySelector(entry) as HTMLElement)
              : nodeList;
        } else {
          this.elements[key] = null;
        }
      }
    );
  }

  addEventListeners() {}

  removeEventListeners() {}
}
