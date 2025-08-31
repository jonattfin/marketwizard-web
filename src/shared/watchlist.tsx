import {Box, Table} from "@chakra-ui/react"
import {range} from "@es-toolkit/es-toolkit";

export default function Watchlist() {
  return (
    <Box borderWidth={"1px"} padding="10px">
      <Table.Root stickyHeader interactive size={"sm"} width={"400px"} >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Symbol</Table.ColumnHeader>
            <Table.ColumnHeader>Last</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.symbol}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

const items = range(1, 20).map((item) => {
  return {id: item, symbol: "Vix", category: "Electronics", price: 999.99};
});
