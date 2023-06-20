export const AccordionItems = {
  title: 'Accordion Pattern (Sections With Show/Hide Functionality)',
  about:
    'An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.',
  termsUnderstaning: 'Terms for understanding accordions include:',
  header: 'Accordion Header:',
  panel: 'Accordion Panel:',
  headerContent:
    'Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.',
  panelContent: 'Section of content associated with an accordion header.',
  aboutConclusion:
    'In some accordions, there are additional elements that are always visible adjacent to the accordion header. For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section. And, in some cases, a snippet of the hidden content may also be visually persistent.',
  keyboardInteraction: 'Keyboard Interaction',
  enter: 'Enter',
  or: 'or',
  space: 'Space:',
  enterOrSpacePoint1:
    'When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.',
  enterOrSpacePoint2:
    'When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.',
  tab: 'Tab:',
  tabPoint:
    'Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.',
  shiftPlusTab: 'Shift + Tab',
  shiftTabPoint:
    'Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.',
  downArrow: 'Down Arrow',
  option: '(Option)',
  optionPoint:
    'If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.',
  upArrow: 'Up Arrow',
  upArrowPoint:
    ' If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.',
  home: 'Home',
  homePoint:
    'When focus is on an accordion header, moves focus to the first accordion header.',
  end: 'End',
  endPoint:
    'When focus is on an accordion header, moves focus to the last accordion header.',
  waiRoles: 'WAI-ARIA Roles, States, and Properties',
  point1:
    'The title of each accordion header is contained in an element with role button.',
  point2:
    'Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.',
  point2_1:
    'If the native host language has an element with an implicit heading and aria-level, such as an HTML heading tag, a native host language element may be used.',
  point2_2:
    'The button element is the only element inside the heading element. That is, if there are other elements inside the heading element, they are not focusable.',
};
