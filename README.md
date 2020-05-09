# What is this?

A package that creates an effect of the text being typed.

# Installation

`npm i text-type-effect`

Then...

```
import draw from "text-type-effect";


document.querySelectorAll('[data-typeeffect]').forEach(draw);

```

Or for a single element

```

draw(document.querySelector('[data-typeeffect]'));

```

# Options

text-type-effect supports two options both of which are optional:

- _defaultMin_ - _Int_ (Defaults to 20) This is the minimum number of ms in between letters when typed.
- _defaultMax_ - _Int_ (Defaults to 80) This is the maximum number of ms in between letters when typed.

Both can be set using:

```
import { setDefault } from "text-type-effect";

const options = {
    min: (New Value),
    max: (New Value),
}

setDefault(options);

```

You can check what your current defaults are set to using:

```
import { getDefault } from "text-type-effect";

console.log(getDefault())

```

This returns an object containing the properties: defaultMin and defaultMax.
