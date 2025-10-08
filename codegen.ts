import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5196/graphql",
  documents: './**/*.graphql',
  generates: {
    "src/api/graphql/_generated/graphql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true
      }
    },
  }
};

export default config;