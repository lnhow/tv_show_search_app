import loadingIcon from '../../assets/searching.gif';

const Loader = () => {
  return (
    <img
      style={{
        marginTop: 20,
        width: 30,
      }}
      alt='Searching icon'
      src={loadingIcon}
    />
  );
};

export default Loader;
