export const checkError = (response) => {
  console.log('check eerro', response);
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};
