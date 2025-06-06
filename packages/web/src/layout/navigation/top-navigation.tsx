"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModelSelector } from "@/components/home/model-selector"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAIAssistant } from "@/layout/assistant/ai-assistant-context"
import { UserAuthButton } from "@/components/auth/user-auth-button"

const navigationItems = [
	{ name: "驾驶舱", href: "/cockpit" },
	{ name: "平台知识", href: "/platform" },
	{ name: "智能中枢", href: "/ai-hub" },
	{ name: "AI 工具", href: "/ai-tools" },
	{ name: "度量分析", href: "/metrics" },
]

export function TopNavigation() {
	const pathname = usePathname()
	const { isOpen, toggleAssistant } = useAIAssistant()

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center pr-2">
							<Link href="/">
								<span className="text-xl text-gray-900 brand ">AutoDev</span>
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={cn(
										"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
										pathname === item.href
											? "border-indigo-500 text-gray-900"
											: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
									)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<ModelSelector/>
						{/*<Button*/}
						{/*	type="button"*/}
						{/*	className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
						{/*>*/}
						{/*	<Search className="h-4 w-4 mr-1"/>*/}
						{/*	<span>搜索</span>*/}
						{/*</Button>*/}
						<Button
							variant={isOpen ? "secondary" : "ghost"}
							size="icon"
							onClick={toggleAssistant}
							className="relative"
						>
							<MessageSquare className="h-5 w-5" />
							<span className="sr-only">AI助手</span>
							{!isOpen && (
								<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
									AI
								</span>
							)}
						</Button>
						<UserAuthButton showMyProjects={true} />
					</div>
				</div>
			</div>
		</nav>
	)
}
