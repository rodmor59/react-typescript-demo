type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

function Status (props: StatusProps) {
    let message
    switch (props.status) {
        case 'loading':
            message = 'Loading...'
            break
        case 'success':
            message = 'Data loaded successfully.'
            break
        case 'error':
            message = 'Error loading data.'
            break
    }

    return <div>{message}</div>
}

export default Status

