# Learn APG
"Learn APG" is a personal side-project, I initiated this to learn and practice APG concepts and technologies and provide Traditional Chinese version of APG documentation.

## Tech Stack
- Next.Js
- Tailwind CSS
- python for scraping APG documentation and store it in JSON format.

---
## Other setup

<details>
<summary>Postcss</summary>
This is my first time to use Tailwind CSS, hence I provide some notes for myself to remember how to setup Tailwind CSS with Postcss.

- `npm i -D post-import`
- Adding following syntax in `postcss.config.js`

```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
- Create a folder `styles` and `main.css` as a sort of an entrance file for all the css files, first to import tailwindcss as below:

```css
/* styles/main.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

- Then create a `global.css` inside `styles` folder as we can add our own global css here, and add inside `main.css`

```css
/* styles/main.css */
@import 'tailwindcss/base';
@import './global.css';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
- Swap the original `global.css` created by Tailwindcss in `layout.tsx`.

```tsx
// layout.tsx
import '../styles/main.css'

export default function RootLayout() {
  ...
}
```

- Create a `components` folder to include all components css files, for example `lading-page.css` and import it in `main.css` as below:

```css
/* styles/main.css */
@import 'tailwindcss/base';
@import './global.css';
@import 'tailwindcss/components';
@import './components/landing-page.css';
```

- You can create subfolders inside `components` folder to organize css files, for example: Creating a `login` folder and inside this folder create a `login.css` file and import it in `main.css` as below:

```css
/* styles/main.css */
@import 'tailwindcss/base';
@import './global.css';
@import 'tailwindcss/components';
@import './components/login/login.css';
```

>**Note**o
>
> Custome css paths should be placed under `tailwindcss/base` or `tailwindcss/components` or `tailwindcss/utilities` in `main.css` file or it won't work.
<detials>

</details>

<details>
<summary>Vitest</summary>

Below is some notes for myself to remember how to setup Vitest.

- `npm i -D vitest @testing-library/react @vitest/plugin-react jsdom`
- Create a `vite.config.ts` file and add following syntax:

```ts
// vite.config.ts
import { defineConfig } from 'vitest'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
```
- Create `__test__` folder in the root directory.
- Add script in `package.json`: `"test": "vitest"`.
- Install VSCode extension `Vitest` [here](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer).

>Referring to 
> 1. [Vitest](https://vitest.dev/guide/)
>
> 2. [Vitest for NextJs](https://github.com/vercel/next.js/tree/canary/examples/with-vitest)

</details>