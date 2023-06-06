const Filter = ({ filter, setFilter, setIsFiltered }) => {

    const removeOneChip = (clickedTechChip) => {
        setFilter(() => filter.filter(current => current !== clickedTechChip))
    }

    const filterChips = filter.map((f, i) =>
        <div className="flex" key={i}>
            <p className='rounded-l-md bg-light-cyan text-primary font-bold px-3 py-1'>{f}</p>
            <button onClick={() => removeOneChip(f)} className="hover:bg-dark-grayish-cyan bg-primary p-2 rounded-r-md">
                <img src="/images/icon-remove.svg" alt="remove" />
            </button>
        </div>
    )

    const handleClear = () => {
        setFilter([])
        setIsFiltered(false)
    }

    return (
        <div className='flex mt-[-4.8rem] items-center justify-between gap-x-4 bg-white rounded-md xl:max-w-5xl lg:max-w-4xl md:max-w-3xl w-[calc(100%-40px)] mx-auto shadow-md shadow-shadow-color p-5'>

            <div className="flex flex-wrap gap-4">
                {filterChips}
            </div>

            <button onClick={handleClear} className="hover:underline hover:text-primary text-dark-grayish-cyan">clear</button>
        </div>
    )
}

export default Filter