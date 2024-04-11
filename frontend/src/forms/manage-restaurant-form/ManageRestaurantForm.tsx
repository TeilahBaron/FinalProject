import { z } from "zod";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "restuarant name is required",
    }),
    city: z.string({
        required_error: "city is required",
      }),
      country: z.string({
        required_error: "country is required",
      }),
      deliveryPrice: z.coerce.number({
        required_error: "delivery price is required",
        invalid_type_error: "must be a valid number",
      }),
      estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number",
      }),
      cuisines: z.array(z.string()).nonempty({
        message: "please select at least one item",
      }),
      menuItems: z.array(
        z.object({
          name: z.string().min(1, "name is required"),
          price: z.coerce.number().min(1, "price is required"),
        })
      ),
      imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],  
})
type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({onSave,isLoading}: Props) => {
};

export default ManageRestaurantForm;