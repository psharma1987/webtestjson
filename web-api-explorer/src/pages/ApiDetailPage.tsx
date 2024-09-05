import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ApiDetail from '../components/ApiDetail';
import styled from 'styled-components';

const DetailPageContainer = styled.div`
  padding: 20px;
  background-color: #3F607A;
`;

const ApiDetailPage: React.FC = () => {
  const { providerName } = useParams<{ providerName: string }>();
  const [apiDetails, setApiDetails] = useState<any>(null);
//   const [apiName, setApiName] = useState();


  useEffect(() => {
    axios.get(`https://api.apis.guru/v2/${providerName}.json`).then(response => {
        console.log(response.data,"1Nuuuuuu")
        const apiArray: any[] = convertObjectToArray(response.data.apis);
console.log(apiArray,"WWWW")
      setApiDetails(apiArray);
    //   setApiName(providerName);
    });


    const convertObjectToArray = (obj: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        return Object.values(obj);
      };

    // const getApiInfo = (providerName) => {
    //     const apiEntry = data.apis[apiName];
    //     if (apiEntry) {
    //       const { info } = apiEntry;
    //       return info;
    //     }
    //     return null;
    //   };

  }, [providerName]);

  return (
    <DetailPageContainer>
      {apiDetails ? (
        <ApiDetail details={apiDetails}/>
      ) : (
        <p>Loading...</p>
      )}
    </DetailPageContainer>
  );
};

export default ApiDetailPage;
