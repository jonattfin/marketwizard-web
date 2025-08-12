import PortfolioTabs from './_components/portfolioTabs';
import News from './_components/news';

import {portfolios} from "@/api";
import Box from "@mui/material/Box";

export default async function Portfolio({params}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  const portfolio = portfolios.find((portfolio) => portfolio.id === id);

  return (
    <Box>
      {id}
      {portfolio?.name}
      <PortfolioTabs/>

      <News/>
    </Box>
  );
}


