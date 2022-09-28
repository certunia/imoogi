// const baseUrl = import.meta.env.VITE_API_URL;

const index = async (method, path, data) => {
  // port - :5173
  try {
    const url = path;
    const _method = method.toUpperCase();
    const options = {
      method: _method, // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'include', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    }

    if (data) {
      options.body = JSON.stringify(data) // body data type must match "Content-Type" header
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.json();
      if (errorText?.message?.length) {
        throw Error(errorText);
      }
      throw Error('Server error');
    }

    return await response.json();
  }
  catch(error) {
    throw Error(error);
  }
};

export default index;
