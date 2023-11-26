import { expect, test } from 'bun:test';
import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

test('', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    expect(lengthOfLongestSubstring('aabaab!bb')).toBe(3);
});
