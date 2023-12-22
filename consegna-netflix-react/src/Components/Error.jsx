import { Alert } from "react-bootstrap";

const Error = (props) => <Alert variant="danger">Errore: {props.message}</Alert>;

export default Error;
