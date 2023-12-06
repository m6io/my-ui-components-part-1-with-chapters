import { SiYoutube, SiGithub } from "react-icons/si"
import { twMerge } from "tailwind-merge"

export default function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
			>
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, high contrast background colors work great here."
				>
					{/* Primary button */}
					<Button>Default</Button>
					{/* Disabled primary button */}
					<Button disabled>Disabled</Button>
					{/* Primary color override buttons */}
					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
				</Section>
				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					{/* Secondary button */}
					<Button variant="secondary">Default</Button>
					{/* Disabled secondary button */}
					<Button variant="secondary" disabled>
						Disabled
					</Button>
					{/* Secondary color override buttons */}
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBorder: "hover:border-amber-500",
							hoverBg: "hover:bg-amber-500",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
				</Section>
				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
				>
					{/* Tertiary button */}
					<Button variant="tertiary">Default</Button>
					{/* Disabled tertiary button */}
					<Button variant="tertiary" disabled>
						Disabled
					</Button>
					{/* Tertiary color override buttons */}
					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
				</Section>
			</Container>
		</Layout>
	)
}

// components/library/Button.tsx
// Define exclusive color prop types for each variant
type PrimaryColors = {
	bg?: string
	hoverBg?: string
	focusRing?: string
}

type SecondaryColors = {
	text?: string
	hoverBorder?: string
	hoverBg?: string
	focusRing?: string
}

type TertiaryColors = {
	text?: string
	hoverText?: string
	focusRing?: string
}

// Define the base props
type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// Overload signatures for the Button component
type ButtonComponent = {
	(
		props: BaseButtonProps & { variant?: "primary"; colors?: PrimaryColors },
	): JSX.Element
	(
		props: BaseButtonProps & { variant: "secondary"; colors?: SecondaryColors },
	): JSX.Element
	(
		props: BaseButtonProps & { variant: "tertiary"; colors?: TertiaryColors },
	): JSX.Element
}

export const Button: ButtonComponent = ({
	variant = "primary",
	colors = {},
	...props
}) => {
	// Base classes
	const baseClasses: string =
		"inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

	// Function to generate classes based on variant and color props
	const generateVariantClasses = (variant: string, colorProps: any) => {
		switch (variant) {
			case "primary":
				return `border border-transparent py-3 text-white ${
					colorProps.bg || "bg-emerald-500"
				} ${colorProps.hoverBg || "hover:bg-emerald-600"} ${
					colorProps.focusRing || "focus:ring-emerald-500"
				}`
			case "secondary":
				return `border-2 border-gray-200 py-[.688rem] hover:text-white ${
					colorProps.text || "text-emerald-500"
				} ${colorProps.hoverBorder || "hover:border-emerald-500"} ${
					colorProps.hoverBg || "hover:bg-emerald-500"
				} ${colorProps.focusRing || "focus:ring-emerald-500"}`
			case "tertiary":
				return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline ${
					colorProps.text || "text-emerald-500"
				} ${colorProps.hoverText || "hover:text-emerald-700"} ${
					colorProps.focusRing || "focus:ring-emerald-500"
				}`
			default:
				return ""
		}
	}

	// Generate variant classes based on extracted color props
	const variantClasses = generateVariantClasses(variant, colors)

	// Merge the base classes with variant and any additional classes
	const mergedClasses = twMerge([baseClasses, variantClasses])

	return (
		<button
			className={mergedClasses}
			{...props} // Spread any additional props
		/>
	)
}

// components/site/Layout.tsx
export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative min-h-screen bg-white">
			<Navbar />
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">{children}</div>
			</main>
		</div>
	)
}

// components/site/Navbar.tsx
// A navbar component that will be used to house app-wide navigation and settings
export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							{/* Link and site name/icon */}
							<a
								className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
								href="/"
							>
								m6io
							</a>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<a
									href="https://www.youtube.com/@m6io"
									target="_blank"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]" // Brand color from https://brandcolors.net/b/youtube
								>
									<SiYoutube className="h-full w-full" />
								</a>
								<a
									href="https://www.github.com/m6io"
									target="_blank"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]" // Brand color from https://brandcolors.net/b/github
								>
									<SiGithub className="h-full w-full" />
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

// components/site/Container.tsx
// High-level container for page content. This is meant to group sections of documentation for a type/variant of a custom UI component.
export const Container = ({
	title,
	description,
	children,
}: {
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<>
			<header className="mb-10 border-b pb-10">
				<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
					{title}
				</h1>
				<p className="mt-2 text-lg text-gray-800">{description}</p>
			</header>
			<div className="space-y-10 md:space-y-16">{children}</div>
		</>
	)
}

// components/site/Section.tsx
// A section used to group the documentation components for a type/variant of a custom UI component
export const Section = ({
	title,
	description,
	children,
}: {
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<div>
			{/* Section heading  */}
			<h2 className="text-lg font-bold text-gray-800">{title}</h2>
			{/* Section description  */}
			<p className="mt-1 text-gray-600">{description}</p>
			{/* Section preview area */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl border p-6 shadow-sm">
					<div className="flex flex-wrap gap-2">
						{/* The previewed stuff aka child components */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
