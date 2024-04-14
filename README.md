# E-commerce site using react description
<span>after installing packages use  npm run dev to run the project.</span>
<ul>
  <li>Component base</li>
  <li>Using clean Code</li>
  <li>Using context api</li>
  <li>Spa website</li>
</ul>

# e-commerce featues:
<ul>
  <li>It has search bar</li>
  <li>It has sorting</li>
  <li>It has basket</li>
  <li><b>Using react-router-dom and use-Params</b></li>
  
</ul>

### context api
```javascript
  const elems = {
    shopItems,
    setShopItems,
    mainCategory,
    setMainCategory,
    filterItems,
    setFilterItems,
    cartItems,
    setCartItems,
    isShowToast,
    saveItemsToLocalStorage,
    setIsShowToast,
    addProductToCard
  }

  console.log(elems);


  return (
    <shopItemsContext.Provider value={elems}>
      {children}
    </shopItemsContext.Provider>
  )
}

```

### sorting
```javascript
    const changeFormHandler = (event) => {
        switch(event.target.value) {
            case 'First' : {
                console.log('first');
                setFilterItems([...shopItems])
            }
            break;
            case 'Last' : {
                console.log('last');
                setFilterItems([...filterItems].reverse())
            }
            break;

            case 'Lowest': {
                console.log('Highest');
                let newItems = [...shopItems].sort((a,b)=> {
                    return a.price - b.price
                })
                setFilterItems(newItems)
            }
            break;
            case 'Highest': {
                console.log('Highest');
                let newItems = [...shopItems].sort((a,b)=> {
                    return b.price - a.price
                })
                setFilterItems(newItems)

            }
        }

```
<h2>Technology used:</h2>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/sabzlearn-ir/sabzlearn-ir/4d2a781931f79c747a132c28eae4ebfbb8eaa7d7/react-colored.svg" width="36" height="36" alt="React" /></a>
    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/poudeh/poudeh/9ee4117f1ab8da05a4f1d2a8dcb23195c6a3647a/tailwind-css.svg" width="36" height="36" alt="MySQL" /></a>



