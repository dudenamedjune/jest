import React, { Component } from 'react';
import { func, shape, num } from 'prop-types';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

class Gift extends Component {
    static propTypes = {
      removeGift: func,
      gift: shape({ id: num }),
    }
    constructor() {
      super();
      this.state = {
        person: '',
        present: '',
      };
    }
    render() {
      const {
        removeGift,
        gift: {
          id,
        },
      } = this.props;
      return (
        <div className="gift">
          <Form>
            <FormGroup>
              <ControlLabel>Person</ControlLabel>
              <FormControl
                className="input-person"
                onChange={({ target: { value: person } }) => this.setState({ person })}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Present</ControlLabel>
              <FormControl
                className="input-present"
                onChange={({ target: { value: present } }) => this.setState({ present })}
              />
            </FormGroup>
          </Form>
          <Button
            className="btn-remove"
            onClick={() => removeGift(id)}
          >
          Remove Gift
          </Button>
        </div>
      );
    }
}

export default Gift;
