import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
   schema: "https://countries.trevorblades.com",
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config