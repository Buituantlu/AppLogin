import axios from 'axios';
const baseUrl = 'https://reqres.in';

const fetchUser = async () => {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/api/users/1`,
    };
    const response = await axios(configurationObject);
    console.log(response.data);
};
  
export default fetchUser;