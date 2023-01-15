import React, { Suspense } from 'react';
import { init18n } from '../i18n/i18n';

// eslint-disable-next-line no-console
init18n().catch(console.error);

interface StoryWrapperProps {
  children?: React.ReactChildren | React.ReactChild;
}

export const StoryWrapper = ({ children }: StoryWrapperProps): JSX.Element | null => {
  return (
    <Suspense data-hook='app-fallback' fallback={<span>Loading...</span>}>
      {children}
    </Suspense>
  );
};
