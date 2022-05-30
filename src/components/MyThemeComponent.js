import { styled } from '@mui/system';

// import { styled } from '@mui/material';

// import styled from '@emotion/styled';

export const MyThemeComponent = styled('button')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  fontSize: theme.typography.fontSize,
  borderRadius: theme.shape.borderRadius
}));

export const MyThemeComponent1 = styled('button')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.darker,
  fontSize: theme.typography.fontSize,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius
}));
