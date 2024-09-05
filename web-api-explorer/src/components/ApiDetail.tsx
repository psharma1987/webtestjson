import React from 'react';
import styled from 'styled-components';

interface ApiDetailProps {
  details: any;
}

const DetailContainer = styled.div`
  padding: 20px;
  background-color: #3F607A;
  margin:0 auto;
  width:60%;
`;

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px' // Adjust the spacing between the image and title
    },
    logo: {
      width: '50px', // Adjust the size as needed
      height: 'auto'
      
    },
    title: {
      margin: 0 // Remove default margin from h1
    }
  };

const ApiDetail: React.FC<ApiDetailProps> = ({ details }) => (
  <DetailContainer>
     <div style={styles.container}>
      <img src={details[0].info['x-logo'].url} alt="API Logo" style={styles.logo} />
      <h1 style={styles.title}>{details[0].info.title}</h1>
    </div>
          <br/>
          <br/>
          <br/>
              <h3>Discription:</h3>
    <p>{details[0].info.description}</p>
    <br/>
    <h3>Swagger:</h3>
    <p>{details[0].swaggerUrl}</p><br/>
        <h3>Contact</h3>
        {details[0].info.contact ? (
        <p>Email: {details[0].info.contact.email}</p>
    ) : (
        <p>Email not available</p>
      )}

{details[0].info.contact ? (
        <p>Email: {details[0].info.contact.name}</p>
    ) : (
        <p>Name not available</p>
      )}

{details[0].info.contact ? (
        <p>Email: {details[0].info.contact.url}</p>
    ) : (
        <p>URL not available</p>
      )}
  </DetailContainer>
);

export default ApiDetail;
