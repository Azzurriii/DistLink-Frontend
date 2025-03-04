import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";
const apiUrl = process.env.REACT_APP_API_URL

export default function Shortener(props) {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [securityLevel, setSecurityLevel] = useState("high") // high, medium, low

    function handleInputChange(e) {
        const { value } = e.target
        setInput(value)
    }

    async function handleClick() {
        if (input === '') return;
        
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/`, {
                method: 'POST',
                body: JSON.stringify({ 
                    url: input,
                    securityLevel: securityLevel,
                    enableCDN: true,
                    distributionZones: ["asia", "europe", "americas"]
                }),
                headers: {
                    "Content-type": "application/json"
                },
            })
            if(response.status === 404) {
                alert('Unable to reach distribution network')
                setInput("")
                setLoading(false)
                return;
            }

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                setInput("")
                setLoading(false)
                return;
            }

            const newItem = {
                url: input,
                shortUrl: data.shortUrl,
                securityLevel: securityLevel,
                distributionStatus: "Active"
            }
            props.addLink(newItem)
            setInput("")
            setLoading(false)
        }
        catch (err) {
            alert('Distribution Network Error')
            setInput("")
            setLoading(false)
        }
    }

    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return <div className="shortener rounded-lg bg-white p-6 shadow-lg">
        <form className="space-y-4">
            <div className="input-area space-y-2">
                <input 
                    type="url" 
                    placeholder="Enter your link to distribute securely..." 
                    id="input" 
                    onChange={handleInputChange} 
                    value={input}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="warning text-red-500 text-sm hidden">Please add a valid link</p>
            </div>
            <button 
                className="btn-cta w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity" 
                type="button" 
                onClick={handleClick} 
                disabled={loading}
            >
                {loading ?
                <PulseLoader
                    color={'white'}
                    cssOverride={override}
                    size={11}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                : 'Secure & Distribute Link'}
            </button>
        </form>
    </div>
}