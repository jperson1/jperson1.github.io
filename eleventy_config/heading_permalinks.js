// Source: https://github.com/18F/guides/blob/main/config/headingLinks.js

// https://www.npmjs.com/package/markdown-it-anchor#custom-permalink
//
// * slug  | the slugified id of the heading
// * _     | options passed into markdown-it-anchor; we don't use them
// * state | a complete tree of the Markdown document as parsed by markdown-it
// * index | the index of the token in the state of the current heading
const headingPermaLinks = (slug, _, state, index) => {

  // We also need to find the index of the element that closes the header. We'll
  // put our link stuff right before that.
  let closeIndex = index + 1
  while (state.tokens[closeIndex].type !== 'heading_close') {
    closeIndex += 1
  }

  // Insert an HTML block into the markdown tree. This way markdown-it won't
  // try to parse it, it'll just dump it directly into the output.
  const headingLink = {
    type: 'html_block',
    content: `
    <a href="#${slug}" class="flex" aria-label="Permalink for this section">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
    </a>`,
  }

  // Splice the new stuff directly into the tree.
  state.tokens.splice(closeIndex, 0, headingLink)
};

export default headingPermaLinks
