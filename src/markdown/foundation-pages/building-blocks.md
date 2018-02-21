## Implementing Building Blocks

First install foundation-cli

```bash
npm install --global foundation-cli
```

Then install a 'kit' of building blocks

```bash
foundation kits install blog
```

This installs a batch of partials in the partials folder.  To keep thinks organised you can move these to a sub-folder in `partials` the gulp build tasks will still find the partials.

### Available kits

To see the available building blogs

```bash
foundation kits list
```

 Returns, as of this writing:

```bash
1) blog: 13 blocks
2) dashboard: 16 blocks
3) ecommerce: 19 blocks
4) marketing: 15 blocks
5) mobile-app: 15 blocks
6) news: 22 blocks
7) portfolio: 11 blocks
8) real-estate-travel: 13 blocks
```

### Caveats

Like everything in web development the framework moves fast.  These partials may or may not conform to your grid.

You may need to update classes here and there.

### Data

Remember you can define a partial to use a variable and then pass in the value for the variable when you call the partial which would make all of these partials much more useful.












