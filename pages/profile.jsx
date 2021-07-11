import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployee } from 'store/actions';
import { useEffect, useState } from 'react';
import styles from 'assets/pages/Profile.module.scss';
import cn from 'classnames';
const Profile = (props) => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const { employees, employee } = useSelector((state) => state);
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(async () => {
    if (router.query.id) {
      const selectedEmploye = employees.find(
        (employee) => employee.id === router.query.id,
      );

      dispatch(setEmployee(selectedEmploye));

      setEmployeeDetails([
        { title: 'Email', data: selectedEmploye.email },
        { title: 'Adress', data: selectedEmploye.address },
        { title: 'Phone', data: selectedEmploye.phone },
      ]);
    } else {
      router.push('/');
    }
  }, []);
  return (
    <div className={styles['profile-page']}>
      <div className='row'>
        <div className={cn(styles['profile'], 'col-1')}>
          <div className={styles['profile-image']}>
            <img className={styles['image']} src={employee.avatar} />
            <h1 className={styles['like-count']}>{employee.like}</h1>
          </div>

          <h2 className={styles['username']}>{employee.fullName}</h2>

          <p className={styles['job-title']}>{employee.jobTitle}</p>
        </div>

        <div className={cn(styles['about'], 'col-3')}>
          {employeeDetails.length > 0 &&
            employeeDetails.map((detail, index) => (
              <div className={styles['field']} key={index}>
                <h4 className={styles['title']}>{detail.title}</h4>
                <p className={styles['content']}>{detail.data}</p>
              </div>
            ))}
        </div>
      </div>

      <div className={styles['go-back']}>
        <Link href='/'>
          <a>
            <i className='bx bx-chevron-left-circle'></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
