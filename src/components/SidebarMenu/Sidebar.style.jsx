import styled, { keyframes } from 'styled-components'

export const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  

  
  &.collapsed {
    width: 70px;
  }
  button {
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 20x;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 70px;
}

button svg {
  margin-right: 10px;
}
.btn-toggle {
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: #ddd;
  color: #006b66;
  font-size: 16px;
  align-items: center;
  align-content: center;
  text-align:center;
  transition: background-color 0.3s ease-in-out;
}

.btn-toggle.active {
  background-color: #9aadac;
}
  `;

export const loadingAnimation = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`;

export const LoadingOverlay = styled.div`
position: fixed;
top: 10;
left: 50;
width: 200%;
height: 200%;
color: #fff;
  font-size: 1.5em;
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
animation: ${loadingAnimation} 1s infinite;
`;





