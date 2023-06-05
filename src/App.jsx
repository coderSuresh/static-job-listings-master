import React from 'react'
import Header from './components/Header'
import Card from './components/Card'

const App = () => {

  const [jobs, setJobs] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json")
      const data = await res.json()
      setJobs(data)
    }

    fetchData()
  }, [])

  const cardElems = jobs.map(job => <Card key={job.id} data={job} />)
  
  return (
    <>
      <Header />
      <div className="my-10">
        {cardElems}
      </div>
    </>
  )
}

export default App
