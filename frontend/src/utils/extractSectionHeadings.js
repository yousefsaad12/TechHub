export function extractSectionHeadings(content) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    if (level >= 2 && level <= 3) {
      headings.push({
        text,
        level,
        indent: level === 3 ? 'indent' : 'normal',
      });
    }
  }

  if (headings.length === 0) {
    return [
      { text: 'Introduction', level: 2, indent: 'normal' },
      { text: 'Main Content', level: 2, indent: 'normal' },
      { text: 'Key Points', level: 3, indent: 'indent' },
      { text: 'Conclusion', level: 2, indent: 'normal' },
    ];
  }

  return headings;
}


