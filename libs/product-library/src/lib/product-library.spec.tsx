import { render } from '@testing-library/react';

import ProductLibrary from './product-library';

describe('ProductLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
