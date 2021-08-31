const fetchData = async (handleData, url, methodType) => {
  let data = null;

  //fetching post or put method
  if (methodType === "POST" || methodType === "PUT") {
    const res = await fetch(url, {
      method: methodType,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(handleData),
    });
    data = await res.json();
  }

  //fetching get method use handleData = "false" as argument
  if ((methodType === "GET" || methodType === "DELETE") && !handleData) {
    const res = await fetch(url, {
      method: methodType,
      credentials: "include",
    });
    data = await res.json();
  }

  return data;
};

export default fetchData;
