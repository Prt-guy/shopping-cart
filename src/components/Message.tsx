import { Alert } from 'react-bootstrap';

type MessageProps = {
    type: 'success' | 'danger' | 'warning' | 'info',
    message: string,
}

export default function Message({ type, message }: MessageProps) {
    return (
        <Alert variant={type} className='py-3 mt-4 mb-0'>
            {message}
        </Alert>
    );
}
