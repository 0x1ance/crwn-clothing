import { createSelector } from 'reselect'

const selectCart = (state) => state.cart
const selectUser = (state) => state.user

export const selectCartItems = createSelector(
    [selectCart], //collection of input selector
    (cart) => cart.cartItems //function return the value we want out of the selector
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
)
