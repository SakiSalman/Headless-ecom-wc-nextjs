import { toast } from "react-toastify"

export const toaster = (type:string="error", msg:string) => {
    switch (type) {
        case "success":
                toast.success(msg)
            break;
            case "error":
                toast.error(msg)
            break;
            case "warn":
                toast.warn(msg)
            break;
    
        default:
            break;
    }
}