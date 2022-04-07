const stringDeduplicator = (arr) => {
    const convert = new Set(arr);
    return [...convert]
  };