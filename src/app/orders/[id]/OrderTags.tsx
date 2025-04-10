"use client";

import { useState, useEffect } from "react";

interface OrderTagsProps {
  orderId: number;
  initialTags?: string[];
}

// 预设标签列表
const PRESET_TAGS = [
  { id: "urgent", label: "Urgent", color: "red" },
  { id: "gift", label: "Gift", color: "purple" },
  { id: "follow-up", label: "Follow-up", color: "yellow" },
  { id: "confirmed", label: "Confirmed", color: "green" },
];

// 对号 SVG 图标组件
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

// 空心圈 SVG 图标组件
function CircleIcon() {
  return (
    <svg
      className="w-4 h-4 mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="7" strokeWidth={2} />
    </svg>
  );
}

export default function OrderTags({
  orderId,
  initialTags = [],
}: OrderTagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

  useEffect(() => {
    const savedTags = localStorage.getItem(`tags_order_${orderId}`);
    if (savedTags) {
      setSelectedTags(JSON.parse(savedTags));
    } else if (initialTags.length > 0) {
      // 如果没有保存的标签但有初始标签，保存初始标签
      localStorage.setItem(
        `tags_order_${orderId}`,
        JSON.stringify(initialTags)
      );
    }
  }, [orderId, initialTags]);

  // 切换标签
  const toggleTag = (tagLabel: string) => {
    let newTags: string[];
    if (selectedTags.includes(tagLabel)) {
      // 如果标签已选中，则移除
      newTags = selectedTags.filter((tag) => tag !== tagLabel);
    } else {
      // 如果标签未选中，则添加
      newTags = [...selectedTags, tagLabel];
    }
    setSelectedTags(newTags);
    localStorage.setItem(`tags_order_${orderId}`, JSON.stringify(newTags));
  };

  // 获取标签的颜色样式
  const getTagStyle = (tagLabel: string) => {
    const isSelected = selectedTags.includes(tagLabel);
    const tag = PRESET_TAGS.find((t) => t.label === tagLabel);

    switch (tag?.color) {
      case "red":
        return isSelected
          ? "bg-red-100 text-red-700 border-red-200"
          : "bg-gray-50 text-gray-500 border-gray-200";
      case "purple":
        return isSelected
          ? "bg-purple-100 text-purple-700 border-purple-200"
          : "bg-gray-50 text-gray-500 border-gray-200";
      case "yellow":
        return isSelected
          ? "bg-yellow-100 text-yellow-700 border-yellow-200"
          : "bg-gray-50 text-gray-500 border-gray-200";
      case "green":
        return isSelected
          ? "bg-green-100 text-green-700 border-green-200"
          : "bg-gray-50 text-gray-500 border-gray-200";
      default:
        return isSelected
          ? "bg-blue-100 text-blue-700 border-blue-200"
          : "bg-gray-50 text-gray-500 border-gray-200";
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {PRESET_TAGS.map((tag) => {
        const isSelected = selectedTags.includes(tag.label);
        return (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.label)}
            className={`
              inline-flex items-center px-2.5 py-1.5 rounded-md text-sm
              border transition-colors duration-200
              hover:bg-opacity-80
              ${getTagStyle(tag.label)}
            `}
          >
            {isSelected ? <CheckIcon /> : <CircleIcon />}
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
