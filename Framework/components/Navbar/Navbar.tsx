import React from 'react';
import { connect } from "react-redux";
import { TNavbarProps } from "@app_types/TNavbarProps";
import { setToggleSidebar } from "../../store/dispatch/global";
import {
    HeaderToolbarComponent,
    IconComponent,
    BEM,
} from "@codeunic/library-ui/build";

export const Navbar = (props: TNavbarProps) => {
    const bm = new BEM("Header", {});
    if (props.className != null) {
        bm.Append(props.className);
    }
    return (
        <HeaderToolbarComponent
            className={bm.toString()}
            left={(
                <>
                    <span style={{marginRight: 10}}>Admin: 0.0.1</span>
                    <span>App: 0.0.1</span>
                </>
            )}
            icons={[
                <IconComponent style={{color: "black"}} icon="setting"/>,
                <IconComponent style={{color: "black"}} icon="setting"/>
            ]}
            onClick={()=>console.log("HOLA")}
        />
    );
};
export default connect((state: any) => ({
    sidebarOpen: state.global.sidebar,
}), dispatch => ({
    onToggleSidebar: () => dispatch(setToggleSidebar())
}))(Navbar);