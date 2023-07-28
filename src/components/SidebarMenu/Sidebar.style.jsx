import styled, { keyframes } from 'styled-components'

export const Sidebar = styled.div`
  width: 15%;
  background-color: #006b66;
  
  &.collapsed {
    width: 5%;
  }

  `;

export const loadingAnimation = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`;

export const LoadingOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
animation: ${loadingAnimation} 1s infinite;
`;

