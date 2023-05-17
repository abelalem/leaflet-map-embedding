import { render } from '@testing-library/react';

import MapEmbeddingReactLeaflet from './map-embedding-react-leaflet';

describe('MapEmbeddingReactLeaflet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapEmbeddingReactLeaflet />);
    expect(baseElement).toBeTruthy();
  });
});
