import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredint";

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredietns)
        // this is a little bit confusing at first and might be a bit difficult to read...
        .map((ingKey) => {
            return [...Array(props.ingredietns[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;