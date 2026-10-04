import { describe, expect, it } from 'vitest';

import { getProjectTitle } from './appInfo';

describe('getProjectTitle', () => {
  it('returns the project title', () => {
    expect(getProjectTitle()).toBe('Science Portal Chatbot');
  });
});
