export const checkError = (response) => {
  console.log('check eerro', response);
  if (response.status >= 200 && response.status <= 299) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    } else {
      //if response is not json and mostly empty
      return {};
    }
  } else {
    if (response.statusText) {
      //throw Error(response?.statusText);
    }
  }
};
