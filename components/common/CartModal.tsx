// cart modal
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/store/store";
import { removeFromCart, toggleCart } from "@/store/cartSlice";
import { MdOutlineCancel, MdOutlineDelete } from "react-icons/md";

const CartModal: React.FC = () => {
  const dispatch = useDispatch();
  const { cartProucts, isModalOpen } = useSelector(
    (state: RootState) => state.cart
  );

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex  justify-end bg-black/50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* cart header */}
        <div className="border-b border-gray-200">
          <h2 className="text-xl font-bold mb-7">Cart View</h2>
          <button
            onClick={() => dispatch(toggleCart())}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <MdOutlineCancel size={25} />
          </button>
        </div>

        {cartProucts.length === 0 ? (
          // content if cart is empty
          <p className="text-gray-600 mt-10">Your cart is empty</p>
        ) : (
          <div className="space-y-4 mt-10">
            {cartProucts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-300 pb-5"
              >
                <div className="flex gap-x-5 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-contain bg-gray-200 p-2 rounded-lg"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}{" "}
                      <span className="px-5">
                        Quantity price: {item?.itemPrice.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* delete item from cart */}
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="bg-gray-200 rounded-full hover:underline text-sm p-1 cursor-pointer"
                >
                  <MdOutlineDelete size={20} className="text-red-400" />
                </button>
              </div>
            ))}
          </div>
        )}

        {cartProucts.length > 0 && (
          <div className="mt-4 flex justify-between font-bold">
            <p>Total:</p>
            <p>
              $
              {cartProucts
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartModal;
