import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const List = styled('ul')`
    padding: 0;
    display: flex;
    flex-direction: column;

`;

const ListItem = styled('li')`
    padding: 6px 0 6px 18px;
    transition: .2s ease;
    text-decoration: none;
    :hover {
        background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    }
`;


const LinkList = () => (
    <List>
        <Link to="/mercedes">
            <ListItem>
                mercedes
            </ListItem>
        </Link>
        <Link to="/bmw">
            <ListItem>
                bmw
            </ListItem>
        </Link>
        <Link to="/audi">
            <ListItem>
                audi
            </ListItem>
        </Link>
        <Link to="/honda">
            <ListItem>
                honda
            </ListItem>
        </Link>
        <Link to="/volkswagen">
            <ListItem>
                volkswagen
            </ListItem>
        </Link>
    </List>
);

export default LinkList;
