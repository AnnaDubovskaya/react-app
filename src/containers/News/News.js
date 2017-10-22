import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Navigation from './Navigation';
import Articles from './Articles/index';
import TextField from '../components/TextField';
import NumberOfVisitors from './NumberOfVisitors';

const News = ({ publishers, selectPublisher, onSearch }) => {
  const { ids, selectedPublisher, searchData, numberOfVisitors } = publishers;
  return (
    <Grid>
      <Row>
        <Col md={3} sm={3}>
          <Navigation publishers={ids} selectPublisher={selectPublisher} />
          <NumberOfVisitors count={numberOfVisitors} />
        </Col>
        <Col md={9} sm={9}>
          {selectedPublisher ?
            <div>
              <TextField label="Search" onChange={onSearch} value={searchData} />
              <Articles />
            </div>
           :
          <span>No information</span>}
        </Col>
      </Row>
    </Grid>
  )
};

News.propTypes = {
  publishers: React.PropTypes.object,
  searchData: React.PropTypes.string,
  selectPublisher: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired,
};

News.defaultProps = {
  publishers: {},
  searchData: '',
};

export default News;