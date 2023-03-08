import React from "react";

export default function CourseDetailBox({ title, text, icon }) {
  return (
    <div class="flex flex-col">
      <div class="flex shadow-lg p-4 m-1 rounded-lg">
        <div class="flex items-center">
          <i class={`text-xl text-gray-500 fas fa-${icon}`}></i>
        </div>
        <div class="flex flex-col mr-3">
          <span class="text-base text-blue-900 font-semibold">{title}</span>
          <span class="text-base text-blue-700">{text}</span>
        </div>
      </div>
    </div>
  );
}
