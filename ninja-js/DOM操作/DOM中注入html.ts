const selfClosedTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

export function convertFalseSelfClosedTag(html: string) {
  return html.replace(/(<(\w+)[^>]*?)\/>/g, (all, front, tag) =>
    selfClosedTags.includes(tag) ? all : `${front}></${tag}>`
  );
}

function toNodes(html: string, parent?: HTMLElement) {
  const wrapDict = {
    td: ["table", "thbody", "tr"],
    th: ["table", "thbody", "tr"],
    tr: ["table", "thead"],
    option: ["select"],
    optgroup: ["select"],
    legend: ["fieldset"],
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    colgroup: ["table"],
    caption: ["table"],
    col: ["table", "tbody"],
  };

  const parentNode = parent || document.createElement("div");
  const tagName = html.match(/<(\w+)>/);

  if (!tagName) {
    parentNode.innerText = html;
    return parentNode;
  }

  // to be continued
}
