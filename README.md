# data-mask
a package for data masking

# Installation

```bash
$ npm install data-mask
```

# Usage

```javascript
/**
 * options parameter is optional in the constructor.
 */
const { masking, show } = require('data-masking');

// Cover character
masking('17612345678', 3, 7); // 176****5678
masking('17612345678', -1, 11) // 1761234567*
masking('17612345678', 3, 7, '#'); // 176####5678

// Select show character
show('张三丰', 0, 1); // 张**
show('张三丰', -1); // **丰
show('张三丰', 0, 1, '#'); // 张##

```


# License

Copyright (c) 2019 Hosea, Licensed under the MIT license.