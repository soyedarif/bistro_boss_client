import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [axiosSecure]=useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url,{
        method:'POST',
        body: formData
    }).then(res=>res.json())
    .then(imgResponse=>{
        if(imgResponse.success){
            const imgURL=imgResponse.data.display_url;
            // const menuItem=data;
            // menuItem.image=imgURL;
            const {name,price,category,recipe}=data;
            const newItem={name,price:parseFloat(price),category,recipe,image:imgURL}
            console.log(newItem);
            axiosSecure.post('/menu',newItem)
            .then(data=>{
                console.log('after posting new menu Item',data.data);
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Item added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
  };

  return (
    <div>
      <SectionTitle subHeading={"What's New?"} heading={"ADD AN ITEM"}></SectionTitle>
      <form className="px-10 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select defaultValue="Pick One" className="select select-bordered" {...register("category", { required: true })}>
              <option disabled>Pick One</option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
              <option>Deshi</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
        </div>
        <input type="submit" value="Add Item" className="btn btn-sm mt-4" />
      </form>
    </div>
  );
};

export default AddItem;
