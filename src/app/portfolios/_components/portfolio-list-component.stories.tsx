import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";
import {Portfolio} from "@/api/types";

const meta = {
  title: 'Portfolios/PortfoliosList',
  component: PortfoliosListComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof PortfoliosListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    portfolios: [],
    totalCount: 0,
    onSubmit: () => {}
  },
};

export const NotEmpty: Story = {
  args: {
    portfolios: createPortfolios(2),
    totalCount: 2,
    onSubmit: () => {}
  },
};

function createPortfolios(numberOfPortfolios: number) {
  const portfolios: Portfolio[] = [];
  for (let i = 0; i < numberOfPortfolios; i++) {
    portfolios.push({
      id: i.toString(),
      totalValue: 1000,
      name: `Portfolio ${i}`,
      description: `Portfolio ${i}`,
      unrealizedGain: 0,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    })
  }
  return portfolios;
}
