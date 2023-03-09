import { LinkBack } from '../styled/BackLink.styled';
import PropTypes from 'prop-types';

export default function BackLink({ to, children }) {
    return <LinkBack to={to}>{children}</LinkBack>;
}

BackLink.propTypes = {
    children: PropTypes.string.isRequired,
};