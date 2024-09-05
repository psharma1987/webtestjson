import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #3f5f7a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Home: React.FC = () => {
  const [apiList, setApiList] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSidebarOpen) {
      axios.get('https://api.apis.guru/v2/providers.json').then(response => {
        const providers = response.data;
        console.log(providers.data);
        setApiList(providers.data);
      });
    }
  }, [isSidebarOpen]);

  const handleButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleApiSelect = (api: string) => {
    navigate(`/api-detail/${api}`); 
  };

  return (
    <HomeContainer>
      <Button onClick={handleButtonClick} />
      {isSidebarOpen && (
        <Sidebar apiList={apiList} onSelect={handleApiSelect} />
      )}
    </HomeContainer>
  );
};

export default Home;
