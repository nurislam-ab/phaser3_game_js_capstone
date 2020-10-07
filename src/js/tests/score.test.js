import { incScore, getScore, resetScore } from '../objects/score';

describe('Testing Score model', () => {
  test('increments score', () => {
    expect(incScore(20)).toBe('20');
  });
  test('returns score 20', () => {
    expect(getScore()).toBe(20);
  });
  test('resets the score equal to zero', () => {
    expect(resetScore()).toBe('0');
  });
});