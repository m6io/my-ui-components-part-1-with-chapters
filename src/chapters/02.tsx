import { SiYoutube, SiGithub } from "react-icons/si"

export default function App() {
	return (
		// App layout
		<div>
			{/* The navbar */}
			<header className="w-full border-b bg-white">
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
			{/* The main content area */}
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">
					{/* Content container */}
					<header className="mb-10 border-b pb-10">
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Component description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						{/* Content section  */}
						<div>
							{/* Section heading  */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>
							{/* Section description  */}
							<p className="mt-1 text-gray-600">Section description text</p>
							{/* Section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										{/* The previewed stuff aka child components */}
										<div className="bg-blue-500/50">component 1</div>
										<div className="bg-blue-500/50">component 2</div>
									</div>
								</div>
							</div>
						</div>
						{/* Content section  */}
						<div>
							{/* Section heading  */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>
							{/* Section description  */}
							<p className="mt-1 text-gray-600">Section description text</p>
							{/* Section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										{/* The previewed stuff aka child components */}
										<div className="bg-blue-500/50">component 1</div>
										<div className="bg-blue-500/50">component 2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Content container */}
					<header className="mb-10 border-b pb-10">
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Component description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						{/* Content section  */}
						<div>
							{/* Section heading  */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>
							{/* Section description  */}
							<p className="mt-1 text-gray-600">Section description text</p>
							{/* Section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										{/* The previewed stuff aka child components */}
										<div className="bg-blue-500/50">component 1</div>
										<div className="bg-blue-500/50">component 2</div>
									</div>
								</div>
							</div>
						</div>
						{/* Content section  */}
						<div>
							{/* Section heading  */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>
							{/* Section description  */}
							<p className="mt-1 text-gray-600">Section description text</p>
							{/* Section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										{/* The previewed stuff aka child components */}
										<div className="bg-blue-500/50">component 1</div>
										<div className="bg-blue-500/50">component 2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
