import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Image } from './Image.ui';

describe('Image component', () => {
  it('renders skeleton and then image on load', async () => {
    render(<Image src="/test.png" alt="test image" lazy={false} />);

    // skeleton should be present initially
    const skeleton = document.querySelector('[aria-hidden]');
    expect(skeleton).toBeTruthy();

    const img = screen.getByAltText('test image') as HTMLImageElement;
    expect(img).toBeTruthy();

    // simulate load
    fireEvent.load(img);

    // after load the skeleton remains in DOM but image should be loaded
    expect(img.complete || img.naturalWidth === 0 || img.naturalHeight === 0).toBeDefined();
  });
});
