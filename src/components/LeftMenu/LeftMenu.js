import React from "react";
import styled from "styled-components";
import LinkList from "./LinkList";

const MenuWrapper = styled('div')`
    position: fixed;
    z-index: 7;
  `;

const MenuContainer = styled('div')`
    margin-left: ${(props) => props.show ? '0' : '150%'};
    transition: 750ms cubic-bezier(0.4, 2, 0.4, 1) 0ms;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.5);
  `;

const ListWrapper = styled('div')`
    flex: 1 0 auto;
    height: 100%;
    display: flex;
    z-index: 6;
    position: fixed;
    overflow-y: auto;
    flex-direction: column;
    width: 250px;
    background-color: white;
    box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
  `;

const LeftMenu = ({handleClick, isShow}) => {
  return (
  <MenuWrapper
    onClick={() => handleClick()}
  >
    <MenuContainer show={isShow}>
      <ListWrapper>
        <LinkList />
      </ListWrapper>
    </MenuContainer>
  </MenuWrapper>
  )
};

export default LeftMenu;
