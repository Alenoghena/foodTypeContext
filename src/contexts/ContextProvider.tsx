import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export type initialStateType = {
  sidebarSelected: boolean;
  show: boolean;
  componentSelected: boolean;
  pageSelected: boolean;
  cartSelected: boolean;
  orderSelected: boolean;
  return: boolean;
};

export type foodType = {
  id: number;
  name: string;
  desc?: string;
  quantity: number;
  price: string;
  image: string;
  length?: number;
  totalAmount?: string;
};
export type foodArrType = foodType[];

type useContextType = {
  name: string | null;
  menuItems: foodArrType;
  selectedFood: foodType;
  cart: foodArrType;
  isClicked: initialStateType;
  quantity: number;
  cartValue: number;
  totalAmount: string;
  customermobile: number;
  customerName: string | null;
  mobile: number;
  searchTerm: string;
  activeMenu: boolean;
  errorMessage: boolean;
  setActiveMenu: (value: React.SetStateAction<boolean>) => void;
  setScreenSize: (value: React.SetStateAction<any>) => void;
  screenSize: number | undefined;
  updateQuantity: (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => void;
  handleClick: any;
  handleDelete: (id: any) => void;
  setQuantity: (value: React.SetStateAction<number>) => void;
  setFullName: React.Dispatch<
    React.SetStateAction<{
      customerName: string;
      customermobile: number;
    }>
  >;
  setMobile: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFood: React.Dispatch<React.SetStateAction<foodType>>;
  handleSelect: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  handleChoosePage: () => void;
  handleIsClicked: (clicked: string) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleQuantityChange: (event: any) => void;
  handleShowCart: () => void;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  sidebarSelected: false,
  show: false,
  componentSelected: false,
  pageSelected: false,
  cartSelected: false,
  orderSelected: false,
  return: false,
};

export const StateContext = createContext<useContextType>({} as useContextType);

const foodArr = [
  {
    id: 1,
    name: "Chicken Burger",
    quantity: 40,
    desc: `Fried chicken burger - lettuce, tomato, cheese and
      mayonnaise`,
    price: "24",
    image: "cb.jpg",
  },
  {
    id: 2,
    name: "Veg Burger",
    quantity: 30,
    desc: `Plant-based burger - lettuce, tomato, vegan cheese and
      mayonnaise`,
    price: "22",
    image: "vb.jpg",
  },
  {
    id: 3,
    name: "Chips",
    quantity: 50,
    desc: "Potato chips fried to perfection",
    price: "7",
    image: "chips.jpg",
  },
  {
    id: 4,
    name: "Ice Cream",
    quantity: 30,
    desc: "Ice cream - Vanilla ice cream double scoop",
    price: "4",
    image: "ic.jpg",
  },
  {
    id: 5,
    name: "Dried Ukwa Seeds",
    quantity: 30,
    desc: "1KG of Dried Ukwa - Breadfruit Seeds",
    price: "20",
    image: "dried ukwa seeds.jpg",
  },
  {
    id: 6,
    name: "Fresh Ukwa Seeds",
    quantity: 20,
    desc: "1KG of Fresh Ukwa -Breadfruit Seeds",
    price: "15",
    image: "fresh ukwa seeds.jpg",
  },
  {
    id: 7,
    name: "Oron Crayfish",
    quantity: 20,
    desc: "1KG of Oron Crayfish",
    price: "100",
    image: "cf.jpg",
  },
  {
    id: 8,
    name: "Honey Beans",
    quantity: 20,
    desc: "1KG of Honeybeans",
    price: "15",
    image: "honeybeans.jpg",
  },
  {
    id: 9,
    name: "Okomu Red Oil",
    quantity: 20,
    desc: "1KG of Red oil",
    price: "50",
    image: "oro.jpg",
  },
  {
    id: 10,
    name: "plantain-flour",
    quantity: 20,
    desc: "1KG of plantain-flour",
    price: "45",
    image: "plantain-flour.jpg",
  },
  {
    id: 11,
    name: "Red Beans",
    quantity: 20,
    desc: "1KG of red beans",
    price: "20",
    image: "redbeans.jpg",
  },
  {
    id: 12,
    name: "White Beans",
    quantity: 20,
    desc: "1KG of white beans",
    price: "20",
    image: "whitebeans.jpg",
  },
];

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const unitPrice = () => {
    return selectedFood.price;
  };

  const getLocalStorage = () => {
    const cartList = localStorage.getItem("cart");
    if (cartList) {
      return JSON.parse(cartList);
    }
    return []; // Default value if 'cart' is not set
  };

  const [cartValue, setCartValue] = useState(getLocalStorage()); // JSON.parse(localStorage.getItem("cart"))
  const [menuItems, setMenuItems] = useState<foodArrType>([] as foodArrType);
  const [cart, setCart] = useState<foodArrType>([] as foodArrType);
  const [selectedFood, setSelectedFood] = useState<foodType>({} as foodType);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(unitPrice());
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [fullName, setFullName] = useState({
    customerName: name,
    customermobile: mobile,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState<initialStateType>(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const { customerName, customermobile } = fullName;

  const updateQuantity = (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => {
    try {
      let cartList: foodArrType;
      let menuSelected: foodType;
      const updatedMenuItems: foodArrType = menuItems.map((item: foodType) => {
        const isCartSame: boolean = cart.some(
          (cartItem: foodType) => cartItem.id === id
        );

        if (Number(orderQuantity) > itemQuantity) throw Error();

        if (item.id === id) {
          if (isCartSame) {
            cartList = cart.map((cartItem: foodType) => {
              if (cartItem.id === id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + Number(orderQuantity),
                  totalAmount: String(
                    (cartItem.quantity + Number(orderQuantity)) *
                      Number(cartItem.price)
                  ),
                };
              } else {
                return cartItem;
              }
            });
            setErrorMessage(false);
            setCart([...cartList]);
          }
          if (!isCartSame) {
            cartList = [
              {
                id: id,
                name: item.name,
                price: item.price,
                quantity: Number(orderQuantity),
                image: item.image,
                totalAmount,
              },
            ];
            setErrorMessage(false);
            setCart([...cart, ...cartList]);
          }

          handleIsClicked("orderSelected");
          //menuSelected use to update selected item
          menuSelected = {
            ...item, //we are spreading the item, an object, here
            quantity: item.quantity - Number(orderQuantity),
          };
          setSelectedFood(menuSelected);
          return menuSelected;
        } else {
          return item;
        }
      });
      setMenuItems(updatedMenuItems);
    } catch {
      setErrorMessage(true);
    }
  };

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
    setTotalAmount(
      String(Number(selectedFood.price) * Number(event.target.value))
    );
  };

  const handleShowCart = () => {
    handleIsClicked("return");
  };

  let foodList: foodType | undefined;

  const handleSelect = (event: any) => {
    foodList = menuItems.find((item: foodType) => {
      return item.id === parseInt(event.currentTarget.dataset.id);
    });
    if (foodList) {
      setTotalAmount(String(Number(foodList.price) * 1));
      setSelectedFood(foodList);

      handleIsClicked("componentSelected");
    }
  };

  const totalCartValue = useCallback(() => {
    const value = cart
      .map((item: foodType) => {
        return Number(item.price) * item.quantity;
      })
      .reduce((sum, amount) => sum + amount, 0);
    localStorage.setItem("cart", JSON.stringify(value));
    setCartValue(value);
  }, [cart]);

  const handleDelete = (id: number) => {
    let cartList: foodArrType;

    const updatedMenuItems = menuItems.map((item: foodType) => {
      const isCartSame = cart.some((item: foodType) => item.id === id);
      const index = cart.findIndex((item: foodType) => item.id === id);

      if (isCartSame && cart[index].quantity - 1 > 0 && item.id === id) {
        cartList = cart.map((item: foodType) => {
          //also look for item in cart
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalAmount: String(
                Number(item.totalAmount) - Number(item.price)
              ),
            };
          } else {
            return item; //leave other items in cart untouched
          }
        });
        setCart([...cartList]);
        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity + 1,
        };
      }

      if (isCartSame && cart[index].quantity - 1 === 0 && item.id === id) {
        cartList = cart.filter((item: foodType) => item.id !== id);

        setCart([...cartList]);
        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setMenuItems(updatedMenuItems);
  };

  const handleSearch = (search: string) => {
    if (search) {
      const searchList = foodArr.filter((item: foodType) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      const newList: foodArrType = [...searchList];
      setMenuItems(newList);
    } else {
      setMenuItems(foodArr);
    }
  };

  const handleChoosePage = () => {
    if (!isClicked.show) {
      handleIsClicked("pageSelected");
    } else {
      handleIsClicked("show");
      handleIsClicked("pageSelected");
    }
  };

  const handleClick = (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => {
    try {
      if (itemQuantity > 0) {
        updateQuantity(id, orderQuantity, itemQuantity);
        setFullName({ customerName: name, customermobile: mobile });
        setMobile(0);
        setName("");
        setQuantity(1);
        setErrorMessage(false);
      } else throw Error;
    } catch {
      setErrorMessage(true);
    }
  };

  const handleIsClicked = (clicked: string) => {
    if (clicked === "sidebarSelected") {
      setIsClicked({ ...isClicked, [clicked]: !isClicked.sidebarSelected });
    }
    if (clicked === "show") {
      setIsClicked({ ...isClicked, [clicked]: !isClicked.show });
    }
    if (clicked === "componentSelected") {
      setIsClicked({
        ...isClicked,
        [clicked]: !isClicked.componentSelected,
      });
    }
    if (clicked === "pageSelected") {
      setIsClicked({
        ...isClicked,
        [clicked]: !isClicked.pageSelected,
      });
    }
    if (clicked === "cartSelected") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: false,
        pageSelected: false,
        [clicked]: !isClicked.cartSelected,
        orderSelected: false,
        return: false,
      });
    }
    if (clicked === "orderSelected") {
      setIsClicked({ ...isClicked, [clicked]: true });
    }
    if (clicked === "return") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: true,
        pageSelected: true,
        cartSelected: false,
        orderSelected: true,
        return: false,
      });
    }
    if (clicked === "returnToPage") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: false,
        pageSelected: true,
        cartSelected: false,
        orderSelected: false,
        return: false,
      });
    }
  };

  useEffect(() => {
    totalCartValue();
  }, [totalCartValue]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        menuItems,
        searchTerm,
        activeMenu,
        screenSize,
        setActiveMenu,
        updateQuantity,
        handleClick,
        handleSelect,
        selectedFood,
        cart,
        setSelectedFood,
        handleChoosePage,
        handleIsClicked,
        setScreenSize,
        isClicked,
        quantity,
        setSearchTerm,
        cartValue,
        handleQuantityChange,
        totalAmount,
        handleShowCart,
        name,
        mobile,
        setName,
        customermobile,
        setMobile,
        setFullName,
        setQuantity,
        handleDelete,
        customerName,
        errorMessage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
