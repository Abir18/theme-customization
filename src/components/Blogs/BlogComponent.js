import styled from '@emotion/styled';

export const BlogComponent = styled('h1')(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main
  //   fontSize: theme.typography.fontSize
}));
