interface ContentLayoutProps {
  children: React.ReactNode;
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className="me-14 mb-6">{children}</div>;
};
