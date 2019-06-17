import axios from 'axios'

export const sendText = (text, inverse) => {
    return axios
        .post(
            '/sendText',
            {       text: text,
                    inverse: inverse,
            },
            {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            var resp = response.status
            return resp
    })
}