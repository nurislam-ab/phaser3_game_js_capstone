import Score from '../objects/score';

describe('Testing Score model', () => {
  test('increments score', () => {
    expect(Score.incScore(20)).toBe('20');
  });
  test('returns score 20', () => {
    expect(Score.getScore()).toBe(20);
  });
  test('resets the score equal to zero', () => {
    expect(Score.resetScore()).toBe('0');
  });
});