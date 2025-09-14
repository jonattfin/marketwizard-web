import PortfolioDetails from "@/app/portfolios/[id]/_components/portfolio-details";

export default async function PortfolioPage({params}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const {id} = await params;

  return (
    <PortfolioDetails id={id}></PortfolioDetails>
  )
}