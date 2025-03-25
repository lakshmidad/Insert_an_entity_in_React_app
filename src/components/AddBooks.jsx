import React, { useState } from 'react'


function AddBooks() {

const [formData,setFormdata]=useState({})

const handleChange=(e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(formData)
}

    
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">title</label>
                    <input name="title" type="text" placeholder='title' onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <input  name="description" type="text" placeholder='description' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Author</label>
                    <input  name="author" type="text" placeholder='author' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">CoverImage</label>
                    <input   name="coverImage" type="text" placeholder='coverImage' onChange={handleChange}/>
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default AddBooks