# Svelte + Tape Scaffolding

This is a simple empty project aim to be a minimal scaffolding for projects in
[Svelte](https://svelte.dev/) that include a test suite made with
[tape](https://github.com/substack/tape) and
[testing-library](https://testing-library.com/docs/svelte-testing-library/intro).

## Why

I really like Svelte but I also really like TDD approach and Svelte in this moment
doesn't have a test setup and neither some guide. I choose tape because I think is a
very lean test utils and make write test super fast.

## Features

Basically all the features that a normal Svelte project has plus some more commands:

```
yarn test //run the test once

yarn test -w // run the test in watch mode

yarn test:run  // run again the last test
```

## Tests

By default these commands run all the test that are in the format `<filename>.spec.js`
inside the `src` folder.

## Caveats

- At the moment (and probably with yarn2) is not possible to named import
  `testing-library/svelte` utils. The temporary solution was to import the library
  as `tl` and then using the normal utility like `tl.render`.

- Probably because of the way test are built the DOM is not polish after each test.
  A good practise is to run `tl.cleanup()` before ending the test.
