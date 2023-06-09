import React from 'react'

const Technologies = ({ tech, setFilter, filter }) => {

    const filterBy = [...filter]

    const handleClick = (tech) => {
        if (!filterBy.includes(tech)) {
            filterBy.push(tech)
        }

        setFilter(filterBy)
    }
    
    const techs = tech.map((t, i) =>
        <button
            key={i}
            onClick={() => handleClick(t)}
            className='rounded-md hover:bg-primary hover:text-light-cyan bg-light-cyan text-primary font-bold px-3 py-1'>
            {t}
        </button>)

    return (
        <div className='flex md:justify-end gap-4 flex-wrap mt-6 md:mt-0'>
            {techs}
        </div>
    )
}

export default Technologies