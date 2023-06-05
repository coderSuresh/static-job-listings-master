const MoreInfo = ({postedAt, contract, location}) => {
    return (
        <div className='flex text-sm items-center gap-x-4 mt-2'>
            <p className='text-grayish-cyan'>{postedAt}</p>
            <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
            <p className='text-grayish-cyan'>{contract}</p>
            <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
            <p className='text-grayish-cyan'>{location}</p>
        </div>
    )
}

export default MoreInfo