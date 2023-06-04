import Technologies from "./Technologies"
import logo from '../images/account.svg'

const Card = () => {
    return (
        <div className="mx-5 md:mx-5 md:mt-10 mt-10">
            <div className='md:flex md:relative absolute items-center justify-between border-l-4 border-primary bg-white rounded-md xl:max-w-5xl lg:max-w-4xl md:max-w-3xl w-[calc(100%-40px)] mx-auto gap-x-8 shadow-lg shadow-shadow-color p-5'>

                <div className='flex items-center min-w-fit gap-4 md:border-none md:pb-0 pb-4 border-b-[1px] border-grayish-cyan'>

                    {/* logo */}
                    <img src={logo} className='md:w-24 md:h-24 w-12 h-12 rounded-full md:relative md:left-0 md:top-0 absolute left-4 top-[-1.5rem]' alt="company logo" />

                    {/* card content */}
                    <div className='mt-4'>
                        {/* top category and tags */}
                        <div className='flex gap-4'>
                            <p className='text-primary'>Photosnap</p>
                            {/* tags */}
                            <div className='flex gap-2'>
                                <div className='rounded-xl bg-primary text-white px-3'>New!</div>
                                <div className='rounded-xl bg-black text-white px-3'>Featured</div>
                            </div>
                        </div>

                        {/* card title */}
                        <h2 className='font-semibold mt-4 text-xl'>Senior Frontend Developer</h2>

                        {/* card details */}
                        <div className='flex items-center gap-x-4 mt-2'>
                            <p className='text-grayish-cyan'>1d ago</p>
                            <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
                            <p className='text-grayish-cyan'>Full Time</p>
                            <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
                            <p className='text-grayish-cyan'>USA only</p>
                        </div>
                    </div>

                </div>

                <Technologies />

            </div>
        </div>
    )
}

export default Card