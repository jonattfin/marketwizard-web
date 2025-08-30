import {Box, Table} from "@chakra-ui/react"

export default function Watchlist() {
  return (
    <Box borderWidth={"1px"} padding="10px">
      <Table.Root stickyHeader interactive size={"sm"} >
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

const items = [
  {id: 1, symbol: "Vix", category: "Electronics", price: 999.99},
  {id: 2, symbol: "NDQ", category: "Home Appliances", price: 49.99},
  {id: 3, symbol: "SPX", category: "Furniture", price: 150.0},
  {id: 4, symbol: "DJI", category: "Electronics", price: 799.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 1, symbol: "Vix", category: "Electronics", price: 999.99},
  {id: 2, symbol: "NDQ", category: "Home Appliances", price: 49.99},
  {id: 3, symbol: "SPX", category: "Furniture", price: 150.0},
  {id: 4, symbol: "DJI", category: "Electronics", price: 799.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 1, symbol: "Vix", category: "Electronics", price: 999.99},
  {id: 2, symbol: "NDQ", category: "Home Appliances", price: 49.99},
  {id: 3, symbol: "SPX", category: "Furniture", price: 150.0},
  {id: 4, symbol: "DJI", category: "Electronics", price: 799.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
  {id: 5, symbol: "DAX", category: "Accessories", price: 199.99},
]
