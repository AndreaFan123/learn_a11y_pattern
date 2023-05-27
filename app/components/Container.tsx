interface ChildrenProp {
  children: React.ReactNode;
}

export const Container: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <main className="h-screen w-full max-w-7xl my-6 mx-auto">{children}</main>
  );
};
