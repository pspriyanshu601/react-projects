
import axios from 'axios';
import { useQuery } from 'react-query';

async function fetchData() {
  const { data } = await axios.get("https://oe-review-backend.vercel.app/user/weightedSubjects/page/1", {
    headers: {
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzExMjk0ODE4LCJleHAiOjE3MTI1OTA4MTh9.8vQj1susFk62Uq7LfvcHfuIz5VyfeaahRnLBEre_X9o"
    }
  });
  return data;
}

function Data() {
  const { data, status, error } = useQuery('data', fetchData);

  console.log('status:', status);
  console.log('error:', error);
  console.log('data:', data);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return null;
  }
  return (
    <div>
    <ul>
      {data.reviews.map(item => (
        <li key={item.id}>{item.subject_name}</li>
      ))}
    </ul>
    </div>
  );
}

export default Data;
