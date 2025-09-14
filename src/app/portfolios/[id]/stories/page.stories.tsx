import {Provider} from "@/components/ui/provider";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import jsonData from './data.json';
import PortfolioDetails from "@/app/portfolios/[id]/_components/portfolio-details";
import {GetPortfolioByIdDocument} from "@/graphql/_generated/graphql";
import {expect, within} from "storybook/test";

const id = "01994684-10f4-7074-ba7d-5312c4568041";

const WithProvider = () => {
  return (
    <Provider>
      <PortfolioDetails id={id}/>
    </Provider>
  )
}

const meta = {
  title: 'Portfolio Details',
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
            query: GetPortfolioByIdDocument,
            variables: {
              id
            }
          },
          result: jsonData
        }
      ]
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const createButton = canvas.getByRole('button', {name: 'Create new portfolio'});
    await expect(createButton).toBeDefined();
  },
};