const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, endpointData + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
};

export { weakMap, queryAPI };
