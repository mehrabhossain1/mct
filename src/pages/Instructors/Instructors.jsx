import { useEffect, useState } from 'react'

export const Instructors = () => {
  const [instructorsData, setInstructorsData] = useState([])
  useEffect(() => {
    fetch('/public/instructorData.json')
      .then((res) => res.json())
      .then((data) => setInstructorsData(data))
  }, [])

  return instructorsData.map((instructor, index) => {
    return (
      <div key={index} className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={instructor.image} alt='Instructor' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{instructor.name}</h2>
          <p>{instructor.email}</p>
          <p>Number of Classes Taken: {instructor.num_classes_taken}</p>
          <p>
            Classes Taken:
            {/* {instructor.classes_taken.map((classes) => {
              return <div key={index}>{classes}</div>
            })} */}
          </p>
          <div className='card-actions'>
            <a href='/instructors/1/classes' className='btn btn-primary'>
              See Classes
            </a>
          </div>
        </div>
      </div>
    )
  })
}
