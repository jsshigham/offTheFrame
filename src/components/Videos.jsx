import PropTypes from 'prop-types';

const Videos = ({source}) => {

  return (
    <iframe className='w-11/12  aspect-[16/9] '  src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  )
}
Videos.propTypes = {
  source: PropTypes.string.isRequired, 
};

export default Videos;