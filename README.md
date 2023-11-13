# ipfs-ids-find

A JavaScript module to search Chinese characters by their components
using the CHISE IDS database via IPFS.


## Install

```bash
npm install ipfs-ids-find
```

## How to Use

With Promise

```js
import { ipfsIDSfind as ids_find } from 'ipfs-ids-find';

ids_find (['金', '土', '日'])
    .then(result => console.log (result));
```


With async/await

```js
import { ipfsIDSfind as ids_find } from 'ipfs-ids-find';

async function test (){
    const result = await ids_find (['金', '土', '日']);
    console.log (result);
}

test ();
```
