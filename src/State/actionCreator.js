export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: "DATA_REQUEST" });
  
      try {
        const response = await fetch(
          "https://blackcoffer-vix3.onrender.com/getData"
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        // console.log(data);
        dispatch({ type: "REQ_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "REQ_FAILURE", payload: error.message });
      }
    };
  };