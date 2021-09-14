const stopwords = [
  "how",
  "and",
  "or",
  "an",
  "a",
  "the",
  "there",
  "that",
  "of",
  "for",
  "to",
  "is",
  "are",
  "can",
  "has",
  "with",
  "within",
  "in",
  "on",
  "about",
  "as",
  "well",
  "very",
];

function remove_stopwords(str) {
  res = [];
  words = str.split(" ");
  for (i = 0; i < words.length; i++) {
    word_clean = words[i].split(".").join("");
    if (!stopwords.includes(word_clean)) {
      res.push(word_clean);
    }
  }
  return res.join(" ");
}

console.log(
  remove_stopwords(
    "An information retrieval model governs how a document and a query are represented and how the relevance of a document to a user query is defined."
  )
);

console.log(
  remove_stopwords(
    "Information retrieval is the area of study concerned with searching for documents, for information within documents, and for metadata about documents, as well as that of searching structured storage, relational databases, and the World Wide Web."
  )
);

console.log(
  remove_stopwords(
    "Web search has become very important in the information age. Increased exposure of pages on the Web can result in significant financial gains and/or fames for organizations and individuals."
  )
);
