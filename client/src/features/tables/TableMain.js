import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "./redux-tools/table-actions";
import NumberFormat from "react-number-format";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import "./tables.css";

const mapStateToProps = state => {
  return {
    gotData: state.tableStore.gotData,
    pageData: state.tableStore.pageData
  };
};

const TableMain = props => {
  const { gotData, pageData } = props;

  useEffect(() => {
    props.getCitiesData("CITY", "asc", 1, 10, "");
  }, []);

  return (
    <TableBody>
      <Fragment>
        {!gotData && (
          <TableRow key={1}>
            <TableCell component="th" scope="row">
              loading
            </TableCell>
          </TableRow>
        )}
        {gotData &&
          pageData.map((city, idx) => (
            <TableRow
              key={idx}
              className={city.CAPITAL === 1 ? "table-row" : ""}
            >
              <TableCell component="th" scope="row">
                {city.CITY}
              </TableCell>
              <TableCell component="th" scope="row">
                {city.STATE}
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={city.ESTIMATED_POP}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <NumberFormat
                  value={Math.round(city.AREA)}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={Math.round(city.GDP / 1000)}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={city.IDHM !== "" ? city.IDHM.toFixed(3) : null}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                {city.RURAL_URBAN}
              </TableCell>
            </TableRow>
          ))}
      </Fragment>
    </TableBody>
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
)(TableMain);
