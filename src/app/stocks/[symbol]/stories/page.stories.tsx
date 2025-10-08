import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import StockPage from "@/app/stocks/[symbol]/_components/stock-details";
import {GetStockBySymbolDocument} from "@/api/graphql/_generated/graphql";

import jsonData from './data.json';
import {expect, within} from "storybook/test";
import {Provider} from "@/components/ui/provider";
import {Box, Theme} from "@chakra-ui/react";

const symbol = "AMZN";

const WithProvider = () => {
  return (
    <Provider>
      <Theme appearance={"dark"}>
        <Box padding="50px">
          <StockPage symbol={symbol}/>
        </Box>
      </Theme>
    </Provider>
  )
}

const meta = {
  title: 'Stock Details',
  component: WithProvider,
  // This component will have an automatically _generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof WithProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithData: Story = {
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetStockBySymbolDocument,
            variables: {
              symbol
            }
          },
          result: jsonData
        }
      ]
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const holdingButton = canvas.getByRole('button', {name: 'Holding'});
    await expect(holdingButton).toBeDefined();
  },
};