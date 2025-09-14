import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import PortfoliosPage from "@/app/portfolios/page";
import {GetPortfoliosDocument} from "@/graphql/_generated/graphql";

import jsonData from './data.json';
import {expect, userEvent, within} from "storybook/test";
import {Provider} from "@/components/ui/provider";

const WithProvider = () => {
  return (
    <Provider>
      <PortfoliosPage/>
    </Provider>
  )
}

const meta = {
  title: 'Portfolios',
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
            query: GetPortfoliosDocument,
            variables: {
              take: 3,
              skip: 0
            }
          },
          result: jsonData
        }
      ]
    }
  },
  play: async ({args, canvasElement, step}) => {
    const canvas = within(canvasElement);

    const createButton = canvas.getByRole('button', {name: 'Create new portfolio'});
    await expect(createButton).toBeDefined();

    for (const p of jsonData.data.portfolios.items) {
      const title = await canvas.findAllByTestId(p.id);
      await expect(title).toBeDefined();

      const updateButton = await canvas.findAllByTestId(`update-btn-${p.id}`);
      await expect(updateButton).toBeDefined();

      const deleteButton = await canvas.findAllByTestId(`delete-btn-${p.id}`);
      await expect(deleteButton).toBeDefined();
    }
  },
};