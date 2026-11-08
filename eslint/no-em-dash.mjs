const emDashPattern = /\u2014|\\u2014/g;

function hyphenFor(source, start, end) {
  const before = source[start - 1];
  const after = source[end];
  const spaceBefore = before !== undefined && !/\s/u.test(before) ? " " : "";
  const spaceAfter = after !== undefined && !/\s/u.test(after) ? " " : "";

  return `${spaceBefore}-${spaceAfter}`;
}

const noEmDash = {
  create(context) {
    return {
      Program() {
        const source = context.sourceCode.getText();

        for (const match of source.matchAll(emDashPattern)) {
          const start = match.index ?? 0;
          const end = start + match[0].length;

          context.report({
            fix(fixer) {
              return fixer.replaceTextRange(
                [start, end],
                hyphenFor(source, start, end),
              );
            },
            loc: {
              end: context.sourceCode.getLocFromIndex(end),
              start: context.sourceCode.getLocFromIndex(start),
            },
            messageId: "emDash",
          });
        }
      },
    };
  },
  meta: {
    docs: {
      description: "Disallow em dashes. Use a hyphen instead.",
    },
    fixable: "code",
    messages: {
      emDash: 'Use "-" instead of an em dash.',
    },
    schema: [],
    type: "problem",
  },
};

const textParser = {
  parse(code) {
    const lines = code.split("\n");
    const lastLine = lines.at(-1) ?? "";

    return {
      body: [],
      comments: [],
      loc: {
        end: { column: lastLine.length, line: lines.length },
        start: { column: 0, line: 1 },
      },
      range: [0, code.length],
      sourceType: "script",
      tokens: [],
      type: "Program",
    };
  },
};

const plugin = {
  meta: { name: "no-em-dash" },
  rules: { "no-em-dash": noEmDash },
};

export { textParser };
export default plugin;
