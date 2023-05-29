// These code snippets belong to article: No ARIA is better than Bad ARIA

export const CodeSnippets = [
  {
    id: 'principle-1',
    code: `<pre><code>&lt;div role="button"&gt;this is a button&lt;/div&gt;</code></pre><pre><code>&lt;div role="button"&gt;this is a button&lt;/div&gt;</code></pre>`,
  },
  {
    id: 'principle-2',
    code1: `<a role="menuitem">Assistive tech users perceive this element as an item in a menu, not a link.</a>
  <a aria-label="Assistive tech users can only perceive the contents of this aria-label, not the link text">Link Text</a>`,
    code2: `<button aria-pressed="false">Mute</button>`,
    code3: `<table role="log">
  <!--
    Table that assistive technology users will not perceive as a table.
    The log role tells browser this is a log, not a table.
  -->
</table>
<ul role="navigation">
  <!-- This is a navigation region, not a list. -->
  <li><a href="uri1">nav link 1</li>
  <li><a href="uri2">nav link 2</li>
  <!-- ERROR! Previous list items are not in a list! -->
</ul>`,
  },
];
