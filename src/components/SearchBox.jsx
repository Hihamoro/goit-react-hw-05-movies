import PropTypes from 'prop-types';
import { Form, Input, Button } from '../styled/SearchBox.styled';

export default function SearchBox({ onSubmit }) {
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Input type="text" name="query" />
                <Button type="submit">Search</Button>
            </Form>
        </div>
    );
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};