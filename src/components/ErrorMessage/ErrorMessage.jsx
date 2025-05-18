// import styles from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return (
    <>
      <div>
        <p>No results found. {message} </p>
      </div>
    </>
  );
}

export default ErrorMessage;
