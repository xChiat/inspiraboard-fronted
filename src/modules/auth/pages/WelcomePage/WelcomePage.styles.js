import styled from 'styled-components';

export const MainContainer = styled.div`
  @apply min-h-screen bg-gray-50 flex items-center justify-center p-4;
`;

export const Content = styled.div`
  @apply text-center max-w-md w-full;
`;

export const Title = styled.h1`
  @apply text-4xl font-bold text-gray-900 mb-6;
`;

export const ButtonGroup = styled.div`
  @apply space-y-4;
  
  a {
    @apply block text-lg font-medium;
  }
`;