import { OrdersResponse } from "@/types/order";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalNotes from "./InternalNotes";
import OrderTags from "./OrderTags";

async function getOrders(): Promise<OrdersResponse> {
  const res = await fetch("http://localhost:3000/api/mock/orders");
  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }
  return res.json();
}

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { results: orders } = await getOrders();
  const order = orders.find(
    (order) => order.receipt_id === parseInt(params.id, 10)
  );

  if (!order) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Order #{order.receipt_id}
            </h1>
            <OrderTags orderId={order.receipt_id} initialTags={order.tags} />
          </div>
          <Link
            href="/orders"
            className="text-indigo-600 hover:text-indigo-900 font-medium"
          >
            ← Back to Orders
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Order Information */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Order Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Order ID</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {order.receipt_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Created At
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(order.created_timestamp * 1000).toLocaleString(
                    "en-US"
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Shipping Status
                </dt>
                <dd className="mt-1">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.is_shipped
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.is_shipped ? "Shipped" : "Not Shipped"}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Buyer Information */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Buyer Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{order.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {order.buyer_email}
                </dd>
              </div>
            </dl>
          </div>

          {/* Buyer Message */}
          {order.message_from_buyer && (
            <>
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Message from Buyer
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <p className="text-sm text-gray-900">
                  {order.message_from_buyer}
                </p>
              </div>
            </>
          )}

          {/* Transactions */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Products
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {order.transactions.map((transaction) => (
                    <tr key={transaction.transaction_id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.sku}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Internal Notes Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
          <InternalNotes orderId={order.receipt_id} />
        </div>
      </div>
    </div>
  );
}
