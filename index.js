export async function getHanziProducts (character) {
  //const ipfs_gw_URL = "http://localhost:8080";
  const ipfs_gw_URL = "https://www.chise.org";
  //const ipfs_gw_URL = "https://ipfs.io";
  const requestURL = ipfs_gw_URL
    + "/ipfs/chise.org/v1/character/a/ucs/default/0x"
    + character.codePointAt(0).toString(16).toUpperCase()
    + "/ideographic-products.json";
  //console.log(requestURL);
  const request = new Request(requestURL);

  const response = await fetch(request);
  const hanzi_products = await response.json();

  return hanzi_products;
}

// getHanziProducts ('字').then((v) => { console.log (v); });


function intersection (sets) {
  let set0 = sets[0];

  for (const set of sets) {
    set0 = set0.filter((x) => set.includes(x));
  }
  return set0;
}


export async function ipfsIDSfind (queries) {
  //const queries = ['一', '口', '土', '田'];

  const ret = await Promise.all(queries.map(getHanziProducts));
  return intersection (ret);
}
