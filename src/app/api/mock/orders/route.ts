import { NextResponse } from "next/server";

// 可用的标签列表
const AVAILABLE_TAGS = ["Urgent", "Gift", "Follow-up", "Confirmed"];

// 为订单生成随机标签
function generateRandomTags() {
  // 随机决定要选择多少个标签（1到3个）
  const numTags = Math.floor(Math.random() * 3) + 1;
  // 打乱标签数组并取前 numTags 个
  return AVAILABLE_TAGS.sort(() => Math.random() - 0.5).slice(0, numTags);
}

const mockData = {
  count: 5,
  results: [
    {
      receipt_id: 1001,
      buyer_email: "alex@email.com",
      name: "Alex Johnson",
      status: "paid",
      is_paid: true,
      is_shipped: false,
      created_timestamp: 1688700000,
      message_from_buyer: "Please wrap as a gift",
      tags: generateRandomTags(),
      transactions: [
        {
          transaction_id: 555,
          title: "Custom Dog Tag",
          sku: "DOG-TAG-01",
        },
      ],
    },
    {
      receipt_id: 1002,
      buyer_email: "lisa@email.com",
      name: "Lisa Zhang",
      status: "paid",
      is_paid: true,
      is_shipped: true,
      created_timestamp: 1688600000,
      message_from_buyer: "",
      tags: generateRandomTags(),
      transactions: [
        {
          transaction_id: 556,
          title: "Personalized Mug",
          sku: "MUG-XL",
        },
      ],
    },
    {
      receipt_id: 1003,
      buyer_email: "sarah@email.com",
      name: "Sarah Williams",
      status: "unpaid",
      is_paid: false,
      is_shipped: false,
      created_timestamp: 1688500000,
      message_from_buyer: "Need it before July 20th",
      tags: generateRandomTags(),
      transactions: [
        {
          transaction_id: 557,
          title: "Custom Phone Case",
          sku: "PHONE-CASE-01",
        },
      ],
    },
    {
      receipt_id: 1004,
      buyer_email: "mike@email.com",
      name: "Mike Brown",
      status: "paid",
      is_paid: true,
      is_shipped: true,
      created_timestamp: 1688400000,
      message_from_buyer: "",
      tags: generateRandomTags(),
      transactions: [
        {
          transaction_id: 558,
          title: "Engraved Bracelet",
          sku: "BRAC-01",
        },
      ],
    },
    {
      receipt_id: 1005,
      buyer_email: "emma@email.com",
      name: "Emma Davis",
      status: "paid",
      is_paid: true,
      is_shipped: false,
      created_timestamp: 1688300000,
      message_from_buyer: "This is a birthday gift, please add a card",
      tags: generateRandomTags(),
      transactions: [
        {
          transaction_id: 559,
          title: "Personalized Necklace",
          sku: "NECK-01",
        },
      ],
    },
  ],
};

export async function GET() {
  return NextResponse.json(mockData);
}
