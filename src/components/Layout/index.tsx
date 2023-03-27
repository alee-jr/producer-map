import * as S from "./styles";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <S.Container>
      <S.SideBar></S.SideBar>
      <S.Content>
        <S.Title>
          <h1>{title}</h1>
        </S.Title>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;
