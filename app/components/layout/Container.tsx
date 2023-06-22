interface ChildrenProp {
  children: React.ReactNode;
}

export const Container: React.FC<ChildrenProp> = ({ children }) => {
  return <main className=" w-full ">{children}</main>;
};
