import { useCallback,useState } from "react";
import sendRequest from "./sendRequest";

export default function useFetch() {

    const [fetchState, setFetchState] = useState({
        loading : false,
        success : false,
        failed : false,
        data : null,
        error : null
    })

    const fetchData = useCallback(async function ({url, method, body}) {
        try {
            //before we try the call we must set loading to true
            setFetchState({
                loading : true,
                success : false,
                failed : false,
                data : null,
                error : null
            })

            //now we try the call with our sendRequest async function
            const result = await sendRequest({url, method, body});

            //if everything is ok we return the data and success to true, if not the try catch will return failed to true and the error
            setFetchState({
                loading : false,
                success : true,
                failed : false,
                data : result,
                error : null
            })

            return result;

        }catch(error) {
            setFetchState({
                loading : false,
                success : false,
                failed : true,
                data : null,
                error
            });
        }
    }, []);

    return [fetchState, fetchData]

}