import { toast } from 'react-toastify'

export const showNotification = (type, message) => {
    return toast[type](message, {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    })
}
