export default function CustomUrl() {
    return <section className="custom-url mt-8 animate-fade-in">
        <h2 className="title text-2xl font-bold text-center mb-4">Customize your link</h2>
        <p className="subtitle text-gray-600 text-center mb-6">Create a custom link for your content</p>
        <form action="" className="form max-w-md mx-auto">
            <div className="flex gap-3">
                <input 
                    type="text" 
                    className="input flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter your custom link" 
                />
                <button 
                    type="submit" 
                    className="btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Create
                </button>
            </div>
        </form>
    </section>
}
