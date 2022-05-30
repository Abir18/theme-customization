// import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export const DashboardContainer = styled('div')(({ theme }) => ({
  background: 'red',
  color: theme.palette.primary.contrastText
  // fontSize: theme.typography.fontSize
}));
