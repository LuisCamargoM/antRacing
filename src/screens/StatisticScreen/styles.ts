import styled from 'styled-components/native';
import { useScreenSize } from '../../hooks/useScreenSize';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const StatusDataView = styled.View`
   margin-top: 10px;
   padding-left: 15px;
   padding-right: 15px; 
   width: ${useScreenSize().width}px;
   flex-direction: row;
   justify-content: space-between;
`;

export const ListContainer = styled.View`
  flex: 1; 
  padding-left: 15px;
  padding-right: 15px;
  width: ${useScreenSize().width}px;
   flex-direction: row;
   justify-content: space-between;
`;