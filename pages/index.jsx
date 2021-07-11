import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from 'store/actions';
import styles from 'assets/pages/Home.module.scss';
import ProfileCard from 'components/shared/ProfileCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state);

  useEffect(() => {
    if (!employees.length > 0) dispatch(fetchEmployees());
  }, []);

  return (
    <div className={styles['home-page']}>
      <h1 className={styles['page-title']}>Employee of the month</h1>

      <div className={styles['profile-container']}>
        {employees.length > 0 &&
          employees
            .sort((a, b) => b.like - a.like)
            .map((employee, index) => (
              <ProfileCard info={employee} key={employee.id} index={index} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
