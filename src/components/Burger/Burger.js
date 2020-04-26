import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredint";

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredietns)
        .map((ingKey) => {
            return [...Array(props.ingredietns[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;