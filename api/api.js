export const getAllQuotes = async function () {
  const res = await fetch(
    "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
  );
  if (!res.ok) throw new Error("Fail to get all quotes!");
  const data = await res.json();
  const quotes = [];
  for (const x in data) {
    quotes.push(data[x]);
  }
  return quotes;
};
export const postQuote = async function (data) {
  const res = await fetch(
    "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }
  );
  if (!res.ok) throw new Error("Fail to post a quote!");
  return null;
};
export const getQuote = async function (quoteId) {
  const res = await fetch(
    "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
  );
  if (!res.ok) throw new Error("Fail to get all quotes!");
  const data = await res.json();
  const quote = [...data].find((e) => e.id === quoteId);
  return quote;
};
export const getAllComments = async function (quoteId) {
  const res = await fetch(
    `https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${quoteId}.json`
  );
  if (!res.ok) throw new Error("Fail to get all comments!");
  const data = await res.json();
  const comments = [];
  for (const x in data) {
    comments.push(data[x]);
  }
  return comments;
};
export const postComment = async function (data) {
  const res = await fetch(
    `https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${data.quoteId}.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }
  );
  if (!res.ok) throw new Error("Fail to post a comment!");
  return null;
};
