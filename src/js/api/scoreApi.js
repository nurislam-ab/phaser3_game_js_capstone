import 'regenerator-runtime';

const ScoreApi = (() => {
  const apiRequest = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NySOGAxXsdj7kZye7rWo/scores/';

  const initData = async () => {
    const body = JSON.stringify({
      user: 'Dragon fighter',
      score: 10,
    });

    const data = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    };

    const response = await fetch(apiRequest, data);
    const result = await response.json();
    return result.result;
  };

  const postData = async (user, score) => {
    const body = JSON.stringify({ user, score });
    const data = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    };

    const response = await fetch(apiRequest, data);
    const result = await response.json();
    return result;
  };

  const sort = (data) => {
    const arr = [];

    for (let i = 0; i < data.length; i += 1) {
      arr.push([data[i].user, data[i].score]);
    }
    arr.sort((a, b) => b[1] - a[1]);

    return arr;
  };

  const getData = async () => {
    const headers = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application-json',
      },
    };

    const response = await fetch(apiRequest, headers);
    const data = await response.json();

    return sort(data.result);
  };

  return {
    initData,
    postData,
    sort,
    getData,
  };
})();

export default ScoreApi;