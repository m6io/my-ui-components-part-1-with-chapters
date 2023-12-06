import { SiYoutube, SiGithub, SiVite, SiNextdotjs } from "react-icons/si"
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
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						colors={{
							bg: "bg-[#1da1f2]",
							hoverBg: "hover:bg-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
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
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBorder: "hover:border-rose-500",
							hoverBg: "hover:bg-rose-500",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBorder: "hover:border-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBorder: "hover:border-indigo-500",
							hoverBg: "hover:bg-indigo-500",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-[#1da1f2]",
							hoverBorder: "hover:border-[#1da1f2]",
							hoverBg: "hover:bg-[#1da1f2]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
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
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-[#1da1f2]",
							hoverText: "hover:text-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>
				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
				>
					{/* Destructive primary button */}
					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yes, I'm sure I want to delete this.
					</Button>
					{/* Destructive secondary button */}
					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBorder: "hover:border-red-500",
							hoverBg: "hover:bg-red-500",
							focusRing: "focus:ring-red-500",
						}}
					>
						Unsubscribe
					</Button>
					{/* Destructive tertiary button */}
					<Button
						variant="tertiary"
						colors={{
							text: "text-gray-500",
							hoverText: "hover:text-gray-700",
							focusRing: "focus:ring-gray-500",
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>
			<Container
				title="Card"
				description="A card is a flexible and extensible content container."
			>
				<Section
					title="Simple"
					description="Simple cards display content and can provide a distinct link that can be selected."
				>
					{/* Simple card */}
					<ContentCard
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card link" }}
					></ContentCard>
				</Section>

				<Section
					title="Simple with a header and footer"
					description="Add an optional header and/or footer within a card."
				>
					{/* Simple card with header */}
					<ContentCard
						header="Featured"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card link" }}
					></ContentCard>
					{/* Simple card with footer */}
					<ContentCard
						footer="Last updated 5 mins ago"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card link" }}
					></ContentCard>
				</Section>
				<Section
					title="Block link"
					description="A simple card enhanced into a selectable block link."
				>
					{/* Vite card */}
					<BlockLinkCard url="https://vitejs.dev/" text="Vite">
						<SiVite className="h-10 w-10" />
					</BlockLinkCard>
					{/* NextJS card */}
					<BlockLinkCard url="https://nextjs.org/" text="Next.js">
						<SiNextdotjs className="h-10 w-10" />
					</BlockLinkCard>
				</Section>
			</Container>
			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data or specify
		options, which can be submitted as part of a form or used to interact
		with and manipulate content on a web page."
			>
				<Section title="Basic" description="Basic input with a placeholder.">
					{/* Basic Input */}
					<Input type="text" placeholder="Type things here!" />

					{/* Basic Disabled Input */}
					<Input
						type="text"
						placeholder="Disabled 😔" //https://emojipedia.org/pensive-face
						disabled
					/>
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

// components/library/Card.tsx
// Define the type for the props the Card will accept
type CardContainerProps = React.HTMLAttributes<HTMLDivElement>

export const CardContainer: React.FC<CardContainerProps> = ({
	className,
	children,
	...props
}) => {
	// Base classes
	const baseClasses: string = "rounded-xl border bg-white shadow-sm"

	// Merge the base classes with any additional classes while removing duplicates/conflicts
	const mergedClasses = twMerge([baseClasses, className])

	// Return the Card with the base classes and any additional classes
	return (
		<div
			className="w-full max-w-xs"
			{...props} // Spread any additional props
		>
			<div className={mergedClasses}>{children}</div>
		</div>
	)
}

// This type of card is for displaying content, as well as an optional header and footer.
export const ContentCard = ({
	header,
	footer,
	title,
	subtitle,
	plaintext,
	link,
	children,
}: {
	header?: string
	footer?: string
	title?: string
	subtitle?: string
	plaintext?: string
	link?: {
		url: string
		text: string
	}
	children?: React.ReactNode
}) => {
	return (
		<CardContainer>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{header}</p>
				</div>
			)}

			<div className="flex flex-col p-4 md:p-5">
				{title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
				{subtitle && (
					<p className="mt-1 text-xs font-medium uppercase text-gray-500">
						{subtitle}
					</p>
				)}
				{plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
				{children}
				{link && (
					<a
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700"
						href={link.url}
					>
						{link.text}
					</a>
				)}
			</div>
			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{footer}</p>
				</div>
			)}
		</CardContainer>
	)
}

// This type of card is for providing block links.
export const BlockLinkCard = ({
	url,
	text,
	children,
}: {
	url?: string // URL for the link. If not provided, defaults to "#".
	text?: string // Text content to be displayed in the card.
	children: React.ReactNode // Children elements to be rendered inside the card.
}) => {
	const linkClasses: string = "flex flex-col items-center p-6 sm:p-10"
	const linkContent = (
		<>
			{children}
			{text && <p className="mt-2 font-medium">{text}</p>}
		</>
	)
	return (
		<CardContainer className="text-gray-800 transition-colors hover:bg-gray-200/50">
			<a className={linkClasses} href={url || "#"} target="_blank">
				{linkContent}
			</a>
		</CardContainer>
	)
}

// components/library/Input.tsx
// Define the type for the props the Input will accept
type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
	// Base classes
	const baseClasses: string =
		"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500"

	// Disabled classes
	const disabledClasses: string =
		"disabled:pointer-events-none disabled:opacity-50"
	// Merge the base classes with any additional classes while removing duplicates/conflicts
	let mergedClasses = twMerge([baseClasses, className])

	if (props.disabled) {
		mergedClasses = twMerge([mergedClasses, disabledClasses])
	}

	// Return the Input with the base classes and any additional classes
	return (
		<div className="max-w-sm space-y-3">
			<input
				className={mergedClasses}
				{...props} // Spread any additional props
			/>
		</div>
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
