export interface Transaction {
  transaction_id: number;
  title: string;
  sku: string;
}

export interface Order {
  receipt_id: number;
  buyer_email: string;
  name: string;
  status: string;
  is_paid: boolean;
  is_shipped: boolean;
  created_timestamp: number;
  message_from_buyer: string;
  transactions: Transaction[];
}

export interface OrdersResponse {
  count: number;
  results: Order[];
}
