# Images Searcher

<p align="center">
  <a href="https://images-searcher.vercel.app/" target="_blank">
  Live Demo
  </a>
</p>

## Motivation

An images searcher that uses Unsplash API under the hood.

## Tech

- [Nuxtjs]
- [Vuejs]
- [TailwindCSS]

* Nuxt's philosophy is convention over configuration which means the application is already fined tune to a certain extend, this speeds up the development time.
* Server side rendering is always nice to have for better time to interactive and SEO purpose.

## TODO

- [ ] Make list title and description editable.
- [ ] Use [content loader] for images.
- [ ] Use [srcset] for better responsiveness.
- [ ] Lazy load off-screen images. (https://web.dev/lazy-loading/).
- [ ] Testing.
- [ ] Handle race conditions on the search bar properly (https://www.youtube.com/watch?v=DWZj56qUNfs).
- [ ] Add links to switch between home page and favorites page.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

The application is automatically deployed to [Vercel] on all commits to the `main` branch.

[nuxtjs]: https://nuxtjs.org
[vuejs]: https://vuejs.org/
[tailwindcss]: https://tailwindcss.com/
[vercel]: https://vercel.com/
[content loader]: https://github.com/egoist/vue-content-loader
[srcset]: https://web.dev/use-srcset-to-automatically-choose-the-right-image/
