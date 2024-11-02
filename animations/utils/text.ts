export function split({
  element,
  expression = " ",
  append = true,
}: {
  element: HTMLElement;
  expression?: string;
  append?: boolean;
}): NodeListOf<HTMLSpanElement> {
  // Get the original text and trim it
  const originalText = element.innerHTML.toString().trim();

  // Split the text into words using the specified expression
  const words = splitText(originalText, expression);

  // Prepare to build the new inner HTML
  let innerHTML = "";

  // Iterate through the split words
  words.forEach((line) => {
    if (line.indexOf("<br>") > -1) {
      const lines = line.split("<br>");
      lines.forEach((line, index) => {
        innerHTML += index > 0 ? "<br>" + parseLine(line) : parseLine(line);
      });
    } else {
      innerHTML += parseLine(line);
    }
  });

  // Update the element's inner HTML with the processed content
  element.innerHTML = innerHTML;

  // Select all the spans created
  const spans = element.querySelectorAll("span");

  // Optionally append a non-breaking space to single-letter spans
  if (append) {
    spans.forEach((span) => {
      const isSingleLetter = span.textContent?.length === 1;
      const isNotEmpty = span.innerHTML.trim() !== "";
      const isNotAndCharacter = span.textContent !== "&";
      const isNotDashCharacter = span.textContent !== "-";

      // Append a non-breaking space to single letters if they meet the criteria
      if (
        isSingleLetter &&
        isNotEmpty &&
        isNotAndCharacter &&
        isNotDashCharacter
      ) {
        span.innerHTML = `${span.textContent}&nbsp;`;
      }
    });
  }

  // Return the spans created
  return spans;
}

export function calculateSentences(
  spans: NodeListOf<HTMLSpanElement>
): HTMLElement[][] {
  const lines: HTMLElement[][] = [];
  let words: HTMLElement[] = [];

  let position = spans[0].offsetTop;

  spans.forEach((span, index) => {
    if (span.offsetTop === position) {
      words.push(span as HTMLElement);
    } else {
      // When the vertical position changes, save the previous words as a new line
      lines.push(words);
      words = [span as HTMLElement];
      position = span.offsetTop;
    }

    if (index + 1 === spans.length) {
      lines.push(words); // Save the last line
    }
  });

  return lines;
}

function splitText(text: string, expression: string): string[] {
  const splits = text.split("<br>");
  let words: string[] = [];

  splits.forEach((item, index) => {
    if (index > 0) {
      words.push("<br>");
    }

    // Split by the provided expression
    const itemWords = item.split(expression);
    words = words.concat(itemWords);

    let isLink = false;
    let link = "";
    const innerHTML: string[] = [];

    words.forEach((word) => {
      // Detect links and preserve their structure
      if (!isLink && (word.includes("<a") || word.includes("<strong"))) {
        link = "";
        isLink = true;
      }

      if (isLink) {
        link += ` ${word}`;
      }

      if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
        innerHTML.push(link);
        link = "";
      }

      if (!isLink && link === "") {
        innerHTML.push(word);
      }

      if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
        isLink = false;
      }
    });

    words = innerHTML; // Update words with processed innerHTML
  });

  return words;
}

function parseLine(line: string): string {
  line = line.trim();

  // If the line is empty, return an empty string to avoid creating empty spans
  if (line === "" || line === " ") {
    return "";
  } else {
    // Return a span for non-empty lines
    return line === "<br>"
      ? "<br>"
      : `<span>${line}</span>` + (line.length > 1 ? " " : "");
  }
}
