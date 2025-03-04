export default function Header() {
    return <header className="header padding-xy bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="logo flex items-center space-x-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span className="text-2xl font-bold text-gray-800">DistLink</span>
            </div>
            <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                <a href="#security" className="text-gray-600 hover:text-blue-600">Security</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
                <a href="#api" className="text-gray-600 hover:text-blue-600">API</a>
            </nav>
        </div>
    </header>
}