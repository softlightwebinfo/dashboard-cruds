import React, { Component, ReactElement } from "react";
import { ITableColumn, ITableProps, ITableRow, ITableState } from "@props/ITableProps";
import { THead } from "@components/Tables/THead";
import { TBody } from "@components/Tables/TBody";
import { BEM } from "../../libs/BEM";
import { ETableColumnType } from "../../enums/eTableColumnType";
import { Flag } from "@components/Flag";
import { Brand } from "@components/Brand";
import { ButtonLink } from "@components/ButtonLink";
import { Pagination } from "@components/Pagination";

export class Table extends Component<ITableProps, ITableState> {
    public state = {
        rows: this.props.rows,
        sort: {
            id: "ascending"
        },
        sortColumn: "id",
        currentPage: 1,
        totalRows: 3000
    };

    static defaultProps = {
        showMetaData: true,
    };

    constructor(props) {
        super(props);
    }

    onClickSort = (key: string) => {
        if (key in this.state.sort) {
            this.setState({
                sort: {
                    [key]: this.state.sort[key] == "ascending" ? "descending" : "ascending",
                },
                sortColumn: key,
            }, this.setRowsOrder);
            return;
        }
        this.setState({sort: {[key]: "ascending"}, sortColumn: key}, this.setRowsOrder);
    }

    setRowsOrder() {
        const order = this.state.sort;
        const {sortColumn} = this.state;
        const sort = this.state.rows.sort((a, b) => {
            if (order[sortColumn] == "ascending") {
                if (a[sortColumn] > b[sortColumn]) return 1;
                if (a[sortColumn] < b[sortColumn]) return -1;
                return 0;
            } else if (order[sortColumn] == "descending") {
                if (a[sortColumn] > b[sortColumn]) return -1;
                if (a[sortColumn] < b[sortColumn]) return 1;
                return 0;
            }
            return 0;
        })
        this.setState({rows: sort});
    }

    render() {
        const bm = new BEM("Table", {});
        return (
            <div>
                <div className={"Table-responsive"}>
                    <table className={bm.toString()}>
                        <THead
                            onClickSort={this.onClickSort}
                            sortSelected={this.state.sort}
                            showMetaData={this.props.showMetaData}
                            columns={this.props.columns}
                        />
                        <TBody>
                            {this.state.rows.map((row, rowIndex) => (
                                <tr
                                    data-index={this.props.showMetaData && rowIndex}
                                    data-id={this.props.showMetaData && row.id}
                                    key={row.id}
                                >
                                    {this.props.columns.map((col, colIndex) => {
                                        return this.column(row, col, rowIndex, colIndex);
                                    })}
                                </tr>
                            ))}
                        </TBody>
                    </table>
                </div>
                <Pagination
                    count={this.state.totalRows}
                    currentPage={this.state.currentPage}
                />
            </div>
        );
    }

    private column(row: ITableRow, col: ITableColumn, _: number, colIndex: number) {
        let component: ReactElement | null = null;
        switch (col.type) {
            case ETableColumnType.STRING:
                component = (<span>{row[col.key]}</span>)
                break;
            case ETableColumnType.DATE:
                break;
            case ETableColumnType.COMPONENT:
                break;
            case ETableColumnType.DIF:
                component = row[col.key] || "-";
                break;
            case ETableColumnType.PRICE:
                component = (<span>{row[col.key]}€</span>);
                break;
            case ETableColumnType.PRICE_FORMAT:
                component = (<span className={"orange"}>{row[col.key].toFixed(2)}€</span>);
                break;
            case ETableColumnType.BUTTONS_HREF:
                component = row[col.key].map((item, index) => (
                    <ButtonLink
                        key={index}
                        {...item}
                        icon={item.icon}
                        href={item.href}
                    />
                ));
                break;
            case ETableColumnType.BOLD:
            case ETableColumnType.NUMBER:
                component = (<b>{row[col.key]}</b>);
                break;
            case ETableColumnType.DECIMAL:
                break;
            case ETableColumnType.FLAG:
                component = (<Flag flag={row[col.key]}/>);
                break;
            case ETableColumnType.BRAND:
                component = (<Brand brand={row[col.key]}/>);
                break;
        }
        return (
            <td
                key={col.key}
                data-name={this.props.showMetaData && col.key}
                data-index={this.props.showMetaData && colIndex}
            >
                {component}
            </td>
        );
    }
}