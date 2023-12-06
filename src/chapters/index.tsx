import Chapter00 from "./00.tsx"
import Chapter01 from "./01.tsx"
import Chapter02 from "./02.tsx"
import Chapter03 from "./03.tsx"
import Chapter04 from "./04.tsx"
import Chapter05 from "./05.tsx"
import Chapter06 from "./06.tsx"
import Chapter07 from "./07.tsx"
import Chapter08 from "./08.tsx"
import Chapter09 from "./09.tsx"
import Chapter11 from "./11.tsx"
import Chapter12 from "./12.tsx"
import Chapter13 from "./13.tsx"
import Chapter14 from "./14.tsx"
import Chapter15 from "./15.tsx"
import Chapter16 from "./16.tsx"
import Chapter17 from "./17.tsx"

const Chapters = () => {
	return (
		<>
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 0 - Init
			</h1>
			<Chapter00 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 1 - Add a Navbar to App
			</h1>
			<Chapter01 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 2 - Add the main content area to App
			</h1>
			<Chapter02 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 3 - Fix the app layout so that the navbar is always visible at
				the top of the page
			</h1>
			<Chapter03 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 4 - Componentize the content sections
			</h1>
			<Chapter04 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 5 - Componentize the content sections containers
			</h1>
			<Chapter05 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 6 - Componentize the Navbar
			</h1>
			<Chapter06 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 7 - Componentize the Layout (Navbar + main content area)
			</h1>
			<Chapter07 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 8 - Create Button Component, then import to App.tsx (requires
				npm i tailwind-merge)
			</h1>
			<Chapter08 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 9 - Add variant color customizations to Button Component and add
				customized Button components to App.tsx
			</h1>
			<Chapter09 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 11 - Add variant-exclusive color props to Button Component
			</h1>
			<Chapter11 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 12 - Add more customized Button components to App.tsx
			</h1>
			<Chapter12 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 13 - Create ContentCard Component, then import to App.tsx
			</h1>
			<Chapter13 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 14 - Add header and footer options to the ContentCard Component
				and add a new ContentCard component to App.tsx with header and footer
			</h1>
			<Chapter14 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 15 - Add BlockLinkCard Component, then import to App.tsx
				(requires npm i react-icons)
			</h1>
			<Chapter15 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 16 - Create Input Component, then import to App.tsx (requires
				npm i -D @tailwindcss/forms)
			</h1>
			<Chapter16 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 17 - Add label and description options to the Input Component
				and add examples to App.tsx
			</h1>
			<Chapter17 />
		</>
	)
}

export default Chapters
