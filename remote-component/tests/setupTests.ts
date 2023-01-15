import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-hook' });

global.__webpack_public_path__ = '/';