# ipfs-ids-find

A JavaScript module to search Chinese characters by their components
using the CHISE IDS database via IPFS.


## Install

```bash
npm install ipfs-ids-find
```

## How to Use

Notice

You must run IPFS daemon of [Kubo](https://github.com/ipfs/kubo) before using this module.


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
