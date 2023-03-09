import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WrapperLink = styled.div`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WrapperText = styled.div`
  max-width: 600px;
`;

export const LinkDetails = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  &.active {
    color: orangered;
  }
`;