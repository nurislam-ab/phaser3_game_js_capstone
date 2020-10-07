import { postData, getData } from '../api/scoreApi';

describe('Test score api', () => {
  test('returns the post request response for succesfull sending data to the data api', () => {
    postData('Adam', 30).then(data => {
      expect(data).toBe('Leaderboard score created correctly.');
    });
  });

  test('gets the data from the leaderboard api and renders it', () => {
    getData().then(data => {
      expect(typeof data).toBe('object');
    });
  });
});