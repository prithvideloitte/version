import styled from 'styled-components';
import {SharedComponent} from 'version-shared-library';
/* eslint-disable-next-line */
export interface ProductLibraryProps {}

const StyledProductLibrary = styled.div`
  color: pink;
`;

export function ProductLibrary(props: ProductLibraryProps) {
  return (
    <StyledProductLibrary>
      <SharedComponent></SharedComponent>
      <h1>Welcome to ProductLibrary!</h1>
    </StyledProductLibrary>
  );
}

export default ProductLibrary;
