# What is this?

A package that creates an effect of the text being typed.

# Installation

`npm i text-type-effect`

Then...

```
import draw from "text-type-effect";


document.querySelectorAll('[data-type-effect]').forEach(draw);

```

Or for a single element

```

draw(document.querySelector('[data-type-effect]'));

```

Note: I am using the data-type-effect selector but this is not required, you only need to pass an element into the draw function.

# HTML setup (optional)

For each element that you would like to use the type effect on please add the 'data-type-effect' attribute.

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

Additionally if you want different elements to type at different speed ranges you need to add: data-type-min='(minValue') data-type-max='(max-value)' to the element that you want to type at a different speed.

# Additional Information

In order to use the import, you will need to use a bundler like Parcel or Webpack.

Pull requests welcome, suggestions as well.

Thank You!
