import { render } from '@testing-library/react';

import MapEmbeddingLeaflet from './map-embedding-leaflet';

describe('MapEmbeddingLeaflet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapEmbeddingLeaflet />);
    expect(baseElement).toBeTruthy();
  });
});
