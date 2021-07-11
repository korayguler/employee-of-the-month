const fetchEmployees = () => async (dispatch) => {
  let employeesArr = [];

  try {
    if (process.env.NODE_ENV === 'development') {
      const query = `
          query{
            employees {
              id
              fullName
              address
              phone
              email
              avatar
              jobTitle
            }
          }
          `;

      const response = await fetch('http://localhost:9002/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const { data } = await response.json();
      employeesArr = data;
    } else {
      const response = await fetch(
        'https://gist.githubusercontent.com/korayguler/73ea0279cea48e705f13ad283f9c049e/raw/ed78e7c7968b89156338c14a819b23759e7d21e6/employees.json',
      );
      employeesArr = await response.json();
    }

    dispatch({
      type: 'SET_EMPLOYEES',
      payload: [...employeesArr.employees.map((e) => ({ ...e, like: 0 }))],
    });
  } catch (e) {
    dispatch({
      type: 'SET_EMPLOYEES',
      payload: [],
    });
  }
};

const likeEmployee = (id) => {
  return {
    type: 'LIKE_EMPLOYEE',
    payload: { id: id },
  };
};

const setEmployee = (employee) => {
  return {
    type: 'SET_EMPLOYEE',
    payload: employee,
  };
};

export { fetchEmployees, setEmployee, likeEmployee };
