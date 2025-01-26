import CustomToast from "../components/CustomToast";
import { toast } from "react-toastify";

export const handleToast = (type, title, deskripsi, closeTime) => {
    return toast(<CustomToast type={type} title={title} description={deskripsi} />, {
        closeButton: false,
        autoClose: closeTime === false ? false : closeTime,
        position: 'top-right',
        className: 'rounded-xl w-[25vw] py-4'
    })
}