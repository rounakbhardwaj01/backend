import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then((res) => {
                console.log(res)
                navigate('/feed')
            })
            .catch((err) => {
                console.log(err)
                alert("Error Creating Post")
            })
    }

    return (
        <section className="min-h-screen px-4 pt-10">

            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">

                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Create Post
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Choose Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="w-full border border-gray-300 rounded-lg p-2
                                       text-sm cursor-pointer
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Caption
                        </label>

                        <input
                            type="text"
                            name="caption"
                            placeholder="Enter Caption"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3
                                       outline-none
                                       focus:ring-2 focus:ring-blue-500
                                       focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg
                                   font-semibold hover:bg-blue-700
                                   transition duration-200 cursor-pointer"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </section>
    )
}

export default CreatePost