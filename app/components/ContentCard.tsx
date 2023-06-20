export const ContentCard = ({
  dictionary,
}: {
  dictionary: {
    title: string;
    aboutThisPattern: string;
    about: string;
    termsUnderstaning?: string;
    header: string;
    panel: string;
    headerContent: string;
    panelContent: string;
    aboutConclusion: string;
    keyboardInteraction: string;
    enter: string;
    or: string;
    space: string;
    enterOrSpacePoint1: string;
    enterOrSpacePoint2: string;
    tab: string;
    tabPoint: string;
    shiftPlusTab: string;
    shiftTabPoint: string;
    downArrow: string;
    option: string;
    optionPoint: string;
    upArrow: string;
    upArrowPoint: string;
    home: string;
    homePoint: string;
    end: string;
    endPoint: string;
    waiRoles: string;
    point1: string;
    point2: string;
    point2_1: string;
    point2_2: string;
    point3: string;
    point4: string;
    point5: string;
    point6: string;
    point6_1: string;
    point6_2: string;
  };
}) => {
  return (
    <main>
      <h1>{dictionary.title}</h1>
    </main>
  );
};
