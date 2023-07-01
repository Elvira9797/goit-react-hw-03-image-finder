import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ loadMore, children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <StyledButton type="button" disabled>
          Loading...
        </StyledButton>
      ) : (
        <StyledButton type="button" onClick={() => loadMore()}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
