import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "./redux-tools/table-actions";
import {
  TableHead,
  TableSortLabel,
  TableRow,
  TableCell
} from "@material-ui/core";

const mapStateToProps = state => {
  return {
    pageNum: state.tableStore.pageNum,
    pageSize: state.tableStore.pageSize,
    sortBy: state.tableStore.sortBy,
    sortOrder: state.tableStore.sortOrder,
    filterStr: state.tableStore.filterStr
  };
};

const CustomTableHead = ({
  filterStr,
  sortOrder,
  sortBy,
  pageSize,
  pageNum,
  getCitiesData
}) => {
  const setOrder = (sortOrder, sortBy, property) => {
    console.log("setOrder", sortOrder);
    if (sortOrder === "") {
      return "asc";
    } else {
      return sortBy !== property
        ? sortOrder
        : sortOrder === "asc"
        ? "desc"
        : "asc";
    }
  };

  const sortHandler = property => event => {
    const newOrder = setOrder(sortOrder, sortBy, property);
    getCitiesData(property, newOrder, pageNum, pageSize, filterStr);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <TableSortLabel
            className="city table-title"
            active={sortBy === "CITY"}
            direction={sortOrder}
            onClick={sortHandler("CITY")}
          >
            CITY
          </TableSortLabel>
        </TableCell>

        <TableCell align="left" className="state table-title">
          STATE
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "ESTIMATED_POP" ? sortOrder : false}
        >
          <TableSortLabel
            className="population table-title"
            active={sortBy === "ESTIMATED_POP"}
            direction={sortOrder}
            onClick={sortHandler("ESTIMATED_POP")}
          >
            POPULATION
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "AREA" ? sortOrder : false}
        >
          <TableSortLabel
            className="area table-title"
            active={sortBy === "AREA"}
            direction={sortOrder}
            onClick={sortHandler("AREA")}
          >
            {"AREA KM \xB2"}
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "GDP" ? sortOrder : false}
        >
          <TableSortLabel
            className="GDP table-title"
            active={sortBy === "GDP"}
            direction={sortOrder}
            onClick={sortHandler("GDP")}
          >
            GDP in R$ '000
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "IDHM" ? sortOrder : false}
        >
          <TableSortLabel
            className="IDH table-title"
            active={sortBy === "IDHM"}
            direction={sortOrder}
            onClick={sortHandler("IDHM")}
          >
            HDI
          </TableSortLabel>
        </TableCell>

        <TableCell className="urb table-title" align="left">
          RURAL/URBAN
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCitiesData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomTableHead);
