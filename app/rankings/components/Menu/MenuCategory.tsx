"use client"
import { useState } from "react";
import styled from "styled-components";

interface WrapperProps {
    open: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    cursor: pointer;
    ${props => !props.open ? `
        &:hover { background-color: #444; } : ''
    ` : ''}
    width: 100%;
`

const MenuItem = styled.div`
    margin-left: 10px;
    cursor: pointer;
    border-bottom: 1px solid #555;

    &:hover {
        background-color: #666;
    }

`
interface MenuItemContainerProps {
    open: boolean;
}
const MenuItemContainer = styled.div<MenuItemContainerProps>`
    display: ${props => props.open ? 'block' : 'none'};
`

interface MenuCategoryProps {
    name: string;
    menuItems: {name: string, onClick: () => void}[];
}

export default function MenuCategory({name, menuItems}: MenuCategoryProps) {
    const [open, setOpen] = useState(false);

    function handleToggle() {
        setOpen(!open);
    }

    function handleMenuItemClick(e: React.MouseEvent, onClick: () => void) {
        e.stopPropagation();
        onClick();
    }

    return (
        <Wrapper onClick={handleToggle} open={open}>
            <h3 className="underline">{name}</h3>

            <MenuItemContainer open={open}>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={(e) => handleMenuItemClick(e, item.onClick)}>
                        {item.name}
                    </MenuItem>
                ))}
            </MenuItemContainer>
        </Wrapper>
    )
}