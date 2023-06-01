import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedLibraryProps {}

const StyledSharedLibrary = styled.div`
  color: pink;
`;

export function SharedComponent(props: SharedLibraryProps) {
  return (
    <StyledSharedLibrary>
      <h1>Welcome to SharedLibrary!</h1>
    </StyledSharedLibrary>
  );
}

export default SharedComponent;
