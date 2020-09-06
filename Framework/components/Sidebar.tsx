import { TSidebarProps } from "@props/TSidebarProps";
import React from "react";
import { BEM } from "../libs/BEM";
import {
    ScrollbarComponent,
    SidebarComponent,
    TypographyComponent,
    ListComponent,
    ListItemComponent,
    CollapseItemComponent,
    SidebarMenuItemComponent,
} from "@codeunic/library-ui/build";
// @ts-ignore
import { Link } from "@routes";
import { connect } from "react-redux";
import { setting } from "@settings";

export const Sidebar = (props: TSidebarProps) => {
    const {projects = []} = props;
    const bm = new BEM("Sidebar", {
        "open": props.open,
    });
    bm.Append(props.className);

    return (
        <SidebarComponent style={props.style} className={bm.toString()}>
            <ScrollbarComponent>
                <section>
                    <TypographyComponent component={"h1"} variant={"body2"}>
                        <Link route={"/"}>
                            <a>
                                <img src="https://i.pinimg.com/originals/b6/a8/aa/b6a8aa222d1c7867a60e2808d684b3fd.png"
                                     alt="AdminBro demo page" height="35px"
                                />
                                <span>{setting.appName}</span>
                            </a>
                        </Link>
                    </TypographyComponent>
                </section>
                <section>
                    <ListComponent>
                        <SidebarMenuItemComponent style={{color: "black"}} name={"Navegación proyectos"}/>
                        {projects.map((item) => (
                            <CollapseItemComponent
                                title={item.name}
                                icon={"user"}
                                key={item.id}
                            >
                                <ListComponent component={"ul"} style={{paddingLeft: 37}}>
                                    {item.tables.map(item => (
                                        <ListItemComponent key={item.id} component={"li"}>
                                            {item.name}
                                        </ListItemComponent>
                                    ))}
                                </ListComponent>
                            </CollapseItemComponent>
                        ))}
                        <SidebarMenuItemComponent style={{color: "black"}} name={"Paginas"}/>
                    </ListComponent>
                </section>
            </ScrollbarComponent>
        </SidebarComponent>
    )
}

export default connect(({global, project}: any) => ({
    open: global.sidebar,
    projects: project.projects,
}))(Sidebar);