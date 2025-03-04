export default function UrlList(props) {
    const urlList = props.urlList

    return <ul className="list grid grid-cols-1 gap-5">
        { urlList.map((element, index) => {
            return <li className="list-item bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow" key={index} id={index}>
                <div className="space-y-3">
                    <div className="links space-y-2">
                        <div className="flex items-center justify-between">
                            <a href={element.url} className="full-url text-gray-600 hover:text-blue-600"> 
                                {element.url.slice(0,100)}
                            </a>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                                element.securityLevel === 'high' ? 'bg-green-100 text-green-800' :
                                element.securityLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                            }`}>
                                {element.securityLevel === 'high' ? '🔒 E2E Encrypted' :
                                element.securityLevel === 'medium' ? '🔐 TLS Secured' :
                                '🌐 Standard'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <a href={element.shortUrl} className="short-url font-medium text-blue-600 hover:text-blue-800"> 
                                {element.shortUrl}
                            </a>
                            <span className="text-xs text-green-600 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                                {element.distributionStatus}
                            </span>
                        </div>
                    </div>
                    <button 
                        type="button" 
                        className="btn-copy w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2" 
                        onClick={() => navigator.clipboard.writeText(element.shortUrl)}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span>Copy Secure Link</span>
                    </button>
                </div>
            </li>
        })}
    </ul>
}
