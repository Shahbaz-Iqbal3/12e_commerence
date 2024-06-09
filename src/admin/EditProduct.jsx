import React, { useEffect, useState } from 'react'
import {AddProduct} from './index'
import { useParams } from 'react-router-dom'
import appWriteProduct from '../Appwrite/product'
import { Loading } from '../components'


function EditProduct() {
  const { slug } = useParams()
  const [product, setProduct] = useState([])
  const [ImageUrl, setImageUrl] = useState('')  
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    appWriteProduct.getProduct(slug).then(data=>{
      setImageUrl(appWriteProduct.getFilePreview(data.image))
      setProduct(data)
      setLoading(false)
    })
  }, [])
  if (loading) {
		return <div className="w-full h-screen flex justify-center items-center flex-col"><Loading size=" w-20 h-20 "/></div>
	}

  return (
    <div><AddProduct product={product} text={'Update'} image={ImageUrl}/></div>
  )
}

export default EditProduct