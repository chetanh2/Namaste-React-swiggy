

cart----> to add items in cart

1) Food 1 ---- [add btn] 
2) Food 2 ---- [add btn] 
3) Food 3 ---- [add btn] 

Suppose you want to add the food items in the cart . so you cant directly add the items in the cart in REDUX

when you click on the add btn , that will dispatch an action which will call the function , and then the function will internally modify the cart


so what is this function ??

this function is known has an reducer

<!-- so the correct statement goes by -->

When you hit the add btn , it dispacthes an action which call the reducer function which ( modifies / updates ) the slice  of the redux store

<!-- Path to add item to the cart -->
you cant add directy to the cart

add --- dispatch(action) --- function(reducer) ---- [cart]

<!-- how to get data from cart slice to the cart  -->
selector will give the data from the storage(slice)
Selector ---> selector will give data 

when we use selector the phenomina is known as subscribe

header component is subscribe to store(slice) using a selector


# Redux toolkit
-- Install redux toolkit & react-redux
- Build our storenow reducer fun will modify the slice of the store   
- Connect our store to the app
- Slice (cart slice)
- Dispatch an action
- Selector

