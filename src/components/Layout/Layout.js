import React from 'react';
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const Layout = (props) => (
        <Aux>
            <div>Toolbar, SideBar, Backdrop</div>
            <main className={classes.Layout}>
                {props.children}
            </main>
        </Aux>
);

export default Layout;