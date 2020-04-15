import React from 'react';
import styled from 'styled-components';
import './index.css';
import LeftMenu from "./LeftMenu";


const Content = styled('div')`
 filter: blur(5px);
  transition: .7s;
  height: 100vh;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
 :hover {
    filter: none;
  }
`;

const Header = styled('div')`
  display: flex;
  justify-content: flex-start;
  padding-left: 10vw;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  filter: blur(1px);
  transition: .7s;
  position: sticky;
  top: 0;
  z-index:1;
  :hover {
    filter: none;
  }
`;

const Button = styled('button')`
    background-color: rgba(0,0,0,0);
    padding: 0 2%;
`;

const Layout = ({ children }) => {
  const [state, setState] = React.useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div>
      <Header>
        <Button onClick={() => setState(!state)}>Menu</Button>
      </Header>
        <LeftMenu isShow={state} handleClick={handleClick} />
        <Content>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
