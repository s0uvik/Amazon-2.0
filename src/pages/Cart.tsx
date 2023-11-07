import img from "../assets/cart-banner.jpg";
import CartProduct from "../components/CartProduct";
import { useAppSelector } from "../reduxStore/hook";

const Cart = () => {
  const cartItem = useAppSelector((state) => state.cart.cart);
  const authUser = useAppSelector((state) => state.authUser.authUser);
  console.log(authUser);

  const total = cartItem.reduce((a, c) => a + c.price, 0);

  return (
    <div className=" w-full bg-gray-200 min-h-screen ">
      <main className="lg:flex lg:gap-4 max-w-screen-xl mx-auto">
        <section className=" flex-grow mb-24 lg:mb-0">
          <img src={img} alt="" />
          <div className=" flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-xl md:text-2xl border-b-2 pb-3">
              {cartItem.length === 0
                ? "Your Cat is Empty"
                : "Your Shopping Cart"}
            </h1>
            {cartItem.map((item) => {
              return <CartProduct key={item.id} productInfo={item} />;
            })}
          </div>
        </section>
        <section className=" fixed bottom-0 w-full lg:relative lg:w-[550px] flex flex-col items-center p-3 bg-white">
          {cartItem.length > 0 && (
            <>
              <h2>
                Subtotal({cartItem.length}):
                <span className=" font-medium">${total}</span>
              </h2>
              <button
                className={`button mt-2 ${
                  authUser === null &&
                  " cursor-not-allowed from-gray-300 to-bg-gray-500 border"
                }`}
              >
                {authUser ? "Proceed to Checkout" : "Sign in to Checkout"}
              </button>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Cart;
