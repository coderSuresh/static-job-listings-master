const NewOrFeatured = ({ isNew, isFeatured, }) => {
    return (
        (isNew || isFeatured) ?
            <div className='flex gap-2'>
                {isNew && <div className='rounded-xl bg-primary text-white px-3 uppercase text-sm'><span className="block mt-[3px]">New!</span></div>}
                {isFeatured && <div className='rounded-xl bg-dark-grayish-cyan text-white px-3 uppercase text-sm'><span className="block mt-[3px]">Featured</span></div>}
            </div>
            : ""
    )
}

export default NewOrFeatured