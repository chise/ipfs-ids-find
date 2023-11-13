export async function getHanziProducts (character) {
  //const ipfs_gw_URL = "http://localhost:8080";
  const ipfs_gw_URL = "https://www.chise.org";
  //const ipfs_gw_URL = "https://ipfs.io";
  const requestURL = ipfs_gw_URL
    + "/ipfs/QmdrFS48D2cCyAfRY4j6LicSWJteUzqiJGDxkQABAJ3cqC/v1/character/a/ucs/default/0x"
    + character.codePointAt(0).toString(16).toUpperCase() + "/ideographic-products.json";
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

// p1 = getHanziProducts ('木');
// p2 = getHanziProducts ('口');
// Promise.all([p1, p2])
//   .then(([a, b]) => {
// 	  console.log (a.filter((val_a) => b.includes(val_a)));
// 	});


export async function ipfsIDSfind (queries) {
  //const queries = ['一', '口', '土', '田'];

  // 並行に非同期処理を実効
  const ret = await Promise.all(queries.map(getHanziProducts));
  return intersection (ret);
}
