import { OrdersResponse } from "@/types/order";

const mockOrders: OrdersResponse = {
  results: [
    {
      receipt_id: 1,
      name: "John Doe",
      buyer_email: "john@example.com",
      status: "paid",
      is_shipped: true,
      is_paid: true,
      created_timestamp: 1678234567,
      message_from_buyer: "Please gift wrap it!",
      transactions: [
        {
          transaction_id: 1,
          title: "Custom Necklace",
          sku: "NK-001",
        },
      ],
      tags: [],
    },
    {
      receipt_id: 2,
      name: "Jane Smith",
      buyer_email: "jane@example.com",
      status: "unpaid",
      is_shipped: false,
      is_paid: false,
      created_timestamp: 1678345678,
      message_from_buyer: "Could you make it in blue color?",
      transactions: [
        {
          transaction_id: 2,
          title: "Silver Ring",
          sku: "SR-002",
        },
      ],
      tags: [],
    },
    {
      receipt_id: 3,
      name: "Alice Johnson",
      buyer_email: "alice@example.com",
      status: "paid",
      is_shipped: false,
      is_paid: true,
      created_timestamp: 1678456789,
      message_from_buyer: "",
      transactions: [
        {
          transaction_id: 3,
          title: "Gold Bracelet",
          sku: "GB-003",
        },
      ],
      tags: [],
    },
  ],
  count: 3,
};

export default mockOrders;
