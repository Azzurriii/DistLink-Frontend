import heroImage from '../images/illustration-working.svg'

export default function Hero() {
    return <section className="hero py-6 lg:pt-7 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className='hero-inner grid gap-7 lg:gap-0 grid-cols-1 lg:grid-cols-2'>
            <div className="site-desc flex flex-col justify-center gap-6 lg:gap-5 text-white p-8">
                <h1 className="title text-5xl font-bold text-left">Secure & Fast Distributed Link Sharing</h1>
                <div className="features space-y-4">
                    <p className="subtitle text-lg">Transform your links with enterprise-grade security and lightning-fast delivery across our global network.</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Distributed across multiple secure nodes</li>
                        <li>End-to-end encryption for maximum security</li>
                        <li>Ultra-fast CDN-powered redirects</li>
                    </ul>
                </div>
            </div>
            <picture className="hero-image pl-6 lg:pl-0">
                <img src={heroImage} alt="Secure distributed link sharing illustration" className="transform hover:scale-105 transition-transform duration-300" />
            </picture>
        </div>
    </section>
}