interface ChildrenProp {
  children: React.ReactNode;
}

export const Container: React.FC<ChildrenProp> = ({ children }) => {
  return <main className=" w-full max-w-5xl my-12 mx-auto">{children}</main>;
};
