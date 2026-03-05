// Generate table of contents from article headings (h2, h3)
document.addEventListener('DOMContentLoaded', function() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  const article = document.getElementById('article-content');
  if (!article) return;

  const headings = article.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  // Create a document fragment to build TOC
  const fragment = document.createDocumentFragment();

  headings.forEach((heading, index) => {
    // Assign an id if not present
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement('li');
    li.className = heading.tagName === 'H2' ? 'ms-0' : 'ms-3'; // indent H3

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    li.appendChild(link);
    fragment.appendChild(li);
  });

  tocList.appendChild(fragment);
});