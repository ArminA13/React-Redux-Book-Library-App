import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);
  //   toast.info("error");

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
