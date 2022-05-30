import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageButton = styled(Button)`
  font-family: 'Roboto';
  font-style: normal;
  width: 500px;
  height: 50px;
  display: inline-block;
  margin: 10px 0;
  /* padding-right: 150px; */
  padding: 5px 40px;
  font-size: 24px;
  border-radius: 10px;
  text-align: start;
  text-transform: capitalize;
  background: #1a3b7b;
  color: #fff;
  &:hover {
    background: #12b836;
    color: #fff;
  }
`;
const ArrowStyle = styled(ArrowForwardIosIcon)`
  position: absolute;
  top: 10px;
  left: 50px;
`;
const ButtonLayout = () => {
  return (
    <>
      <Box>
        <PageButton variant="contained">
          Your Applied Universities <ArrowForwardIosIcon />
        </PageButton>
      </Box>
      <Box>
        <PageButton>
          Visa Application Status <ArrowForwardIosIcon />
        </PageButton>
      </Box>
      <Box>
        <PageButton>
          Scholarships you’ve applied for <ArrowForwardIosIcon />
        </PageButton>
      </Box>
      <Box>
        <PageButton>
          Your active scholarship/funding <ArrowForwardIosIcon />
        </PageButton>
      </Box>
    </>
  );
};

export default ButtonLayout;
