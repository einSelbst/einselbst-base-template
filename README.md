![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

![next version](https://img.shields.io/badge/next-12.2.2-brightgreen)
![react version](https://img.shields.io/badge/react-17.0.2-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.8.2-brightgreen)

<details>
  <summary>
    Tooling
  </summary>

[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=Prettier&logoColor=white&style=flat-square 'Prettier')](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square 'Commitizen')](http://commitizen.github.io/cz-cli/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=dependabot&style=flat-square 'Renovate')](https://renovateapp.com/)

</details>

# Next2Nothing

Another opiniated starter for next.js, an evolution of [https://github/einselbst/overnext](Overnext).

## Prerequisites

- homebrew
- fnm, a better nvm, to install node 18

```zsh
brew install fnm
fnm install 18
```

- pnpm, a better npm

- fauna shell

```zsh
brew install fauna-shell # or
pnpm i -g fauna-shell
```

- aws amplify console

```zsh
f i -g @aws-amplify/cli  # for amplify deploys
```

## Installation

Install my-project with npm

```zsh
  pnpm install my-project
  cd my-project
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Run Locally

Install dependencies

```zsh
  pnpm install
```

Start the server

```zsh
  pnpm start
```

Development mode

```zsh
  pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Running Tests

To run tests, run the following command

```zsh
  pnpm test
```

## Docker

### The Application

### Postgres

### Fauna

```zsh
pnpm fauna:local  # open fauna shell connected to local docker fauna db
```

## Deployment

To deploy this project run

```zsh
  pnpm deploy
```

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### AWS

- Flightcontrol: [https://app.flightcontrol.dev/environments/clby72bd400u4mu014e4ab0nu](Flightcontrol Console)
  -> runs on cloudfront: [https://d3l3krwby7noux.cloudfront.net/](Cloudfront Deploy)

- Amplify: [https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1#/dolgeptpazmtp](Amplify Console)
  -> [https://main.dolgeptpazmtp.amplifyapp.com/](Amplify Deploy)

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

## Documentation

[Documentation](https://linktodocumentation)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## Authors

- [@einSelbst](https://www.github.com/einselbst)

## Roadmap

- Turbo Monorepo
- Wundergraph
- `react-hook-form`
- `fauna`

## Related

Here are some related projects

[Overnext](https://github.com/einselbst/overnext)

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
