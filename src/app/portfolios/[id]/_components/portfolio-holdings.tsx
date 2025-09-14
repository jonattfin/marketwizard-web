import {FormatNumber, Table} from "@chakra-ui/react"
import {PortfolioDetailsDto} from "@/graphql/_generated/graphql";

type PortfolioHoldingsProps = {
  portfolio: PortfolioDetailsDto
}

const PortfolioHoldings = ({portfolio}: PortfolioHoldingsProps) => {
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Symbol</Table.ColumnHeader>
          <Table.ColumnHeader>Number of shares</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Price per share</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {portfolio.assets.map((asset) => (
          <Table.Row key={asset.symbol}>
            <Table.Cell>{asset.symbol}</Table.Cell>
            <Table.Cell>{asset.numberOfShares}</Table.Cell>
            <Table.Cell textAlign="end">
              <FormatNumber value={asset.pricePerShare} style="currency" currency="USD" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export default PortfolioHoldings;