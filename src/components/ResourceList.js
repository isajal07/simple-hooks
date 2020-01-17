import React from 'react';
import useResources from './useResources';


const ResourceList = ({ resource }) => {

  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

//OR
// const ResourceList = ({resource}) => {
//   const [resources, setResources] = useState([]);

//     const fetchResource = async () => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

//     setResources(response.data )
//   }

//   useEffect(()=>{
//     fetchResource(resource)
//   },[resource])

//   return <div>{resources.length}</div>
// }

export default ResourceList;