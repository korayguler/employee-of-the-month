import cn from 'classnames';
import styles from './styles.module.scss';

const Link = (props) => <a href={props.href}>{props.children}</a>;

const Button = (props) => (
  <button
    onClick={props.handleClick}
    className={cn(
      styles['button'],
      props.danger && styles['danger'],
      props.success && styles['success'],
    )}
  >
    {props.children}
  </button>
);

export { Button, Link };
