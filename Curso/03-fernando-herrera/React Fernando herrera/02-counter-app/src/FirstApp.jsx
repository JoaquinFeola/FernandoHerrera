import PropTypes from 'prop-types';

export function FirstApp({ title, subtitle }) {


  return (
    <>  
        <h1>{title}</h1>
        <p></p>
    </>


  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitle'
};