import axios from 'axios'

const BASE_URL = 'http://localhost:8080'
const END_POINT = BASE_URL + '/v1/widgets'


export const fetchAllWidgets = () => axios.get(END_POINT).then((response) => response.data)
export const createNewWidget = async (newWidget) => await axios.post(END_POINT, newWidget, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
export const removeWidget =  (name) => axios.delete(`${END_POINT}/${name}`);
export const updateWidget =  (name, widget) => axios.put(`${END_POINT}/${name}`, widget);