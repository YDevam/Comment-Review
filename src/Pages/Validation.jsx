import { useForm } from "react-hook-form";

const Validation = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    function signup(data) {
        console.log(data);
        alert("Thank You for registration");
        reset()
    }
    return (
        <>
            <form method="post" onSubmit={handleSubmit(signup)} className="gar col-lg-6 mx-auto my-5 p-5 shadow">
                <h1 className="text-center text-warning">Form Registration</h1>
                <div className="mt-4">
                    <input type="text" className="form-control" placeholder="Enter UserName" {...register('username', {
                        required: {
                            value: true, message: "Please enter UserName"
                        }, minLength: { value: 3, message: "Minimum 3 characters" },
                        maxLength: { value: 20, message: "Maximum 20 characters" }, pattern: {
                            value: /^[A-Za-z]/,
                            message: "Only characters allowed"
                        }
                    })} />
                    <p className="text-danger">{errors?.username?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="email" className="form-control" placeholder="Enter Email" {...register('email', {
                        required: {
                            value: true,
                            message: "Please enter Email"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
                            message: "Invalid email address"
                        }
                    })} />
                    <p className="text-danger">{errors?.email?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="password" className="form-control" placeholder="Enter Password" {...register('password', {
                        required:
                        {
                            value: true,
                            message: "Please enter Password"
                        },
                        minLength:
                        {
                            value: 6,
                            message: "Minimum 6 characters"
                        }
                    })} />
                    <p className="text-danger">{errors?.password?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="radio" value="Male" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Male</label>
                    <input type="radio" value="Female" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Female</label>
                    <input type="radio" value="Other" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Other</label>
                    <p className="text-danger">{errors?.gender?.message}</p>
                </div>

                <div className="mt-4">
                    <select {...register('course', {
                        required:
                        {
                            value: true,
                            message: "Please select Course"
                        }
                    })}
                        className="form-select">
                        <option value="">Select Course</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Other">Other</option>
                    </select>
                    <p className="text-danger">{errors?.course?.message}</p>
                </div>

                <div className="mt-4">
                    <textarea className="form-control" placeholder="Enter your message" {...register('message', {
                        required:
                        {
                            value: true,
                            message: "Message is required"
                        },
                        maxLength:
                        {
                            value: 200,
                            message: "Maximum 200 characters"
                        }
                    })}>

                    </textarea>
                    <p className="text-danger">{errors?.message?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="checkbox" value="Cricket" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Cricket</label>
                    <input type="checkbox" value="Football" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Football</label>
                    <input type="checkbox" value="Basketball" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Basketball</label>
                    <input type="checkbox" value="Swimming" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Swimming</label>
                    <p className="text-danger">{errors?.hobbies?.message}</p>
                </div>

                <div className="mt-4">
                    <button className="btn btn-outline-success">Submit</button>
                </div>
            </form>

        </>
    )
}

export default Validation
