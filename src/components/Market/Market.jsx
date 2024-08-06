import React from 'react'

const Market = () => {
    return (
        <div className='bg-black text-white px-5 py-20'>

            <div className="xl:px-4 my-20 border rounded-[30px] py-10 flex flex-col justify-center gradiant-faq-box relative">
                 <img src="/assets/images/Ellipse.png" alt="Ellipse" srcSet className="absolute inset-0 object-cover h-full w-full -z-10" />
                <div className="flex lg:flex-col justify-center items-center gap-10">
                    <div>
                        <div className="text-[60px] md:text-2xl font-MonumentExtendedUltrabold text-center text-primary">$606,741.00</div>
                        <h1 className="text-[50px] md:text-xl font-NeueMachinabold text-center text-white">TOTAL MARKET CAP</h1>
                        <h1 className="text-[40px] md:text-lg font-NeueMachinaregular text-center text-slate-400">TOKENOMICS</h1>
                    </div>
                    <div>
                        <ul className="list-disc list-inside mx-auto  uppercase font-NeueMachinaregular space-y-4">
                            <li>fixed supply : 420,690,000 (wolf,andy,bdog,brett)</li>
                            <li>contracts renounced and verified</li>
                            <li>initial lp's burned with 100% of supply</li>
                            <li>zeo buy sell taxes</li>
                            <li>ribbetting thesis</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Market
