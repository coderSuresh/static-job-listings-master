import Technologies from "./Technologies"

const Card = ({data}) => {

    const { company, logo, new: isNew, featured: isFeatured, position, role, level, postedAt, contract, location, languages, tools } = data
    const tech = [role, level, ...languages, ...tools]

    return (
        <div className={`md:flex md:my-5 my-10 relative items-center justify-between ${isFeatured ? 'border-l-4' : ''} border-primary bg-white rounded-md xl:max-w-5xl lg:max-w-4xl md:max-w-3xl w-[calc(100%-40px)] mx-auto gap-x-8 shadow-lg shadow-shadow-color p-5`}>
            <div className='flex items-center min-w-fit gap-4 md:border-none md:pb-0 pb-4 border-b-[1px] border-grayish-cyan'>

                <img src={logo} className='md:w-24 md:h-24 w-12 h-12 rounded-full md:relative md:left-0 md:top-0 absolute left-4 top-[-1.5rem]' alt="company logo" />

                <div className='mt-4'>
                    <div className='flex gap-4'>
                        <p className='text-primary'>{company}</p>
                        {
                            isNew || isFeatured ?
                                <div className='flex gap-2'>
                                    {isNew && <div className='rounded-xl bg-primary text-white px-3'>New!</div>}
                                    {isFeatured && <div className='rounded-xl bg-black text-white px-3'>Featured</div>}
                                </div>
                                : ""
                        }
                    </div>

                    <h2 className='font-semibold mt-2 text-xl hover:text-primary cursor-pointer'>{position}</h2>

                    <div className='flex text-sm items-center gap-x-4 mt-2'>
                        <p className='text-grayish-cyan'>{postedAt}</p>
                        <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
                        <p className='text-grayish-cyan'>{contract}</p>
                        <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
                        <p className='text-grayish-cyan'>{location}</p>
                    </div>
                </div>

            </div>

            <Technologies tech={tech} />

        </div>
    )
}

export default Card