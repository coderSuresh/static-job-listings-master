const Filter = ({ filter, setFilter }) => {
    return (
        <div className='flex mt-[-4.8rem] items-center justify-between bg-white rounded-md xl:max-w-5xl lg:max-w-4xl md:max-w-3xl w-[calc(100%-40px)] mx-auto shadow-md shadow-shadow-color p-5'>
            <div className="flex">
                <p className='rounded-l-md bg-light-cyan text-primary font-bold px-3 py-1'>Senior</p>
                <button className="hover:bg-dark-grayish-cyan bg-primary p-2 rounded-r-md">
                    <img src="/images/icon-remove.svg" alt="remove" />
                </button>
            </div>
            <button className="hover:underline hover:text-primary text-dark-grayish-cyan">clear</button>
        </div>
    )
}

export default Filter