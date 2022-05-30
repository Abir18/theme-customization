import React from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { data } from '../../data';

const PageTemplate = styled(Box)`
  margin-top: 50px;
`;

const CardText = styled(Typography)`
  /* margin-top: -20px; */

  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-weight: 400;
  /* font-size: 22px; */
`;

const PageLayout = () => {
  return (
    <PageTemplate>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((singleData, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={singleData.img}
                alt="Paella dish"
              />
              <CardText variant="body2" color="text.secondary">
                {singleData.description}
              </CardText>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageTemplate>
  );
};

export default PageLayout;
