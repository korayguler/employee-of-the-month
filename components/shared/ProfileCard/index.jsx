import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { likeEmployee } from 'store/actions';
import { Button } from 'components/shared/Button';
import styles from './styles.module.scss';

const ProfileCard = (props) => {
  const dispatch = useDispatch();

  const { id, fullName, jobTitle, avatar, like } = props.info;

  return (
    <div className={styles['profile-card']}>
      <Link href={`/profile?id=${id}`}>
        <a>
          <div className={styles['avatar']}>
            <img
              src={avatar || '/images/avatar-placeholder.png'}
              className={styles['avatar-image']}
            />
          </div>
        </a>
      </Link>
      <Link href={`/profile?id=${id}`}>
        <a>
          <h3 className={styles['username']}>{fullName}</h3>
        </a>
      </Link>

      <h4 className={styles['job-title']}>{jobTitle}</h4>

      <div className={styles['button-group']}>
        <Button handleClick={() => dispatch(likeEmployee(id))} success>
          <i className='icon bx bx-like'></i>
          <span className='point'>{like}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
