import React from 'react';
import styled from 'styled-components';

interface SidebarProps {
  apiList: string[];
  onSelect: (api: string) => void;
}

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #3F607A;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
`;

const SidebarItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Sidebar: React.FC<SidebarProps> = ({ apiList, onSelect }) => (
  <SidebarContainer>
    <h3>Select Provider</h3>
    {apiList.map((api, index) => (
      <SidebarItem key={index} onClick={() => onSelect(api)}>
        {api}
      </SidebarItem>
    ))}
  </SidebarContainer>
);

export default Sidebar;
