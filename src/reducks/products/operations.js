import { db, FirebaseTimeStamp } from "../../firebase"
import {push} from "connected-react-router"

const productRef = db.collection('products');
    
export const saveProduct = (name, description, category, gender, price, images) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimeStamp.now()
        const data = {
            category: category,
            description: description,
            gender: gender,
            name: name,
            images: images,
            price: parseInt(price, 10),
            updated_at: timestamp
        }

        const ref = productRef.doc();
        const id = ref.id
        data.id = id
        data.created_at = timestamp

        return productRef.doc(id).set(data)
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}