# Market Wizard Web

A modern web application to manage and analyze investment portfolios. Built with **Next.js** and **React**, styled with **Chakra UI**, and powered by **Apollo GraphQL** for efficient data fetching. T
he project emphasizes scalability, design consistency, and developer productivity with tools like **Storybook** and **pnpm**.

***

## Features

- 📊 Manage and track investments across multiple portfolios
- ⚡ Fast client-side navigation with Next.js
- 🎨 Styled consistently with Chakra UI
- 🔗 Apollo Client integration with auto-generated GraphQL schema and types
- 🧩 Component-driven development using Storybook
- 🧪 Interaction testing for UI reliability

***

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19, App Router enabled)
- **UI Library**: [Chakra UI](https://chakra-ui.com/)
- **GraphQL**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **Codegen**: [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- **Component Development**: [Storybook](https://storybook.js.org/)
- **Testing**: Storybook Interactions, React Testing Library (optional)
- **Package Manager**: [pnpm](https://pnpm.io/)

***

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8


### Installation

```bash
pnpm install
```


### Development Server

Run the app in development mode at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```


### Build for Production

```bash
pnpm build
pnpm start
```


***

## GraphQL Code Generation

The schema and typed hooks are automatically generated via GraphQL Code Generator.

- Update `.graphql` files under `src/graphql/`
- Generate types and hooks:

```bash
pnpm generate:schema
```

Generated files will be placed in `src/graphql/_generated`.

***

## Storybook

Run Storybook to develop and test components in isolation:

```bash
pnpm storybook
```


***

## Project Scripts

| Command | Description |
| :-- | :-- |
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm generate:schema` | Generate GraphQL schema/types |
| `pnpm storybook` | Run Storybook UI explorer |


## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a pull request

***

## License

This project is licensed under the MIT License.

***

