"use client"

import React from 'react';

export default function AIToolsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI 工具</h1>
        <p className="text-gray-600">
          低代码设计器，黄金路径创建器，IDE 插件配置
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 低代码设计器 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">低代码设计器</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">Figma → Code 实验室</h3>
              <p className="text-sm text-gray-600">
                将 Figma 设计稿转换为可用的代码，支持多种框架和组件库
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">组件库管理</h3>
              <p className="text-sm text-gray-600">
                管理和维护团队共享的组件库
              </p>
            </div>
          </div>
        </div>

        {/* 黄金路径创建器 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">黄金路径创建器</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">路径模板</h3>
              <p className="text-sm text-gray-600">
                预定义的开发路径模板，包含最佳实践和规范
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">自定义路径</h3>
              <p className="text-sm text-gray-600">
                创建和配置团队特定的开发路径
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

