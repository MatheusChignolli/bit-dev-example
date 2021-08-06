import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypography } from './typography.composition';

it('should render with the correct children', () => {
  const { getByText } = render(<BasicTypography />);
  const rendered = getByText('Test text');
  expect(rendered).toBeTruthy();
});
