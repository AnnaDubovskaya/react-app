import React from 'react'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'

const TextField = ({ label, help, ...props }) => {
  return (
    <div>
      {label && <ControlLabel>{label}</ControlLabel> }
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </div>
  )
};

TextField.propTypes = {
  label: React.PropTypes.string,
  help: React.PropTypes.string,
  props: React.PropTypes.object
};

TextField.defaultProps = {
  label: '',
  help: '',
  props: {},
};

export default TextField
